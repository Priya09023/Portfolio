import { Code2, Layout, Server, Database, Wrench } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import { skills } from '../data/portfolio'

const icons = { code: Code2, layout: Layout, server: Server, database: Database, wrench: Wrench }

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="Technologies and tools I work with.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, icon, items }) => {
          const Icon = icons[icon] || Code2
          return (
            <GlassCard key={title}>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-violet-500/15 p-2 text-violet-300"><Icon size={18} /></span>
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => <li key={s} className="tag">{s}</li>)}
              </ul>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
