import React from 'react'
import { Link } from 'react-router-dom'
import GS1 from '../images/GS1.jpg'

export default function HomePage() {
  const features = [
    {
      icon: '🔬',
      title: 'Virtual Lab Simulations',
      description: 'Realistic, interactive simulations of microbiology experiments that help you learn by doing — without any risk.',
    },
    {
      icon: '💬',
      title: 'Instant Feedback System',
      description: 'Get real-time feedback on your performance and identify areas to improve as you experiment.',
    },
    {
      icon: '🧠',
      title: 'Smart Learning Mode',
      description: 'Personalized learning paths and adaptive recommendations based on your progress and learning style.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F3FA]">
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12 md:flex-row md:items-center md:gap-16">
          <div className="space-y-8 md:w-1/2">
            <div className="inline-flex items-center gap-3 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              Virtual Microbiology Lab
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
                Practice Microbiology Without Limits
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:max-w-2xl">
                Streak It is a virtual microbiology lab that helps students learn by doing. Practice, experiment, and master microbiology concepts anytime, anywhere.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/experiments"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-pink-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pink-200/50 transition hover:bg-pink-700 sm:w-auto"
              >
                Start Free Lab →
              </Link>
              <Link
                to="/experiments"
                className="inline-flex w-full items-center justify-center rounded-3xl border border-pink-200 bg-white px-8 py-4 text-base font-semibold text-pink-700 transition hover:bg-pink-50 sm:w-auto"
              >
                Explore Experiments
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: '🌍', label: 'Learn Anywhere' },
                { icon: '⏰', label: 'Anytime Access' },
                { icon: '🔒', label: 'Safe & Secure' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-3xl bg-white px-5 py-4 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl sm:p-6">
              <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-br from-pink-100 via-slate-100 to-white" />
              <div className="relative rounded-[1.75rem] overflow-hidden bg-slate-950/95 shadow-2xl">
                  <img
                    src={GS1}
                    alt="Bacteria sample"
                    className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px]"
                  />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-pink-300">Interactive Lab Preview</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Step inside the virtual microbiology experience</h2>
                </div>
              </div>
              <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Gram Staining Simulation</p>
                    <p className="mt-2 text-sm text-slate-500">Learn and perform the Gram staining technique step-by-step.</p>
                  </div>
                  <span className="rounded-full bg-pink-50 px-3 py-2 text-sm font-semibold text-pink-700">65% Progress</span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  {['1', '2', '3', '4', '5'].map((step) => (
                    <div key={step} className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold ${step === '3' ? 'bg-pink-600 text-white' : step < '3' ? 'bg-pink-100 text-pink-700' : 'bg-slate-100 text-slate-500'}`}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1440px] rounded-[2rem] bg-white px-6 py-8 shadow-xl sm:px-8 sm:py-10">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Streak It?</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">A complete virtual lab environment built to help learners confidently practice microbiology concepts with modern simulations and personalized feedback.</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-md">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
                <div className="mt-6 text-sm font-semibold text-pink-700">Learn more →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
