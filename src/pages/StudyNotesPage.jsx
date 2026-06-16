import React from 'react'

const notes = [
  {
    title: 'Gram Staining',
    description: 'Differentiates bacteria into Gram-positive (purple) and Gram-negative (pink) based on cell wall structure.',
    duration: '8 min read',
  },
  {
    title: 'Types of Bacteria',
    description: 'Bacteria are broadly classified based on Gram reaction, shape, oxygen requirement, and spore formation.',
    duration: '6 min read',
  },
  {
    title: 'Bacterial Morphology',
    description: 'Bacteria come in various shapes: cocci, bacilli, spirilla, and vibrios.',
    duration: '7 min read',
  },
]

export default function StudyNotesPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1200px] space-y-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-pink-600">Study Notes</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900">Quick reference notes for microbiology students</h1>
              <p className="mt-3 text-slate-600">Read concise explanations, save favorites, and review essential lab concepts whenever you need them.</p>
            </div>
            <button className="rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700">
              Add Note
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {notes.map((note) => (
            <div key={note.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-slate-900">{note.title}</h2>
              <p className="mt-4 text-slate-600">{note.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{note.duration}</span>
                <button className="rounded-full bg-pink-50 px-4 py-2 text-pink-700 transition hover:bg-pink-100">Read</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
