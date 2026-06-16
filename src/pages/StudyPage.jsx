import React from 'react'

export default function StudyPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="grid gap-6 xl:grid-cols-[260px_1fr_320px]">
          <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Lab Tools</h2>
            <div className="mt-6 space-y-4">
              {[
                { name: 'Pipette', description: 'Transfer liquid' },
                { name: 'Microscope', description: 'View sample' },
                { name: 'Slide Glass', description: 'Prepare slide' },
                { name: 'Stain Bottle', description: 'Apply stain' },
                { name: 'Incubator', description: 'Incubate culture' },
              ].map((tool) => (
                <div key={tool.name} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">{tool.name}</p>
                  <p className="mt-2 text-sm text-slate-500">{tool.description}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">
              Tool Guide
            </button>
          </aside>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 rounded-[2rem] bg-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Streak It Lab</p>
                <h1 className="mt-2 text-2xl font-bold text-slate-900">Microbiology Simulation</h1>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-3xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 transition">
                  Lab Book
                </button>
                <button className="rounded-3xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 transition">
                  Help
                </button>
                <button className="rounded-3xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 transition">
                  Settings
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_320px]">
              <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1529253355930-df2e6cfbf0b5?auto=format&fit=crop&w=1200&q=80"
                    alt="Microscope sample"
                    className="h-[420px] w-full object-cover"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">100X</div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.75rem] bg-slate-900/90 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Slide Name</p>
                    <p className="mt-2 text-base font-semibold text-white">Sample 1</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-900/90 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Stain</p>
                    <p className="mt-2 text-base font-semibold text-white">Crystal Violet</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-900/90 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Magnification</p>
                    <p className="mt-2 text-base font-semibold text-white">100X</p>
                  </div>
                </div>
                <div className="mt-6 rounded-[1.75rem] bg-slate-900/90 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Focus</span>
                    <div className="flex items-center gap-3">
                      <button className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-2">−</button>
                      <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-700">
                        <div className="h-full w-3/4 rounded-full bg-pink-500" />
                      </div>
                      <button className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-2">+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-50 p-6 shadow-sm">
                <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Procedure</h2>
                <div className="mt-6 space-y-5">
                  {[
                    { step: 1, label: 'Prepare slide', description: 'Use the pipette to place a sample onto the slide and spread evenly.' },
                    { step: 2, label: 'Apply stain', description: 'Apply crystal violet stain to the sample and let it sit for 60 seconds.' },
                    { step: 3, label: 'Wash sample', description: 'Rinse the slide gently with water to remove excess stain.' },
                    { step: 4, label: 'Observe results', description: 'Place the slide under the microscope and observe the stained cells.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.label}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-3xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/30 transition hover:bg-pink-700">
                  Next Step →
                </button>
                <button className="mt-4 w-full rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Reset Lab
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
