import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);

  const fmt = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        {[fmt(time.getHours()), fmt(time.getMinutes()), fmt(time.getSeconds())].map((seg, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-violet-400 text-3xl font-bold animate-pulse">:</span>}
            <div className="bg-gray-800 rounded-xl px-4 py-3 border border-gray-700 min-w-[64px]">
              <span className="text-3xl font-mono font-bold text-white tabular-nums">{seg}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-xs mt-3 font-mono">{time.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
    </div>
  );
}

function AnalogClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 1000); return () => clearInterval(t); }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="flex justify-center">
      <div className="relative w-40 h-40 rounded-full border-2 border-gray-600 bg-gray-800/50">
        {/* Hour markers */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          return (
            <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-gray-400"
              style={{ left: `calc(50% + ${Math.cos(angle) * 60}px - 3px)`, top: `calc(50% + ${Math.sin(angle) * 60}px - 3px)` }} />
          );
        })}
        {/* Hour hand */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 origin-bottom w-1.5 h-12 rounded-full bg-white"
          style={{ transform: `translateX(-50%) rotate(${hours * 30 + minutes * 0.5}deg)`, transformOrigin: "50% 100%", top: "calc(50% - 48px)" }} />
        {/* Minute hand */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 origin-bottom w-1 h-16 rounded-full bg-violet-400"
          style={{ transform: `translateX(-50%) rotate(${minutes * 6}deg)`, transformOrigin: "50% 100%", top: "calc(50% - 64px)" }} />
        {/* Second hand */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 origin-bottom w-0.5 h-16 rounded-full bg-red-400 transition-transform"
          style={{ transform: `translateX(-50%) rotate(${seconds * 6}deg)`, transformOrigin: "50% 100%", top: "calc(50% - 64px)" }} />
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-white" />
      </div>
    </div>
  );
}

export function ClockCollection() {
  return (
    <div className="space-y-8">
      <DigitalClock />
      <AnalogClock />
    </div>
  );
}
