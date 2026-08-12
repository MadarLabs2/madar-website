import { useEffect } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Target,
  Users,
  Sparkles,
} from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CTASection from '../components/ui/CTASection'
import FAQItem from '../components/ui/FAQItem'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import Button from '../components/ui/Button'
import { getServiceBySlug } from '../data/services'
import styles from './pages.module.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const service = getServiceBySlug(slug)
  const rtl = i18n.dir() === 'rtl'
  const Arrow = rtl ? ArrowLeft : ArrowRight

  useEffect(() => {
    if (!service) navigate('/404', { replace: true })
  }, [service, navigate])

  if (!service) return null

  const base = `services.${slug}`
  const page = `servicePages.${slug}`

  return (
    <div className={styles.page}>
      <SEO title={t(service.seo.titleKey)} description={t(service.seo.descriptionKey)} />

      <header className={styles.serviceHero}>
        <div className={`container ${styles.serviceHeroInner}`}>
          <div className={styles.serviceHeroCopy}>
            <div className={styles.detailEyebrow}>
              {service.number} — {t(service.titleKey)}
            </div>
            <h1 className={styles.serviceHeroTitle}>{t(`${page}.headline`)}</h1>
            <p className={styles.serviceHeroLead}>{t(`${page}.body`)}</p>
            <div className={styles.serviceHeroActions}>
              <Button to="/contact" size="lg">
                {t('common.startProject')}
                <Arrow size={18} />
              </Button>
              <Button to="/services" variant="secondary">
                {t('nav.services')}
              </Button>
            </div>
          </div>

          <ScrollReveal className={styles.serviceHeroPanel} delay={0.08}>
            <span className={styles.serviceHeroPanelLabel}>{t('services.problems')}</span>
            <ul className={styles.serviceProblemList}>
              {[0, 1, 2].map((i) => (
                <li key={i}>
                  <span className={styles.serviceProblemDot} aria-hidden="true" />
                  {t(`${base}.problems.${i}`)}
                </li>
              ))}
            </ul>
            <p className={styles.serviceHeroPanelNote}>{t(`${page}.promise`)}</p>
          </ScrollReveal>
        </div>
      </header>

      <section className={styles.section}>
        <div className={`container ${styles.serviceAudience}`}>
          <ScrollReveal className={styles.serviceAudienceCard}>
            <span className={styles.serviceCardIcon}>
              <Users size={20} aria-hidden="true" />
            </span>
            <h2>{t('services.forWho')}</h2>
            <p>{t(`${base}.forWho`)}</p>
          </ScrollReveal>
          <ScrollReveal className={styles.serviceAudienceCard} delay={0.08}>
            <span className={styles.serviceCardIcon}>
              <Target size={20} aria-hidden="true" />
            </span>
            <h2>{t('services.goal')}</h2>
            <p>{t(`${page}.goal`)}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className={`${styles.sectionAlt} ${styles.serviceFeaturesSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.serviceSectionHead}>
              <span className={styles.detailEyebrow}>{t('services.whatYouGet')}</span>
              <h2 className={styles.serviceSectionTitle}>{t(`${page}.introTitle`)}</h2>
              <p className={styles.serviceSectionLead}>{t(`${page}.introBody`)}</p>
            </div>
          </ScrollReveal>

          <div className={styles.serviceFeatureGrid}>
            {service.features.map((key, i) => (
              <ScrollReveal className={styles.serviceFeatureCard} delay={i * 0.05} key={key}>
                <span className={styles.serviceFeatureIndex}>0{i + 1}</span>
                <span className={styles.serviceFeatureCheck}>
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <h3>{t(key)}</h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.serviceSectionHead}>
              <span className={styles.detailEyebrow}>{t('projectDetail.results')}</span>
              <h2 className={styles.serviceSectionTitle}>{t(`${page}.outcome`)}</h2>
              <p className={styles.serviceSectionLead}>{t(`${page}.outcomeBody`)}</p>
            </div>
          </ScrollReveal>

          <div className={styles.serviceBenefitRow}>
            {service.benefits.map((key, i) => (
              <ScrollReveal className={styles.serviceBenefitCard} delay={i * 0.06} key={key}>
                <Sparkles size={18} aria-hidden="true" />
                <h3>{t(key)}</h3>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.tags}>
            {service.technologies.map((tech) => (
              <span className={styles.tag} key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sectionAlt} ${styles.serviceProcessSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.serviceSectionHead}>
              <span className={styles.detailEyebrow}>{t('nav.process')}</span>
              <h2 className={styles.serviceSectionTitle}>{t('services.howWeWork')}</h2>
              <p className={styles.serviceSectionLead}>{t(`${page}.processLead`)}</p>
            </div>
          </ScrollReveal>

          <div className={styles.serviceProcessGrid}>
            {service.process.map((key, i) => (
              <ScrollReveal className={styles.serviceProcessCard} delay={i * 0.06} key={key}>
                <span className={styles.serviceProcessNumber}>0{i + 1}</span>
                <h3>{t(key)}</h3>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.serviceProcessLink}>
            <Link to="/process" className={styles.cardLink}>
              {t('nav.process')}
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.serviceSectionHead}>
              <span className={styles.detailEyebrow}>{t('nav.faq')}</span>
              <h2 className={styles.serviceSectionTitle}>{t('faq.title')}</h2>
            </div>
          </ScrollReveal>
          <div className={styles.faqList}>
            {service.faq.map(({ qKey, aKey }, i) => (
              <FAQItem key={qKey} question={t(qKey)} answer={t(aKey)} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
