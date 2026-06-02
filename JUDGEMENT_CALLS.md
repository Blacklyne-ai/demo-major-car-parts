# Judgement Calls — Major Car Parts redesign

Decisions made during the build that an operator may want to review. Everything here is either grounded in the live site, the brief, or a documented fallback — nothing was invented for marketing effect.

## Brand colours: navy + ORANGE (not navy + red)
The brief proposed a navy `#0F1B2D` + red `#E63946` palette **but** instructed: *"IF actual logo when analysed has different brand colours PREFER THOSE."* The real Major Car Parts logo (downloaded from the live site) is **navy + vivid orange**. Exact hex sampled from the logo PNG:
- **Navy `#002D62`** (the "PARTS" badge)
- **Orange `#FF5500`** (the "MAJOR CAR" wordmark)

The entire palette is built from these. This is the correct application of the logo-authority rule.

## Site mood: LIGHT
The logo file is named "Logo_For_white_background" and the live store is a light Shopify site. Mood inherited = **light** (white/!light-grey body, light frosted-glass nav), with dramatic deep-navy dark sections (hero, footer, feature bands). No dark/light toggle. Matches the brief's "default to LIGHT" guidance.

## Logo usage
- Nav + light surfaces: original full-colour logo (`/logo.png`), cropped from the live-site asset.
- Dark surfaces (footer): white knockout (`/logo-white.png`) generated from the same asset for legibility on navy.
- Favicon: on-brand SVG monogram (navy square, orange "M").

## Reviews: real eBay aggregate + Google placeholder (no fabricated quotes)
The brief mandates **Google reviews only**, never old-site testimonials, never invented reviews. No Google Place Details were available, so per the brief's fallback we render a placeholder note inviting Google reviews post-launch. As the trust anchor we use the business's **real, verifiable eBay store rating** — `99.3% positive across 1,716 buyer reviews` — which is factual aggregate data (not a testimonial quote) linked to the live eBay store. We did **not** reproduce the three testimonial quotes found on the old site.

## Two phone numbers, two audiences
Per the brief: landline `020 3592 1629` (office/trade) and mobile `078 8633 4136` (direct/quick, also WhatsApp). Both are prominent `tel:` links; the mobile is the WhatsApp number (matches the live site's `wa.me/447886334136`).

## Email
`info@majorcarparts.co.uk` is asserted by the brief; the live homepage did not display an email. Used as given. **Operator: please confirm this inbox is monitored.**

## Address / map
`Unit K2 / K3, Chadwell Heath Industrial Park, Kemp Road, Dagenham, London RM8 1SL` — matches the brief and the live site. (A third-party directory listed "Unit M3"; we used K2/K3 per the brief + live site.) The Google Map embed and directions use an **address query** (no API key needed) for accuracy; the schema `geo` coordinates are approximate for the estate. **Operator: drop a precise pin if you want exact coordinates.**

## Content scope: e-commerce reality preserved alongside the workshop
The live site is primarily a Shopify/eBay parts store that **also** does body repair & paint. We preserved both: real product categories (bumpers, bonnets, wings, lighting, grilles, trims), the eBay store link, fast-UK-delivery / free-shipping-over-£80, 15+ years' experience, and the in-house fitting/body-repair/spray-paint services. Nothing was added that they don't offer.

## Brands shown
The brief's 7 headline brands (Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford) are featured. The fuller `allBrands` list (adds Volkswagen, Toyota, Land Rover, Jaguar, Kia, Nissan, Mitsubishi, Dodge) and the "coming soon" brands (MG, BYD, JAECOO, Hyundai) are **real, taken verbatim from the live catalogue**. No brand logo images are used (we don't hold official marks) — brands are shown as styled text marks, per the brief.

## Imagery provenance
- **Product photos (16):** the client's **own** real listings, downloaded from their live Shopify catalogue and optimised. Authentic.
- **Workshop / fitting / spray-booth / tools / engine shots:** brand-neutral stock automotive photography (Unsplash + previously-licensed automotive stock), used where the client had no usable photo. **Operator: replace with photos of your actual premises, team and workshop when available** for maximum authenticity.
- We explicitly avoided any sibling-project image containing competitor branding/number plates.

## Contact form: no backend (mailto/WhatsApp)
This is a static site (no server). The quote/enquiry form composes a pre-filled email (or WhatsApp message) from the visitor's own client — no backend, nothing stored. Contact tiles (WhatsApp / phone / email) are the primary path. If you want submissions captured server-side, wire the form to a form endpoint (e.g. Formspree, or a Cloudflare Pages Function).

## Legal pages
Privacy, Cookie and Terms pages are professional UK GDPR/PECR/England-&-Wales drafts using the real business details. They deliberately contain **no** invented company-registration, VAT or ICO numbers. **Operator: have these reviewed and add your registration details before relying on them.**

## Typography: matched to the original site (Unbounded)
The brief suggested Archivo + Inter, but the real majorcarparts.co.uk theme uses **`Unbounded`** for headings (its distinctive brand display font) with a **Helvetica/Arial** body. Per operator feedback ("the font isn't the old site's"), the site now uses **Unbounded headings + Helvetica/Arial body** to match the original brand. Heading sizes/weights/tracking were tuned down because Unbounded is a wider, rounded face.

## Buttons: flat & slim (not glossy)
Per operator feedback ("buttons look like 2010"), buttons were rebuilt **flat**: solid brand-colour fills, no vertical gloss gradient, no bevel/inset highlight, no shimmer sweep, minimal shadow, slimmer padding and a subtle 1px hover lift — a clean 2027 look.

_Last updated: 2 June 2026._
