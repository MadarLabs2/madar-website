import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import useReducedMotion from '../../hooks/useReducedMotion'
import AnimatedText from '../ui/AnimatedText'
import Button from '../ui/Button'
import MagneticButton from '../ui/MagneticButton'
import HeroBackground from './HeroBackground'
import watermark from '../../assets/logo-watermark.png'
import styles from './sections.module.css'

const nodes = ['website', 'landing', 'crm', 'app']

function HeroVisual() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 1400, damping: 48, mass: 0.06 })
  const y = useSpring(rawY, { stiffness: 1400, damping: 48, mass: 0.06 })
  const isTouch =
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  useEffect(() => {
    const el = ref.current
    if (!el || reduced || isTouch) return undefined

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const nx = (event.clientX - rect.left) / rect.width - 0.5
      const ny = (event.clientY - rect.top) / rect.height - 0.5
      rawX.set(nx * 36)
      rawY.set(ny * 28)
    }

    const onLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [rawX, rawY, reduced, isTouch])

  return (
    <motion.div
      ref={ref}
      className={`${styles.visual} ${reduced ? styles.visualStatic : ''}`}
      style={isTouch || reduced ? undefined : { x, y }}
    >
      <div className={styles.visualGlow} />

      <div className={`${styles.orbit} ${styles.orbit1}`}>
        <i className={`${styles.orbitDot} ${styles.orbitDotTL}`} />
        <i className={`${styles.orbitDot} ${styles.orbitDotTR}`} />
        <i className={`${styles.orbitDot} ${styles.orbitDotBR}`} />
        <i className={`${styles.orbitDot} ${styles.orbitDotBL}`} />
      </div>

      <div className={`${styles.orbit} ${styles.orbit2}`}>
        <i className={`${styles.orbitDot} ${styles.orbitDotTop}`} />
        <i className={`${styles.orbitDot} ${styles.orbitDotRight}`} />
        <i className={`${styles.orbitDot} ${styles.orbitDotBottom}`} />
      </div>

      <div className={styles.core}>MADAR</div>

      {nodes.map((node, i) => {
        if (reduced) {
          return (
            <div className={`${styles.flowCard} ${styles[`flow${i}`]}`} key={node}>
              {t(`hero.nodes.${node}`)}
            </div>
          )
        }

        const delay = `${(-(36 * i) / nodes.length).toFixed(3)}s`

        return (
          <div
            className={styles.orbitArm}
            key={node}
            style={{ animationDelay: delay }}
          >
            <div className={styles.flowCardSlot}>
              <div className={`${styles.flowCard} ${styles.flowCardSpin}`} style={{ animationDelay: delay }}>
                {t(`hero.nodes.${node}`)}
              </div>
            </div>
          </div>
        )
      })}
    </motion.div>
  )
}

export default function HeroSection() {
  const { t, i18n } = useTranslation()
  const heroRef = useRef(null)
  const [watermarkVisible, setWatermarkVisible] = useState(true)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setWatermarkVisible(entry.isIntersecting),
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>
      <HeroBackground />
      <img
        className={`${styles.watermark} ${watermarkVisible ? styles.watermarkVisible : ''}`}
        src={watermark}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <div className={styles.heroInner}>
        <div>
          <p className={styles.heroBrand}>
            <span className={styles.heroBrandAr}>{t('brand.arabic')}</span>
            <span className={styles.heroBrandDot} aria-hidden="true" />
            <span>{t('brand.name')}</span>
          </p>
          <AnimatedText
            key={i18n.language}
            as="h1"
            className={styles.headline}
            text={t('hero.headline')}
          />
          <p className={styles.heroOfferings}>{t('hero.offerings')}</p>
          <p className={styles.heroText}>{t('hero.sub')}</p>
          <div className={styles.heroActions}>
            <MagneticButton to="/contact" size="lg">
              {t('common.startProject')} <ArrowRight size={18} />
            </MagneticButton>
            <Button to="/services" variant="secondary" size="lg">
              <Play size={16} /> {t('common.exploreServices')}
            </Button>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
