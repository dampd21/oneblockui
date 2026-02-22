import { useState } from "react";

const gradients = [
  "from-violet-500 to-purple-600",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-red-500 to-pink-600",
  "from-indigo-500 to-violet-600",
  "from-lime-500 to-emerald-600",
  "from-fuchsia-500 to-pink-600",
];

const items = gradients.map((g, i) => ({
  id: i,
  gradient: g,
  height: [160, 200, 240, 180, 280, 160, 220, 190, 250][i],
  emoji: ["🎨", "📸", "🌅", "🎭", "🌈", "🎪", "🎯", "💫", "🌺"][i],
  title: ["Abstract", "Portrait", "Sunset", "Theater", "Rainbow", "Circus", "Target", "Sparkle", "Flower"][i],
}));

export function MasonryGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="columns-2 sm:columns-3 gap-3 space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          className={`relative rounded-xl overflow-hidden cursor-pointer break-inside-avoid transition-all duration-300 ${
            hoveredId === item.id ? "shadow-2xl scale-[1.02]" : ""
          }`}
          style={{ height: item.height }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
          <div className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${hoveredId === item.id ? "bg-black/30" : ""}`} />
          <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
            hoveredId === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}>
            <span className="text-3xl mb-2">{item.emoji}</span>
            <span className="text-white font-semibold text-sm">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
