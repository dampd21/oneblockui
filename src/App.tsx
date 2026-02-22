import { useState } from "react";
import { FloatingLabels } from "./components/FloatingLabels";
import { OTPInput } from "./components/OTPInput";
import { LoadingStates } from "./components/LoadingStates";
import { TagInput } from "./components/TagInput";
import { FABMenu } from "./components/FABMenu";
import { DatePickerGallery } from "./components/DatePicker";
import { CardHoverGallery } from "./components/CardHover";
import { ButtonStatesGallery } from "./components/ButtonStates";
import { SliderGallery } from "./components/SliderGallery";
import { DockMagnifier } from "./components/DockMagnifier";
import { AccordionGallery } from "./components/Accordion";
import { EasingStudio } from "./components/EasingStudio";
import { StepWizard } from "./components/StepWizard";
import { BottomSheetGallery } from "./components/BottomSheet";
import { ToggleCollection } from "./components/ToggleCollection";
import { BadgeAnimations } from "./components/BadgeAnimations";
import { ClockCollection } from "./components/Clock";
import { ToastGallery } from "./components/ToastGallery";
import { ListReorder } from "./components/ListReorder";
import { DropdownShowcase } from "./components/DropdownShowcase";
import { ModalGallery } from "./components/ModalGallery";
import { StarRatingComponent } from "./components/StarRating";
import { CursorTrailGallery } from "./components/CursorTrail";
import { ParallaxCards } from "./components/ParallaxCards";
import { ImageCropper } from "./components/ImageCropper";
import { MasonryGallery } from "./components/MasonryGallery";
import { SearchAnimations } from "./components/SearchAnimations";
import { CreditCardForm } from "./components/CreditCardForm";
import { CardShuffle } from "./components/CardShuffle";
import { PageTransitions } from "./components/PageTransitions";
import { CheckboxDesigns } from "./components/CheckboxDesigns";
import { PullToRefresh } from "./components/PullToRefresh";
import { TypographyAnimation } from "./components/TypographyAnimation";
import { DragDropPatterns } from "./components/DragDropPatterns";

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  component: React.ReactNode;
}

const showcases: ShowcaseItem[] = [
  { id: "floating-labels", title: "플로팅 라벨", category: "입력", component: <FloatingLabels /> },
  { id: "otp-input", title: "OTP 입력", category: "입력", component: <OTPInput /> },
  { id: "tag-input", title: "태그 입력", category: "입력", component: <TagInput /> },
  { id: "search-animations", title: "검색 애니메이션", category: "입력", component: <SearchAnimations /> },
  { id: "credit-card-form", title: "신용카드 폼", category: "입력", component: <CreditCardForm /> },
  { id: "star-rating", title: "별점 평가", category: "입력", component: <StarRatingComponent /> },
  { id: "slider-gallery", title: "슬라이더 갤러리", category: "입력", component: <SliderGallery /> },
  { id: "dropdown-showcase", title: "드롭다운 쇼케이스", category: "입력", component: <DropdownShowcase /> },
  { id: "date-picker", title: "날짜 선택기", category: "입력", component: <DatePickerGallery /> },
  { id: "checkbox-designs", title: "체크박스 디자인", category: "입력", component: <CheckboxDesigns /> },
  { id: "toggle-collection", title: "토글 모음", category: "입력", component: <ToggleCollection /> },
  { id: "button-states", title: "버튼 상태", category: "피드백", component: <ButtonStatesGallery /> },
  { id: "loading-states", title: "로딩 상태", category: "피드백", component: <LoadingStates /> },
  { id: "toast-gallery", title: "토스트 갤러리", category: "피드백", component: <ToastGallery /> },
  { id: "badge-animations", title: "뱃지 애니메이션", category: "피드백", component: <BadgeAnimations /> },
  { id: "modal-gallery", title: "모달 갤러리", category: "오버레이", component: <ModalGallery /> },
  { id: "bottom-sheet", title: "바텀 시트", category: "오버레이", component: <BottomSheetGallery /> },
  { id: "fab-menu", title: "FAB 메뉴", category: "오버레이", component: <FABMenu /> },
  { id: "card-hover", title: "카드 호버 갤러리", category: "디스플레이", component: <CardHoverGallery /> },
  { id: "parallax-cards", title: "패럴랙스 카드", category: "디스플레이", component: <ParallaxCards /> },
  { id: "masonry-gallery", title: "메이슨리 갤러리", category: "디스플레이", component: <MasonryGallery /> },
  { id: "card-shuffle", title: "카드 셔플 덱", category: "디스플레이", component: <CardShuffle /> },
  { id: "clock-collection", title: "시계 모음", category: "디스플레이", component: <ClockCollection /> },
  { id: "accordion-gallery", title: "아코디언 갤러리", category: "내비게이션", component: <AccordionGallery /> },
  { id: "step-wizard", title: "단계별 위자드", category: "내비게이션", component: <StepWizard /> },
  { id: "page-transitions", title: "페이지 전환", category: "내비게이션", component: <PageTransitions /> },
  { id: "dock-magnifier", title: "독 확대기", category: "내비게이션", component: <DockMagnifier /> },
  { id: "list-reorder", title: "목록 재정렬", category: "인터랙션", component: <ListReorder /> },
  { id: "drag-drop", title: "드래그 앤 드롭", category: "인터랙션", component: <DragDropPatterns /> },
  { id: "pull-to-refresh", title: "당겨서 새로고침", category: "인터랙션", component: <PullToRefresh /> },
  { id: "cursor-trail", title: "커서 궤적", category: "애니메이션", component: <CursorTrailGallery /> },
  { id: "easing-studio", title: "이징 스튜디오", category: "애니메이션", component: <EasingStudio /> },
  { id: "typography-animation", title: "타이포그래피 애니메이션", category: "애니메이션", component: <TypographyAnimation /> },
  { id: "image-cropper", title: "이미지 크로퍼", category: "유틸리티", component: <ImageCropper /> },
];

const categories = ["전체", "입력", "피드백", "오버레이", "디스플레이", "내비게이션", "인터랙션", "애니메이션", "유틸리티"];

export function App() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = showcases.filter((s) => {
    const matchCategory = activeCategory === "전체" || s.category === activeCategory;
    const matchSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const activeShowcase = showcases.find((s) => s.id === activeId);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-[#0a0a1a]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-sm font-bold shadow-lg shadow-violet-500/20">
                  UI
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    UI 쇼케이스
                  </h1>
                  <p className="text-[10px] text-gray-500 hidden sm:block">34가지 인터랙티브 컴포넌트</p>
                </div>
              </div>
            </div>

            {/* 검색 */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="컴포넌트 검색..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-sm text-white outline-none focus:border-violet-500/50 transition-colors placeholder-gray-500"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                )}
              </div>
            </div>

            {activeShowcase && (
              <button
                onClick={() => setActiveId(null)}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-sm text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                전체 목록
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* 사이드바 - 카테고리 */}
        <aside className={`fixed lg:sticky top-[73px] left-0 z-40 w-64 h-[calc(100vh-73px)] border-r border-gray-800/50 bg-[#0a0a1a] lg:bg-transparent overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-4 space-y-1">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold px-3 mb-3">카테고리</p>
            {categories.map((cat) => {
              const count = cat === "전체" ? showcases.length : showcases.filter(s => s.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setActiveId(null); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                    activeCategory === cat
                      ? "bg-violet-500/10 text-violet-400 font-medium"
                      : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-300"
                  }`}
                >
                  <span className="flex-1 text-left">{cat}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === cat ? "bg-violet-500/20 text-violet-400" : "bg-gray-800 text-gray-500"
                  }`}>{count}</span>
                </button>
              );
            })}

            <div className="border-t border-gray-800 my-4 pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold px-3 mb-3">바로가기</p>
              <div className="space-y-0.5 max-h-[300px] overflow-y-auto">
                {filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveId(item.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
                      activeId === item.id
                        ? "bg-violet-500/10 text-violet-400"
                        : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/30"
                    }`}
                  >
                    <span className="truncate">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* 사이드바 오버레이 */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* 메인 콘텐츠 */}
        <main className="flex-1 min-w-0 p-4 sm:p-6">
          {activeShowcase ? (
            /* 상세 보기 */
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setActiveId(null)}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors mb-6"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                전체 목록으로 돌아가기
              </button>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{activeShowcase.title}</h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      {activeShowcase.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-800/50 bg-gray-900/30 p-6 sm:p-8">
                {activeShowcase.component}
              </div>
            </div>
          ) : (
            /* 그리드 보기 */
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">
                  {activeCategory === "전체" ? "전체 컴포넌트" : activeCategory}
                </h2>
                <p className="text-sm text-gray-500">{filtered.length}개의 컴포넌트 — 카드를 클릭하여 탐색하세요</p>
              </div>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">검색 결과가 없습니다</h3>
                  <p className="text-sm text-gray-500">검색어 또는 카테고리를 변경해 보세요</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filtered.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className="group text-left rounded-2xl border border-gray-800/50 bg-gray-900/20 hover:bg-gray-800/30 hover:border-gray-700/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/5"
                      style={{ animation: `toast-in 0.3s ease-out ${i * 0.03}s both` }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500 group-hover:bg-violet-500/10 group-hover:text-violet-400 transition-colors">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-600 group-hover:text-violet-400 transition-colors">
                        <span>탐색하기</span>
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                      <div className="mt-3 h-0.5 rounded-full bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-pink-500/0 group-hover:from-violet-500 group-hover:via-pink-500 group-hover:to-cyan-500 transition-all duration-500" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
