import { useEffect, useRef } from "react";


export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w: number, h: number;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const cols = 18;
    const rows = 12;
    const nodes: { x: number; y: number; pulse: number; speed: number }[] = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        nodes.push({
          x: (i / (cols - 1)) * 100,
          y: (j / (rows - 1)) * 100,
          pulse: Math.random() * Math.PI * 2,
          speed: 0.3 + Math.random() * 0.7,
        });
      }
    }

    const particles: { from: number; to: number; t: number; speed: number }[] = [];
    const spawnParticle = () => {
      const from = Math.floor(Math.random() * nodes.length);
      let to = from + (Math.random() > 0.5 ? 1 : cols);
      if (to >= nodes.length) to = from - cols;
      if (to < 0) to = 0;
      particles.push({ from, to, t: 0, speed: 0.005 + Math.random() * 0.015 });
    };
    for (let i = 0; i < 15; i++) spawnParticle();

    const terminalHue = 175;

    const draw = (time: number) => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const nx = (n.x / 100) * cw;
        const ny = (n.y / 100) * ch;
        const right = i + 1;
        const below = i + cols;
        [right, below].forEach((j) => {
          if (j < nodes.length && (j === right ? i % cols !== cols - 1 : true)) {
            const m = nodes[j];
            ctx.beginPath();
            ctx.moveTo(nx, ny);
            ctx.lineTo((m.x / 100) * cw, (m.y / 100) * ch);
            ctx.strokeStyle = `hsla(${terminalHue}, 70%, 50%, 0.06)`;
            ctx.stroke();
          }
        });
      }

      for (const n of nodes) {
        const nx = (n.x / 100) * cw;
        const ny = (n.y / 100) * ch;
        const pulse = Math.sin(time * 0.001 * n.speed + n.pulse);
        const alpha = 0.08 + pulse * 0.06;
        const r = 1 + pulse * 0.5;

        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${terminalHue}, 70%, 55%, ${alpha})`;
        ctx.fill();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.t += p.speed;
        if (p.t >= 1) {
          particles.splice(i, 1);
          spawnParticle();
          continue;
        }
        const a = nodes[p.from];
        const b = nodes[p.to];
        const px = ((a.x + (b.x - a.x) * p.t) / 100) * cw;
        const py = ((a.y + (b.y - a.y) * p.t) / 100) * ch;

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${terminalHue}, 80%, 60%, ${0.6 - p.t * 0.4})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${terminalHue}, 80%, 60%, ${0.15 - p.t * 0.1})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
