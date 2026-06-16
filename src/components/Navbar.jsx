import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-pink-600">Streak It</div>
            <p className="text-xs text-gray-500">Virtual Microbiology Lab</p>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-pink-600 font-medium">
              Home
            </Link>
            <Link to="/experiments" className="text-gray-700 hover:text-pink-600 font-medium">
              Experiments
            </Link>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">
              Pricing
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-pink-600 font-medium">
                Resources
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="text-gray-700 hover:text-pink-600 font-medium">
              Log in
            </button>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-700 transition">
              Sign up for free
            </button>
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/experiments" className="block text-gray-700 hover:text-blue-600">Experiments</Link>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Courses</a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">Pricing</a>
            <button className="w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700">
              Sign up for free
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
