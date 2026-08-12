import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import styles from './sections.module.css'

export default function WhyMadar() {
  const { t } = useTranslation()
  const items = t('home.why.items', { returnObjects: true })
  const reasons = Array.isArray(items) ? items : []

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={t('home.why.eyebrow')} title={t('home.why.title')} />
        <div className={styles.reasons}>
          {reasons.map((text, i) => (
            <ScrollReveal className={styles.reason} key={text} delay={i * 0.08}>
              <span className={styles.reasonNumber}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{text}</h3>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
