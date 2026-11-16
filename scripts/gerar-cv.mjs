// Gera public/cv.pdf a partir de cv.html (que lê os mesmos dados do site).
// Uso: npm run cv
// Navegador: Edge ou Chrome instalados; para outro caminho, defina CV_BROWSER.
import { createServer } from "vite";
import { spawn } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

const CANDIDATOS = [
  process.env.CV_BROWSER,
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const navegador = CANDIDATOS.find((c) => existsSync(c));
if (!navegador) {
  console.error("Nenhum Edge/Chrome encontrado. Defina CV_BROWSER com o caminho do navegador.");
  process.exit(1);
}

const saida = path.resolve("public/cv.pdf");
const server = await createServer({ logLevel: "error", server: { port: 5197 } });
await server.listen();

try {
  const url = new URL("cv.html", server.resolvedUrls.local[0]).href;
  const antes = existsSync(saida) ? statSync(saida).mtimeMs : 0;

  // spawn assíncrono: o servidor do Vite roda neste mesmo processo e precisa
  // continuar respondendo enquanto o navegador carrega a página.
  const status = await new Promise((resolve) => {
    const proc = spawn(
      navegador,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--virtual-time-budget=10000",
        `--print-to-pdf=${saida}`,
        url,
      ],
      { stdio: "ignore" },
    );
    const limite = setTimeout(() => proc.kill(), 60_000);
    proc.on("exit", (code) => {
      clearTimeout(limite);
      resolve(code);
    });
    proc.on("error", () => resolve(1));
  });

  if (status !== 0 || !existsSync(saida) || statSync(saida).mtimeMs === antes) {
    console.error("Falha ao gerar o PDF.");
    process.exitCode = 1;
  } else {
    console.log(`CV gerado: ${path.relative(process.cwd(), saida)} (${Math.round(statSync(saida).size / 1024)} KB)`);
  }
} finally {
  await server.close();
}
