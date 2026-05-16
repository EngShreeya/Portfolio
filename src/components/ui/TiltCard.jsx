import { useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion'

export function TiltCard({ className, children }) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)

  const onMove = (e) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (py - 0.5) * -8
    const ry = (px - 0.5) * 10
    el.style.setProperty('--x', `${px * 100}%`)
    el.style.setProperty('--y', `${py * 100}%`)
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur',
        'transition-transform duration-200',
        'group',
        className,
      )}
      whileHover={reduced ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_var(--x,50%)_var(--y,10%),rgba(255,255,255,0.10),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      {children}
    </motion.div>
  )
}

