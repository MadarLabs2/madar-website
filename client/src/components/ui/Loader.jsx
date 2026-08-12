import { motion } from 'framer-motion'
import { useEffect } from 'react'
import logo from '../../assets/logo.png'
import styles from './ui.module.css'

export default function Loader({ onComplete, duration = 1400 }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete?.(), duration)
    return () => clearTimeout(timer)
  }, [duration, onComplete])

  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-6%' }}
      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
    >
      <div>
        <motion.img
          src={logo}
          alt="MADAR"
          className={styles.loaderLogoImg}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55 }}
        />
        <motion.div
          className={styles.loaderLine}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: duration / 1000 - 0.25, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
