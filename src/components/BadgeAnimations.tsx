export function BadgeAnimations() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {/* 펄스 뱃지 */}
      <div className="relative">
        <div className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300 text-sm">받은편지함</div>
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">3</span>
        </span>
      </div>

      {/* 상태 뱃지 */}
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> 온라인
      </span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm border border-amber-500/20">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> 자리비움
      </span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-sm border border-red-500/20">
        <span className="w-2 h-2 rounded-full bg-red-500" /> 오프라인
      </span>

      {/* 그라디언트 뱃지 */}
      <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 bg-[length:200%_200%]" style={{ animation: "gradient-shift 3s ease infinite" }}>
        프리미엄
      </span>

      {/* 카운트 뱃지 */}
      <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-sm font-mono border border-violet-500/30">v2.0.0</span>
      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30">TypeScript</span>
      <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm border border-pink-500/30">React</span>

      {/* NEW 뱃지 */}
      <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold animate-bounce">NEW</span>
    </div>
  );
}
