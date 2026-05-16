import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Lenis from 'lenis'
import { Grain } from '../components/ui/Grain'
import { Particles } from '../components/ui/Particles'

export function AppShell() {
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reduced) return

    // Lenis smooth scroll (inertia). Keep it subtle: cinematic, not “floaty”.
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    })

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Background layers will live here (orb, grain, particles). */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(168,85,247,0.22),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(700px_circle_at_40%_120%,rgba(236,72,153,0.14),transparent_55%)]" />
      <Particles className="fixed inset-0 -z-10" />
      <Grain />
      <Outlet />
    </div>
  )
}

