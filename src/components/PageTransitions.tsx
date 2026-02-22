import { useState } from "react";

const pages = [
  { id: 0, title: "Home", emoji: "🏠", color: "from-violet-600 to-indigo-600", content: "Welcome to the home page. This demonstrates smooth page transitions between different views." },
  { id: 1, title: "About", emoji: "ℹ️", color: "from-pink-600 to-rose-600", content: "Learn more about this showcase. All transitions are created with pure CSS animations." },
  { id: 2, title: "Contact", emoji: "📧", color: "from-cyan-600 to-blue-600", content: "Get in touch with us. These transition effects can be customized for any web application." },
];

type TransitionType = "fade" | "slide" | "zoom" | "flip";

export function PageTransitions() {
  const [currentPage, setCurrentPage] = useState(0);
  const [transition, setTransition] = useState<TransitionType>("fade");
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"in" | "out">("in");

  const navigate = (pageId: number) => {
    if (pageId === currentPage || animating) return;
    setAnimating(true);
    setDirection("out");
    setTimeout(() => {
      setCurrentPage(pageId);
      setDirection("in");
      setTimeout(() => setAnimating(false), 400);
    }, 400);
  };

  const getStyle = (): React.CSSProperties => {
    const isIn = direction === "in";
    switch (transition) {
      case "fade": return { opacity: isIn ? 1 : 0, transition: "opacity 0.4s ease" };
      case "slide": return { transform: isIn ? "translateX(0)" : "translateX(-100%)", opacity: isIn ? 1 : 0, transition: "all 0.4s ease" };
      case "zoom": return { transform: isIn ? "scale(1)" : "scale(0.8)", opacity: isIn ? 1 : 0, transition: "all 0.4s ease" };
      case "flip": return { transform: isIn ? "rotateY(0deg)" : "rotateY(90deg)", opacity: isIn ? 1 : 0, transition: "all 0.4s ease" };
    }
  };

  const page = pages[currentPage];

  return (
    <div className="space-y-4 max-w-md mx-auto">
      {/* Transition selector */}
      <div className="flex gap-2 justify-center">
        {(["fade", "slide", "zoom", "flip"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTransition(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              transition === t ? "bg-violet-500 text-white" : "bg-gray-700 text-gray-400"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Page content */}
      <div className="perspective-1000">
        <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${page.color} p-8 min-h-[200px]`} style={{ ...getStyle(), transformStyle: "preserve-3d" }}>
          <div className="text-4xl mb-4">{page.emoji}</div>
          <h3 className="text-xl font-bold text-white mb-2">{page.title}</h3>
          <p className="text-white/70 text-sm">{page.content}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-2 justify-center">
        {pages.map((p) => (
          <button
            key={p.id}
            onClick={() => navigate(p.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              currentPage === p.id
                ? "bg-white/10 text-white border border-white/20"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {p.emoji} {p.title}
          </button>
        ))}
      </div>
    </div>
  );
}
