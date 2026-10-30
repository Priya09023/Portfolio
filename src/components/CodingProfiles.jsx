import { Code2, BookOpen, Trophy, Terminal, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import { codingProfiles } from '../data/portfolio'

const icons = { code: Code2, book: BookOpen, trophy: Trophy, terminal: Terminal, github: Github, linkedin: Linkedin }

export default function CodingProfiles() {
  return (
    <Section id="profiles" title="Coding Profiles" subtitle="Find me on these platforms.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map(({ name, url, icon }) => {
          const Icon = icons[icon] || Code2
          return (
            <GlassCard key={name} as="a" href={url} target="_blank" rel="noreferrer" className="group flex items-center justify-between !p-5">
              <span className="flex items-center gap-3">
                <Icon className="text-violet-400" size={22} />
                <span className="font-medium text-white">{name}</span>
              </span>
              <ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-white" />
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
