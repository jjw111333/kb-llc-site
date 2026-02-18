import LandingPage from '../components/LandingPage'

const DATA = {
  hero: {
    title: ['Connecting Japan & Korea,', 'from the ground.'],
    sub: 'JAPAN-BASED OPERATIONAL BRIDGE',
    cta: 'Contact Us',
  },
  about: {
    label: 'ABOUT US',
    title: 'Because we\'re here, we can do it.',
    desc: 'Based in Osaka, K&B LLC is your operational partner handling all on-the-ground work in Japan. From sourcing and inspection to packaging and shipping — we deliver the speed and quality that only a local presence can provide, supporting clients in Korea and beyond.',
    highlights: [
      { num: 'Osaka', label: 'Base' },
      { num: '24h', label: 'Support' },
      { num: '3 Lang', label: 'Coverage' },
    ],
  },
  services: {
    label: 'SERVICES',
    title: 'What We Do',
    items: [
      {
        icon: '📦', title: 'Sourcing & Purchasing',
        desc: 'Quick procurement of products across Japan, including limited editions and direct manufacturer orders.',
        tags: ['Sourcing', 'Limited Items', 'Direct Order'],
      },
      {
        icon: '🔍', title: 'Inspection & QC',
        desc: 'Careful item-by-item inspection with photo reports for complete peace of mind.',
        tags: ['Inspection', 'Photo Report', 'Quality'],
      },
      {
        icon: '🚀', title: 'Packing & Intl. Shipping',
        desc: 'Secure packaging and optimized shipping routes for reliable delivery to Korea and worldwide.',
        tags: ['Packing', 'Intl. Shipping', 'Korea Direct'],
      },
      {
        icon: '🤝', title: 'On-site Handling',
        desc: 'Trade show support, manufacturer negotiations, warehouse management — full on-the-ground operations.',
        tags: ['Trade Shows', 'Negotiation', 'Warehouse'],
      },
      {
        icon: '🌐', title: 'Inbound Support',
        desc: 'Helping overseas companies enter the Japanese market. From research to localization, we\'ve got you covered.',
        tags: ['Market Research', 'Localization', 'Entry Support'],
      },
      {
        icon: '📊', title: 'Consulting',
        desc: 'From cross-border strategy planning to execution — experienced, actionable consulting.',
        tags: ['Strategy', 'Cross-border', 'Execution'],
      },
    ],
  },
  process: {
    label: 'PROCESS',
    title: 'How It Works',
    steps: [
      { num: '01', title: 'Consultation', desc: 'We listen to your needs and propose the optimal service plan.' },
      { num: '02', title: 'Quotation', desc: 'Clear, transparent pricing tailored to your requirements.' },
      { num: '03', title: 'Execution', desc: 'Swift action from our Osaka base with regular progress updates.' },
      { num: '04', title: 'Delivery', desc: 'After inspection, shipped via the best route to your destination.' },
    ],
  },
  contact: {
    label: 'CONTACT',
    title: 'Let\'s talk about your needs.',
    sub: 'B2B2C, logistics, on-site operations, consulting\nWe welcome inquiries of any scale.',
    cta: 'Send Email',
    email: 't-osa@kandbcorp.com',
    info: [
      { label: 'EMAIL', value: 't-osa@kandbcorp.com' },
      { label: 'TEL', value: '06-7777-1837' },
      { label: 'LOCATION', value: 'Osaka, Japan' },
      { label: 'HOURS', value: '10:00–18:00 JST' },
    ],
  },
  footer: '© 2026 K&B LLC',
}

export default function EnPage() {
  return <LandingPage lang="en" data={DATA} />
}
