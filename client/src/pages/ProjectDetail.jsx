import { useEffect } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button'
import CTASection from '../components/ui/CTASection'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import SectionHeading from '../components/ui/SectionHeading'
import { getProjectById } from '../data/projects'
import styles from './pages.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const project = getProjectById(id)

  useEffect(() => {
    if (!project) navigate('/404', { replace: true })
  }, [project, navigate])

  if (!project) return null

  const base = `projects.items.${project.id}`
  const name = t(`${base}.name`, project.name)
  const overview = t(`${base}.overview`, project.overview)
  const challenge = t(`${base}.challenge`, project.challenge)
  const solution = t(`${base}.solution`, project.solution)
  const features = t(`${base}.features`, { returnObjects: true })
  const results = t(`${base}.results`, { returnObjects: true })
  const featureList = Array.isArray(features) ? features : project.features
  const resultList = Array.isArray(results) ? results : project.results

  return (
    <div className={styles.page}>
      <SEO title={`${name} — ${t('nav.projects')}`} description={overview} image={project.image} type="article" />
      <header className={styles.detailHero}>
        <div className="container">
          <div className={styles.detailEyebrow}>{t(`projects.filters.${project.category}`)}</div>
          <h1 className={styles.detailTitle}>{name}</h1>
          <p className={styles.detailLead}>{overview}</p>
          <div className={styles.tags}>
            {project.technologies.map((tech) => (
              <span className={styles.tag} key={tech}>{tech}</span>
            ))}
          </div>
          {project.url && (
            <div className={styles.detailActions}>
              <Button href={project.url} target="_blank" rel="noopener noreferrer" size="lg">
                {t('projects.viewLive')} <ArrowUpRight size={18} />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                {t('common.startProject')}
              </Button>
            </div>
          )}
        </div>
      </header>
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal>
            <img className={styles.detailCover} src={project.image} alt={name} />
          </ScrollReveal>
        </div>
      </section>
      <section className={styles.sectionAlt}>
        <div className={`container ${styles.split}`}>
          <SectionHeading eyebrow={t('projectDetail.overview')} title={overview} />
          <div className={styles.grid2}>
            <ScrollReveal className={styles.card}>
              <h2>{t('projectDetail.challenge')}</h2>
              <p>{challenge}</p>
            </ScrollReveal>
            <ScrollReveal className={styles.card} delay={0.08}>
              <h2>{t('projectDetail.solution')}</h2>
              <p>{solution}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <SectionHeading eyebrow={t('projectDetail.features')} title={t('projectDetail.features')} />
          <div className={styles.grid4}>
            {featureList.map((feature, index) => (
              <ScrollReveal className={styles.card} delay={index * 0.05} key={feature}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{feature}</h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.sectionAlt}>
        <div className={`container ${styles.split}`}>
          <div>
            <SectionHeading eyebrow={t('projectDetail.technologies')} title={project.technologies.join(' · ')} />
            <div className={styles.tags}>
              {project.technologies.map((tech) => (
                <span className={styles.tag} key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow={t('projectDetail.results')} title={t('projectDetail.results')} />
            {resultList.map((result) => (
              <ScrollReveal className={styles.card} key={result}>
                <CheckCircle2 className={styles.icon} />
                <h3>{result}</h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <SectionHeading eyebrow={t('projectDetail.gallery')} title={name} />
          <div className={styles.gallery}>
            {project.gallery.map((image, index) => (
              <img src={image} alt={`${name} ${index + 1}`} loading="lazy" key={`${image}-${index}`} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
