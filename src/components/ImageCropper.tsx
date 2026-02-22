import { useState } from "react";

export function ImageCropper() {
  const [zoom, setZoom] = useState(1);
  const [shape, setShape] = useState<"circle" | "square" | "wide">("circle");
  const [posX, setPosX] = useState(50);
  const [posY, setPosY] = useState(50);

  const clipPaths: Record<string, string> = {
    circle: "circle(40% at 50% 50%)",
    square: "inset(10% 10% 10% 10% round 12px)",
    wide: "inset(25% 5% 25% 5% round 12px)",
  };

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Preview */}
      <div className="relative w-64 h-64 mx-auto rounded-2xl border-2 border-gray-700 overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${posX}% ${posY}%, #8b5cf6, #ec4899, #06b6d4, #10b981)`,
            transform: `scale(${zoom})`,
            clipPath: clipPaths[shape],
          }}
        />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(circle at ${posX}% ${posY}%, transparent 39%, rgba(0,0,0,0.6) 41%)`,
          display: shape === "circle" ? "block" : "none",
        }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="w-full h-full grid grid-cols-3 grid-rows-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-white/30" />
            ))}
          </div>
        </div>
      </div>

      {/* Shape selector */}
      <div className="flex gap-2 justify-center">
        {(["circle", "square", "wide"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setShape(s)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              shape === s ? "bg-violet-500 text-white" : "bg-gray-700 text-gray-400 hover:bg-gray-600"
            }`}
          >
            {s === "circle" ? "⭕" : s === "square" ? "⬜" : "📐"} {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Zoom</span><span>{zoom.toFixed(1)}x</span>
          </div>
          <input type="range" min={0.5} max={3} step={0.1} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="w-full accent-violet-500" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Position X</span><span>{posX}%</span>
          </div>
          <input type="range" min={0} max={100} value={posX} onChange={(e) => setPosX(Number(e.target.value))} className="w-full accent-pink-500" />
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-500">
            <span>Position Y</span><span>{posY}%</span>
          </div>
          <input type="range" min={0} max={100} value={posY} onChange={(e) => setPosY(Number(e.target.value))} className="w-full accent-cyan-500" />
        </div>
      </div>
    </div>
  );
}
