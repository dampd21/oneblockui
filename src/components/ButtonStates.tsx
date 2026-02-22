import { useState } from "react";

function LoadingButton() {
  const [loading, setLoading] = useState(false);
  return (
    <button
      onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
      disabled={loading}
      className="relative px-6 py-2.5 rounded-xl bg-violet-500 text-white font-medium overflow-hidden transition-all hover:bg-violet-600 disabled:opacity-80"
    >
      {loading && <div className="absolute inset-0 bg-violet-500 flex items-center justify-center"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></div>}
      {loading ? "처리 중..." : "클릭하여 로딩"}
    </button>
  );
}

function SuccessButton() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const click = () => {
    setState("loading");
    setTimeout(() => { setState("success"); setTimeout(() => setState("idle"), 1500); }, 1500);
  };
  return (
    <button onClick={click} disabled={state !== "idle"}
      className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-500 ${
        state === "success" ? "bg-green-500 text-white scale-105" : state === "loading" ? "bg-amber-500 text-white" : "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-pink-500/25"
      }`}
    >
      {state === "loading" ? "작업 중..." : state === "success" ? "완료!" : "제출"}
    </button>
  );
}

export function ButtonStatesGallery() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      <LoadingButton />
      <SuccessButton />
      <button className="group px-6 py-2.5 rounded-xl border-2 border-violet-500 text-violet-400 font-medium hover:bg-violet-500 hover:text-white transition-all duration-300">
        <span className="inline-block group-hover:scale-110 transition-transform">호버 효과</span>
      </button>
      <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-medium bg-[length:200%_200%] hover:bg-[length:100%_100%] transition-all duration-700" style={{ animation: "gradient-shift 3s ease infinite" }}>
        그라디언트
      </button>
      <button className="px-6 py-2.5 rounded-xl bg-gray-700 text-gray-300 font-medium relative overflow-hidden group">
        <span className="relative z-10">리플</span>
        <div className="absolute inset-0 bg-violet-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">리플</span>
      </button>
      <button disabled className="px-6 py-2.5 rounded-xl bg-gray-700 text-gray-500 font-medium cursor-not-allowed opacity-50">
        비활성
      </button>
    </div>
  );
}
