import { useState } from "react";

const apps = [
  { icon: "🔍", label: "검색" },
  { icon: "⚙️", label: "설정" },
  { icon: "📧", label: "메일" },
  { icon: "🎵", label: "음악" },
  { icon: "📸", label: "사진" },
  { icon: "💬", label: "메시지" },
  { icon: "🗺️", label: "지도" },
  { icon: "📝", label: "메모" },
  { icon: "🎮", label: "게임" },
];

export function DockMagnifier() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const getScale = (index: number) => {
    if (hoverIndex === null) return 1;
    const diff = Math.abs(index - hoverIndex);
    if (diff === 0) return 1.5;
    if (diff === 1) return 1.25;
    if (diff === 2) return 1.1;
    return 1;
  };

  return (
    <div className="flex items-end justify-center">
      <div className="flex items-end gap-1 rounded-2xl bg-gray-800/80 border border-gray-700/50 px-4 pb-2 pt-3 backdrop-blur-lg">
        {apps.map((app, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            className="flex flex-col items-center gap-1 transition-all duration-200 cursor-pointer group"
            style={{ transform: `scale(${getScale(i)})`, transformOrigin: "bottom" }}
          >
            <div className="w-12 h-12 rounded-xl bg-gray-700/50 flex items-center justify-center text-2xl hover:bg-gray-600/50 transition-colors shadow-lg">
              {app.icon}
            </div>
            {hoverIndex === i && (
              <span className="absolute -top-8 text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-md whitespace-nowrap shadow-lg">{app.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
