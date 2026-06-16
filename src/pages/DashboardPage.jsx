import React from 'react'
import { Link } from 'react-router-dom'
import GS1 from '../images/GS1.jpg'
import CS1 from '../images/CT1.jpg'
import sugarImg from '../images/suger.jpeg'

const experimentCards = [
  {
    title: 'Gram Staining',
    description: 'Differentiates bacteria into Gram-positive (purple) and Gram-negative (pink) by staining and decolorization.',
    difficulty: 'Medium',
    duration: '30 min',
    image: GS1,
    color: 'bg-amber-100 text-amber-700',
    route: '/lab',
  },
  {
    title: 'Catalase Test',
    description: 'Detects the presence of catalase enzyme by observing bubble formation upon H₂O₂ exposure.',
    difficulty: 'Easy',
    duration: '15 min',
    image: CS1,
    color: 'bg-emerald-100 text-emerald-700',
    route: '/lab',
  },
  {
    title: 'Triple Sugar Iron (TSI)',
    description: 'Differentiates bacteria by carbohydrate fermentation and hydrogen sulfide production in a slant/tube medium.',
    difficulty: 'Hard',
    duration: '40 min',
    image: sugarImg,
    color: 'bg-rose-100 text-rose-700',
    route: '/lab',
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Welcome back, Student</h1>
            <p className="mt-3 text-gray-600 text-lg">Ready to continue your microbiology learning journey?</p>
          </div>
          <Link
            to="/experiments"
            className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-semibold text-pink-700 shadow-sm hover:bg-pink-50 transition"
          >
            View all experiments →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {experimentCards.map((experiment) => (
            <div key={experiment.title} className="overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-md transition duration-300">
              <div className="h-52 overflow-hidden">
                <img src={experiment.image} alt={experiment.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${experiment.color}`}>
                  {experiment.difficulty}
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-slate-900">{experiment.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{experiment.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <span>⏱</span> {experiment.duration}
                  </span>
                </div>
                <Link
                  to={experiment.route}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-pink-200/30 hover:bg-pink-700 transition"
                >
                  Start
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-pink-500">Student</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">Current Level</h3>
              <p className="mt-1 text-sm text-slate-500">Agar Apprentice</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[48%] rounded-full bg-pink-600" />
              </div>
              <p className="mt-3 text-sm text-slate-500">120 / 250 XP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
