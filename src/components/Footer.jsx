import React from 'react'

function Footer() {
  return (
    <>
     <footer className="mt-16 pt-8 border-t border-white/6">
          <p className="text-xs text-(--text-muted)">
            Built with React + Tailwind CSS &middot; Data from{" "}
            <a
              href="https://freeapi.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/70 hover:text-amber-400 underline underline-offset-2"
            >
              FreeAPI
            </a>
          </p>
        </footer></>
  )
}

export default Footer