import { useEffect, useMemo, useRef } from 'react'
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
  const { t, i18n } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 899px)')
  const reduced = useReducedMotion()
  const scrollerRef = useRef(null)
  const pausedRef = useRef(false)
  const resumeTimerRef = useRef(0)

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

  const isRtl = i18n.dir() === 'rtl'

  useEffect(() => {
    if (!isMobile || reduced) return undefined
    const el = scrollerRef.current
    if (!el) return undefined

    const pause = () => {
      pausedRef.current = true
      window.clearTimeout(resumeTimerRef.current)
    }

    const scheduleResume = () => {
      window.clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = window.setTimeout(() => {
        pausedRef.current = false
      }, 2000)
    }

    const half = () => el.scrollWidth / 2
    if (isRtl && half() > 0) {
      el.scrollLeft = half()
    }

    let frame = 0
    const tick = () => {
      if (!pausedRef.current) {
        const midpoint = half()
        if (midpoint > 0) {
          if (isRtl) {
            el.scrollLeft -= 0.55
            if (el.scrollLeft <= 0) el.scrollLeft += midpoint
          } else {
            el.scrollLeft += 0.55
            if (el.scrollLeft >= midpoint) el.scrollLeft -= midpoint
          }
        }
      }
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    el.addEventListener('pointerdown', pause)
    el.addEventListener('touchstart', pause, { passive: true })
    el.addEventListener('wheel', pause, { passive: true })
    el.addEventListener('pointerup', scheduleResume)
    el.addEventListener('pointercancel', scheduleResume)
    el.addEventListener('touchend', scheduleResume)
    el.addEventListener('touchcancel', scheduleResume)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(resumeTimerRef.current)
      el.removeEventListener('pointerdown', pause)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('wheel', pause)
      el.removeEventListener('pointerup', scheduleResume)
      el.removeEventListener('pointercancel', scheduleResume)
      el.removeEventListener('touchend', scheduleResume)
      el.removeEventListener('touchcancel', scheduleResume)
    }
  }, [isMobile, reduced, loop.length, isRtl])

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
      ref={scrollerRef}
      className={`${styles.projectMarquee} ${reduced ? styles.projectMarqueeStatic : ''}`}
      aria-label={label}
    >
      <div className={styles.projectTrack}>
        {loop.map(({ project, index, duplicate }) => (
          <div
            className={styles.projectSlide}
            dir={i18n.dir()}
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
//a