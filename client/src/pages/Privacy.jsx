import { useTranslation } from 'react-i18next'
import LegalContent from '../components/legal/LegalContent'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/ui/SEO'
import styles from './pages.module.css'

export default function Privacy() {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <SEO title={t('seo.privacy.title')} description={t('seo.privacy.description')} />
      <PageHero eyebrow="MADAR" title={t('privacy.title')} />
      <section className={styles.section}>
        <LegalContent
          updated={t('privacy.updated')}
          sections={t('privacy.sections', { returnObjects: true })}
        />
      </section>
    </div>
  )
}
