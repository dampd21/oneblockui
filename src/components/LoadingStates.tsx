export function LoadingStates() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      {/* 스피너 */}
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-4 border-gray-600 border-t-violet-500 animate-spin" />
        <span className="text-xs text-gray-400">스피너</span>
      </div>

      {/* 바운싱 점 */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-3 w-3 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <span className="text-xs text-gray-400">바운싱 점</span>
      </div>

      {/* 펄스 */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full bg-violet-500 opacity-75 animate-ping" />
          <div className="relative h-10 w-10 rounded-full bg-violet-500" />
        </div>
        <span className="text-xs text-gray-400">펄스</span>
      </div>

      {/* 웨이브 */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-1 h-10">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="w-1.5 h-8 rounded-full bg-violet-500" style={{ animation: `wave 1s ease-in-out ${i * 0.1}s infinite` }} />
          ))}
        </div>
        <span className="text-xs text-gray-400">웨이브</span>
      </div>

      {/* 스켈레톤 */}
      <div className="flex flex-col items-center gap-3">
        <div className="space-y-2 w-full">
          <div className="h-3 rounded bg-gray-700 animate-pulse" />
          <div className="h-3 w-3/4 rounded bg-gray-700 animate-pulse" style={{ animationDelay: "0.1s" }} />
          <div className="h-3 w-1/2 rounded bg-gray-700 animate-pulse" style={{ animationDelay: "0.2s" }} />
        </div>
        <span className="text-xs text-gray-400">스켈레톤</span>
      </div>

      {/* 더블 링 */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 border-r-pink-500 animate-spin" />
          <div className="absolute inset-1 rounded-full border-4 border-transparent border-b-cyan-500 border-l-emerald-500 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
        </div>
        <span className="text-xs text-gray-400">더블 링</span>
      </div>
    </div>
  );
}
