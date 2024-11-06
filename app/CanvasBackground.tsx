"use client";
import { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dots: { x: number; y: number; radius: number; speedX: number; speedY: number }[] = [];

  const dotCount = 100; 
  for (let i = 0; i < dotCount; i++) {
    dots.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 3 + 1, 
      speedX: (Math.random() - 0.5) * 0.5, 
      speedY: (Math.random() - 0.5) * 0.9, 
    });
  }

  const drawStar = (ctx, x, y, radius, color) => {
    ctx.beginPath();
    ctx.moveTo(x, y - radius);
    for (let i = 0; i < 5; i++) {
      ctx.lineTo(x + radius * Math.cos((i * 2 * Math.PI) / 5 - Math.PI / 2), y + radius * Math.sin((i * 2 * Math.PI) / 5 - Math.PI / 2));
      ctx.lineTo(x + (radius / 2) * Math.cos((i * 2 * Math.PI) / 5 + Math.PI / 10), y + (radius / 2) * Math.sin((i * 2 * Math.PI) / 5 + Math.PI / 10));
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        drawStar(ctx, dot.x, dot.y, dot.radius, "rgba(255, 255, 255, 0.5)"); // Используйте функцию drawStar

        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Проверка границ
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.speedX *= -1; 
        }
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.speedY *= -1; 
        }
      });

      requestAnimationFrame(drawDots); 
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); 
    drawDots();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />;
};

export default CanvasBackground;