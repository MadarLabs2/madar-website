import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import cn from '../../utils/cn'
import styles from './ui.module.css'

export default function StatCard({ value, suffix = '', prefix = '', label, duration = 1400, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const numeric = Number(value)
    if (Number.isNaN(numeric)) return setDisplay(value)
    const decimals = String(value).includes('.') ? String(value).split('.')[1].length : 0
    const start = performance.now()
    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const current = numeric * (1 - (1 - progress) ** 3)
      setDisplay(decimals ? current.toFixed(decimals) : Math.round(current))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <div ref={ref} className={cn(styles.stat, styles.glass, className)}>
      <strong className={styles.statValue}>{prefix}{display}{suffix}</strong>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}
