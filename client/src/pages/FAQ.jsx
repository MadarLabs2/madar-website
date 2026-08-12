import { useTranslation } from 'react-i18next'
import CTASection from '../components/ui/CTASection'
import FAQItem from '../components/ui/FAQItem'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/ui/SEO'
import { faqItems } from '../data/faq'
import styles from './pages.module.css'

export default function FAQ() {
  const { t } = useTranslation()
  return <div className={styles.page}>
    <SEO title={t('seo.faq.title')} description={t('seo.faq.description')} />
    <PageHero eyebrow={t('nav.faq')} title={t('faq.title')} subtitle={t('faq.subtitle')} />
    <section className={styles.section}><div className={`container ${styles.faqList}`}>{faqItems.map((item, index) => <FAQItem key={item.id} question={t(item.questionKey)} answer={t(item.answerKey)} defaultOpen={index === 0} />)}</div></section>
    <CTASection />
  </div>
}
