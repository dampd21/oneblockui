import { useState, useRef } from "react";

function ParallaxCard({ title, subtitle, gradient, emoji }: { title: string; subtitle: string; gradient: string; emoji: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState("");

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 20;
    const rotateY = (x - 0.5) * 20;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
    setGlare(`radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`);
  };

  const handleLeave = () => {
    setTransform("perspective(800px) rotateX(0) rotateY(0) scale(1)");
    setGlare("");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative overflow-hidden rounded-2xl ${gradient} p-6 h-48 cursor-pointer shadow-xl`}
      style={{ transform, transition: "transform 0.1s ease-out" }}
    >
      <div className="absolute inset-0" style={{ background: glare }} />
      <div className="relative z-10">
        <div className="text-4xl mb-3">{emoji}</div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/70 text-sm">{subtitle}</p>
      </div>
      <div className="absolute -bottom-6 -right-6 text-8xl opacity-20">{emoji}</div>
    </div>
  );
}

export function ParallaxCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ParallaxCard title="Performance" subtitle="Lightning fast rendering" gradient="bg-gradient-to-br from-violet-600 to-indigo-600" emoji="⚡" />
      <ParallaxCard title="Security" subtitle="Enterprise-grade protection" gradient="bg-gradient-to-br from-rose-600 to-pink-600" emoji="🛡️" />
      <ParallaxCard title="Analytics" subtitle="Deep insights & metrics" gradient="bg-gradient-to-br from-cyan-600 to-blue-600" emoji="📊" />
      <ParallaxCard title="Innovation" subtitle="Cutting-edge technology" gradient="bg-gradient-to-br from-emerald-600 to-teal-600" emoji="🚀" />
    </div>
  );
}
