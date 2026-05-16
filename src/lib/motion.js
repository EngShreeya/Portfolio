/**
 * Centralized motion config (variants + transitions).
 * Keep all timing/curves consistent so the site feels “physically” coherent.
 */

export const easeOutExpo = [0.16, 1, 0.3, 1]

export const transitions = {
  page: { duration: 0.7, ease: easeOutExpo },
  reveal: { duration: 0.7, ease: easeOutExpo },
  fast: { duration: 0.35, ease: easeOutExpo },
}

export const variants = {
  page: {
    initial: { opacity: 0, y: 14, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -10, filter: 'blur(10px)' },
  },
  fadeUp: {
    initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  lineReveal: {
    initial: { y: '100%', filter: 'blur(10px)' },
    animate: { y: '0%', filter: 'blur(0px)' },
  },
  stagger: {
    animate: {
      transition: { staggerChildren: 0.07, delayChildren: 0.04 },
    },
  },
}

