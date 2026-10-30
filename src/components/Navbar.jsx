import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const items = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Achievements', '#achievements'],
  ['Profiles', '#profiles'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-lg">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-bold gradient-text">Chandrika.dev</a>
        <ul className="hidden items-center gap-7 lg:flex">
          {items.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/5 bg-ink/95 px-5 pb-4 lg:hidden">
          {items.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block py-3 text-slate-300 hover:text-white">{label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
