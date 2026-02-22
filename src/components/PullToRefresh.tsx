import { useState } from "react";

export function PullToRefresh() {
  const [refreshing, setRefreshing] = useState(false);
  const [items, setItems] = useState([
    { id: 1, text: "🐦 New tweet from @reactjs", time: "2m ago" },
    { id: 2, text: "⭐ Someone starred your repo", time: "5m ago" },
    { id: 3, text: "💬 New comment on your post", time: "12m ago" },
    { id: 4, text: "🎉 Your PR was merged!", time: "30m ago" },
  ]);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      const newItem = {
        id: Date.now(),
        text: ["📱 App update available", "🔔 New notification", "📧 You've got mail", "🚀 Deployment complete"][Math.floor(Math.random() * 4)],
        time: "Just now",
      };
      setItems([newItem, ...items.slice(0, 3)]);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="rounded-2xl border border-gray-700 overflow-hidden bg-gray-800/30">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between">
          <h3 className="text-white font-semibold text-sm">Feed</h3>
          <button
            onClick={refresh}
            disabled={refreshing}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            <svg className={`w-4 h-4 text-gray-400 ${refreshing ? "animate-spin" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Loading indicator */}
        {refreshing && (
          <div className="flex items-center justify-center py-3 border-b border-gray-700/50">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
          </div>
        )}

        {/* Items */}
        <div className="divide-y divide-gray-700/50">
          {items.map((item, i) => (
            <div
              key={item.id}
              className="px-4 py-3 hover:bg-gray-700/20 transition-colors"
              style={{ animation: refreshing && i === 0 ? "" : `toast-in 0.3s ease-out ${i * 0.05}s both` }}
            >
              <p className="text-sm text-gray-300">{item.text}</p>
              <p className="text-xs text-gray-500 mt-1">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
