import React from 'react'

const plans = [
  { name: 'Standard Plan', price: '$25', pkr: 'PKR 4,500', description: 'Best for individual learners starting out', features: ['Access to core experiments', 'Basic lab analytics', 'Standard support'] },
  { name: 'Promo Plan', price: '$45', pkr: 'PKR 8,100', description: 'Ideal for active learners with bonus features', features: ['All experiments unlocked', 'Extended progress reports', 'Priority support'] },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1440px] space-y-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-pink-600">Pricing</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Choose the plan that fits your learning goal</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Flexible pricing for students and classrooms with tools for tracking, assessment, and lab practice.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{plan.name}</p>
              <div className="mt-5 flex items-end gap-4">
                <p className="text-5xl font-bold text-slate-900">{plan.price}</p>
                <p className="text-sm text-slate-500">{plan.pkr}</p>
              </div>
              <p className="mt-4 text-slate-600">{plan.description}</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="text-pink-600">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
