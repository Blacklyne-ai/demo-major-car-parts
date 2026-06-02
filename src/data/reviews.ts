// ─────────────────────────────────────────────────────────────
// Reviews policy (per brief): use ONLY real, verifiable sources.
// We have no Google Place Details reviews to quote, and we must
// NOT reuse old-site testimonials or invent reviews. So we surface
// the REAL, verifiable eBay store aggregate (99.3% positive across
// 1,716 buyer reviews) as the trust anchor, and invite Google
// reviews to be collected post-launch. No fabricated quote cards.
// ─────────────────────────────────────────────────────────────

export const reviewsMeta = {
  // Real eBay store feedback — verifiable at site.ebayUrl
  ebay: {
    positive: '99.3%',
    count: 1716,
    label: 'positive feedback across 1,716 verified eBay buyer reviews',
  },
  // Google reviews: none available yet for the redesign.
  googleAvailable: false,
  googleNote:
    'Google reviews are being collected following launch — we invite every customer to leave a review on Google after their parts, fitting, body repair or spray paint.',
  stars: 5,
};
