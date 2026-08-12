import {
  Search,
  Compass,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import CTASection from '../components/ui/CTASection'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import { processSteps } from '../data/process'
import styles from './pages.module.css'

const ICONS = {
  search: Search,
  compass: Compass,
  pen: PenTool,
  code: Code2,
  test: FlaskConical,
  rocket: Rocket,
  support: LifeBuoy,
}

export default function Process() {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <SEO title={t('seo.process.title')} description={t('seo.process.description')} />
      <PageHero eyebrow={t('nav.process')} title={t('process.title')} subtitle={t('process.subtitle')} />
      <section className={`${styles.section} ${styles.processPage}`}>
        <div className={`container ${styles.timeline}`}>
          {processSteps.map((step, index) => {
            const Icon = ICONS[step.icon] || Search
            return (
              <ScrollReveal className={styles.timelineStep} delay={index * 0.05} key={step.id}>
                <div className={styles.timelineNumber}>
                  <span className={styles.timelineIndex}>{step.number}</span>
                  <span className={styles.timelineIcon}>
                    <Icon size={18} strokeWidth={2.1} aria-hidden="true" />
                  </span>
                </div>
                <div className={styles.timelineContent}>
                  <h2>{t(step.titleKey)}</h2>
                  <p className={styles.bodyCopy}>{t(step.descKey)}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>
      <CTASection />
    </div>
  )
}
