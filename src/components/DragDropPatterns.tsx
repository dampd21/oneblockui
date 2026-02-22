import { useState } from "react";

interface DragItem {
  id: number;
  text: string;
  emoji: string;
}

const initialTodo: DragItem[] = [
  { id: 1, text: "Design System", emoji: "🎨" },
  { id: 2, text: "API Integration", emoji: "🔌" },
  { id: 3, text: "Unit Tests", emoji: "🧪" },
];

const initialDone: DragItem[] = [
  { id: 4, text: "Setup Project", emoji: "📦" },
];

export function DragDropPatterns() {
  const [todo, setTodo] = useState(initialTodo);
  const [inProgress, setInProgress] = useState<DragItem[]>([]);
  const [done, setDone] = useState(initialDone);
  const [dragging, setDragging] = useState<{ item: DragItem; from: string } | null>(null);

  const columns = [
    { id: "todo", title: "📋 To Do", items: todo, setItems: setTodo, color: "border-violet-500/30" },
    { id: "progress", title: "🔄 In Progress", items: inProgress, setItems: setInProgress, color: "border-amber-500/30" },
    { id: "done", title: "✅ Done", items: done, setItems: setDone, color: "border-emerald-500/30" },
  ];

  const handleDragStart = (item: DragItem, from: string) => {
    setDragging({ item, from });
  };

  const handleDrop = (targetCol: string) => {
    if (!dragging) return;
    const { item, from } = dragging;
    if (from === targetCol) return;

    // Remove from source
    const sourceCol = columns.find(c => c.id === from);
    sourceCol?.setItems(prev => prev.filter(i => i.id !== item.id));

    // Add to target
    const targetColumn = columns.find(c => c.id === targetCol);
    targetColumn?.setItems(prev => [...prev, item]);

    setDragging(null);
  };

  const reset = () => {
    setTodo(initialTodo);
    setInProgress([]);
    setDone(initialDone);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {columns.map((col) => (
          <div
            key={col.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(col.id)}
            className={`rounded-xl border-2 border-dashed p-3 min-h-[200px] transition-colors ${
              dragging ? `${col.color} bg-gray-800/30` : "border-gray-700 bg-gray-800/10"
            }`}
          >
            <h4 className="text-xs font-semibold text-gray-400 mb-3">{col.title}</h4>
            <div className="space-y-2">
              {col.items.map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => handleDragStart(item, col.id)}
                  onDragEnd={() => setDragging(null)}
                  className={`flex items-center gap-2 p-2.5 rounded-lg bg-gray-800 border border-gray-700 cursor-grab active:cursor-grabbing transition-all duration-200 hover:border-gray-600 ${
                    dragging?.item.id === item.id ? "opacity-50 scale-95" : ""
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span className="text-xs text-gray-300">{item.text}</span>
                </div>
              ))}
              {col.items.length === 0 && (
                <p className="text-xs text-gray-600 text-center py-4">Drop here</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <button onClick={reset} className="text-xs text-violet-400 hover:text-violet-300 transition-colors mx-auto block">Reset Board</button>
    </div>
  );
}
