import { useState, useCallback } from "react";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

const config: Record<ToastType, { icon: string; bg: string; border: string }> = {
  success: { icon: "✓", bg: "bg-green-500/10", border: "border-green-500/30" },
  error: { icon: "✕", bg: "bg-red-500/10", border: "border-red-500/30" },
  warning: { icon: "!", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  info: { icon: "i", bg: "bg-blue-500/10", border: "border-blue-500/30" },
};

const textColors: Record<ToastType, string> = {
  success: "text-green-400",
  error: "text-red-400",
  warning: "text-amber-400",
  info: "text-blue-400",
};

export function ToastGallery() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [counter, setCounter] = useState(0);

  const addToast = useCallback((type: ToastType) => {
    const messages: Record<ToastType, string> = {
      success: "작업이 성공적으로 완료되었습니다!",
      error: "문제가 발생했습니다!",
      warning: "입력값을 확인해 주세요",
      info: "유용한 정보입니다",
    };
    const id = counter;
    setCounter((c) => c + 1);
    setToasts((t) => [...t, { id, type, message: messages[type] }]);
    setTimeout(() => setToasts((t) => t.filter((toast) => toast.id !== id)), 3000);
  }, [counter]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
        <button onClick={() => addToast("success")} className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30 transition-colors border border-green-500/30">성공</button>
        <button onClick={() => addToast("error")} className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30 transition-colors border border-red-500/30">오류</button>
        <button onClick={() => addToast("warning")} className="px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 text-sm hover:bg-amber-500/30 transition-colors border border-amber-500/30">경고</button>
        <button onClick={() => addToast("info")} className="px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 text-sm hover:bg-blue-500/30 transition-colors border border-blue-500/30">정보</button>
      </div>

      {/* 토스트 컨테이너 */}
      <div className="space-y-2 min-h-[120px]">
        {toasts.map((toast) => {
          const c = config[toast.type];
          return (
            <div key={toast.id} className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${c.bg} ${c.border}`} style={{ animation: "toast-in 0.3s ease-out" }}>
              <span className={`text-lg font-bold ${textColors[toast.type]}`}>{c.icon}</span>
              <span className="text-sm text-gray-300 flex-1">{toast.message}</span>
              <button onClick={() => setToasts((t) => t.filter((tt) => tt.id !== toast.id))} className="text-gray-500 hover:text-gray-300 transition-colors">✕</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
