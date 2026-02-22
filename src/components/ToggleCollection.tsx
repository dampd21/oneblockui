import { useState } from "react";

function Toggle({ label, color = "bg-violet-500" }: { label: string; color?: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-300">{label}</span>
      <button onClick={() => setOn(!on)} className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${on ? color : "bg-gray-600"}`}>
        <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${on ? "translate-x-6" : ""}`} />
      </button>
    </div>
  );
}

function IOSToggle({ label }: { label: string }) {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-300">{label}</span>
      <button onClick={() => setOn(!on)} className={`relative w-14 h-8 rounded-full transition-all duration-500 ${on ? "bg-green-500" : "bg-gray-600"}`}>
        <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-500 ${on ? "translate-x-6" : ""}`}>
          <span className={`absolute inset-0 flex items-center justify-center text-[10px] transition-opacity ${on ? "opacity-100" : "opacity-0"}`}>✓</span>
        </div>
      </button>
    </div>
  );
}

export function ToggleCollection() {
  return (
    <div className="max-w-sm mx-auto space-y-5">
      <Toggle label="다크 모드" color="bg-violet-500" />
      <Toggle label="알림" color="bg-pink-500" />
      <Toggle label="자동 저장" color="bg-cyan-500" />
      <IOSToggle label="iOS 스타일" />
      <Toggle label="효과음" color="bg-emerald-500" />
      <Toggle label="분석" color="bg-amber-500" />
    </div>
  );
}
