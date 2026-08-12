export const navLinks = [
  { id: 'home', labelKey: 'nav.home', href: '/' },
  { id: 'about', labelKey: 'nav.about', href: '/about' },
  { id: 'services', labelKey: 'nav.services', href: '/services', hasMenu: true },
  { id: 'projects', labelKey: 'nav.projects', href: '/projects' },
  { id: 'process', labelKey: 'nav.process', href: '/process' },
  { id: 'faq', labelKey: 'nav.faq', href: '/faq' },
  { id: 'contact', labelKey: 'nav.contact', href: '/contact' },
];

export const servicesMenuItems = [
  ['web-development', 'globe'],
  ['landing-pages', 'layout'],
  ['crm-systems', 'users'],
  ['mobile-applications', 'smartphone'],
].map(([slug, icon]) => ({
  id: slug,
  slug,
  icon,
  href: `/services/${slug}`,
  titleKey: `services.${slug}.title`,
  shortKey: `services.${slug}.short`,
}));
