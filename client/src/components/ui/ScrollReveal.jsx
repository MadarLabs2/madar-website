import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import cn from '../../utils/cn'
import styles from './ui.module.css'

export default function ScrollReveal({ children, className, delay = 0, y = 36, as = 'div' }) {
  const reduced = useReducedMotion()
  const Component = motion[as] || motion.div
  return (
    <Component
      className={cn(styles.reveal, className)}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
