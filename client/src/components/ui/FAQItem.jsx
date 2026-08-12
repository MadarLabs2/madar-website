import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import cn from '../../utils/cn'
import styles from './ui.module.css'

export default function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  return (
    <div className={cn(styles.faq, open && styles.faqOpen)}>
      <button className={styles.faqButton} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(!open)}>
        <span>{question}</span><Plus className={styles.faqIcon} size={20} aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={panelId} className={styles.faqPanel} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <div className={styles.faqAnswer}>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
