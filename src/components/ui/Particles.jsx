import { useEffect, useMemo, useRef } from 'react'
import { cn } from '../../lib/cn'
import { usePrefersReducedMotion } from '../../lib/usePrefersReducedMotion'

/**
 * Lightweight particles: DOM-based (no canvas) for accessibility + simplicity.
 * Subtle “float” only; pointer-events disabled.
 */
export function Particles({ className, count = 26 }) {
  const reduced = usePrefersReducedMotion()
  const rootRef = useRef(null)

  const seeds = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const x = Math.random() * 100
      const y = Math.random() * 100
      const s = 1 + Math.random() * 2.2
      const o = 0.12 + Math.random() * 0.22
      const d = Math.random() * 6
      const t = 6 + Math.random() * 10
      const hue = i % 3 === 0 ? 285 : i % 3 === 1 ? 190 : 160
      return { x, y, s, o, d, t, hue }
    })
  }, [count])

  useEffect(() => {
    if (reduced) return
    const el = rootRef.current
    if (!el) return

    // Parallax drift based on pointer position (very subtle).
    const onMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      el.style.transform = `translate3d(${dx * 10}px, ${dy * 10}px, 0)`
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', className)}
    >
      {seeds.map((p, idx) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          className={cn(
            'absolute rounded-full',
            reduced ? '' : 'animate-floaty',
          )}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s * 2.5}px`,
            height: `${p.s * 2.5}px`,
            opacity: p.o,
            background:
              p.hue === 285
                ? 'rgba(168,85,247,0.9)'
                : p.hue === 190
                  ? 'rgba(34,211,238,0.9)'
                  : 'rgba(52,211,153,0.85)',
            filter: 'blur(0.2px)',
            animationDelay: `${p.d}s`,
            animationDuration: `${p.t}s`,
          }}
        />
      ))}
    </div>
  )
}

