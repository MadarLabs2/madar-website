const definitions = [
  ['01', 'web-development', 'globe', ['React', 'Node.js', 'TypeScript', 'Vite']],
  ['02', 'landing-pages', 'layout', ['React', 'Framer Motion', 'SEO', 'Analytics']],
  ['03', 'crm-systems', 'users', ['React', 'Node.js', 'PostgreSQL', 'Supabase']],
  ['04', 'mobile-applications', 'smartphone', ['React Native', 'TypeScript', 'REST APIs']],
];

export const services = definitions.map(([number, slug, icon, technologies]) => {
  const key = `services.${slug}`;
  return {
    id: number,
    slug,
    icon,
    number,
    titleKey: `${key}.title`,
    shortKey: `${key}.short`,
    descriptionKey: `${key}.description`,
    features: [0, 1, 2, 3].map((index) => `${key}.features.${index}`),
    technologies,
    benefits: [0, 1, 2].map((index) => `${key}.benefits.${index}`),
    process: [0, 1, 2, 3].map((index) => `${key}.process.${index}`),
    faq: [0, 1, 2].map((index) => ({
      qKey: `${key}.faq.${index}.q`,
      aKey: `${key}.faq.${index}.a`,
    })),
    seo: {
      titleKey: `seo.${slug}.title`,
      descriptionKey: `seo.${slug}.description`,
    },
  };
});

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
