import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-20 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">{title}</span>
          </h2>
          {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  )
}
