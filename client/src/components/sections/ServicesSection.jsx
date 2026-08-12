import { useTranslation } from 'react-i18next'
import ServiceCard from '../ui/ServiceCard'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/services'
import styles from './sections.module.css'

export default function ServicesSection() {
  const { t } = useTranslation()
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t('home.services.eyebrow')}
          title={t('home.services.title')}
          subtitle={t('home.services.subtitle')}
        />
        <div className={styles.serviceGrid}>
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={(i % 4) * 0.06}>
              <ServiceCard
                number={service.number}
                icon={service.icon}
                title={t(service.titleKey)}
                short={t(service.shortKey)}
                slug={service.slug}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
