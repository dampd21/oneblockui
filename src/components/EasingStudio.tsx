import { useState } from "react";

const easings = [
  { name: "ease", css: "ease" },
  { name: "ease-in", css: "ease-in" },
  { name: "ease-out", css: "ease-out" },
  { name: "ease-in-out", css: "ease-in-out" },
  { name: "linear", css: "linear" },
  { name: "spring", css: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
  { name: "bounce", css: "cubic-bezier(0.68, -0.55, 0.27, 1.55)" },
  { name: "smooth", css: "cubic-bezier(0.4, 0, 0.2, 1)" },
];

export function EasingStudio() {
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setPlaying(true));
    });
  };

  return (
    <div className="space-y-4">
      <button onClick={play} className="px-5 py-2 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors mx-auto block">
        모든 이징 재생
      </button>
      <div className="space-y-3">
        {easings.map((e) => (
          <div key={e.name} className="flex items-center gap-4">
            <span className="text-xs text-gray-400 w-24 text-right font-mono">{e.name}</span>
            <div className="flex-1 h-8 bg-gray-800/50 rounded-full relative overflow-hidden border border-gray-700/50">
              <div
                className="absolute top-1 left-1 h-6 w-6 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"
                style={{
                  left: playing ? "calc(100% - 28px)" : "4px",
                  transition: playing ? `left 1.5s ${e.css}` : "none",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
