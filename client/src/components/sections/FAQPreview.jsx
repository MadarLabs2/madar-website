import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import FAQItem from '../ui/FAQItem'
import SectionHeading from '../ui/SectionHeading'
import { faqItems } from '../../data/faq'
import styles from './sections.module.css'

export default function FAQPreview() {
  const { t } = useTranslation()
  const preview = faqItems.slice(0, 4)

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} ${styles.faqWrap}`}>
        <SectionHeading
          eyebrow={t('home.faq.eyebrow')}
          title={t('home.faq.title')}
          subtitle={t('home.faq.subtitle')}
          align="center"
        />
        {preview.map((item, i) => (
          <FAQItem
            key={item.id}
            question={t(item.questionKey)}
            answer={t(item.answerKey)}
            defaultOpen={i === 0}
          />
        ))}
        <div className={styles.faqLink}>
          <Button to="/faq" variant="ghost">{t('common.readMore')}</Button>
        </div>
      </div>
    </section>
  )
}
