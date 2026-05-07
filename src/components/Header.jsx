import React from 'react'

function Header() {
  return (
    <>
     <header className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 pulse-dot" />
            <span className="text-xs tracking-[0.25em] uppercase text-(--text-muted)">
              Live Feed
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
            Random
            <br />
            <span className="text-amber-400">Cat</span> Viewer
          </h1>
          <p className="mt-4 text-(--text-muted) text-sm sm:text-base max-w-md">
            Every click brings you a new feline friend. Powered by the Random Cat
            API.
          </p>
        </header>
</>
  )
}

export default Header