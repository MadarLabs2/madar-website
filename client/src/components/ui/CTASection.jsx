import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import MagneticButton from './MagneticButton'
import ScrollReveal from './ScrollReveal'
import styles from './ui.module.css'

export default function CTASection({ title, text, buttonLabel, to = '/contact' }) {
  const { t } = useTranslation()
  return (
    <section className="section container">
      <ScrollReveal className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>{title || t('common.haveIdea')}</h2>
          <p className={styles.ctaText}>{text || t('common.ctaSub')}</p>
          <MagneticButton to={to} size="lg">{buttonLabel || t('common.startProject')} <ArrowUpRight size={18} /></MagneticButton>
        </div>
      </ScrollReveal>
    </section>
  )
}
