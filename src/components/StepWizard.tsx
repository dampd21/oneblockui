import { useState } from "react";

const steps = [
  { title: "계정", desc: "계정을 생성하세요" },
  { title: "프로필", desc: "프로필을 설정하세요" },
  { title: "설정", desc: "환경설정을 구성하세요" },
  { title: "완료", desc: "모든 설정이 완료되었습니다!" },
];

export function StepWizard() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-8 max-w-lg mx-auto">
      {/* 진행 표시 */}
      <div className="flex items-center justify-between relative">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-700" />
        <div className="absolute top-5 left-0 h-0.5 bg-violet-500 transition-all duration-500" style={{ width: `${(current / (steps.length - 1)) * 100}%` }} />
        {steps.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center z-10 cursor-pointer" onClick={() => setCurrent(i)}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
              i <= current ? "bg-violet-500 shadow-lg shadow-violet-500/30 scale-110" : "bg-gray-700"
            }`}>
              {i < current ? "✓" : i + 1}
            </div>
            <span className={`mt-2 text-xs font-medium transition-colors ${i <= current ? "text-violet-400" : "text-gray-500"}`}>{step.title}</span>
          </div>
        ))}
      </div>

      {/* 콘텐츠 */}
      <div className="text-center p-8 rounded-2xl border border-gray-700 bg-gray-800/30">
        <div className="text-4xl font-bold text-violet-400 mb-4">{current + 1}</div>
        <h3 className="text-xl font-bold text-white mb-2">{steps[current].title}</h3>
        <p className="text-gray-400">{steps[current].desc}</p>
      </div>

      {/* 내비게이션 */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          className="px-5 py-2 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          이전
        </button>
        <button
          onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))}
          disabled={current === steps.length - 1}
          className="px-5 py-2 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          다음
        </button>
      </div>
    </div>
  );
}
