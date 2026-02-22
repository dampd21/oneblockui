import { useState } from "react";

export function TagInput() {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind"]);
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setInput("");
    }
  };

  const removeTag = (tag: string) => setTags(tags.filter((t) => t !== tag));

  const colors = [
    "bg-violet-500/20 text-violet-300 border-violet-500/30",
    "bg-pink-500/20 text-pink-300 border-pink-500/30",
    "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "bg-amber-500/20 text-amber-300 border-amber-500/30",
    "bg-red-500/20 text-red-300 border-red-500/30",
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 min-h-[48px] rounded-xl border-2 border-gray-600 bg-gray-800/50 p-3 focus-within:border-violet-500 transition-colors">
        {tags.map((tag, i) => (
          <span key={tag} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-all duration-300 animate-[float_0.3s_ease-out] ${colors[i % colors.length]}`}>
            {tag}
            <button onClick={() => removeTag(tag)} className="rounded-full p-0.5 hover:bg-white/10 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </span>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }}
          placeholder="입력 후 Enter..."
          className="flex-1 min-w-[120px] bg-transparent text-white outline-none placeholder-gray-500 text-sm"
        />
      </div>
      <p className="text-xs text-gray-500">{tags.length}개의 태그가 추가됨</p>
    </div>
  );
}
