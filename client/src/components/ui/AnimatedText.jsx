import { motion } from 'framer-motion'
import useReducedMotion from '../../hooks/useReducedMotion'
import cn from '../../utils/cn'
import styles from './ui.module.css'

export default function AnimatedText({ text, as: Tag = 'div', className, delay = 0, mode = 'words' }) {
  const reduced = useReducedMotion()
  const pieces = mode === 'lines' ? String(text).split('\n') : String(text).split(' ')
  if (reduced) return <Tag className={cn(styles.text, className)}>{text}</Tag>

  return (
    <Tag className={cn(styles.text, className)} aria-label={text}>
      {pieces.map((piece, index) => (
        <span className={styles.textWord} aria-hidden="true" key={`${piece}-${index}`}>
          <motion.span
            className={styles.textWordInner}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            {piece}
          </motion.span>
          {mode === 'lines' && <br />}
        </span>
      ))}
    </Tag>
  )
}
