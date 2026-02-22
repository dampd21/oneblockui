import { useState } from "react";

const cards = [
  { suit: "♠", rank: "A", color: "text-white" },
  { suit: "♥", rank: "K", color: "text-red-500" },
  { suit: "♦", rank: "Q", color: "text-red-500" },
  { suit: "♣", rank: "J", color: "text-white" },
  { suit: "♥", rank: "10", color: "text-red-500" },
];

export function CardShuffle() {
  const [deck, setDeck] = useState(cards);
  const [animating, setAnimating] = useState(false);
  const [spread, setSpread] = useState(false);

  const shuffle = () => {
    setAnimating(true);
    setTimeout(() => {
      const shuffled = [...deck].sort(() => Math.random() - 0.5);
      setDeck(shuffled);
      setAnimating(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Card Stack */}
      <div className="relative h-56 flex items-center justify-center">
        {deck.map((card, i) => (
          <div
            key={`${card.suit}-${card.rank}`}
            className={`absolute w-32 h-44 rounded-xl bg-white shadow-xl transition-all duration-500 cursor-pointer ${
              animating ? "scale-90" : "hover:-translate-y-2"
            }`}
            style={{
              transform: spread
                ? `translateX(${(i - 2) * 70}px) rotate(${(i - 2) * 8}deg)`
                : `translateX(${i * 3}px) translateY(${i * -3}px) rotate(${(i - 2) * 2}deg)`,
              zIndex: i,
              transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="p-3 h-full flex flex-col justify-between">
              <div className={`text-lg font-bold ${card.color}`}>
                {card.rank}
                <span className="ml-1">{card.suit}</span>
              </div>
              <div className={`text-5xl text-center ${card.color}`}>{card.suit}</div>
              <div className={`text-lg font-bold text-right rotate-180 ${card.color}`}>
                {card.rank}
                <span className="ml-1">{card.suit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={shuffle}
          disabled={animating}
          className="px-5 py-2 rounded-xl bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors disabled:opacity-50"
        >
          🔀 Shuffle
        </button>
        <button
          onClick={() => setSpread(!spread)}
          className="px-5 py-2 rounded-xl border border-gray-600 text-gray-300 text-sm hover:bg-gray-700 transition-colors"
        >
          {spread ? "Stack" : "Spread"}
        </button>
      </div>
    </div>
  );
}
