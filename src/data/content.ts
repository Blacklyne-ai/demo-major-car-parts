// ─────────────────────────────────────────────────────────────
// Editorial content. Anchored to verbatim facts from the live
// site (15+ years experience, quality commitment, brand range,
// Chadwell Heath industrial estate, parts + in-house workshop).
// No invented prices, no invented dates beyond "15+ years".
// ─────────────────────────────────────────────────────────────

export const whyIntro =
  'We’re committed to supplying compatible parts at affordable prices and getting you back on the road. With over 15 years of experience in the automotive industry, we take pride in our deep knowledge and make sure every item we offer meets the highest standards of performance, durability and quality — then we fit, repair and paint it for you, in-house.';

export interface WhyItem { title: string; subtitle: string; body: string; icon: string; }

export const whyChooseUs: WhyItem[] = [
  {
    title: 'All Major Brands Covered',
    subtitle: 'Premium & mainstream',
    body: 'Genuine and quality parts for Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford and many more — from everyday models to premium and EV.',
    icon: 'ShieldCheck',
  },
  {
    title: 'In-House Workshop',
    subtitle: 'Parts + fitting together',
    body: 'We don’t send you elsewhere. Fitting, body repair and spray paint all happen under our own roof, so the people who supply the part finish the job.',
    icon: 'Settings',
  },
  {
    title: 'Trade Friendly',
    subtitle: 'B2B & private welcome',
    body: 'Garages and workshops buy parts and use us for overflow fitting; private customers get the same parts and the same care. Everyone’s welcome.',
    icon: 'Award',
  },
  {
    title: 'Easy to Find, Easy to Park',
    subtitle: 'Chadwell Heath, East London',
    body: 'Based on Chadwell Heath Industrial Park, Kemp Road — a trade-friendly estate with space to pull in, drop off and collect.',
    icon: 'MapPin',
  },
  {
    title: '15+ Years’ Experience',
    subtitle: 'Deep automotive knowledge',
    body: 'Over fifteen years in the automotive parts trade means we know what fits, what lasts and how to get you the right part first time.',
    icon: 'Clock',
  },
  {
    title: 'Quality, Guaranteed',
    subtitle: 'Checked & trusted',
    body: 'Every part is checked to high standards before it reaches you — reflected in a 99.3% positive rating across 1,716 verified buyer reviews.',
    icon: 'BadgeCheck',
  },
];

export interface Step { n: string; title: string; body: string; icon: string; }

export const processSteps: Step[] = [
  { n: '01', title: 'Tell us what you need', body: 'Send your vehicle make, model and year — by phone, WhatsApp or email. We confirm the right part.', icon: 'MessageCircle' },
  { n: '02', title: 'We source genuine, quality parts', body: 'From stock or sourced for you — bumpers, panels, lighting, trims and more, checked for quality.', icon: 'Search' },
  { n: '03', title: 'We fit, repair or paint in-house', body: 'Have it fitted, repair accident damage or respray a panel — all handled by our own workshop.', icon: 'Wrench' },
  { n: '04', title: 'You drive away', body: 'One trip, one team, one bill. The part supplied, fitted and finished — and you’re back on the road.', icon: 'CircleCheck' },
];

export const aboutStory: string[] = [
  'Major Car Parts is a car parts and accessories supplier with a full in-house workshop, based on Chadwell Heath Industrial Park in East London. For over 15 years we’ve worked in the automotive industry, building deep knowledge of the parts that keep cars on the road.',
  'What makes us different is simple: we don’t just sell the part — we fit it, repair the bodywork around it and paint it, all under one roof. Most parts suppliers send you to a separate garage. We do the lot, so you make one trip instead of three.',
  'We supply genuine and quality parts for premium and mainstream makes alike — Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford and many more. Every item is checked to meet high standards of performance, durability and quality, at prices that get you back on the road without the main-dealer mark-up.',
  'Our industrial-estate home is built for the job: trade-friendly, easy to reach and easy to park, serving both garages buying parts and private customers wanting parts plus fitting. Whether you’re trade or driving in yourself, you get the same parts and the same care.',
];

export interface TradePoint { title: string; body: string; icon: string; }

export const tradeIntro =
  'Garages, bodyshops and workshops: buy parts from us and lean on our in-house team for overflow fitting, body repair and paint. One trade-friendly supplier on a Chadwell Heath industrial estate, with the brand range and the workshop to back it up.';

export const tradePoints: TradePoint[] = [
  { title: 'Trade-friendly pricing', body: 'Talk to us about trade terms on regular orders. Call the office on the landline to discuss what works for your business.', icon: 'Handshake' },
  { title: 'Open a trade account', body: 'Set up an account so repeat orders are quick and straightforward. Ask the team to get you started.', icon: 'FileText' },
  { title: 'Collection & delivery', body: 'Collect from the estate or arrange delivery — including fast UK shipping on stocked parts.', icon: 'Truck' },
  { title: 'Overflow workshop capacity', body: 'Send fitting, body repair or spray work our way when your own bays are full. We finish it properly.', icon: 'Settings' },
];

export interface Faq { q: string; a: string; }

export const faqs: Faq[] = [
  { q: 'Do you fit the parts you supply?', a: 'Yes. Buy the part from us and our in-house team can fit it in the same place — no need to source a separate garage. Call ahead and we’ll book you in.' },
  { q: 'Which vehicle brands do you cover?', a: 'Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover and Ford, plus Volkswagen, Toyota, Land Rover, Jaguar, Kia, Nissan, Mitsubishi, Dodge and many more. If you don’t see your make, ask — we can usually source it.' },
  { q: 'Do you do body repair and spray paint too?', a: 'We do. Alongside parts and fitting, our in-house workshop handles body repair (dents, panels, accident damage) and spray paint (panel respray, colour matching and full colour changes).' },
  { q: 'Can’t find a specific part?', a: 'Send us the make, model and year by phone, WhatsApp or email and we’ll source it. We carry hundreds of listings and can find many more on request.' },
  { q: 'Are you trade or private?', a: 'Both. Garages and workshops buy parts and use us for overflow fitting; private customers get the same parts plus fitting. Everyone’s welcome.' },
  { q: 'Where are you and how do I find you?', a: 'Unit K2 / K3, Chadwell Heath Industrial Park, Kemp Road, Dagenham, London RM8 1SL. We’re on the industrial estate — head in off Kemp Road and follow the units round; there’s space to pull in and park. Use the map on our Contact page for directions.' },
  { q: 'What are your opening hours?', a: 'Monday to Friday 8:30am–5:30pm and Saturday 8:30am–12:30pm. Closed Sundays. The Saturday morning opening is handy for private customers who can’t get in during the week.' },
  { q: 'Do you deliver?', a: 'Yes — we offer fast UK delivery on stocked parts, with free shipping on orders over £80. You can also order through our eBay store or collect in person.' },
];

export const getInTouch = {
  title: 'Need a part? Need it fitted? Let’s talk.',
  body: [
    'Tell us your vehicle make, model and year and what you’re after. We’ll confirm the right part, the price and whether you want us to fit, repair or paint it too.',
    'Call the landline for the office and trade enquiries, or the mobile for a quick direct answer. Prefer to type? Message us on WhatsApp or drop us an email.',
  ],
};
