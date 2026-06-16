import React, { useState } from 'react'
import GS1 from '../images/GS1.jpg'
import CS1 from '../images/CT1.jpg'
import sugarImg from '../images/suger.jpeg'

const tools = [
  { title: 'Pipette', subtitle: 'Transfer liquid', icon: '🧪' },
  { title: 'Microscope', subtitle: 'View sample', icon: '🔬' },
  { title: 'Slide Glass', subtitle: 'Prepare slide', icon: '🧫' },
  { title: 'Stain Bottle', subtitle: 'Apply stain', icon: '🧴' },
  { title: 'Incubator', subtitle: 'Incubate culture', icon: '♨️' },
]

const experiments = [
  {
    title: 'Gram Staining',
    difficulty: 'Medium',
    duration: '30 min',
    description: 'Differentiates bacteria into Gram-positive (purple) and Gram-negative (pink) by staining and decolorization.',
    image: GS1,
    badge: 'Medium',
  },
  {
    title: 'Catalase Test',
    difficulty: 'Easy',
    duration: '15 min',
    description: 'Detects the presence of catalase enzyme by observing bubble formation upon H₂O₂ exposure.',
    image: CS1,
    badge: 'Easy',
  },
  {
    title: 'Triple Sugar Iron (TSI)',
    difficulty: 'Hard',
    duration: '40 min',
    description: 'Differentiates bacteria by carbohydrate fermentation and hydrogen sulfide production in a slant/tube medium.',
    image: sugarImg,
    badge: 'Hard',
  },
]

const procedureSteps = [
  { step: 1, title: 'Prepare slide', text: 'Use the pipette to place a sample onto the slide and spread evenly.' },
  { step: 2, title: 'Apply stain', text: 'Apply crystal violet stain to the sample and let it sit for 60 seconds.' },
  { step: 3, title: 'Wash sample', text: 'Rinse the slide gently with water to remove excess stain.' },
  { step: 4, title: 'Observe results', text: 'Place the slide under the microscope and observe the stained cells.' },
]

export default function MyExperimentsPage() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="min-h-screen bg-[#EEF1F6] p-6 md:p-8">
      <div className="mx-auto max-w-[1400px] space-y-6">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">Welcome back, Student</h1>
              <p className="mt-2 text-slate-600">Ready to continue your microbiology learning journey?</p>
            </div>
            <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200/30 transition hover:bg-blue-700">
              View all experiments
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {experiments.map((experiment) => (
            <div key={experiment.title} className="rounded-[2rem] bg-white p-0 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              <img src={experiment.image} alt={experiment.title} className="h-56 w-full rounded-t-[2rem] object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-slate-900">{experiment.title}</h2>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${experiment.badge === 'Easy' ? 'bg-emerald-100 text-emerald-700' : experiment.badge === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                    {experiment.badge}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-base">⏱</span>
                  <span>{experiment.duration}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{experiment.description}</p>
                <button className="mt-6 w-full rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
