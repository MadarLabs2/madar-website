import { motion } from 'framer-motion'
import cn from '../../utils/cn'
import styles from './ui.module.css'

export default function TechnologyCard({ label, icon, color, className, delay = 0 }) {
  return (
    <motion.div
      className={cn(styles.tech, styles.glass, className)}
      style={{ '--tech-color': color }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {icon || <span className={styles.techDot} />}<span>{label}</span>
    </motion.div>
  )
}
