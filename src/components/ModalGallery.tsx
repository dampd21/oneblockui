import { useState } from "react";

function Modal({ open, onClose, title, children, size = "md" }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode; size?: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-gray-800 rounded-2xl border border-gray-700 shadow-2xl p-6 ${size === "sm" ? "max-w-sm" : size === "lg" ? "max-w-2xl" : "max-w-md"} w-full`}
        style={{ animation: "slide-up 0.3s ease-out" }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-700 text-gray-400 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function ModalGallery() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 justify-center">
        <button onClick={() => setAlertOpen(true)} className="px-4 py-2 rounded-xl bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors">Alert Modal</button>
        <button onClick={() => setConfirmOpen(true)} className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/30 border border-red-500/30 transition-colors">Confirm Modal</button>
        <button onClick={() => setFormOpen(true)} className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/30 border border-cyan-500/30 transition-colors">Form Modal</button>
      </div>

      <Modal open={alertOpen} onClose={() => setAlertOpen(false)} title="🎉 Welcome!" size="sm">
        <p className="text-gray-400 text-sm mb-4">This is a simple alert modal. Click outside or press the X to close.</p>
        <button onClick={() => setAlertOpen(false)} className="w-full py-2.5 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors">Got it!</button>
      </Modal>

      <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} title="⚠️ Delete Item?" size="sm">
        <p className="text-gray-400 text-sm mb-6">This action cannot be undone. Are you sure you want to delete this item?</p>
        <div className="flex gap-3">
          <button onClick={() => setConfirmOpen(false)} className="flex-1 py-2.5 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors">Cancel</button>
          <button onClick={() => setConfirmOpen(false)} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors">Delete</button>
        </div>
      </Modal>

      <Modal open={formOpen} onClose={() => setFormOpen(false)} title="Create Account">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input className="w-full px-4 py-2.5 rounded-xl bg-gray-700/50 border border-gray-600 text-white text-sm outline-none focus:border-violet-500 transition-colors" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2.5 rounded-xl bg-gray-700/50 border border-gray-600 text-white text-sm outline-none focus:border-violet-500 transition-colors" placeholder="••••••••" />
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={() => setFormOpen(false)} className="flex-1 py-2.5 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors">Cancel</button>
            <button onClick={() => setFormOpen(false)} className="flex-1 py-2.5 rounded-xl bg-violet-500 text-white font-medium hover:bg-violet-600 transition-colors">Create</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
