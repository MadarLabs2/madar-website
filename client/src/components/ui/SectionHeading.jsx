import cn from '../../utils/cn'
import ScrollReveal from './ScrollReveal'
import styles from './ui.module.css'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', className }) {
  return (
    <ScrollReveal className={cn(styles.heading, align === 'center' && styles.center, className)}>
      {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </ScrollReveal>
  )
}
