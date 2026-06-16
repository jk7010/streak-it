import React from 'react'

const stats = [
  { label: 'Accuracy Score', value: '82%', details: 'Well done! You’re developing strong lab skills.', variant: 'blue' },
  { label: 'Time Taken', value: '12:48 mins', details: 'Recommended: ~10:00 mins', variant: 'slate' },
  { label: 'Mistakes', value: '3', details: 'Review mistakes to improve', variant: 'rose' },
]

const mistakes = [
  { title: 'Over-staining detected', impact: 'High', when: 'Step 2', description: 'Crystal violet applied for too long.' },
  { title: 'Incorrect wash timing', impact: 'Medium', when: 'Step 4', description: 'Wash step was too short.' },
  { title: 'Decolorizer overuse', impact: 'Low', when: 'Step 5', description: 'Decolorizer applied for too long.' },
]

const tips = [
  { title: 'Mind the timing', description: 'Use a timer for each step. Precise timing is crucial in staining procedures.' },
  { title: 'Avoid over-staining', description: 'Apply stains just until the smear is covered. Excess can affect results.' },
  { title: 'Perfect your wash', description: 'Use gentle, controlled washes for the recommended duration.' },
  { title: 'Review the theory', description: 'Brush up on the Gram staining principle to understand dye interactions.' },
]

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1440px] space-y-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                Experiment Complete!
              </div>
              <h1 className="mt-4 text-3xl font-bold text-slate-900">Great work! You’ve completed the Gram Staining Simulation.</h1>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-2">Experiment: Gram Staining</span>
                <span className="rounded-full bg-slate-100 px-3 py-2">May 24, 2025 • 10:42 AM</span>
              </div>
            </div>
            <button className="whitespace-nowrap rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700">
              View Experiment Report
            </button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-3xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{item.label}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.variant === 'blue' ? 'bg-blue-100 text-blue-700' : item.variant === 'rose' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-700'}`}>
                      {item.variant === 'blue' ? 'Good' : item.variant === 'rose' ? 'Alert' : 'On track'}
                    </span>
                  </div>
                  <p className="mt-4 text-3xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-3 text-sm text-slate-500">{item.details}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Error Breakdown</h2>
              <p className="mt-2 text-sm text-slate-500">Here’s a breakdown of the mistakes detected in your experiment.</p>
              <div className="mt-6 space-y-4">
                {mistakes.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.impact === 'High' ? 'bg-rose-100 text-rose-700' : item.impact === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'}`}>
                        {item.impact}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                      <span>{item.when}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-pink-600 font-semibold">View Step-by-Step Review →</div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Improvement Tips</h2>
              <div className="mt-6 space-y-4">
                {tips.map((tip) => (
                  <div key={tip.title} className="rounded-3xl border border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-900">{tip.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{tip.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-pink-600 font-semibold">Go to Learning Hub →</div>
            </div>
            <button className="w-full rounded-3xl bg-pink-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700">
              Retry Experiment
            </button>
            <button className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Back to Dashboard
            </button>
          </aside>
        </div>
      </div>
    </div>
  )
}
