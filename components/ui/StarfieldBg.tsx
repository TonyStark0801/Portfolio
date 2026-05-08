"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  ph: number;
  sp: number;
}

export default function StarfieldBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let stars: Star[] = [];
    let rafId = 0;
    let running = true;

    const resize = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    const initStars = () => {
      const n = Math.round((window.innerWidth * window.innerHeight) / 18000);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.1 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        ph: Math.random() * Math.PI * 2,
        sp: 0.005 + Math.random() * 0.01,
      }));
    };

    const draw = (t: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const s of stars) {
        const alpha = s.a * (0.55 + 0.45 * Math.sin(s.ph + t * s.sp));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,228,220,${alpha.toFixed(3)})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) {
      rafId = requestAnimationFrame(draw);
    }

    (window as Window & { __setStars?: (v: boolean) => void }).__setStars = (v: boolean) => {
      running = v;
      if (v) {
        rafId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(rafId);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="qs-bg" aria-hidden="true">
        <canvas ref={canvasRef} id="starfield" />
      </div>
      <div className="qs-grain" aria-hidden="true" />
    </>
  );
}
