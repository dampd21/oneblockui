import { useState, useEffect, useRef } from "react";

export function CursorTrailGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [mode, setMode] = useState<"dots" | "glow" | "rainbow">("dots");
  const counterRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = counterRef.current++;
      setTrails((prev) => [...prev.slice(-20), { x, y, id }]);
    };

    container.addEventListener("mousemove", handleMove);
    return () => container.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (trails.length === 0) return;
    const timer = setTimeout(() => {
      setTrails((prev) => prev.slice(1));
    }, 100);
    return () => clearTimeout(timer);
  }, [trails]);

  const rainbowColors = ["#8b5cf6", "#ec4899", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-center">
        {(["dots", "glow", "rainbow"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              mode === m ? "bg-violet-500 text-white" : "bg-gray-700 text-gray-400"
            }`}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>
      <div
        ref={containerRef}
        className="relative h-64 rounded-2xl border border-gray-700 bg-gray-900/50 overflow-hidden cursor-crosshair"
      >
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm pointer-events-none">
          Move your mouse here ✨
        </div>
        {trails.map((trail, i) => {
          const opacity = (i + 1) / trails.length;
          const size = mode === "glow" ? 30 : mode === "rainbow" ? 12 : 8;
          return (
            <div
              key={trail.id}
              className="absolute rounded-full pointer-events-none transition-opacity duration-200"
              style={{
                left: trail.x - size / 2,
                top: trail.y - size / 2,
                width: size,
                height: size,
                opacity,
                background:
                  mode === "glow"
                    ? `radial-gradient(circle, rgba(139,92,246,${opacity}) 0%, transparent 70%)`
                    : mode === "rainbow"
                    ? rainbowColors[i % rainbowColors.length]
                    : `rgba(139,92,246,${opacity})`,
                boxShadow: mode === "glow" ? `0 0 20px rgba(139,92,246,${opacity * 0.5})` : "none",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
