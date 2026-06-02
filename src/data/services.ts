// ─────────────────────────────────────────────────────────────
// The four core offerings. The unique value proposition is the
// COMBINATION — a parts supplier that also fits, repairs and paints,
// all under one roof. "Parts" lives at /parts; the three workshop
// services live under /services/*.
// ─────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  icon: string; // Lucide name (see Icon.astro)
  image: string;
  eyebrow: string;
  tagline: string; // one line for cards
  lead: string; // intro paragraph for detail page
  features: { title: string; body: string; icon: string }[];
  includes: string[]; // "what's covered" checklist
  cta: string;
}

export const services: Service[] = [
  {
    slug: 'parts',
    href: '/parts',
    title: 'Car Parts Supply',
    navLabel: 'Parts',
    icon: 'Car',
    image: '/images/parts/volkswagen-golf-8-r-line-2020-2023-front-bumper-with-grille.webp',
    eyebrow: 'Genuine & Quality Parts',
    tagline:
      'Genuine and quality parts for Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford and many more.',
    lead:
      'With over 15 years in the automotive industry, we supply compatible, quality-checked parts at affordable prices and get you back on the road. Bumpers, bonnets, wings, lighting, grilles, trims and more — sourced for premium and mainstream makes alike.',
    features: [
      { title: 'Premium & mainstream makes', body: 'Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford, Volkswagen, Toyota and more.', icon: 'ShieldCheck' },
      { title: 'Quality you can trust', body: 'Every item is checked to meet high standards of performance, durability and finish.', icon: 'Award' },
      { title: 'Fast UK delivery', body: 'Order online or in person — quick dispatch across the UK, free shipping over £80.', icon: 'Truck' },
      { title: 'Can’t find a part?', body: 'Tell us the make, model and year — we’ll source it. Many more brands available on request.', icon: 'Search' },
    ],
    includes: [
      'Front & rear bumpers with grilles',
      'Bonnets, wings & fender panels',
      'Headlights, fog lights & lighting',
      'Radiator packs & cooling',
      'Trims, mouldings & accessories',
      'Brackets, sensors & fittings',
    ],
    cta: 'Get a Parts Quote',
  },
  {
    slug: 'fitting',
    href: '/services/fitting',
    title: 'Parts Fitting',
    navLabel: 'Parts Fitting',
    icon: 'Wrench',
    image: '/images/stock/garage-2.jpg',
    eyebrow: 'Buy & Fit Under One Roof',
    tagline: 'Buy the part and have it fitted in the same place — no second garage needed.',
    lead:
      'Most parts suppliers send you elsewhere to get the work done. We don’t. Buy your part from us and our in-house team will fit it for you — one trip, one team, one bill. Multi-brand expertise from everyday runarounds to premium and EV models.',
    features: [
      { title: 'One-stop convenience', body: 'No sourcing a separate garage — buy and fit in the same visit.', icon: 'CircleCheck' },
      { title: 'Multi-brand expertise', body: 'Confident across Lexus, Mercedes, BMW, Audi, Tesla, Range Rover, Ford and more.', icon: 'Settings' },
      { title: 'Correct first time', body: 'Fitted by the people who supplied the part, so it fits and works as it should.', icon: 'Wrench' },
      { title: 'Quick turnaround', body: 'Many fittings completed the same day — call ahead and we’ll book you in.', icon: 'Clock' },
    ],
    includes: [
      'Bumper & panel fitting',
      'Lighting & electrical fitting',
      'Grille, trim & moulding fitting',
      'Radiator & cooling fitting',
      'Replacement of supplied parts',
      'Advice on what your vehicle needs',
    ],
    cta: 'Book a Fitting',
  },
  {
    slug: 'body-repair',
    href: '/services/body-repair',
    title: 'Body Repair',
    navLabel: 'Body Repair',
    icon: 'Hammer',
    image: '/images/parts/mercedes-benz-a-class-w176-2016-2018-amg-a45-front-bumper-wi.webp',
    eyebrow: 'Panels, Dents & Accident Damage',
    tagline: 'Professional in-house body repair — from minor dents to accident damage.',
    lead:
      'When a panel needs more than a swap, our in-house body repair team puts it right. Dents, scrapes, accident damage and panel work — repaired to a clean, factory-style finish, then refinished in our spray booth if needed.',
    features: [
      { title: 'Accident damage', body: 'Front-end, rear-end and side impact repairs returned to a straight, true finish.', icon: 'Hammer' },
      { title: 'Dents & panel work', body: 'Dents removed and panels reshaped or replaced where repair isn’t enough.', icon: 'CircleDot' },
      { title: 'Parts on hand', body: 'We stock the panels — bumpers, wings and bonnets — so repairs aren’t held up.', icon: 'Car' },
      { title: 'Finished properly', body: 'Repairs flow straight into our spray paint service for a seamless colour match.', icon: 'Brush' },
    ],
    includes: [
      'Accident & collision repair',
      'Dent removal & panel reshaping',
      'Bumper & panel replacement',
      'Wing, bonnet & door repairs',
      'Preparation for respray',
      'Quality-checked finish',
    ],
    cta: 'Get a Body Repair Quote',
  },
  {
    slug: 'spray-paint',
    href: '/services/spray-paint',
    title: 'Spray Paint',
    navLabel: 'Spray Paint',
    icon: 'PaintBucket',
    image: '/images/spray-booth.jpg',
    eyebrow: 'Respray & Colour Matching',
    tagline: 'Professional respray, panel paint and colour matching in our booth.',
    lead:
      'From a single panel to a full respray, our spray paint service delivers an even, durable finish with accurate colour matching. The natural finishing step after a body repair, or a fresh colour for your vehicle.',
    features: [
      { title: 'Colour matching', body: 'Matched to your vehicle’s exact factory colour code for an invisible repair.', icon: 'Palette' },
      { title: 'Panel & full respray', body: 'Single panels through to complete colour changes, finished in-booth.', icon: 'Brush' },
      { title: 'Professional booth', body: 'Sprayed and cured in a controlled environment for a clean, even finish.', icon: 'SprayCan' },
      { title: 'Seamless with repair', body: 'Pairs with our body repair so damage is repaired and refinished in one place.', icon: 'CircleCheck' },
    ],
    includes: [
      'Single & multi-panel respray',
      'Full vehicle colour changes',
      'Factory colour-code matching',
      'Bumper & trim refinishing',
      'Post-repair refinishing',
      'Even, durable finish',
    ],
    cta: 'Get a Spray Paint Quote',
  },
];

export const partsService = services[0];
export const workshopServices = services.slice(1); // fitting, body-repair, spray-paint

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
