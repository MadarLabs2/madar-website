import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ServiceIcon } from '../../utils/serviceIcons'
import cn from '../../utils/cn'
import styles from './ui.module.css'

export default function ServiceCard({ number, icon, title, short, slug, className }) {
  return (
    <Link to={`/services/${slug}`} className={cn(styles.serviceCard, styles.glass, className)}>
      <div className={styles.cardTop}>
        <ServiceIcon className={styles.serviceIcon} name={icon} />
        <span>{String(number).padStart(2, '0')}</span>
      </div>
      <div className={styles.cardBody}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardText}>{short}</p></div>
      <ArrowUpRight className={styles.cardArrow} size={20} aria-hidden="true" />
    </Link>
  )
}
