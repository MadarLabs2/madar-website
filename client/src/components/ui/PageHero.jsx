import AnimatedText from './AnimatedText'
import styles from './ui.module.css'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <header className={styles.pageHero}>
      <div className="container">
        {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
        <AnimatedText as="h1" text={title} className={styles.pageTitle} />
        {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}
      </div>
    </header>
  )
}
