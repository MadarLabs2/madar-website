import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useMediaQuery from '../../hooks/useMediaQuery'
import useReducedMotion from '../../hooks/useReducedMotion'
import Button from './Button'
import styles from './ui.module.css'

export default function MagneticButton({ strength = 0.18, ...props }) {
  const ref = useRef(null)
  const coarse = useMediaQuery('(pointer: coarse)')
  const reduced = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 700, damping: 28, mass: 0.1 })
  const y = useSpring(useMotionValue(0), { stiffness: 700, damping: 28, mass: 0.1 })
  const disabled = coarse || reduced

  const move = (event) => {
    if (disabled) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * strength)
    y.set((event.clientY - rect.top - rect.height / 2) * strength)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <motion.span ref={ref} className={styles.magnetic} style={{ x, y }} onMouseMove={move} onMouseLeave={reset}>
      <Button {...props} />
    </motion.span>
  )
}
