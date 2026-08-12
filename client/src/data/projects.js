export const projects = [
  {
    id: 'heba-fashion',
    name: 'Heba Fashion',
    category: 'ecommerce',
    image: '/images/projects/heba-fashion.jpg',
    logo: '/images/projects/heba-fashion-logo.png',
    url: 'https://hebafashionil.com/',
    technologies: ['React', 'E-commerce', 'Multilingual'],
    featured: true,
    overview:
      'A premium fashion e-commerce experience for Heba Fashion — elegant, multilingual, and built to convert.',
    challenge:
      'The brand needed a high-end online store that feels luxurious on mobile and desktop, supports Hebrew shopping flows, and presents collections with clear conversion paths.',
    solution:
      'We designed and developed a polished fashion storefront with a strong hero experience, clear product journeys, and a premium visual language around the Heba Fashion brand.',
    features: [
      'Premium fashion storefront',
      'Mobile-first shopping experience',
      'Collections and campaign pages',
      'Multilingual-ready interface',
    ],
    results: [
      'A luxurious digital brand presence',
      'Clear paths from discovery to purchase',
      'A storefront ready for ongoing growth',
    ],
  },
  {
    id: 'alal-marble',
    name: 'Alal Marble',
    category: 'websites',
    image: '/images/projects/alal-marble.jpg',
    logo: '/images/projects/alal-marble-logo.png',
    url: 'https://alal-marble.com/',
    technologies: ['React', 'Business Website', 'Lead Generation'],
    featured: true,
    overview:
      'A premium business website for Alal Marble — specialists in stone cladding reinforcement and building restoration across Israel.',
    challenge:
      'The company needed a strong digital presence that communicates expertise in high-risk restoration work, builds trust quickly, and drives quote requests from property managers and building committees.',
    solution:
      'We built a professional Hebrew website with clear services, project proof, process transparency, and strong conversion paths for calls and quote requests.',
    features: [
      'Professional service presentation',
      'Project showcase and trust signals',
      'Clear quote request flows',
      'Mobile-optimized business experience',
    ],
    results: [
      'A credible premium brand presence',
      'Clear paths to contact and quotes',
      'A website ready to convert local demand',
    ],
  },
  {
    id: 'shisha-kings',
    name: 'Shisha Kings',
    category: 'ecommerce',
    image: '/images/projects/shisha-kings.jpg',
    logo: '/images/projects/shisha-kings-logo.png',
    logoTone: 'dark',
    url: 'https://shishakingsil.com/',
    technologies: ['React', 'E-commerce', 'Multilingual'],
    featured: true,
    overview:
      'A dark, premium e-commerce store for Shisha Kings — built to showcase products and convert shoppers on mobile and desktop.',
    challenge:
      'The brand needed a bold online store that matches its lounge aesthetic, highlights new products and deals, and makes shopping simple in Hebrew.',
    solution:
      'We developed a polished dark-theme storefront with strong hero storytelling, clear product discovery paths, and a premium shopping experience around the Shisha Kings brand.',
    features: [
      'Premium dark-theme storefront',
      'Product discovery and promotions',
      'Mobile-first shopping flows',
      'Multilingual-ready interface',
    ],
    results: [
      'A distinctive brand shopping experience',
      'Clear paths from discovery to purchase',
      'A storefront ready for ongoing catalog growth',
    ],
  },
  {
    id: 'al-nour-bakery',
    name: 'Al-Nour Bakery',
    category: 'ecommerce',
    image: '/images/projects/al-nour-bakery.jpg',
    logo: '/images/projects/al-nour-bakery-logo.png',
    logoTone: 'dark',
    url: 'https://al-nour-bakery.com/',
    technologies: ['React', 'E-commerce', 'Hebrew'],
    featured: true,
    overview:
      'A warm, premium e-commerce experience for Al-Nour Bakery — a gluten-free bakery brand built for Hebrew shoppers.',
    challenge:
      'The bakery needed an inviting online store that communicates gluten-free trust, showcases products beautifully, and makes ordering simple on mobile and desktop.',
    solution:
      'We designed and developed a distinctive storefront with custom illustration, clear product journeys, and a friendly premium brand language around Al-Nour Bakery.',
    features: [
      'Custom brand-led storefront',
      'Product catalog and categories',
      'Mobile-first Hebrew shopping flows',
      'Pickup and delivery messaging',
    ],
    results: [
      'A distinctive gluten-free brand presence',
      'Clear paths from discovery to order',
      'A storefront ready for catalog growth',
    ],
  },
].map((project) => ({
  ...project,
  gallery: [project.image, project.logo, project.image].filter(Boolean),
}));

export const getProjectById = (id) => projects.find((project) => project.id === id);

export const categories = ['all', 'websites', 'ecommerce', 'crm', 'applications'];
