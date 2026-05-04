"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 120;
const PAD = (n: number) => n.toString().padStart(3, "0");

export default function ThreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/pics/frame_${PAD(i)}_delay-0.066s.webp`;
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === 1 && canvasRef.current) {
          renderFrame(0);
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[index];

    if (canvas && ctx && img && img.complete) {
      if (canvas.width !== img.naturalWidth) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(1.02, 1.02);
      ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
      ctx.restore();
    }
  };

  useEffect(() => {
    if (loadedCount < FRAME_COUNT) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const index = Math.floor(self.progress * (FRAME_COUNT - 1));
        requestAnimationFrame(() => renderFrame(index));
      },
    });

    return () => scrollTrigger.kill();
  }, [loadedCount]);

  return (
    <div className="infobox-image" style={{ background: "#000", position: "relative", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {loadedCount < FRAME_COUNT && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)", color: "var(--accent-cyan)", fontSize: "0.7rem", fontFamily: "var(--font-mono)" }}>
          LOADING {Math.floor((loadedCount / FRAME_COUNT) * 100)}%
        </div>
      )}
    </div>
  );
}
