import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const MAX_DISTANCE = 140;
const MOUSE_RADIUS = 160;
const PARTICLE_SPEED = 0.25;

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const mouse = { x: -9999, y: -9999 };

    let dotColor = "rgba(0,0,0,0.3)";
    let lineColor = "rgba(0,0,0,0.15)";
    let accentColor = "rgba(107,101,88,0.5)";

    const readThemeColors = () => {
      const styles = getComputedStyle(document.body);
      const decor = styles.getPropertyValue("--bg-decor").trim();
      const neutral = styles.getPropertyValue("--text-secondary").trim();
      dotColor = decor || dotColor;
      lineColor = decor || lineColor;
      accentColor = neutral || accentColor;
    };

    const createParticles = () => {
      const density = 16000;
      const count = Math.min(140, Math.floor((width * height) / density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * PARTICLE_SPEED,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * PARTICLE_SPEED,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < MOUSE_RADIUS && distToMouse > 0.01) {
          const force = (MOUSE_RADIUS - distToMouse) / MOUSE_RADIUS;
          p.x += (dx / distToMouse) * force * 1.2;
          p.y += (dy / distToMouse) * force * 1.2;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 0.2;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = 1 - dist / MAX_DISTANCE;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const animate = () => {
      drawFrame();
      animationId = requestAnimationFrame(animate);
    };

    readThemeColors();
    resize();

    if (prefersReducedMotion) {
      drawFrame(); // desenha um frame estático, sem loop nem interatividade
    } else {
      animate();
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("resize", resize);

    const themeObserver = new MutationObserver(readThemeColors);
    themeObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-background"
      aria-hidden="true"
    />
  );
};
