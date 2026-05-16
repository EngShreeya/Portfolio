import { useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion'

/**
 * Magnetic hover: subtle “pull” toward pointer.
 * Keep it restrained so it feels premium (not gimmicky).
 */
export function MagneticButton({ className, children, asChild = false, ...props }) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)

  const Comp = useMemo(() => (asChild ? motion.span : motion.a), [asChild])

  const onMove = (e) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate3d(${dx * 0.12}px, ${dy * 0.12}px, 0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <Comp
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full',
        'border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/95',
        'backdrop-blur transition',
        'hover:bg-white/8 hover:border-white/15',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60',
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

