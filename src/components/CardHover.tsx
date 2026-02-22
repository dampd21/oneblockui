import { useState } from "react";

function HoverCard({ title, desc, gradient }: { title: string; desc: string; gradient: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 transition-all duration-500 cursor-pointer ${
        hovered ? "border-transparent shadow-2xl -translate-y-2 scale-[1.02]" : ""
      }`}
    >
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${gradient} ${hovered ? "opacity-10" : ""}`} />
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
      <div className={`absolute bottom-0 left-0 h-0.5 ${gradient} transition-all duration-500 ${hovered ? "w-full" : "w-0"}`} />
    </div>
  );
}

export function CardHoverGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <HoverCard title="분석" desc="성과를 추적하세요" gradient="bg-gradient-to-r from-violet-500 to-purple-500" />
      <HoverCard title="보안" desc="엔터프라이즈급 보호" gradient="bg-gradient-to-r from-cyan-500 to-blue-500" />
      <HoverCard title="연동" desc="도구를 연결하세요" gradient="bg-gradient-to-r from-pink-500 to-rose-500" />
      <HoverCard title="자동화" desc="워크플로우 간소화" gradient="bg-gradient-to-r from-emerald-500 to-green-500" />
    </div>
  );
}
