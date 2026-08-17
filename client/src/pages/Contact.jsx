import { Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import PageHero from '../components/ui/PageHero'
import SEO from '../components/ui/SEO'
import ScrollReveal from '../components/ui/ScrollReveal'
import ContactForm from './ContactForm'
import styles from './pages.module.css'

export default function Contact() {
  const { t } = useTranslation()
  return <div className={styles.page}>
    <SEO title={t('seo.contact.title')} description={t('seo.contact.description')} />
    <PageHero eyebrow={t('nav.contact')} title={t('contact.title')} subtitle={t('contact.subtitle')} />
    <section className={styles.section}><div className={`container ${styles.split}`}>
      <ScrollReveal className={styles.sticky}><h2 className={styles.displayCopy}>{t('common.haveIdea')}</h2><p className={styles.bodyCopy}>{t('contact.subtitle')}</p><div className={styles.list}><a href="mailto:hello@madar-il.com"><Mail size={17} /> hello@madar-il.com</a><span><MapPin size={17} /> {t('footer.location')}</span></div></ScrollReveal>
      <ScrollReveal className={styles.card}><ContactForm /></ScrollReveal>
    </div></section>
  </div>
}
