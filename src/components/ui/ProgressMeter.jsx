import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { transitions } from '../../lib/motion'

export function ProgressMeter({ label, value, className }) {
  return (
    <div className={cn('grid gap-2', className)}>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="text-white/80">{label}</span>
        <span className="font-mono text-white/50">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...transitions.reveal, duration: 0.9 }}
          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500/70 via-cyan-300/60 to-emerald-300/50 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
        />
      </div>
    </div>
  )
}

