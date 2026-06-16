import React, { useState } from 'react'

export default function ExperimentPage() {
  const [progress, setProgress] = useState(65)
  const steps = [
    { id: 1, name: 'Introduction', completed: true },
    { id: 2, name: 'Sample Preparation', completed: true },
    { id: 3, name: 'Staining Process', completed: false, active: true },
    { id: 4, name: 'Microscopic Observation', completed: false },
    { id: 5, name: 'Results & Analysis', completed: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button className="text-pink-600 hover:text-pink-700 font-semibold mb-4">
            ← Back to Experiments
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Gram Staining Simulation
          </h1>
          <p className="text-gray-600">
            Learn and perform the Gram staining technique step-by-step and identify Gram positive and Gram negative bacteria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">Progress</span>
                  <span className="text-lg font-bold text-pink-600">{progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-pink-600 h-3 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Steps */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Experiment Steps
                </h3>
                <div className="flex gap-3 justify-center flex-wrap">
                  {steps.map((step) => (
                    <div key={step.id} className="flex items-center">
                      <button
                        className={`w-12 h-12 rounded-full font-bold flex items-center justify-center transition ${
                          step.completed
                            ? 'bg-pink-600 text-white'
                            : step.active
                            ? 'bg-pink-500 text-white ring-4 ring-pink-200'
                            : 'bg-gray-300 text-gray-600'
                        }`}
                      >
                        {step.completed ? '✓' : step.id}
                      </button>
                      {step.id < steps.length && (
                        <div className="w-12 h-1 bg-gray-300 mx-2"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-600">
                    <span className="font-semibold">Step 3:</span> Staining Process
                  </p>
                </div>
              </div>

              {/* Simulation Area */}
              <div className="bg-gray-50 rounded-lg p-12 mb-8 text-center">
                <div className="text-6xl mb-4">🧪</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Staining Process Simulation
                </h4>
                <p className="text-gray-600 mb-6">
                  Follow the instructions to apply the Gram stain reagents to your sample slide.
                </p>
                <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-pink-700 transition">
                  Continue Experiment
                </button>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button className="px-6 py-2 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
                  Previous Step
                </button>
                <button className="px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition">
                  Next Step
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 mb-4">Current Step</h4>
              <p className="text-sm text-gray-600 mb-4">
                You are currently at Step 3: Staining Process. Follow the procedures carefully.
              </p>
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="font-semibold text-gray-700">Objective:</span>
                  <p className="text-gray-600">Apply Gram stain correctly</p>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-700">Time Estimate:</span>
                  <p className="text-gray-600">5-7 minutes</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition">
              Resume Experiment →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
