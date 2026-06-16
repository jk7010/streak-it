import React from 'react'
import AppNavbar from './AppNavbar'

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F3FA]">
      <AppNavbar />
      <main className="mx-auto max-w-[1440px] px-4 py-6 md:px-6 md:py-8">
        {children}
      </main>
    </div>
  )
}
