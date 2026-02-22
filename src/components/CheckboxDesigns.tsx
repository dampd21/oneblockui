import { useState } from "react";

function AnimatedCheckbox({ label, color = "violet" }: { label: string; color?: string }) {
  const [checked, setChecked] = useState(false);
  const colors: Record<string, string> = {
    violet: "bg-violet-500 border-violet-500",
    pink: "bg-pink-500 border-pink-500",
    cyan: "bg-cyan-500 border-cyan-500",
    emerald: "bg-emerald-500 border-emerald-500",
    amber: "bg-amber-500 border-amber-500",
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setChecked(!checked)}>
      <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
        checked ? `${colors[color]} scale-110` : "border-gray-500 group-hover:border-gray-400"
      }`}>
        <svg className={`w-3 h-3 text-white transition-all duration-300 ${checked ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={`text-sm transition-all duration-300 ${checked ? "text-gray-300 line-through" : "text-gray-300"}`}>{label}</span>
    </label>
  );
}

function RadioOption({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer" onClick={onClick}>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
        selected ? "border-violet-500" : "border-gray-500"
      }`}>
        <div className={`w-2.5 h-2.5 rounded-full bg-violet-500 transition-all duration-300 ${selected ? "scale-100" : "scale-0"}`} />
      </div>
      <span className="text-sm text-gray-300">{label}</span>
    </label>
  );
}

function SwitchCard({ label, desc, emoji }: { label: string; desc: string; emoji: string }) {
  const [on, setOn] = useState(false);
  return (
    <div
      onClick={() => setOn(!on)}
      className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
        on ? "border-violet-500/50 bg-violet-500/5" : "border-gray-700 bg-gray-800/30 hover:border-gray-600"
      }`}
    >
      <span className="text-2xl">{emoji}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-300">{label}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
      <div className={`w-10 h-5 rounded-full transition-colors duration-300 ${on ? "bg-violet-500" : "bg-gray-600"}`}>
        <div className={`w-4 h-4 mt-0.5 ml-0.5 rounded-full bg-white shadow transition-transform duration-300 ${on ? "translate-x-5" : ""}`} />
      </div>
    </div>
  );
}

export function CheckboxDesigns() {
  const [selectedRadio, setSelectedRadio] = useState(0);

  return (
    <div className="space-y-8 max-w-md mx-auto">
      {/* Checkboxes */}
      <div className="space-y-3">
        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Checkboxes</h4>
        <AnimatedCheckbox label="Design mockups" color="violet" />
        <AnimatedCheckbox label="Implement components" color="pink" />
        <AnimatedCheckbox label="Write unit tests" color="cyan" />
        <AnimatedCheckbox label="Deploy to production" color="emerald" />
      </div>

      {/* Radio */}
      <div className="space-y-3">
        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Radio Buttons</h4>
        {["Small", "Medium", "Large"].map((opt, i) => (
          <RadioOption key={opt} label={opt} selected={selectedRadio === i} onClick={() => setSelectedRadio(i)} />
        ))}
      </div>

      {/* Switch Cards */}
      <div className="space-y-2">
        <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Switch Cards</h4>
        <SwitchCard label="Notifications" desc="Get push alerts" emoji="🔔" />
        <SwitchCard label="Dark Mode" desc="Toggle appearance" emoji="🌙" />
        <SwitchCard label="Auto-save" desc="Save changes automatically" emoji="💾" />
      </div>
    </div>
  );
}
