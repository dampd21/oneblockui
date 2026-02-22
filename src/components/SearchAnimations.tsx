import { useState } from "react";

const suggestions = [
  "React Components", "Tailwind CSS", "TypeScript", "Vite Build Tool",
  "Animation Libraries", "State Management", "UI Design Patterns",
  "CSS Grid Layout", "Flexbox Guide", "Dark Mode Toggle",
];

export function SearchAnimations() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const filtered = query ? suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase())) : suggestions;

  return (
    <div className="space-y-8 max-w-md mx-auto">
      {/* Expanding Search */}
      <div className="flex justify-center">
        <div className={`flex items-center rounded-full border transition-all duration-500 overflow-hidden ${expanded ? "w-full border-violet-500 bg-gray-800/80" : "w-12 border-gray-600 bg-gray-800/50 cursor-pointer"}`}>
          <button onClick={() => setExpanded(!expanded)} className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-violet-400 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          {expanded && (
            <input
              autoFocus
              placeholder="Search..."
              className="flex-1 bg-transparent text-white text-sm outline-none pr-4 placeholder-gray-500"
              onBlur={() => setTimeout(() => setExpanded(false), 200)}
            />
          )}
        </div>
      </div>

      {/* Search with suggestions */}
      <div className="relative">
        <div className={`flex items-center rounded-xl border-2 bg-gray-800/50 px-4 transition-all duration-300 ${focused ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.2)]" : "border-gray-600"}`}>
          <svg className={`w-5 h-5 mr-3 transition-colors ${focused ? "text-violet-400" : "text-gray-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
            placeholder="Search components..."
            className="flex-1 py-3 bg-transparent text-white text-sm outline-none placeholder-gray-500"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-500 hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          )}
        </div>
        {focused && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-gray-700 bg-gray-800 shadow-2xl overflow-hidden z-50">
            <div className="px-3 py-2 text-xs text-gray-500 uppercase tracking-wider">
              {query ? "Results" : "Popular Searches"}
            </div>
            {filtered.slice(0, 5).map((item, i) => (
              <button key={item} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-700/50 transition-colors"
                style={{ animation: `toast-in 0.2s ease-out ${i * 0.05}s both` }}>
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                {item}
              </button>
            ))}
            {filtered.length === 0 && <p className="px-4 py-6 text-sm text-gray-500 text-center">No results found</p>}
          </div>
        )}
      </div>
    </div>
  );
}
