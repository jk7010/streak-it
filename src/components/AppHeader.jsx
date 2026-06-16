import React from 'react'

export default function AppHeader() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-600 text-lg font-bold text-white">S</span>
        <div>
          <p className="text-sm text-slate-500">Streak It Lab</p>
          <p className="text-sm font-semibold text-slate-900">Microbiology Simulation</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-slate-600">
        <button className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm hover:bg-slate-100 transition">Lab Book</button>
        <button className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm hover:bg-slate-100 transition">Help</button>
        <button className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm hover:bg-slate-100 transition">Settings</button>
      </div>
    </header>
  )
}
