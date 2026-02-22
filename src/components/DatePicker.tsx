import { useState } from "react";

export function DatePickerGallery() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [currentMonth] = useState(new Date());
  const today = new Date().getDate();

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthName = currentMonth.toLocaleString("ko-KR", { month: "long", year: "numeric" });

  return (
    <div className="max-w-sm mx-auto">
      <div className="rounded-2xl border border-gray-700 bg-gray-800/50 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h3 className="text-white font-semibold">{monthName}</h3>
          <button className="p-2 rounded-lg hover:bg-gray-700 text-gray-400 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
            <div key={d} className="text-center text-xs text-gray-500 font-medium py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDate(day === selectedDate ? null : day)}
              className={`h-9 w-9 mx-auto rounded-full text-sm font-medium transition-all duration-200 ${
                day === selectedDate
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/30 scale-110"
                  : day === today
                  ? "bg-violet-500/20 text-violet-400 ring-1 ring-violet-500/30"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        {selectedDate && (
          <div className="mt-4 pt-3 border-t border-gray-700 text-center text-sm text-violet-400">
            선택됨: {currentMonth.getMonth() + 1}월 {selectedDate}일
          </div>
        )}
      </div>
    </div>
  );
}
