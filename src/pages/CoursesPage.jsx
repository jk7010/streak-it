import React from 'react'

const courses = [
  { title: 'Introduction to Microbiology', description: 'Understand bacteria, viruses, and lab safety fundamentals.', duration: '4 lessons' },
  { title: 'Gram Staining Basics', description: 'Learn the Gram staining technique and identify cell wall differences.', duration: '6 lessons' },
  { title: 'Bacterial Culture Methods', description: 'Study aseptic technique, culture growth, and colony morphology.', duration: '5 lessons' },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-pink-600">Courses</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-900">Learning paths for microbiology success</h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">Explore guided courses designed to help students master lab techniques and microbiology concepts.</p>
            </div>
            <button className="rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700">
              Start Learning
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-slate-900">{course.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{course.description}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{course.duration}</span>
                <button className="rounded-full bg-pink-50 px-4 py-2 text-pink-700 font-semibold transition hover:bg-pink-100">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
