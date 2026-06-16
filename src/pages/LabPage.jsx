import React, { useState } from 'react'
import workspaceImg from '../images/workspace.jpg'

const tools = [
  { title: 'Pipette', subtitle: 'Transfer liquid', icon: '🧪' },
  { title: 'Microscope', subtitle: 'View sample', icon: '🔬' },
  { title: 'Slide Glass', subtitle: 'Prepare slide', icon: '🧫' },
  { title: 'Stain Bottle', subtitle: 'Apply stain', icon: '🧴' },
  { title: 'Incubator', subtitle: 'Incubate culture', icon: '♨️' },
]

const procedureSteps = [
  { step: 1, title: 'Prepare slide', text: 'Use the pipette to place a sample onto the slide and spread evenly.' },
  { step: 2, title: 'Apply stain', text: 'Apply crystal violet stain to the sample and let it sit for 60 seconds.' },
  { step: 3, title: 'Wash sample', text: 'Rinse the slide gently with water to remove excess stain.' },
  { step: 4, title: 'Observe results', text: 'Place the slide under the microscope and observe the stained cells.' },
]

export default function LabPage() {
  const [activeStep, setActiveStep] = useState(1)

  const handleNextStep = () => {
    setActiveStep((s) => Math.min(s + 1, 4))
  }

  return (
    <div className="min-h-screen bg-[#EEF1F6] p-6 md:p-8">
      <div className="mx-auto max-w-[1400px] space-y-6">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-600">Streak It Lab</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Microbiology Simulation</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
              <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 hover:bg-pink-50 transition">Lab Book</button>
              <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 hover:bg-pink-50 transition">Help</button>
              <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 hover:bg-pink-50 transition">Settings</button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr_320px]">
          <aside className="rounded-[2rem] bg-white p-6 shadow-xl">
            <div className="mb-6 border-b border-slate-200 pb-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Lab Tools</p>
            </div>
              <div className="space-y-4">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  className="flex items-center gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-pink-50 text-2xl">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{tool.title}</h3>
                    <p className="text-sm text-slate-500">{tool.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition">
              Tool Guide
            </button>
          </aside>

          <section className="rounded-[2rem] bg-white p-6 shadow-xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200">
              <img
                src={workspaceImg}
                alt="Microscope circular view"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute left-6 bottom-6 rounded-[1.75rem] bg-white/90 p-4 text-slate-900 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold">Workspace</span>
                  <span className="rounded-full bg-pink-50 px-3 py-1 text-pink-700">100X</span>
                </div>
                {/* Drag functionality removed — tools are no longer draggable */}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Slide Name</div>
                <div className="mt-2">Sample 1</div>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Stain</div>
                <div className="mt-2">Crystal Violet</div>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-slate-900">Magnification</div>
                <div className="mt-2">100X</div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <div className="flex items-center justify-between">
                <span>Focus</span>
                <div className="flex items-center gap-3">
                  <button className="rounded-full border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-100 transition">−</button>
                  <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-3/4 rounded-full bg-pink-600" />
                  </div>
                  <button className="rounded-full border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-100 transition">+</button>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] bg-white p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Procedure</p>
            <div className="mt-6 space-y-5">
              {procedureSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ring-1 ${item.step <= activeStep ? 'bg-pink-600 text-white ring-pink-200' : 'bg-slate-100 text-slate-900 ring-slate-200'}`}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleNextStep} className="mt-8 w-full rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/30 transition hover:bg-pink-700">
              Next Step →
            </button>
            <button onClick={() => { setActiveStep(1); setAppliedTools([]) }} className="mt-3 w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
              Reset Lab
            </button>
          </section>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Lab Status: <span className="font-semibold text-slate-900">Ready</span>
            </div>
            <div className="text-sm text-slate-500">Time Elapsed: <span className="font-semibold text-slate-900">00:04:18</span></div>
            <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
              End Session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
