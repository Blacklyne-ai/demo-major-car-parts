// ─────────────────────────────────────────────────────────────
// Major Car Parts — central site configuration.
// Every business fact is taken from the existing site
// (majorcarparts.co.uk) and the brief. Nothing invented.
// UK English throughout. Currency £ GBP. Phone format +44.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Major Car Parts',
  shortName: 'Major Car Parts',
  tagline: 'Your one-stop automotive solution',
  logoTagline: 'Car Parts · Fitting · Body Repair · Spray Paint',
  description:
    'Major Car Parts, Chadwell Heath — genuine and quality parts for Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford and many more, plus in-house fitting, body repair and spray paint. Call 020 3592 1629.',
  url: 'https://demo-major-car-parts.pages.dev',

  // Two numbers, two audiences (per brief)
  phoneLandline: '020 3592 1629', // office / trade
  phoneLandlineIntl: '+442035921629',
  phoneLandlineDigits: '442035921629',

  phoneMobile: '078 8633 4136', // direct / quick (also WhatsApp)
  phoneMobileIntl: '+447886334136',
  phoneMobileDigits: '447886334136',

  email: 'info@majorcarparts.co.uk',

  // eBay store — real, verifiable presence (99.3% positive, 1,716 reviews)
  ebayUrl: 'https://www.ebay.co.uk/str/majorpartsuk',

  // Pre-filled WhatsApp enquiry per brief
  whatsappMessage: 'Hi, I need car parts for my [vehicle make/model] please',

  address: {
    unit: 'Unit K2 / K3',
    estate: 'Chadwell Heath Industrial Park',
    street: 'Kemp Road',
    area: 'Chadwell Heath',
    city: 'Dagenham',
    region: 'East London',
    postcode: 'RM8 1SL',
    country: 'United Kingdom',
    countryCode: 'GB',
    // Approximate — Chadwell Heath Industrial Estate, Kemp Road.
    // Map embed/directions below use the address query for accuracy.
    lat: 51.5706,
    lng: 0.1379,
  },

  hours: [
    { day: 'Monday', open: '08:30', close: '17:30' },
    { day: 'Tuesday', open: '08:30', close: '17:30' },
    { day: 'Wednesday', open: '08:30', close: '17:30' },
    { day: 'Thursday', open: '08:30', close: '17:30' },
    { day: 'Friday', open: '08:30', close: '17:30' },
    { day: 'Saturday', open: '08:30', close: '12:30' },
    { day: 'Sunday', open: null, close: null },
  ] as { day: string; open: string | null; close: string | null }[],

  hoursSummary: [
    { label: 'Monday – Friday', value: '8:30am – 5:30pm' },
    { label: 'Saturday', value: '8:30am – 12:30pm' },
    { label: 'Sunday', value: 'Closed' },
  ],

  // Verifiable figures from their live store / eBay (not testimonials)
  stats: {
    yearsExperience: 15,
    productsSold: 5000,
    listings: 800,
    ebayPositivePct: '99.3%',
    ebayReviewCount: 1716,
  },

  // eBay feedback used as the headline rating (real, verifiable)
  rating: {
    value: '4.9',
    count: 1716,
    positive: '99.3%',
    source: 'eBay',
  },

  // Google Maps — address-query based (no API key needed, accurate)
  googleMapsEmbed:
    'https://www.google.com/maps?q=Chadwell+Heath+Industrial+Park,+Kemp+Road,+Dagenham+RM8+1SL&z=15&output=embed',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Chadwell+Heath+Industrial+Park+Kemp+Road+RM8+1SL',
  googleDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Chadwell+Heath+Industrial+Park+Kemp+Road+Dagenham+RM8+1SL',
};

// ── Link helpers ──────────────────────────────────────────────
export const telLandline = `tel:${site.phoneLandlineIntl}`;
export const telMobile = `tel:${site.phoneMobileIntl}`;
export const mailLink = `mailto:${site.email}`;
export const whatsappLink = `https://wa.me/${site.phoneMobileDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function whatsappFor(subject: string) {
  return `https://wa.me/${site.phoneMobileDigits}?text=${encodeURIComponent(subject)}`;
}
export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// ── Navigation ────────────────────────────────────────────────
export interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export const nav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/parts', label: 'Parts' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'All Services' },
      { href: '/services/fitting', label: 'Parts Fitting' },
      { href: '/services/body-repair', label: 'Body Repair' },
      { href: '/services/spray-paint', label: 'Spray Paint' },
    ],
  },
  { href: '/brands', label: 'Brands' },
  { href: '/trade', label: 'Trade' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const legalNav = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/terms', label: 'Terms' },
];

// ── Brands served ─────────────────────────────────────────────
// 7 headline brands from the brief, displayed prominently.
export const featuredBrands = [
  'Lexus',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Tesla',
  'Range Rover',
  'Ford',
];

// Full list evidenced by the live catalogue + brief (real stock).
export const allBrands = [
  'Lexus',
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Tesla',
  'Range Rover',
  'Land Rover',
  'Ford',
  'Volkswagen',
  'Toyota',
  'Jaguar',
  'Kia',
  'Nissan',
  'Mitsubishi',
  'Dodge',
];

// Coming soon — verbatim from the live site
export const comingSoonBrands = ['MG', 'BYD', 'JAECOO', 'Hyundai'];

// ── Trust signals ─────────────────────────────────────────────
export const trustSignals = [
  'All Major Brands',
  'In-House Fitting',
  'Body Repair',
  'Spray Paint',
];
