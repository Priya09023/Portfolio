import { Briefcase } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="experience" title="Internship Experience">
      <div className="grid gap-5 md:grid-cols-2">
        {experience.map((e) => (
          <GlassCard key={e.company} className="flex gap-4">
            <span className="h-fit rounded-lg bg-blue-500/15 p-2.5 text-blue-300"><Briefcase size={20} /></span>
            <div>
              <h3 className="font-display text-xl font-semibold text-white">{e.company}</h3>
              <p className="mt-1 text-slate-300">{e.role}</p>
              {e.detail && <p className="mt-2 text-sm text-violet-300">{e.detail}</p>}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
