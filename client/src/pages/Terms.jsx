import { useTranslation } from 'react-i18next'
import LegalContent from '../components/legal/LegalContent'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/ui/SEO'
import styles from './pages.module.css'

export default function Terms() {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <SEO title={t('seo.terms.title')} description={t('seo.terms.description')} />
      <PageHero eyebrow="MADAR" title={t('terms.title')} />
      <section className={styles.section}>
        <LegalContent
          updated={t('terms.updated')}
          sections={t('terms.sections', { returnObjects: true })}
        />
      </section>
    </div>
  )
}
