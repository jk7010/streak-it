import React from 'react'

const resources = [
  { title: 'Gram Stain Guide', description: 'Step-by-step instructions for Gram staining and best practice tips.' },
  { title: 'Culture Media Handbook', description: 'A quick reference for media types, usage, and colony morphology.' },
  { title: 'Microscope Basics', description: 'Learn how to prepare slides and view specimens clearly.' },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-pink-600">Resources</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Practice guides, videos, and lab tools</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Access curated learning resources to support experimental success and deeper understanding.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-slate-900">{resource.title}</h2>
              <p className="mt-4 text-slate-600">{resource.description}</p>
              <button className="mt-6 rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700">
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
