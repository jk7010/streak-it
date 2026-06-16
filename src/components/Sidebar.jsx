import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '🔬', label: 'My Experiments', path: '/experiments' },
    { icon: '🧪', label: 'Lab Workspace', path: '/lab' },
    { icon: '📚', label: 'Study Notes', path: '/study' },
    { icon: '❓', label: 'Quizzes', path: '/quizzes' },
    { icon: '📈', label: 'Progress', path: '/progress' },
  ]

  return (
    <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col overflow-hidden">
      <div className="flex flex-1 flex-col justify-between overflow-y-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-pink-600 text-2xl font-bold text-white">S</div>
              <div>
                <div className="text-lg font-bold text-slate-900">Streak It</div>
                <p className="text-xs text-slate-500">Microbiology Lab</p>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                    isActive ? 'bg-pink-50 text-pink-700' : 'text-slate-700 hover:bg-pink-50 hover:text-pink-600'
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-200 p-6">
          <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-lg font-bold text-white">S</div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Student</p>
              <p className="text-xs text-slate-500">student@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
