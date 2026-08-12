import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CTASection from '../components/ui/CTASection'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import { services } from '../data/services'
import { ServiceIcon } from '../utils/serviceIcons'
import styles from './pages.module.css'

export default function Services() {
  const { t } = useTranslation()
  return <div className={styles.page}>
    <SEO title={t('seo.services.title')} description={t('seo.services.description')} />
    <PageHero eyebrow={t('nav.services')} title={t('services.title')} subtitle={t('services.subtitle')} />
    <section className={styles.section}><div className={`container ${styles.servicesGrid}`}>
      {services.map((service, index) => <ScrollReveal className={`${styles.card} ${styles.serviceCard}`} delay={(index % 2) * .08} key={service.slug}>
        <span className={styles.number}>{service.number}</span>
        <ServiceIcon className={styles.icon} name={service.icon} />
        <div className={styles.serviceBody}>
          <h2>{t(service.titleKey)}</h2><p>{t(service.descriptionKey)}</p>
          <ul className={styles.list}>{service.features.map((key) => <li key={key}>{t(key)}</li>)}</ul>
          <div className={styles.tags}>{service.technologies.map((tech) => <span className={styles.tag} key={tech}>{tech}</span>)}</div>
          <Link className={styles.cardLink} to={`/services/${service.slug}`}>{t('common.learnMore')} <ArrowUpRight size={17} /></Link>
        </div>
      </ScrollReveal>)}
    </div></section>
    <CTASection />
  </div>
}
