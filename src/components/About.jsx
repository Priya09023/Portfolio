import { GraduationCap, Building2, CalendarDays, MapPin } from 'lucide-react'
import Section from './Section'
import GlassCard from './GlassCard'
import { profile } from '../data/portfolio'

const facts = [
  { icon: GraduationCap, label: 'Education', value: profile.education },
  { icon: Building2, label: 'College', value: profile.college },
  { icon: CalendarDays, label: 'Graduation', value: profile.graduation },
  { icon: MapPin, label: 'Location', value: profile.location },
]

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 text-lg leading-relaxed text-slate-300 lg:col-span-3">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {facts.map(({ icon: Icon, label, value }) => (
            <GlassCard key={label} className="flex items-start gap-4 !p-4">
              <Icon className="mt-0.5 shrink-0 text-violet-400" size={20} />
              <div>
                <p className="text-xs text-slate-500">{label}</p>
                <p className="text-sm text-slate-200">{value}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  )
}
