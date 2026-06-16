import React from 'react'
import Sidebar from './Sidebar'
import AppNavbar from './AppNavbar'

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8F3FA]">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <AppNavbar />
        <main className="mx-auto max-w-[1440px] overflow-auto pb-8 pt-4 px-4 md:px-6">
          {children}
        </main>
      </div>
    </div>
  )
}
