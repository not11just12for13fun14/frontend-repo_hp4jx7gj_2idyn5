import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 sm:px-10 py-4 mt-2 rounded-2xl backdrop-blur bg-slate-900/60 border border-white/10 shadow-xl">
        <div className="flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white text-xl">
            Nizar<span className="text-blue-400">Dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-slate-200">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/admin" className="px-4 py-2 rounded-full bg-blue-500/90 hover:bg-blue-500 text-white">Admin</a>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-4 grid gap-2 text-slate-200">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/admin" className="px-4 py-2 rounded-full bg-blue-500/90 hover:bg-blue-500 text-white w-max">Admin</a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar