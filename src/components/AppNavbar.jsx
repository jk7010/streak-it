import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Experiments', to: '/experiments' },
    { label: 'Courses', to: '/courses' },
    { label: 'Pricing', to: '/pricing' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-pink-600 text-2xl font-bold text-white">S</div>
          <div>
            <div className="text-xl font-bold text-slate-900">Streak It</div>
            <p className="text-xs text-slate-500">Virtual Microbiology Lab</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            item.to === '#'
              ? (
                <a key={item.label} href="#" className="hover:text-pink-600">
                  {item.label}
                </a>
              )
              : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `transition ${isActive ? 'text-pink-600 font-semibold' : 'hover:text-pink-600'}`
                  }
                >
                  {item.label}
                </NavLink>
              )
          ))}
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-700 transition ${isActive ? 'text-pink-600 bg-pink-50 border-pink-200' : 'hover:bg-pink-50 hover:text-pink-600'}`
            }
          >
            Resources
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/login" className={({ isActive }) => `text-slate-700 hover:text-pink-600 ${isActive ? 'text-pink-600 font-semibold' : ''}`}>
            Log in
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => `rounded-full bg-pink-600 px-6 py-2 text-white shadow-sm shadow-pink-200/50 hover:bg-pink-700 transition ${isActive ? 'ring-2 ring-pink-200' : ''}`}>
            Sign up for free
          </NavLink>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="space-y-3 text-slate-700">
            {navItems.map((item) =>
              item.to === '#'
                ? (
                  <a key={item.label} href="#" className="block hover:text-pink-600">
                    {item.label}
                  </a>
                )
                : (
                  <NavLink key={item.label} to={item.to} className="block hover:text-pink-600">
                    {item.label}
                  </NavLink>
                )
            )}
            <NavLink to="/signup" className="w-full rounded-full bg-pink-600 px-4 py-2 text-white text-center block">Sign up for free</NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}
