import { Award } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <Section id="achievements" title="Certifications & Achievements">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <GlassCard key={a.title} className="flex gap-3 !p-5">
            <Award className="mt-0.5 shrink-0 text-violet-400" size={20} />
            <div>
              <p className="text-sm font-medium text-white">{a.title}</p>
              {a.note && <p className="mt-1 text-sm text-blue-300">{a.note}</p>}
              <p className="mt-2 text-xs text-slate-500">{a.type}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
