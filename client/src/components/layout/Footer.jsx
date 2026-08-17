import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.png'
import styles from './layout.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/madarlabs/'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

const quickLinks = [
  ['/', 'home'],
  ['/about', 'about'],
  ['/services', 'services'],
  ['/projects', 'projects'],
  ['/process', 'process'],
  ['/faq', 'faq'],
  ['/contact', 'contact'],
]

const legalLinks = [
  ['/privacy-policy', 'privacy'],
  ['/terms', 'terms'],
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="MADAR" />
          </Link>
          <p className={styles.footerDesc}>{t('footer.description')}</p>
          <a
            className={styles.footerSocial}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>

        <div>
          <h3 className={styles.footerTitle}>{t('footer.quickLinks')}</h3>
          <div className={styles.footerLinks}>
            {quickLinks.map(([to, key]) => (
              <Link to={to} key={to}>
                {t(`nav.${key}`)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className={styles.footerTitle}>{t('footer.contactDetails')}</h3>
          <div className={styles.footerContact}>
            <a href="mailto:hello@madar-il.com">
              <bdi dir="ltr">hello@madar-il.com</bdi>
            </a>
            <a href="tel:+972547267713">
              <bdi dir="ltr">+972 54-7267713</bdi>
            </a>
            <span>{t('footer.location')}</span>
          </div>
        </div>

        <div>
          <h3 className={styles.footerTitle}>{t('footer.legal')}</h3>
          <div className={styles.footerLinks}>
            {legalLinks.map(([to, key]) => (
              <Link to={to} key={to}>
                {t(`footer.${key}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>{t('footer.rights', { year: new Date().getFullYear() })}</span>
      </div>
    </footer>
  )
}
