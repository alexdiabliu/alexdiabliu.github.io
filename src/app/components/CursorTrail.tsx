import { useEffect, useRef } from 'react';

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      // Add new trail point
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      });

      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw cursor as a bright star
      const cursor = cursorRef.current;
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();

      // Draw glow around cursor
      const gradient = ctx.createRadialGradient(cursor.x, cursor.y, 0, cursor.x, cursor.y, 15);
      gradient.addColorStop(0, 'rgba(74, 123, 255, 0.6)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 107, 157, 0)');
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, 15, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw shooting star trail
      trailRef.current.forEach((point, index) => {
        point.opacity -= 0.05;

        if (point.opacity > 0) {
          const size = 2 * point.opacity;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${point.opacity * 0.6})`;
          ctx.fill();

          // Add trail glow
          ctx.beginPath();
          ctx.arc(point.x, point.y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(74, 123, 255, ${point.opacity * 0.2})`;
          ctx.fill();
        }
      });

      // Remove faded trail points
      trailRef.current = trailRef.current.filter(point => point.opacity > 0);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 100 }}
    />
  );
}
