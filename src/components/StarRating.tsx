import { useState } from "react";

function StarRatingWidget({ size = "md" }: { size?: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const starSize = size === "lg" ? "w-10 h-10" : size === "sm" ? "w-6 h-6" : "w-8 h-8";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star === rating ? 0 : star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`transition-all duration-200 ${
              star <= (hover || rating) ? "scale-110" : "scale-100"
            }`}
          >
            <svg
              className={`${starSize} transition-colors duration-200 ${
                star <= (hover || rating) ? "text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" : "text-gray-600"
              }`}
              fill={star <= (hover || rating) ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </button>
        ))}
      </div>
      <span className="text-sm text-gray-400">
        {rating > 0 ? `${rating} / 5 stars` : "Click to rate"}
      </span>
    </div>
  );
}

function HeartRating() {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <button key={i} onClick={() => setRating(i === rating ? 0 : i)} className={`text-2xl transition-all duration-300 hover:scale-125 ${i <= rating ? "text-red-500 scale-110" : "text-gray-600 grayscale"}`}>
            {i <= rating ? "❤️" : "🤍"}
          </button>
        ))}
      </div>
      <span className="text-sm text-gray-400">{rating > 0 ? `${rating} hearts` : "Click to like"}</span>
    </div>
  );
}

function EmojiRating() {
  const [selected, setSelected] = useState<number | null>(null);
  const emojis = ["😡", "😕", "😐", "😊", "🤩"];
  const labels = ["Terrible", "Bad", "Okay", "Good", "Amazing"];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-3">
        {emojis.map((emoji, i) => (
          <button
            key={i}
            onClick={() => setSelected(i === selected ? null : i)}
            className={`text-3xl transition-all duration-300 ${selected === i ? "scale-150 -translate-y-2" : selected !== null ? "opacity-40 scale-90" : "hover:scale-125"}`}
          >
            {emoji}
          </button>
        ))}
      </div>
      <span className="text-sm text-gray-400 h-5">{selected !== null ? labels[selected] : "How was your experience?"}</span>
    </div>
  );
}

export function StarRatingComponent() {
  return (
    <div className="space-y-8">
      <StarRatingWidget size="lg" />
      <HeartRating />
      <EmojiRating />
    </div>
  );
}
