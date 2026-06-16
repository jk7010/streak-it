import React, { useState } from 'react'

const quizData = [
  {
    question: 'Which of the following bacteria will appear pink in a Gram stain?',
    options: ['Staphylococcus aureus', 'Streptococcus pyogenes', 'Escherichia coli', 'Bacillus subtilis'],
    answer: 2,
  },
  {
    question: 'What is the primary purpose of the decolorizer in Gram staining?',
    options: ['Fix cells to the slide', 'Remove excess stain from Gram-negative cells', 'Enhance purple coloration', 'Preserve cell shape'],
    answer: 1,
  },
  {
    question: 'Which stain is applied first during Gram staining?',
    options: ['Safranin', 'Crystal violet', 'Alcohol', 'Methylene blue'],
    answer: 1,
  },
]

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const currentQuestion = quizData[currentIndex]

  const handleSelect = (index) => {
    setSelected(index)
  }

  const handleNext = () => {
    if (selected === null) return
    if (selected === currentQuestion.answer) {
      setScore(score + 1)
    }
    const nextIndex = currentIndex + 1
    if (nextIndex >= quizData.length) {
      setCompleted(true)
      return
    }
    setCurrentIndex(nextIndex)
    setSelected(null)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setCompleted(false)
  }

  return (
    <div className="min-h-screen bg-[#F8F3FA] p-6 md:p-8">
      <div className="mx-auto max-w-[1040px] rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-pink-600">Quizzes</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">Test your microbiology knowledge</h1>
            <p className="mt-3 text-slate-600">Answer questions and review your results instantly to improve lab confidence.</p>
          </div>
          <div className="rounded-3xl bg-slate-100 px-5 py-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Quiz progress</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{currentIndex + 1}/{quizData.length}</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
          {completed ? (
            <div className="space-y-6 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 text-4xl text-pink-600">✓</div>
              <h2 className="text-3xl font-bold text-slate-900">Quiz Complete!</h2>
              <p className="text-slate-600">You scored <span className="font-semibold text-slate-900">{score}</span> out of {quizData.length}.</p>
              <button onClick={handleRestart} className="rounded-full bg-pink-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700">
                Retake Quiz
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-8 rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Question</span>
                  <span>Score: {score}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">{currentQuestion.question}</h2>
              </div>

              <div className="grid gap-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(index)}
                    className={`w-full rounded-[1.5rem] border px-5 py-4 text-left text-sm transition ${
                      selected === index ? 'border-pink-600 bg-pink-50 text-pink-700 shadow-sm' : 'border-slate-200 bg-white text-slate-700 hover:border-pink-200 hover:bg-pink-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  className="rounded-full bg-pink-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/30 transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-pink-300"
                  disabled={selected === null}
                >
                  {currentIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
