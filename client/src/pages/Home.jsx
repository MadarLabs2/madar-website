import { useTranslation } from 'react-i18next'
import SEO from '../components/ui/SEO'
import CTASection from '../components/ui/CTASection'
import HeroSection from '../components/sections/HeroSection'
import TechStrip from '../components/sections/TechStrip'
import WhatWeDo from '../components/sections/WhatWeDo'
import ServicesSection from '../components/sections/ServicesSection'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import WhyMadar from '../components/sections/WhyMadar'
import ProcessPreview from '../components/sections/ProcessPreview'
import StatsSection from '../components/sections/StatsSection'
import FAQPreview from '../components/sections/FAQPreview'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('seo.home.title')} description={t('seo.home.description')} />
      <HeroSection />
      <TechStrip />
      <WhatWeDo />
      <ServicesSection />
      <FeaturedProjects />
      <WhyMadar />
      <ProcessPreview />
      <StatsSection />
      <CTASection />
      <FAQPreview />
    </>
  )
}
