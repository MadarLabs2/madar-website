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
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { processSteps } from '../../data/process'
import styles from './sections.module.css'

const ICONS = {
  search: Search,
  compass: Compass,
  pen: PenTool,
  code: Code2,
  test: FlaskConical,
  rocket: Rocket,
  support: LifeBuoy,
}

export default function ProcessPreview() {
  const { t } = useTranslation()
  const preview = processSteps.slice(0, 4)

  return (
    <section className={`${styles.section} ${styles.processSection}`}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t('home.process.eyebrow')}
          title={t('home.process.title')}
          subtitle={t('home.process.subtitle')}
        />

        <div className={styles.processJourney} aria-label={t('home.process.title')}>
          <div className={styles.processRail} aria-hidden="true" />

          <div className={styles.process}>
            {preview.map((step, i) => {
              const Icon = ICONS[step.icon] || Search
              return (
                <ScrollReveal className={styles.step} key={step.id} delay={i * 0.08}>
                  <div className={styles.stepNode}>
                    <span className={styles.stepIcon}>
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </div>
                  <span className={styles.stepIndex} aria-hidden="true">
                    {step.number}
                  </span>
                  <h3 className={styles.stepTitle}>{t(step.titleKey)}</h3>
                  <p className={styles.stepDesc}>{t(step.descKey)}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        <div className={styles.processFooter}>
          <Button to="/process" variant="secondary">
            {t('nav.process')}
          </Button>
        </div>
      </div>
    </section>
  )
}
