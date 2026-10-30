import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
    </footer>
  )
}
