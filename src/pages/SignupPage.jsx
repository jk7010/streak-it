import React from 'react'
import { Link } from 'react-router-dom'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#F8F3FA] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-pink-600">Get started</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Create your Streak It account</h1>
          <p className="mt-2 text-sm text-slate-500">Join the virtual lab and start practicing microbiology with confidence.</p>
        </div>
        <form className="space-y-5">
          <label className="block text-sm font-semibold text-slate-700">
            Full name
            <input className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100" type="text" placeholder="Your name" />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            Email
            <input className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100" type="email" placeholder="you@example.com" />
          </label>
          <label className="block text-sm font-semibold text-slate-700">
            Password
            <input className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100" type="password" placeholder="Create a password" />
          </label>
          <button className="w-full rounded-3xl bg-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/30 transition hover:bg-pink-700" type="submit">
            Sign up
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-500">
          Already have an account? <Link to="/login" className="font-semibold text-pink-600 hover:text-pink-700">Log in</Link>
        </div>
      </div>
    </div>
  )
}
