import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { variants } from '../../lib/motion'

export function Stagger({ className, children }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants.stagger}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

