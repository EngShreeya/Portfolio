import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function ProjectsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto w-full max-w-6xl px-6 py-16"
    >
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-4xl tracking-tight">Projects</h1>
        <Link
          to="/"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
        >
          Back
        </Link>
      </div>
      <p className="mt-4 text-white/65">
        Dedicated projects view (optional). The primary experience is the
        cinematic scroll page.
      </p>
    </motion.main>
  )
}

