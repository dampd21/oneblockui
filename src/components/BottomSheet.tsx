import { useState } from "react";

export function BottomSheetGallery() {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<"peek" | "half" | "full">("half");

  return (
    <div className="relative h-80 border border-gray-700 rounded-2xl overflow-hidden bg-gray-900">
      {/* 모의 콘텐츠 */}
      <div className="p-4 space-y-3">
        <div className="h-3 w-3/4 bg-gray-800 rounded" />
        <div className="h-3 w-1/2 bg-gray-800 rounded" />
        <div className="h-3 w-2/3 bg-gray-800 rounded" />
        <button onClick={() => setOpen(true)} className="mt-4 px-4 py-2 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors">
          바텀 시트 열기
        </button>
      </div>

      {/* 오버레이 */}
      {open && <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={() => setOpen(false)} />}

      {/* 시트 */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gray-800 rounded-t-2xl border-t border-gray-700 transition-all duration-500 ease-out ${open ? "" : "translate-y-full"}`}
        style={{ height: height === "peek" ? "30%" : height === "half" ? "55%" : "85%" }}
      >
        {/* 핸들 */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-gray-600" />
        </div>
        <div className="px-4 space-y-3">
          <h3 className="text-white font-semibold text-lg">바텀 시트</h3>
          <div className="flex gap-2">
            {([["peek", "최소"], ["half", "절반"], ["full", "전체"]] as const).map(([h, label]) => (
              <button key={h} onClick={() => setHeight(h)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${height === h ? "bg-violet-500 text-white" : "bg-gray-700 text-gray-400"}`}
              >{label}</button>
            ))}
          </div>
          <div className="space-y-2 pt-2">
            {["공유하기", "링크 복사", "수정", "삭제"].map((item) => (
              <button key={item} className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-700 transition-colors">{item}</button>
            ))}
          </div>
          <button onClick={() => setOpen(false)} className="w-full py-2.5 rounded-lg border border-gray-600 text-gray-400 text-sm hover:bg-gray-700 transition-colors">닫기</button>
        </div>
      </div>
    </div>
  );
}
