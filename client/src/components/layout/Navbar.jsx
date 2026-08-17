import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import Button from '../ui/Button'
import { services } from '../../data/services'
import logo from '../../assets/logo.png'
import cn from '../../utils/cn'
import styles from './layout.module.css'

const primaryLinks = [
  ['/', 'home'],
  ['/about', 'about'],
]

const secondaryLinks = [
  ['/projects', 'projects'],
  ['/process', 'process'],
  ['/faq', 'faq'],
  ['/contact', 'contact'],
]

const listMotion = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.12 },
  },
}

const itemMotion = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const isRtl = ['ar', 'he'].includes((i18n.resolvedLanguage || 'he').split('-')[0])

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const origin = isRtl ? '8% 4%' : '92% 4%'
  let navIndex = 1

  return (
    <>
      <header className={cn(styles.nav, scrolled && styles.scrolled, mobileOpen && styles.navRaised)}>
        <div className={styles.navInner}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="MADAR" />
          </Link>

          <nav className={styles.links} aria-label="Main navigation">
            {primaryLinks.map(([to, key]) => (
              <NavLink
                key={to}
                className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                to={to}
              >
                {t(`nav.${key}`)}
              </NavLink>
            ))}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={styles.dropTrigger}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                {t('nav.services')} <ChevronDown size={13} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className={styles.mega}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {services.map((service) => (
                      <Link
                        className={styles.megaItem}
                        to={`/services/${service.slug}`}
                        key={service.slug}
                      >
                        <span className={styles.megaNumber}>{service.number}</span>
                        <span>
                          <span className={styles.megaTitle}>{t(service.titleKey)}</span>
                          <span className={styles.megaDesc}>{t(service.shortKey)}</span>
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {secondaryLinks.map(([to, key]) => (
              <NavLink
                key={to}
                className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                to={to}
              >
                {t(`nav.${key}`)}
              </NavLink>
            ))}
          </nav>

          <div className={styles.desktopActions}>
            <LanguageSwitcher />
            <Button to="/contact" size="sm">{t('nav.letsTalk')}</Button>
          </div>

          <div className={styles.mobileActions}>
            <LanguageSwitcher />
            <button
              type="button"
              className={cn(styles.menuToggle, mobileOpen && styles.menuToggleOpen)}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={styles.menuToggleBars} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ clipPath: `circle(0% at ${origin})` }}
            animate={{ clipPath: `circle(160% at ${origin})` }}
            exit={{ clipPath: `circle(0% at ${origin})` }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.mobileMenuGlow} aria-hidden="true" />
            <div className={styles.mobileMenuGrid} aria-hidden="true" />

            <motion.nav
              className={styles.mobileLinks}
              aria-label="Mobile navigation"
              variants={listMotion}
              initial="hidden"
              animate="show"
            >
              {primaryLinks.map(([to, key]) => {
                const index = String(navIndex++).padStart(2, '0')
                return (
                  <motion.div key={to} variants={itemMotion}>
                    <Link className={styles.mobileLink} to={to}>
                      <span className={styles.mobileIndex}>{index}</span>
                      <span className={styles.mobileLinkLabel}>{t(`nav.${key}`)}</span>
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div className={styles.mobileAccordion} variants={itemMotion}>
                {(() => {
                  const index = String(navIndex++).padStart(2, '0')
                  return (
                    <button
                      type="button"
                      className={cn(
                        styles.mobileLink,
                        styles.mobileAccordionTrigger,
                        mobileServicesOpen && styles.mobileAccordionOpen
                      )}
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((open) => !open)}
                    >
                      <span className={styles.mobileIndex}>{index}</span>
                      <span className={styles.mobileLinkLabel}>{t('nav.services')}</span>
                      <ChevronDown className={styles.mobileChevron} size={18} strokeWidth={2.4} />
                    </button>
                  )
                })()}
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      className={styles.mobileServices}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className={styles.mobileServicesInner}>
                        {services.map((service) => (
                          <Link
                            className={styles.mobileService}
                            to={`/services/${service.slug}`}
                            key={service.slug}
                          >
                            <span className={styles.mobileServiceNum}>{service.number}</span>
                            <span className={styles.mobileServiceCopy}>
                              <span className={styles.mobileServiceTitle}>{t(service.titleKey)}</span>
                              <span className={styles.mobileServiceDesc}>{t(service.shortKey)}</span>
                            </span>
                            <ArrowUpRight size={16} aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {secondaryLinks.map(([to, key]) => {
                const index = String(navIndex++).padStart(2, '0')
                return (
                  <motion.div key={to} variants={itemMotion}>
                    <Link className={styles.mobileLink} to={to}>
                      <span className={styles.mobileIndex}>{index}</span>
                      <span className={styles.mobileLinkLabel}>{t(`nav.${key}`)}</span>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.nav>

            <div className={styles.mobileFooter}>
              <p className={styles.mobileFooterNote}>{t('brand.tagline')}</p>
              <Button to="/contact" fullWidth>
                {t('common.startProject')}
              </Button>
              <a className={styles.mobileMail} href="mailto:hello@madar-il.com">
                hello@madar-il.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
