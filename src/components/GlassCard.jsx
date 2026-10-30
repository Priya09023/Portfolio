import { motion } from 'framer-motion'

export default function GlassCard({ as = 'div', className = '', children, ...rest }) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className={`glass p-6 transition-shadow hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.5)] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
