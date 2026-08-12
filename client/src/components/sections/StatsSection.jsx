import { useTranslation } from 'react-i18next'
import StatCard from '../ui/StatCard'
import SectionHeading from '../ui/SectionHeading'
import { stats } from '../../data/stats'
import styles from './sections.module.css'

export default function StatsSection() {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading eyebrow={t('home.stats.eyebrow')} title={t('home.stats.title')} align="center" />
        <div className={styles.stats}>
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={t(stat.labelKey)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
