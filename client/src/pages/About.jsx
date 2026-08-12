import { useTranslation } from 'react-i18next'
import { Code2, Layout, Smartphone, Workflow } from 'lucide-react'
import CTASection from '../components/ui/CTASection'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import StatCard from '../components/ui/StatCard'
import { stats } from '../data/stats'
import { technologies } from '../data/technologies'
import styles from './pages.module.css'

const focusIcons = {
  websites: Layout,
  landing: Code2,
  crm: Workflow,
  apps: Smartphone,
}

export default function About() {
  const { t } = useTranslation()
  const values = t('about.values', { returnObjects: true }) || []
  const focus = t('about.focus.items', { returnObjects: true }) || []

  return (
    <div className={styles.page}>
      <SEO title={t('seo.about.title')} description={t('seo.about.description')} />
      <PageHero eyebrow={t('nav.about')} title={t('about.title')} subtitle={t('about.subtitle')} />

      <section className={styles.section}>
        <div className="container">
          <ScrollReveal className={styles.aboutIntro}>
            <p className={styles.aboutLead}>{t('about.intro')}</p>
            <p className={styles.aboutOfferings}>{t('about.offerings')}</p>
          </ScrollReveal>

          <div className={styles.grid2}>
            {['mission', 'vision'].map((item, index) => (
              <ScrollReveal className={styles.card} delay={index * 0.08} key={item}>
                <span className={styles.number}>0{index + 1}</span>
                <h2>{t(`about.${item}.title`)}</h2>
                <p>{t(`about.${item}.text`)}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <SectionHeading eyebrow={t('about.focus.eyebrow')} title={t('about.focus.title')} />
          <div className={styles.grid4}>
            {(Array.isArray(focus) ? focus : []).map((item, index) => {
              const Icon = focusIcons[item.id] || Layout
              return (
                <ScrollReveal className={`${styles.card} ${styles.valueCard}`} delay={index * 0.06} key={item.id}>
                  <span className={styles.valueIndex}>0{index + 1}</span>
                  <div className={styles.aboutFocusIcon}>
                    <Icon size={20} strokeWidth={1.9} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading eyebrow={t('nav.about')} title={t('about.valuesTitle')} />
          <div className={styles.grid4}>
            {(Array.isArray(values) ? values : []).map((value, index) => (
              <ScrollReveal className={`${styles.card} ${styles.valueCard}`} delay={index * 0.06} key={value.title}>
                <span className={styles.valueIndex}>0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={`container ${styles.split}`}>
          <SectionHeading eyebrow={t('about.approach.title')} title={t('about.approach.text')} />
          <div className={styles.grid2}>
            <ScrollReveal className={styles.card}>
              <h3>{t('about.technology.title')}</h3>
              <p>{t('about.technology.text')}</p>
              <div className={styles.tags}>
                {technologies.map(({ id, label }) => (
                  <span className={styles.tag} key={id}>
                    {label}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal className={styles.card} delay={0.08}>
              <h3>{t('about.whyMadar.title')}</h3>
              <p>{t('about.whyMadar.text')}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.stats}>
            {stats.map((stat) => (
              <StatCard key={stat.id} value={stat.value} suffix={stat.suffix} label={t(stat.labelKey)} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
