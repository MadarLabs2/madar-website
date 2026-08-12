import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ProjectMarquee from './ProjectMarquee'
import { projects } from '../../data/projects'
import styles from './sections.module.css'

export default function FeaturedProjects() {
  const { t } = useTranslation()
  const featured = projects.filter((project) => project.featured)

  return (
    <section className={`${styles.section} ${styles.projectsSection}`}>
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={t('home.featured.eyebrow')}
          title={t('home.featured.title')}
          subtitle={t('home.featured.subtitle')}
        />
      </div>

      <ProjectMarquee items={featured} label={t('home.featured.title')} />

      <div className={styles.inner}>
        <div className={styles.projectsFooter}>
          <Button to="/projects" variant="secondary">
            {t('projects.viewDetails')}
          </Button>
        </div>
      </div>
    </section>
  )
}
