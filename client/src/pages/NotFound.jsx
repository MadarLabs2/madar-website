import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Button from '../components/ui/Button'
import SEO from '../components/ui/SEO'
import styles from './pages.module.css'

export default function NotFound() {
  const { t } = useTranslation()
  return <section className={styles.notFound}><SEO title={t('notFound.title')} description={t('notFound.message')} /><div><motion.div className={styles.notFoundCode} initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, ease: [0.16,1,.3,1] }}>404</motion.div><motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}><h1>{t('notFound.title')}</h1><p>{t('notFound.message')}</p><Button to="/" size="lg"><ArrowLeft size={17} /> {t('notFound.cta', t('common.backHome'))}</Button></motion.div></div></section>
}
