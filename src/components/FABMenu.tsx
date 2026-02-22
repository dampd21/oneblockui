import { useState } from "react";

export function FABMenu() {
  const [open, setOpen] = useState(false);
  const items = [
    { icon: "📷", label: "사진", color: "bg-pink-500" },
    { icon: "📎", label: "파일", color: "bg-blue-500" },
    { icon: "📍", label: "위치", color: "bg-green-500" },
    { icon: "🎵", label: "음악", color: "bg-purple-500" },
    { icon: "✉️", label: "메시지", color: "bg-orange-500" },
  ];

  return (
    <div className="relative h-64 flex items-center justify-center">
      <div className="relative">
        {items.map((item, i) => {
          const angle = -90 + (i * 180) / (items.length - 1);
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 90;
          const y = Math.sin(rad) * 90;
          return (
            <div
              key={i}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${open ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
              style={{
                transform: open ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` : "translate(-50%, -50%)",
                transitionDelay: open ? `${i * 50}ms` : "0ms",
              }}
            >
              <button className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-transform group relative`}>
                {item.icon}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-gray-800 px-2 py-1 rounded">{item.label}</span>
              </button>
            </div>
          );
        })}
        <button
          onClick={() => setOpen(!open)}
          className={`relative z-10 w-14 h-14 rounded-full bg-violet-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 ${open ? "rotate-45 bg-red-500 shadow-red-500/30" : ""}`}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
    </div>
  );
}
