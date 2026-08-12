import { useState } from 'react'
import { Send, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import MagneticButton from '../components/ui/MagneticButton'
import api from '../utils/api'
import styles from './pages.module.css'

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
}

export default function ContactForm() {
  const { t } = useTranslation()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = ({ target }) => {
    setValues((current) => ({ ...current, [target.name]: target.value }))
    setErrors((current) => ({ ...current, [target.name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!values.fullName.trim()) next.fullName = t('contact.validation.required')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = t('contact.validation.email')
    if (!values.phone.trim()) next.phone = t('contact.validation.required')
    if (values.message.trim().length < 10) next.message = t('contact.validation.message')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (event) => {
    event.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      await api.submitContact({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      })
      setValues(initialValues)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <label className={`${styles.field} ${styles.fieldFull}`}>
        <span className={styles.label}>{t('contact.fields.name')}</span>
        <input
          className={styles.input}
          name="fullName"
          value={values.fullName}
          onChange={update}
          placeholder={t('contact.placeholders.name')}
          type="text"
          autoComplete="name"
        />
        {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{t('contact.fields.phone')}</span>
        <input
          className={styles.input}
          name="phone"
          value={values.phone}
          onChange={update}
          placeholder={t('contact.placeholders.phone')}
          type="tel"
          autoComplete="tel"
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{t('contact.fields.email')}</span>
        <input
          className={styles.input}
          name="email"
          value={values.email}
          onChange={update}
          placeholder={t('contact.placeholders.email')}
          type="email"
          autoComplete="email"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </label>

      <label className={`${styles.field} ${styles.fieldFull}`}>
        <span className={styles.label}>{t('contact.fields.message')}</span>
        <textarea
          className={`${styles.input} ${styles.textarea}`}
          name="message"
          value={values.message}
          onChange={update}
          placeholder={t('contact.placeholders.message')}
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </label>

      {status === 'success' && (
        <div className={`${styles.status} ${styles.successStatus}`} role="status">
          {t('contact.success')}
        </div>
      )}
      {status === 'error' && (
        <div className={`${styles.status} ${styles.errorStatus}`} role="alert">
          {t('contact.error')}
        </div>
      )}

      <div className={styles.fieldFull}>
        <MagneticButton type="submit" size="lg" fullWidth disabled={status === 'loading'}>
          {status === 'loading' ? t('common.loading') : t('contact.sendMessage')}
          <Send size={17} />
        </MagneticButton>
        <p className={styles.formPrivacy}>
          <ShieldCheck size={15} aria-hidden="true" />
          {t('contact.privacyNote')}
        </p>
      </div>
    </form>
  )
}
