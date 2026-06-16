import React from 'react'

const progressData = [
  { label: 'Experiment Completion', value: 72, color: 'bg-pink-500' },
  { label: 'Course Progress', value: 58, color: 'bg-rose-500' },
  { label: 'Quiz Accuracy', value: 84, color: 'bg-violet-500' },
]

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1200px] space-y-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-600">Progress</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900">Track your learning journey</h1>
              <p className="mt-3 text-slate-600">Visualize your experiment, course, and quiz progress in one dashboard.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 px-5 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Current level</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">Agar Apprentice</p>
              <p className="text-sm text-slate-500">120 / 250 XP</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {progressData.map((item) => (
            <div key={item.label} className="rounded-[2rem] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="mt-4 text-4xl font-bold text-slate-900">{item.value}%</p>
              <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">Recent activity</h2>
              <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">Live</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { title: 'Completed Gram Staining simulation', time: 'Today, 08:30 AM' },
                { title: 'Finished Microscope Basics course', time: 'Yesterday, 04:15 PM' },
                { title: 'Scored 84% on the Gram stain quiz', time: 'Yesterday, 10:00 AM' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-slate-200 p-4 hover:border-pink-100 transition">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Performance overview</h2>
            <div className="mt-6 space-y-4">
              {[
                { label: 'Lab Accuracy', percent: 82 },
                { label: 'Course Completion', percent: 58 },
                { label: 'Quiz Strength', percent: 84 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="bg-pink-600 h-full rounded-full" style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
