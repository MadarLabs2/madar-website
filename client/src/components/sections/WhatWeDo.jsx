import { useTranslation } from 'react-i18next'
import ScrollReveal from '../ui/ScrollReveal'
import SectionHeading from '../ui/SectionHeading'
import styles from './sections.module.css'

export default function WhatWeDo() {
  const { t } = useTranslation()
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} ${styles.split}`}>
        <SectionHeading
          eyebrow={t('home.whatWeDo.eyebrow')}
          title={t('home.whatWeDo.title')}
        />
        <ScrollReveal delay={0.1}>
          <p className={styles.bigCopy}>{t('home.whatWeDo.text')}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
