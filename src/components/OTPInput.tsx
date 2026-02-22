import { useState, useRef } from "react";

export function OTPInput() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [completed, setCompleted] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
    setOtp(newOtp);
    if (val && index < 5) refs.current[index + 1]?.focus();
    if (newOtp.every((d) => d !== "")) {
      setCompleted(true);
      setTimeout(() => setCompleted(false), 2000);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const reset = () => { setOtp(["", "", "", "", "", ""]); setCompleted(false); refs.current[0]?.focus(); };

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-gray-400 text-sm">6자리 인증번호를 입력하세요</p>
      <div className="flex gap-3">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={`h-14 w-12 rounded-xl border-2 bg-gray-800/50 text-center text-2xl font-bold text-white outline-none transition-all duration-300 ${
              completed
                ? "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                : digit
                ? "border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                : "border-gray-600 focus:border-violet-500"
            }`}
          />
        ))}
      </div>
      {completed && (
        <div className="flex items-center gap-2 text-green-400 animate-[float_1s_ease-in-out]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          인증 완료!
        </div>
      )}
      <button onClick={reset} className="text-sm text-violet-400 hover:text-violet-300 transition-colors">초기화</button>
    </div>
  );
}
