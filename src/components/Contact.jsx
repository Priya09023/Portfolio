import { useState } from 'react'
import { Mail, Github, Linkedin, Info } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import { profile, links } from '../data/portfolio'

const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-400/60 focus:outline-none'

export default function Contact() {
  const [notice, setNotice] = useState('')

  // No backend: this opens the visitor's email app (mailto) when an email is set in data/portfolio.js.
  const onSubmit = (e) => {
    e.preventDefault()
    if (!profile.email) {
      setNotice('The contact form is not connected yet. Add your email in src/data/portfolio.js or connect a form service (see README).')
      return
    }
    const f = new FormData(e.target)
    const subject = encodeURIComponent(`Portfolio message from ${f.get('name')}`)
    const body = encodeURIComponent(`${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" title="Get In Touch" subtitle="Open to internships, opportunities and collaborations.">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <GlassCard className="flex items-center gap-3 !p-5">
            <Mail className="text-violet-400" size={20} />
            {profile.email
              ? <a href={`mailto:${profile.email}`} className="text-sm text-white hover:underline">{profile.email}</a>
              : <span className="text-sm text-slate-400">Email: add yours in src/data/portfolio.js</span>}
          </GlassCard>
          <GlassCard as="a" href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 !p-5">
            <Linkedin className="text-violet-400" size={20} /><span className="text-sm text-white">LinkedIn</span>
          </GlassCard>
          <GlassCard as="a" href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 !p-5">
            <Github className="text-violet-400" size={20} /><span className="text-sm text-white">GitHub</span>
          </GlassCard>
        </div>

        <form onSubmit={onSubmit} className="glass space-y-4 p-6 lg:col-span-3" noValidate={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-slate-400">Name</label>
              <input id="name" name="name" required className={field} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-slate-400">Email</label>
              <input id="email" name="email" type="email" required className={field} placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-slate-400">Message</label>
            <textarea id="message" name="message" rows={5} required className={field} placeholder="How can I help?" />
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
          {notice && (
            <p role="status" className="flex gap-2 text-sm text-amber-300"><Info size={16} className="mt-0.5 shrink-0" />{notice}</p>
          )}
        </form>
      </div>
    </Section>
  )
}
