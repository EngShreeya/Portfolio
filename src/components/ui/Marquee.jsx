import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion'

export function Marquee({ items, className }) {
  const reduced = usePrefersReducedMotion()
  const loop = [...items, ...items, ...items]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07080c] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07080c] to-transparent" />
      <motion.div
        aria-hidden="true"
        className="flex gap-3 py-4"
        animate={reduced ? undefined : { x: ['0%', '-33.333%'] }}
        transition={
          reduced
            ? undefined
            : { duration: 18, ease: 'linear', repeat: Infinity }
        }
        style={{ willChange: 'transform' }}
      >
        {loop.map((t, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <span
            key={`${t}-${idx}`}
            className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs tracking-wide text-white/70"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

