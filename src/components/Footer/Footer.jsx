import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <Link
          to="/"
          className="text-[#5968F0] font-bold text-lg"
        >
          Go Business
        </Link>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <Link
            to="/about"
            className="hover:text-slate-900"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-slate-900"
          >
            Contact
          </Link>

          <Link
            to="/privacy"
            className="hover:text-slate-900"
          >
            Privacy
          </Link>

          <Link
            to="/terms"
            className="hover:text-slate-900"
          >
            Terms
          </Link>
        </div>

        <p className="text-xs text-slate-400">
          © 2024 Go Business, Inc.
        </p>
      </div>
    </footer>
  )
}

export default Footer