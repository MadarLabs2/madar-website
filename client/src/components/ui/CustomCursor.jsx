import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import useMediaQuery from '../../hooks/useMediaQuery'
import useReducedMotion from '../../hooks/useReducedMotion'
import styles from './ui.module.css'

export default function CustomCursor() {
  const touch = useMediaQuery('(pointer: coarse)')
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const dotX = useSpring(0, { stiffness: 900, damping: 45 })
  const dotY = useSpring(0, { stiffness: 900, damping: 45 })
  const ringX = useSpring(0, { stiffness: 180, damping: 22 })
  const ringY = useSpring(0, { stiffness: 180, damping: 22 })

  useEffect(() => {
    if (touch || reduced) return
    const move = (e) => { dotX.set(e.clientX); dotY.set(e.clientY); ringX.set(e.clientX); ringY.set(e.clientY); setVisible(true) }
    const over = (e) => setHovering(Boolean(e.target.closest('a,button,[data-cursor]')))
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mouseover', over)
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('mouseover', over) }
  }, [dotX, dotY, ringX, ringY, touch, reduced])

  if (touch || reduced || !visible) return null
  return <>
    <motion.div className={styles.cursorDot} style={{ x: dotX, y: dotY }} />
    <motion.div className={styles.cursorRing} animate={{ scale: hovering ? 1.55 : 1, opacity: hovering ? .55 : 1 }} style={{ x: ringX, y: ringY }} />
  </>
}
