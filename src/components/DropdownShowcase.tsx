import { useState, useRef, useEffect } from "react";

function Dropdown({ label, items, variant = "default" }: { label: string; items: string[]; variant?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isSearch = variant === "search";
  const [search, setSearch] = useState("");
  const filtered = isSearch ? items.filter(i => i.toLowerCase().includes(search.toLowerCase())) : items;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border text-sm transition-all ${
          open ? "border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.2)]" : "border-gray-600 hover:border-gray-500"
        } bg-gray-800/50 text-gray-300`}
      >
        <span>{selected || label}</span>
        <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-gray-700 bg-gray-800 shadow-2xl shadow-black/50 z-50 overflow-hidden" style={{ animation: "slide-up 0.2s ease-out" }}>
          {isSearch && (
            <div className="p-2 border-b border-gray-700">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-1.5 rounded-lg bg-gray-700/50 text-sm text-white outline-none placeholder-gray-500"
                autoFocus
              />
            </div>
          )}
          <div className="max-h-48 overflow-y-auto py-1">
            {filtered.map((item) => (
              <button
                key={item}
                onClick={() => { setSelected(item); setOpen(false); setSearch(""); }}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  selected === item ? "bg-violet-500/20 text-violet-400" : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                {selected === item && <span className="mr-2">✓</span>}
                {item}
              </button>
            ))}
            {filtered.length === 0 && <p className="px-4 py-3 text-sm text-gray-500 text-center">No results</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export function DropdownShowcase() {
  return (
    <div className="space-y-6 max-w-sm mx-auto">
      <Dropdown label="Select Framework" items={["React", "Vue", "Angular", "Svelte", "Solid", "Qwik"]} />
      <Dropdown label="Search Countries..." items={["United States", "United Kingdom", "Canada", "Germany", "France", "Japan", "South Korea", "Australia", "Brazil", "India"]} variant="search" />
      <Dropdown label="Choose Color" items={["🔴 Red", "🟠 Orange", "🟡 Yellow", "🟢 Green", "🔵 Blue", "🟣 Purple"]} />
    </div>
  );
}
