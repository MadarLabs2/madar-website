import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export default function SEO({ title, description, image = '/og-image.svg', url, type = 'website' }) {
  const { t, i18n } = useTranslation()
  const fallbackTitle = t('seo.home.title')
  const fullTitle = !title
    ? fallbackTitle
    : /madar|مدار|מדאר/i.test(title)
      ? title
      : `${title} | MADAR`

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:site_name" content="MADAR" />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:locale" content={i18n.language === 'he' ? 'he_IL' : i18n.language === 'ar' ? 'ar_SA' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  )
}
