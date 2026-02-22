import { useState } from "react";

function ColorSlider({ label, color, max = 100 }: { label: string; color: string; max?: number }) {
  const [value, setValue] = useState(50);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label}</span>
        <span className={`font-mono font-bold ${color}`}>{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-700 accent-violet-500"
        style={{ accentColor: color.includes("violet") ? "#8b5cf6" : color.includes("pink") ? "#ec4899" : color.includes("cyan") ? "#06b6d4" : "#10b981" }}
      />
    </div>
  );
}

export function SliderGallery() {
  const [temp, setTemp] = useState(22);
  return (
    <div className="space-y-8">
      <ColorSlider label="볼륨" color="text-violet-400" />
      <ColorSlider label="밝기" color="text-pink-400" />
      <ColorSlider label="채도" color="text-cyan-400" />

      {/* 온도 슬라이더 */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">온도</span>
          <span className="font-mono font-bold text-orange-400">{temp}°C</span>
        </div>
        <input
          type="range" min={0} max={40} value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
          className="w-full h-3 rounded-full appearance-none cursor-pointer"
          style={{ background: `linear-gradient(to right, #3b82f6, #eab308 50%, #ef4444)`, accentColor: temp > 30 ? "#ef4444" : temp > 15 ? "#eab308" : "#3b82f6" }}
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>차가움</span>
          <span>따뜻함</span>
          <span>뜨거움</span>
        </div>
      </div>
    </div>
  );
}
