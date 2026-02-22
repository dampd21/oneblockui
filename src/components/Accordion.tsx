import { useState } from "react";

const items = [
  { title: "이 UI 쇼케이스는 무엇인가요?", content: "React와 Tailwind CSS로 만든 인터랙티브 UI 컴포넌트 모음입니다. 각 컴포넌트는 다양한 상호작용 패턴과 애니메이션을 보여줍니다." },
  { title: "애니메이션은 어떻게 처리되나요?", content: "CSS 트랜지션, 키프레임 애니메이션, React 상태 관리를 사용하여 만들어졌습니다. 대부분의 효과에는 무거운 애니메이션 라이브러리가 필요하지 않습니다." },
  { title: "이 컴포넌트를 사용할 수 있나요?", content: "물론입니다! 모든 컴포넌트는 표준 React 패턴과 Tailwind CSS로 만들어졌습니다. 자유롭게 복사하여 프로젝트에 활용하세요." },
  { title: "어떤 기술이 사용되었나요?", content: "React 19, TypeScript, Tailwind CSS 4, Vite로 만들어졌습니다. 일부 컴포넌트는 Framer Motion도 사용합니다." },
];

export function AccordionGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2 max-w-lg mx-auto">
      {items.map((item, i) => (
        <div key={i} className={`rounded-xl border transition-all duration-300 ${openIndex === i ? "border-violet-500/50 bg-violet-500/5" : "border-gray-700 bg-gray-800/30"}`}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className={`font-medium transition-colors ${openIndex === i ? "text-violet-400" : "text-gray-300"}`}>{item.title}</span>
            <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-violet-400" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="px-4 pb-4 text-sm text-gray-400 leading-relaxed">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
