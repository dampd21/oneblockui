import { useState } from "react";

function FloatingInput({ label, type = "text" }: { label: string; type?: string }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full rounded-lg border-2 bg-transparent px-4 pt-5 pb-2 text-white outline-none transition-all duration-300 ${
          focused ? "border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.3)]" : "border-gray-600 hover:border-gray-400"
        }`}
      />
      <label
        className={`pointer-events-none absolute left-4 transition-all duration-300 ${
          isActive
            ? "top-1 text-xs text-violet-400"
            : "top-1/2 -translate-y-1/2 text-sm text-gray-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function FloatingLabels() {
  return (
    <div className="space-y-6">
      <FloatingInput label="이메일 주소" type="email" />
      <FloatingInput label="비밀번호" type="password" />
      <FloatingInput label="이름" />
      <FloatingInput label="전화번호" type="tel" />
    </div>
  );
}
