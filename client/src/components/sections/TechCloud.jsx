import { useTranslation } from 'react-i18next'
import TechnologyCard from '../ui/TechnologyCard'
import SectionHeading from '../ui/SectionHeading'
import { technologies } from '../../data/technologies'
import styles from './sections.module.css'

export default function TechCloud() {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t('home.tech.eyebrow')}
          title={t('home.tech.title')}
          subtitle={t('home.tech.subtitle')}
          align="center"
        />
        <div className={styles.cloud}>
          <div className={styles.cloudCenter}>
            <strong>MADAR</strong>
            <span>{t('brand.arabic')}</span>
          </div>
          {technologies.map((tech, i) => (
            <TechnologyCard
              className={styles.cloudCard}
              key={tech.id}
              label={tech.label}
              delay={i * 0.25}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
