import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ui.module.css'

export default function ProjectCard({
  id,
  image,
  logo,
  logoTone = 'light',
  category,
  name,
  short,
  url,
  imageAlt = '',
  ctaLabel,
  tabIndex,
}) {
  const content = (
    <>
      <div className={styles.projectMedia}>
        <img className={styles.projectImage} src={image} alt={imageAlt || name} loading="lazy" />
        {logo && (
          <img
            className={`${styles.projectLogo} ${logoTone === 'dark' ? styles.projectLogoDark : ''}`}
            src={logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        )}
      </div>

      <div className={styles.projectBody}>
        {category && <span className={styles.projectCategory}>{category}</span>}
        <h3 className={styles.projectTitle}>{name}</h3>
        {short && <p className={styles.projectShort}>{short}</p>}
        {ctaLabel && (
          <span className={styles.projectAction}>
            {ctaLabel}
            <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden="true" />
          </span>
        )}
      </div>
    </>
  )

  if (url) {
    return (
      <a
        className={styles.project}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={tabIndex}
      >
        {content}
      </a>
    )
  }

  return (
    <Link to={`/project/${id}`} className={styles.project} tabIndex={tabIndex}>
      {content}
    </Link>
  )
}
