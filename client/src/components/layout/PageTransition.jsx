import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import styles from './layout.module.css'

export default function PageTransition({ children }) {
  const reduced = useReducedMotion()
  return (
    <motion.div className={styles.transition} initial={reduced ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -10 }} transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}
