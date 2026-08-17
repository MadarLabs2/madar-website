import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import cn from '../../utils/cn'
import styles from './ui.module.css'

const languages = [
  { code: 'he', label: 'עברית', dir: 'rtl' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'en', label: 'English', dir: 'ltr' },
]

export default function LanguageSwitcher({ onChange, align = 'end' }) {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const menuId = useId()
  const current = (i18n.resolvedLanguage || i18n.language || 'he').split('-')[0]

  const change = async (language) => {
    await i18n.changeLanguage(language.code)
    document.documentElement.lang = language.code
    document.documentElement.dir = language.dir
    localStorage.setItem('i18nextLng', language.code)
    setOpen(false)
    onChange?.(language.code, language.dir)
  }

  useEffect(() => {
    if (!open) return undefined
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={cn(styles.language, align === 'start' && styles.languageStart)} ref={rootRef}>
      <button
        type="button"
        className={cn(styles.langTrigger, open && styles.langTriggerOpen)}
        aria-label={t('common.language')}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <Globe size={18} strokeWidth={1.75} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            className={styles.langMenu}
            role="listbox"
            aria-label={t('common.language')}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {languages.map((language) => {
              const selected = language.code === current
              return (
                <button
                  key={language.code}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={cn(styles.langOption, selected && styles.langOptionActive)}
                  onClick={() => change(language)}
                >
                  <span className={styles.langOptionLabel}>{language.label}</span>
                  {selected && <Check size={16} aria-hidden="true" />}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
