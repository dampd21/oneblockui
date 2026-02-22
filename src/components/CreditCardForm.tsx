import { useState } from "react";

export function CreditCardForm() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [flipped, setFlipped] = useState(false);

  const formatNumber = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(\d{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  const displayNumber = number || "•••• •••• •••• ••••";
  const displayName = name || "YOUR NAME";
  const displayExpiry = expiry || "MM/YY";

  return (
    <div className="space-y-6 max-w-md mx-auto">
      {/* Card */}
      <div className="perspective-1000 h-48">
        <div className={`relative w-full h-full transition-transform duration-700 ${flipped ? "[transform:rotateY(180deg)]" : ""}`} style={{ transformStyle: "preserve-3d" }}>
          {/* Front */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-6 shadow-2xl [backface-visibility:hidden]">
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-8 rounded bg-amber-300/80" />
              <span className="text-white/80 text-sm font-medium tracking-wider">VISA</span>
            </div>
            <p className="text-white text-lg font-mono tracking-[0.2em] mb-6">{displayNumber}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-wider">Card Holder</p>
                <p className="text-white text-sm font-medium uppercase tracking-wider">{displayName}</p>
              </div>
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-wider">Expires</p>
                <p className="text-white text-sm font-mono">{displayExpiry}</p>
              </div>
            </div>
          </div>
          {/* Back */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="h-10 bg-gray-900 mt-6" />
            <div className="px-6 mt-4">
              <div className="flex items-center">
                <div className="flex-1 h-8 bg-gray-600 rounded-l flex items-center justify-end pr-3">
                  <span className="text-white font-mono text-sm">{cvv || "•••"}</span>
                </div>
                <div className="w-12 h-8 bg-white/10 rounded-r flex items-center justify-center text-white/40 text-xs">CVV</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Card Number</label>
          <input
            value={number}
            onChange={(e) => setNumber(formatNumber(e.target.value))}
            onFocus={() => setFlipped(false)}
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-600 text-white text-sm outline-none focus:border-violet-500 transition-colors font-mono"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Card Holder</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setFlipped(false)}
            placeholder="JOHN DOE"
            className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-600 text-white text-sm outline-none focus:border-violet-500 transition-colors uppercase"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-xs text-gray-400 mb-1 block">Expiry</label>
            <input
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              onFocus={() => setFlipped(false)}
              placeholder="MM/YY"
              className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-600 text-white text-sm outline-none focus:border-violet-500 transition-colors font-mono"
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-400 mb-1 block">CVV</label>
            <input
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
              onFocus={() => setFlipped(true)}
              onBlur={() => setFlipped(false)}
              placeholder="•••"
              className="w-full px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-600 text-white text-sm outline-none focus:border-violet-500 transition-colors font-mono"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
