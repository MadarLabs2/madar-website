import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import styles from './sections.module.css'

export default function HeroBackground() {
  const reduced = useReducedMotion()

  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.grid} />
      <motion.div
        className={`${styles.blob} ${styles.blob1}`}
        animate={reduced ? {} : { x: [0, 24, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.blob} ${styles.blob2}`}
        animate={reduced ? {} : { x: [0, -18, 0], y: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
