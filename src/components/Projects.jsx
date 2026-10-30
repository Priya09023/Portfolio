import { Github, ExternalLink } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I have built.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <GlassCard key={p.name} className="flex flex-col">
            <h3 className="font-display text-2xl font-semibold text-white">{p.name}</h3>
            <p className="mt-3 flex-1 text-slate-400">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => <li key={t} className="tag">{t}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2"><Github size={16} /> GitHub</a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2"><ExternalLink size={16} /> Live Demo</a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
