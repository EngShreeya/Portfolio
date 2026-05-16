import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion'
import { cn } from '../../lib/cn'
import { easeOutExpo } from '../../lib/motion'

export function Orb({ className }) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -z-10 h-[560px] w-[560px] rounded-full blur-3xl',
        'bg-[conic-gradient(from_90deg_at_50%_50%,rgba(168,85,247,0.55),rgba(34,211,238,0.40),rgba(52,211,153,0.25),rgba(236,72,153,0.40),rgba(168,85,247,0.55))]',
        className,
      )}
      animate={
        reduced
          ? { opacity: 0.9 }
          : {
              rotate: 360,
              scale: [0.98, 1.02, 0.98],
              opacity: [0.75, 0.9, 0.75],
            }
      }
      transition={
        reduced
          ? undefined
          : {
              rotate: { duration: 18, ease: 'linear', repeat: Infinity },
              scale: { duration: 8, ease: easeOutExpo, repeat: Infinity },
              opacity: { duration: 6, ease: easeOutExpo, repeat: Infinity },
            }
      }
    />
  )
}

