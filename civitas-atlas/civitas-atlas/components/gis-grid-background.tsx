"use client";

import { useEffect, useRef } from "react";

/**
 * CadastralField — the site's signature visual.
 *
 * Rather than a generic particle field, this renders an irregular
 * cadastral-style parcel grid (the way real land-survey maps look —
 * uneven polygons, not a uniform lattice). Parcel boundaries draw
 * themselves in over time, vertices pulse like verified survey markers,
 * and a slow vertical scan line sweeps the field the way a satellite
 * pass or a records-reconciliation job would move through data.
 *
 * Fully decorative — aria-hidden, paused under prefers-reduced-motion.
 */
export function CadastralField({ intensity = 1 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Vertex = { x: number; y: number; phase: number };
    type Parcel = { vertices: Vertex[]; drawProgress: number; delay: number };

    let parcels: Parcel[] = [];
    let seedGrid = () => {};
    let scanY = 0;

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    function buildParcels() {
      parcels = [];
      const cols = Math.max(5, Math.floor(width / 190));
      const rows = Math.max(4, Math.floor(height / 190));
      const cellW = width / cols;
      const cellH = height / rows;

      // Jittered grid of quadrilaterals — mimics irregular cadastral parcels.
      const grid: Vertex[][] = [];
      for (let r = 0; r <= rows; r++) {
        const rowArr: Vertex[] = [];
        for (let c = 0; c <= cols; c++) {
          rowArr.push({
            x: c * cellW + rand(-cellW * 0.22, cellW * 0.22),
            y: r * cellH + rand(-cellH * 0.22, cellH * 0.22),
            phase: rand(0, Math.PI * 2),
          });
        }
        grid.push(rowArr);
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() > 0.62) continue; // sparse, not every cell
          const a = grid[r]?.[c];
          const b = grid[r]?.[c + 1];
          const d = grid[r + 1]?.[c];
          const e = grid[r + 1]?.[c + 1];
          if (!a || !b || !d || !e) continue;
          parcels.push({
            vertices: [a, b, e, d],
            drawProgress: 0,
            delay: rand(0, 3.5),
          });
        }
      }
    }

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParcels();
    }

    seedGrid = buildParcels;
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let t = 0;

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      scanY = (scanY + 0.35) % (height + 200);
      t += 0.016;

      // Scan band
      const scanGrad = ctx!.createLinearGradient(0, scanY - 120, 0, scanY + 120);
      scanGrad.addColorStop(0, "rgba(212,175,55,0)");
      scanGrad.addColorStop(0.5, `rgba(212,175,55,${0.05 * intensity})`);
      scanGrad.addColorStop(1, "rgba(212,175,55,0)");
      ctx!.fillStyle = scanGrad;
      ctx!.fillRect(0, scanY - 120, width, 240);

      for (const parcel of parcels) {
        if (t > parcel.delay) {
          parcel.drawProgress = Math.min(1, parcel.drawProgress + 0.012);
        }
        if (parcel.drawProgress <= 0) continue;

        const verts = parcel.vertices;
        const totalEdges = verts.length;
        const edgesToDraw = parcel.drawProgress * totalEdges;

        ctx!.beginPath();
        for (let i = 0; i < totalEdges; i++) {
          const from = verts[i]!;
          const to = verts[(i + 1) % totalEdges]!;
          const edgeFraction = Math.min(1, Math.max(0, edgesToDraw - i));
          if (edgeFraction <= 0) break;
          const ex = from.x + (to.x - from.x) * edgeFraction;
          const ey = from.y + (to.y - from.y) * edgeFraction;
          if (i === 0) ctx!.moveTo(from.x, from.y);
          ctx!.lineTo(ex, ey);
        }

        const near = Math.abs(((scanY % (height + 200)) - (verts[0]?.y ?? 0)));
        const proximity = Math.max(0, 1 - near / 260);
        const baseAlpha = 0.14 + proximity * 0.22;

        ctx!.strokeStyle = `rgba(124, 58, 237, ${baseAlpha * intensity})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Verified vertex nodes
        if (parcel.drawProgress > 0.92) {
          for (const v of verts) {
            const pulse = 0.5 + 0.5 * Math.sin(t * 1.4 + v.phase);
            ctx!.beginPath();
            ctx!.arc(v.x, v.y, 1.4 + pulse * 0.8, 0, Math.PI * 2);
            ctx!.fillStyle = `rgba(212, 175, 55, ${(0.25 + pulse * 0.35) * intensity})`;
            ctx!.fill();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(draw);
    } else {
      // Static single render for reduced-motion users
      parcels.forEach((p) => (p.drawProgress = 1));
      draw();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
