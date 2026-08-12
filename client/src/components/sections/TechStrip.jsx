import { technologies } from '../../data/technologies'
import styles from './sections.module.css'

export default function TechStrip() {
  const labels = technologies.map((tech) => tech.label)
  const repeated = [...labels, ...labels]

  return (
    <div className={styles.strip} aria-label="Technologies">
      <div className={styles.track}>
        {repeated.map((tech, i) => (
          <span className={styles.techItem} key={`${tech}-${i}`}>{tech}</span>
        ))}
      </div>
    </div>
  )
}
