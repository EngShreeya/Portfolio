import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { transitions, variants } from '../../lib/motion'

/**
 * Viewport-aware reveal wrapper.
 * - Uses a consistent blur+lift language across the site.
 * - Honors reduced-motion automatically via Framer.
 */
export function Reveal({
  as: Comp = motion.div,
  className,
  delay = 0,
  once = true,
  amount = 0.28,
  children,
}) {
  return (
    <Comp
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount }}
      variants={variants.fadeUp}
      transition={{ ...transitions.reveal, delay }}
      className={cn(className)}
    >
      {children}
    </Comp>
  )
}

