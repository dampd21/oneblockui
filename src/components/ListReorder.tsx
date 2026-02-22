import { useState } from "react";

const initialItems = [
  { id: 1, text: "디자인 시스템", color: "border-violet-500/30 bg-violet-500/5" },
  { id: 2, text: "React 컴포넌트", color: "border-pink-500/30 bg-pink-500/5" },
  { id: 3, text: "유닛 테스트", color: "border-cyan-500/30 bg-cyan-500/5" },
  { id: 4, text: "프로덕션 배포", color: "border-emerald-500/30 bg-emerald-500/5" },
  { id: 5, text: "문서 작성", color: "border-amber-500/30 bg-amber-500/5" },
];

export function ListReorder() {
  const [items, setItems] = useState(initialItems);
  const [dragging, setDragging] = useState<number | null>(null);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const next = [...items];
    [next[index - 1], next[index]] = [next[index], next[index - 1]];
    setItems(next);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    const next = [...items];
    [next[index], next[index + 1]] = [next[index + 1], next[index]];
    setItems(next);
  };

  const removeItem = (id: number) => setItems(items.filter(i => i.id !== id));
  const resetItems = () => setItems(initialItems);

  return (
    <div className="space-y-3 max-w-md mx-auto">
      {items.map((item, i) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => setDragging(item.id)}
          onDragEnd={() => setDragging(null)}
          onDragOver={(e) => {
            e.preventDefault();
            if (dragging !== null && dragging !== item.id) {
              const dragIdx = items.findIndex(it => it.id === dragging);
              const hoverIdx = i;
              const next = [...items];
              const [removed] = next.splice(dragIdx, 1);
              next.splice(hoverIdx, 0, removed);
              setItems(next);
            }
          }}
          className={`flex items-center gap-3 p-3 rounded-xl border ${item.color} cursor-grab active:cursor-grabbing transition-all duration-200 ${
            dragging === item.id ? "opacity-50 scale-95" : "hover:-translate-x-1"
          }`}
        >
          <span className="text-gray-500 cursor-grab">⠿</span>
          <span className="flex-1 text-gray-300 text-sm font-medium">{item.text}</span>
          <div className="flex gap-1">
            <button onClick={() => moveUp(i)} className="p-1 rounded hover:bg-white/10 text-gray-500 hover:text-gray-300 transition-colors text-xs">▲</button>
            <button onClick={() => moveDown(i)} className="p-1 rounded hover:bg-white/10 text-gray-500 hover:text-gray-300 transition-colors text-xs">▼</button>
            <button onClick={() => removeItem(item.id)} className="p-1 rounded hover:bg-red-500/20 text-gray-500 hover:text-red-400 transition-colors text-xs">✕</button>
          </div>
        </div>
      ))}
      {items.length < initialItems.length && (
        <button onClick={resetItems} className="w-full py-2 rounded-xl border border-dashed border-gray-600 text-gray-500 text-sm hover:border-violet-500 hover:text-violet-400 transition-colors">
          목록 초기화
        </button>
      )}
    </div>
  );
}
