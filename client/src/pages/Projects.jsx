import { useState } from 'react'
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SEO from '../components/ui/SEO'
import CTASection from '../components/ui/CTASection'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import ProjectMarquee from '../components/sections/ProjectMarquee'
import { categories, projects } from '../data/projects'
import styles from './pages.module.css'

export default function Projects() {
  const { t, i18n } = useTranslation()
  const [filter, setFilter] = useState('all')
  const availableCategories = categories.filter(
    (category) => category === 'all' || projects.some((project) => project.category === category),
  )
  const visible = filter === 'all' ? projects : projects.filter(({ category }) => category === filter)
  const countLabel = t('projects.count', { count: visible.length })

  return (
    <div className={styles.page}>
      <SEO title={t('seo.projects.title')} description={t('seo.projects.description')} />

      <header className={styles.projectsHero}>
        <div className={`container ${styles.projectsHeroInner}`}>
          <div className={styles.projectsHeroCopy}>
            <div className={styles.detailEyebrow}>{t('nav.projects')}</div>
            <h1 className={styles.projectsHeroTitle}>{t('projects.title')}</h1>
            <p className={styles.projectsHeroLead}>{t('projects.subtitle')}</p>
            <div className={styles.projectsHeroActions}>
              <Button to="/contact" size="lg">
                {t('common.startProject')}
                <ArrowUpRight size={18} />
              </Button>
              <Button to="/services" variant="secondary">
                {t('common.exploreServices')}
              </Button>
            </div>
          </div>

          <ScrollReveal className={styles.projectsHeroPanel} delay={0.08}>
            <span className={styles.projectsHeroPanelLabel}>{t('projects.proofLabel')}</span>
            <ul className={styles.projectsProofList}>
              {[0, 1, 2].map((i) => (
                <li key={i}>
                  <span className={styles.projectsProofIcon} aria-hidden="true">
                    <Sparkles size={14} />
                  </span>
                  {t(`projects.proof.${i}`)}
                </li>
              ))}
            </ul>
            <p className={styles.projectsHeroPanelNote}>
              <ExternalLink size={15} aria-hidden="true" />
              {t('projects.clickHint')}
            </p>
          </ScrollReveal>
        </div>
      </header>

      <section className={`${styles.section} ${styles.projectsBand}`}>
        <div className="container">
          <div className={styles.projectsToolbar}>
            <div className={styles.projectsToolbarText}>
              <h2 className={styles.projectsGalleryTitle}>{t('projects.galleryTitle')}</h2>
              <p className={styles.projectsGalleryLead}>{t('projects.galleryLead')}</p>
            </div>
            <div className={styles.projectsCount} aria-live="polite">
              {countLabel}
            </div>
          </div>

          <div className={styles.filters} role="group" aria-label={t('projects.galleryTitle')}>
            {availableCategories.map((category) => (
              <button
                type="button"
                className={`${styles.chip} ${filter === category ? styles.chipActive : ''}`}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
                key={category}
              >
                {t(`projects.filters.${category}`)}
              </button>
            ))}
          </div>
        </div>

        {visible.length > 0 ? (
          <ProjectMarquee key={`${filter}-${i18n.language}`} items={visible} label={t('projects.galleryTitle')} />
        ) : (
          <div className="container">
            <p className={styles.projectsEmpty}>{t('projects.empty')}</p>
          </div>
        )}
      </section>

      <CTASection />
    </div>
  )
}
