// ─────────────────────────────────────────────────────────────
// Parts catalogue. Categories reflect the live store's real
// ranges; products are REAL listings pulled from the live
// Major Car Parts catalogue (photos in /public/images/parts).
// ─────────────────────────────────────────────────────────────

export interface PartCategory {
  name: string;
  icon: string;
  blurb: string;
  image: string;
}

// Six ranges, each shown with a real product photo (grid stays a
// multiple of the column count).
export const partCategories: PartCategory[] = [
  {
    name: 'Bumpers & Reinforcements',
    icon: 'Car',
    blurb: 'Front and rear bumpers, with grilles, undertrays and reinforcements.',
    image: '/images/parts/volkswagen-golf-8-r-line-2020-2023-front-bumper-with-grille.webp',
  },
  {
    name: 'Bonnets & Body Panels',
    icon: 'Layers',
    blurb: 'Bonnets, hoods and aluminium body panels for premium and mainstream makes.',
    image: '/images/parts/audi-a5-s-line-s5-2017-2024-bonnet-hood-panel-8w68230.webp',
  },
  {
    name: 'Fenders & Wings',
    icon: 'PanelTop',
    blurb: 'Front and rear wing panels and fenders, left and right side.',
    image: '/images/parts/audi-q5-s-line-2021-2024-front-bumper-undertray-cover.webp',
  },
  {
    name: 'Lighting & Accessories',
    icon: 'Lightbulb',
    blurb: 'LED headlights, fog lights, brackets and lighting accessories.',
    image: '/images/parts/bmw-x3-g01-x4-g02-2018-2021-front-left-led-fog-light.webp',
  },
  {
    name: 'Grilles & Trims',
    icon: 'LayoutGrid',
    blurb: 'Radiator grilles, wing arch mouldings and exterior trims.',
    image: '/images/parts/lexus-ct200h-2014-2020-front-bumper-radiator-grille-f.webp',
  },
  {
    name: 'Brackets & Sensors',
    icon: 'Cog',
    blurb: 'Mounting brackets, radar sensor mounts and the small parts that matter.',
    image: '/images/parts/mercedes-benz-cla-class-c118-2019-2023-front-radar-sensor-mo.webp',
  },
];

export interface Product {
  file: string;
  title: string;
  brand: string;
}

// Real listings from the live catalogue.
export const products: Product[] = [
  { file: 'volkswagen-golf-8-r-line-2020-2023-front-bumper-with-grille.webp', title: 'Volkswagen Golf 8 R-Line 2020–2023 Front Bumper With Grilles', brand: 'Volkswagen' },
  { file: 'mercedes-benz-a-class-w177-2019-2022-amg-front-bumper-with-g.webp', title: 'Mercedes-Benz A-Class W177 2019–2022 AMG Front Bumper with GT Grille', brand: 'Mercedes-Benz' },
  { file: 'mercedes-benz-a-class-w176-2016-2018-amg-a45-front-bumper-wi.webp', title: 'Mercedes-Benz A-Class W176 2016–2018 AMG A45 Front Bumper with Diamond Grille', brand: 'Mercedes-Benz' },
  { file: 'bmw-3-series-g20-lci-2023-onwards-front-bumper-trims.webp', title: 'BMW 3 Series G20 LCI 2023 Onwards Front Bumper Trims / M Sport / M340', brand: 'BMW' },
  { file: 'lexus-ct200h-2014-2020-front-bumper-radiator-grille-f.webp', title: 'Lexus CT200h 2014–2020 Front Bumper Radiator Grille / F Sport Look', brand: 'Lexus' },
  { file: 'audi-a5-s-line-s5-2017-2024-bonnet-hood-panel-8w68230.webp', title: 'Audi A5 S Line S5 2017–2024 Bonnet Hood Panel', brand: 'Audi' },
  { file: 'audi-q5-s-line-2021-2024-front-bumper-undertray-cover.webp', title: 'Audi Q5 S-Line 2021–2024 Front Bumper Undertray Cover', brand: 'Audi' },
  { file: 'audi-a4-b9-5-2020-2024-front-bumper-undertray-cover-8.webp', title: 'Audi A4 B9.5 2020–2024 Front Bumper Undertray Cover', brand: 'Audi' },
  { file: 'lexus-nx350h-2022-2026-front-right-wing-arch-moulding.webp', title: 'Lexus NX350h 2022–2026 Front Right Wing Arch Moulding Trim', brand: 'Lexus' },
  { file: 'bmw-x3-g01-x4-g02-2018-2021-front-left-led-fog-light.webp', title: 'BMW X3 G01 / X4 G02 2018–2021 Front Left LED Fog Light Lamp', brand: 'BMW' },
  { file: 'lexus-rx450-2013-2015-front-right-headlight-bracket-dr.webp', title: 'Lexus RX450 2013–2015 Front Right Headlight Bracket', brand: 'Lexus' },
  { file: 'mercedes-benz-cla-class-c118-2019-2023-front-radar-sensor-mo.webp', title: 'Mercedes-Benz CLA Class C118 2019–2023 Front Radar Sensor Mount Bracket', brand: 'Mercedes-Benz' },
  { file: 'toyota-hilux-2019-on-front-bumper-with-grilles-and-fog.webp', title: 'Toyota Hilux 2019-On Front Bumper with Grilles and Fog Lights', brand: 'Toyota' },
  { file: 'toyota-hilux-2019-on-genuine-complete-front-bumper-with.webp', title: 'Toyota Hilux 2019-On Genuine Complete Front Bumper with Grille', brand: 'Toyota' },
  { file: 'volkswagen-golf-7-5-gti-2017-2019-complete-front-bumper-wit.webp', title: 'Volkswagen Golf 7.5 GTI 2017–2019 Complete Front Bumper with Grilles', brand: 'Volkswagen' },
  { file: 'toyota-rav4-2018-2024-front-right-lower-door-moulding-t.webp', title: 'Toyota RAV4 2018–2024 Front Right Lower Door Moulding Trim', brand: 'Toyota' },
];

export const productImage = (p: Product) => `/images/parts/${p.file}`;

// Featured selection for the homepage (one strong shot per leading make).
export const featuredProducts: Product[] = [
  products[0], // VW Golf 8 bumper
  products[1], // Mercedes A-Class AMG bumper
  products[5], // Audi A5 bonnet
  products[4], // Lexus CT200h grille
  products[9], // BMW fog light
  products[12], // Toyota Hilux bumper
];

export function productsByBrand(brand: string) {
  return products.filter((p) => p.brand === brand);
}
