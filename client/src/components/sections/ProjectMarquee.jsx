import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../ui/ProjectCard'
import useMediaQuery from '../../hooks/useMediaQuery'
import useReducedMotion from '../../hooks/useReducedMotion'
import styles from './sections.module.css'

function Card({ project, t, tabIndex }) {
  return (
    <ProjectCard
      id={project.id}
      image={project.image}
      logo={project.logo}
      logoTone={project.logoTone}
      url={project.url}
      category={t(`projects.filters.${project.category}`)}
      name={t(`projects.items.${project.id}.name`, project.name)}
      short={t(`projects.items.${project.id}.short`, '')}
      ctaLabel={t('projects.viewLive')}
      tabIndex={tabIndex}
    />
  )
}

export default function ProjectMarquee({ items = [], label }) {
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 899px)')
  const reduced = useReducedMotion()

  const loop = useMemo(() => {
    if (!items.length) return []
    const sequence = [...items]
    while (sequence.length < 4) {
      sequence.push(...items)
    }
    return [...sequence, ...sequence].map((project, index) => ({
      project,
      index,
      duplicate: index >= sequence.length,
    }))
  }, [items])

  if (!items.length) return null

  if (!isMobile) {
    return (
      <div className={styles.projectGrid} aria-label={label}>
        {items.map((project) => (
          <div className={styles.projectGridItem} key={project.id}>
            <Card project={project} t={t} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className={`${styles.projectMarquee} ${reduced ? styles.projectMarqueeStatic : ''}`}
      aria-label={label}
    >
      <div className={styles.projectTrack}>
        {loop.map(({ project, index, duplicate }) => (
          <div
            className={styles.projectSlide}
            key={`${project.id}-${index}`}
            aria-hidden={duplicate || undefined}
          >
            <Card project={project} t={t} tabIndex={duplicate ? -1 : undefined} />
          </div>
        ))}
      </div>
    </div>
  )
}
