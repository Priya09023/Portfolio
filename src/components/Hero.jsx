import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import useTyping from '../hooks/useTyping'
import { profile, links } from '../data/portfolio'

export default function Hero() {
  const typed = useTyping(profile.typingWords)
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16 sm:px-8">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto w-full max-w-6xl"
      >
        <p className="mb-4 text-sm text-slate-400">{profile.education} · Class of {profile.graduation}</p>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          Hi, I’m <span className="gradient-text">{profile.firstName}</span>
        </h1>
        <p className="mt-5 font-display text-2xl text-slate-200 sm:text-3xl">{profile.tagline}</p>
        <p className="mt-4 h-8 font-display text-xl text-violet-300" aria-live="off">
          {typed}<span className="ml-0.5 inline-block w-0.5 animate-pulse bg-violet-300">&nbsp;</span>
        </p>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">{profile.intro}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href={profile.resumeUrl} download className="btn-ghost"><Download size={16} /> Download Resume</a>
          <div className="flex items-center gap-2">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-violet-400/60 hover:text-white"><Github size={18} /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-violet-400/60 hover:text-white"><Linkedin size={18} /></a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
