// =========================================================================
// UNI FINE JEWELRY â COMPREHENSIVE LUXURY PRODUCT CATALOG
// Generated from computer vision analysis of all discovered shop assets.
// =========================================================================

export interface VisualAttributes {
  visibleStone: string;
  apparentMetalColor: string;
  design: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Rings" | "Earrings" | "Necklaces" | "Bracelets" | "Bangles";
  image: string;
  gallery: string[];
  shortDescription: string;
  visualAttributes: VisualAttributes;
  price: number | null;
  priceLabel: string;
  featured: boolean;
  identificationConfidence: "high" | "medium" | "needs_review";
}

export const PRODUCTS: Product[] = [
  {
    "id": "uni-earr-001",
    "slug": "lumi-re-diamond-drop-earrings",
    "name": "Lumière Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/00fcf0b4-b89b-49a3-b96b-a22ae9798755.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-002",
    "slug": "the-lumi-re-diamond-solitaire-ring",
    "name": "The Lumière Diamond Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/011bf89f-e246-42b2-8c9e-e27d16c0836b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-003",
    "slug": "the-verdant-emerald-line-bracelet",
    "name": "The Verdant Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/01727cce-ebf2-4ff5-92a4-415b26b9c611.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-004",
    "slug": "the-crimson-ruby-line-bracelet",
    "name": "The Crimson Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/03ea9b4f-1784-4bd3-8330-40f43491cb3d.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-005",
    "slug": "the-lumi-re-diamond-statement-collar-necklace",
    "name": "The Lumière Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/05816235-a8c9-4aac-878b-b906cd029087.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-006",
    "slug": "the-zambian-emerald-line-bracelet",
    "name": "The Zambian Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/063f659b-286f-44d5-994e-18b243b71e65.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-007",
    "slug": "the-c-leste-emerald-line-bracelet",
    "name": "The Céleste Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/083a9939-6cc5-4d5d-8930-2860652cbc17.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-008",
    "slug": "the-brilliant-diamond-statement-collar-necklace",
    "name": "The Brilliant Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/08e0f271-8511-41cf-a8a0-ff22bc038225.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-009",
    "slug": "the-royal-sapphire-halo-ring",
    "name": "The Royal Sapphire Halo Ring",
    "category": "Rings",
    "image": "/images/shop/09725cc1-c859-45ee-aaba-a7dabe8c7c45.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-010",
    "slug": "the-imperial-emerald-drop-earrings",
    "name": "The Imperial Emerald Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/09f6189a-449a-419e-851d-18df758620d8.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-011",
    "slug": "the-zambian-emerald-solitaire-ring",
    "name": "The Zambian Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/0b7b5a5c-8264-49f9-a841-8e7b983e002f.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-012",
    "slug": "the-solitaire-diamond-tennis-bracelet",
    "name": "The Solitaire Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/0cbf4b4b-1588-4267-b8e7-e2552360b236.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-013",
    "slug": "the-pigeon-blood-ruby-necklace",
    "name": "The Pigeon Blood Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/105be0aa-51df-4eea-b517-456fea6e48fd.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-014",
    "slug": "the-archival-multicolor-gemstone-line-bracelet",
    "name": "The Archival Multicolor Gemstone Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/10d17e37-db21-4474-999d-fa1da8164960.jpg",
    "gallery": [],
    "shortDescription": "An exceptional high jewelry heirloom piece combining natural gemstone beauty and artisanal white metal metallurgy.",
    "visualAttributes": {
      "visibleStone": "multicolor gemstone gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-015",
    "slug": "eternity-diamond-stud-earrings",
    "name": "Eternity Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/123de740-36ff-4372-9e4a-f3cfbd68b84a(1).jpg",
    "gallery": [
      "/images/shop/123de740-36ff-4372-9e4a-f3cfbd68b84a.jpg"
    ],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-016",
    "slug": "the-radiance-diamond-statement-collar-necklace",
    "name": "The Radiance Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/13d5b40e-943e-4785-8bfe-7b66b6e0680f.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-017",
    "slug": "the-c-leste-emerald-halo-ring",
    "name": "The Céleste Emerald Halo Ring",
    "category": "Rings",
    "image": "/images/shop/15ceb683-a154-4e57-8196-8e1eda24313e.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-018",
    "slug": "the-emerald-necklace",
    "name": "The Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/165fec09-fc03-4511-8610-1aed67214fd5.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-019",
    "slug": "the-sovereign-emerald-necklace",
    "name": "The Sovereign Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/17508a22-4038-4cdd-b160-efeb9d9b74b8.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-020",
    "slug": "the-solaris-ruby-line-bracelet",
    "name": "The Solaris Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/19a3bd61-45b7-41b6-98ed-8367d61d6861.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-021",
    "slug": "the-velvet-ruby-drop-earrings",
    "name": "The Velvet Ruby Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/1a180b90-5ab3-4ea3-ab88-5993e9f09c65.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-022",
    "slug": "the-ruby-solitaire-ring",
    "name": "The Ruby Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/1ae5d09d-2cd6-4bc4-9456-2b00d975e5b4.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous yellow gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "yellow gold",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-023",
    "slug": "solitaire-diamond-stud-earrings",
    "name": "Solitaire Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/1b58c76f-9601-4322-b074-b6f187e98b02.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-024",
    "slug": "the-botanical-emerald-necklace",
    "name": "The Botanical Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/1e1fb37f-f04a-48ce-8e69-299caf267767.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-025",
    "slug": "the-prismatic-diamond-statement-collar-necklace",
    "name": "The Prismatic Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/1fc9d413-a9cc-4967-bf47-10f1e8377994.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-026",
    "slug": "the-prismatic-diamond-tennis-bracelet",
    "name": "The Prismatic Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/231aff2b-c148-4f7e-a5f0-2c3d30b3596c.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-027",
    "slug": "the-florentine-ruby-solitaire-necklace",
    "name": "The Florentine Ruby Solitaire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/2384671f-8776-4cc6-905b-15380c55b1a4.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-earr-028",
    "slug": "the-rouge-ruby-earrings",
    "name": "The Rouge Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/24d33fca-a1f3-4144-a347-9738d2b5fbef.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous yellow gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "yellow gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-029",
    "slug": "the-aura-diamond-tennis-bracelet",
    "name": "The Aura Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/27018497-fe40-492e-a400-e1002718872c.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-030",
    "slug": "the-regal-emerald-necklace",
    "name": "The Regal Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/28d7e001-b828-4ca5-bd31-669428b59796.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-031",
    "slug": "the-lumi-re-diamond-statement-collar-necklace-2",
    "name": "The Lumière Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/28db094b-9e4e-494b-b918-e715828c55b5.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-032",
    "slug": "the-sovereign-emerald-solitaire-ring",
    "name": "The Sovereign Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/292a4a0c-1902-4f5f-95c1-89fbdc1f1815.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-033",
    "slug": "the-solaris-ruby-drop-earrings",
    "name": "The Solaris Ruby Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/3070eabb-486f-493e-bab7-a1155c53b5b4.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-034",
    "slug": "the-brilliant-diamond-statement-collar-necklace-2",
    "name": "The Brilliant Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/3160c29e-1f41-48c1-941d-a98d1fa02eb5.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-035",
    "slug": "prismatic-diamond-drop-earrings",
    "name": "Prismatic Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/342e5ca9-61ef-4a7f-b422-acf39aadc09a.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-036",
    "slug": "the-pigeon-blood-ruby-necklace-2",
    "name": "The Pigeon Blood Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/35e066f3-ea38-4dd4-84cf-843d43ff1d53.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-037",
    "slug": "the-timeless-diamond-tennis-bracelet",
    "name": "The Timeless Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/3655eeaf-1d5f-4cdd-9272-2c741202d170.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-038",
    "slug": "the-radiance-diamond-statement-collar-necklace-2",
    "name": "The Radiance Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/36be4fd4-791a-4ec0-b489-1ab66d518113.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-039",
    "slug": "aura-diamond-drop-earrings",
    "name": "Aura Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/384781b9-ef64-48d0-b07f-60d2ba42d1ba.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-040",
    "slug": "the-botanical-emerald-halo-ring",
    "name": "The Botanical Emerald Halo Ring",
    "category": "Rings",
    "image": "/images/shop/38f3217f-00c0-4e7a-8943-35b1d6c8fcb3.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-041",
    "slug": "the-solitaire-diamond-sculpted-necklace",
    "name": "The Solitaire Diamond Sculpted Necklace",
    "category": "Necklaces",
    "image": "/images/shop/39079af5-2965-44f9-b5a0-91567cd6f3a1.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-042",
    "slug": "the-scarlet-ruby-line-bracelet",
    "name": "The Scarlet Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/3b5a9ce6-ad98-417f-9834-16ffd7fe9607.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-043",
    "slug": "the-rouge-ruby-solitaire-necklace",
    "name": "The Rouge Ruby Solitaire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/3b83fdec-8034-4db5-8574-6b37cdac34e8.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-neck-044",
    "slug": "the-botanical-emerald-cabochon-necklace",
    "name": "The Botanical Emerald Cabochon Necklace",
    "category": "Necklaces",
    "image": "/images/shop/3c5d1443-111d-45fd-b2e0-dfabdeadcabf.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "cabochon"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-045",
    "slug": "the-prismatic-diamond-solitaire-ring",
    "name": "The Prismatic Diamond Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/3e409fce-e825-410b-8191-6d37d1c83f12.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-neck-046",
    "slug": "the-majestic-ruby-necklace",
    "name": "The Majestic Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/3eebf7ab-1b8b-4a27-a022-d4246886f5f1.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-047",
    "slug": "the-brilliant-diamond-tennis-bracelet",
    "name": "The Brilliant Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/408d5c4b-2f11-4844-b895-274fa8ea2898.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-048",
    "slug": "the-aura-diamond-statement-collar-necklace",
    "name": "The Aura Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/40dc32c5-90f6-4472-9189-5760f57de74c.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-049",
    "slug": "the-zambian-emerald-line-bracelet-2",
    "name": "The Zambian Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/41053a08-3ef8-493b-b709-d7c686ca1260.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-050",
    "slug": "the-regal-emerald-solitaire-necklace",
    "name": "The Regal Emerald Solitaire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/42a079d8-0489-4f87-8f0f-d554624f7a9a.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-brac-051",
    "slug": "the-radiance-diamond-tennis-bracelet",
    "name": "The Radiance Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/447b8f66-c4d5-4465-8efe-4ba0229f466a.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-052",
    "slug": "the-lumi-re-diamond-statement-collar-necklace-3",
    "name": "The Lumière Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/49241ca4-dfab-4d0b-8d90-7154827e93f8.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-053",
    "slug": "timeless-diamond-stud-earrings",
    "name": "Timeless Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/4a3b252d-7cae-4482-854f-85efd177c2e0.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-054",
    "slug": "the-imperial-emerald-necklace",
    "name": "The Imperial Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/4aa1859e-84f4-4fc0-9e78-7c7d43881fa4.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-055",
    "slug": "the-pigeon-blood-ruby-necklace-3",
    "name": "The Pigeon Blood Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/4d49c5cd-41da-43da-8631-0b501a3ecebe.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-056",
    "slug": "the-emerald-line-bracelet",
    "name": "The Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/4e3f56ba-457b-473f-97f4-8737642259a3.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-057",
    "slug": "the-radiance-diamond-statement-collar-necklace-3",
    "name": "The Radiance Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/4e4e87a9-61da-49c4-91ea-659d8520b34a.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-058",
    "slug": "the-sapphire-necklace",
    "name": "The Sapphire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/50165552-7728-4991-95fb-abff1abef959.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-059",
    "slug": "the-starlight-diamond-statement-collar-necklace",
    "name": "The Starlight Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/51a5f886-453f-4f79-a9e0-d25fdacf4b00.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-060",
    "slug": "the-starlight-diamond-tennis-bracelet",
    "name": "The Starlight Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/525a1440-0077-4b14-9e29-ff2cd5f57d8f.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-061",
    "slug": "the-solaris-ruby-line-bracelet-2",
    "name": "The Solaris Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/52ab3017-2726-42c4-aa41-b9396669858a.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-062",
    "slug": "the-aurora-emerald-line-bracelet",
    "name": "The Aurora Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/538081ec-6456-4670-aa84-09b18b4f8569.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-063",
    "slug": "the-opulent-emerald-line-bracelet",
    "name": "The Opulent Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/55349a26-c374-4cbd-8516-374fd9962488.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-064",
    "slug": "the-celestial-diamond-statement-collar-necklace",
    "name": "The Celestial Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/55a2c691-f8b5-4ea2-8be7-75e452ee9b97.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-065",
    "slug": "lumi-re-diamond-drop-earrings-2",
    "name": "Lumière Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/5a99cc6e-8bd9-41d9-be6d-0c2f81ac8300.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-066",
    "slug": "the-timeless-diamond-tennis-bracelet-2",
    "name": "The Timeless Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/5d1e4277-ee99-4808-add6-b71c9ff26acf.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-067",
    "slug": "the-verdant-emerald-line-bracelet-2",
    "name": "The Verdant Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/5d5eb917-8068-4a1a-ab2e-2f03e9d7cae3.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-068",
    "slug": "the-prismatic-diamond-statement-collar-necklace-2",
    "name": "The Prismatic Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/6274ce6f-1843-40a9-9046-8f6094c0ccd3.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-069",
    "slug": "the-crimson-ruby-line-bracelet-2",
    "name": "The Crimson Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/62d667d2-92b7-435c-8956-b476988b3e1d.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-070",
    "slug": "the-eternity-diamond-tennis-bracelet",
    "name": "The Eternity Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/6573be8b-92ba-4aac-b2ee-de8ff38b394b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-071",
    "slug": "the-c-leste-emerald-line-bracelet-2",
    "name": "The Céleste Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/65c9124e-822f-429e-9296-349c4af4fd9c.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-072",
    "slug": "the-crimson-ruby-drop-earrings",
    "name": "The Crimson Ruby Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/67da9ad6-8d0f-4ede-bb36-2c2ded239196.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-073",
    "slug": "the-zambian-emerald-drop-earrings",
    "name": "The Zambian Emerald Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/69c2314b-ebe8-4fe2-a756-d70e336e37b7.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-bang-074",
    "slug": "the-verdant-emerald-bangle",
    "name": "The Verdant Emerald Bangle",
    "category": "Bangles",
    "image": "/images/shop/6bbdccf3-366f-4c3c-a58a-afc4b227bebb.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-075",
    "slug": "the-aura-diamond-statement-collar-necklace-2",
    "name": "The Aura Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/6d022740-537d-4ed0-8c44-9cfe580a8041.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-076",
    "slug": "the-emerald-line-bracelet-2",
    "name": "The Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/6d98a036-e55d-4db4-9860-ae880c9b1fb7.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-077",
    "slug": "the-celestial-sapphire-necklace",
    "name": "The Celestial Sapphire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/6fdb4277-bc8d-4abf-92b4-59933d28894b.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-078",
    "slug": "the-lumi-re-diamond-statement-collar-necklace-4",
    "name": "The Lumière Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/7248a0bf-9418-4d2b-9bdc-c01ed0d917cc.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-079",
    "slug": "the-starlight-diamond-tennis-bracelet-2",
    "name": "The Starlight Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/738f80e4-00bd-4201-b5e4-46aebfdfe7d3.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-080",
    "slug": "the-solaris-ruby-line-bracelet-3",
    "name": "The Solaris Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/77cf99e7-25fc-415e-a1bc-7ebd24e054f0.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-081",
    "slug": "the-cornflower-sapphire-solitaire-ring",
    "name": "The Cornflower Sapphire Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/79dc87cf-d544-4b9c-a1df-6fb7f9c6e3f2.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-brac-082",
    "slug": "the-prismatic-diamond-tennis-bracelet-2",
    "name": "The Prismatic Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/79e3ae0c-d96e-4765-ae94-8dd69cd7e6d9.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-083",
    "slug": "the-florentine-ruby-line-bracelet",
    "name": "The Florentine Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/7c044bda-03ce-485c-b02c-b8cbbe9e187a.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-084",
    "slug": "the-crimson-ruby-necklace",
    "name": "The Crimson Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/7c701b49-fe5c-431c-a96e-d4dd0fb020eb.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-085",
    "slug": "the-regal-emerald-solitaire-ring",
    "name": "The Regal Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/7dcbc869-1fad-40c8-93b4-c27d6f3323a7.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-086",
    "slug": "radiance-diamond-drop-earrings",
    "name": "Radiance Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/7f03c36f-6489-4bae-a82a-4911d7bc132b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-087",
    "slug": "the-timeless-diamond-tennis-bracelet-3",
    "name": "The Timeless Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/7face929-9587-4e54-b3a3-110123feea6b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-088",
    "slug": "the-scarlet-ruby-line-bracelet-2",
    "name": "The Scarlet Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/829b372c-c05c-4cc8-9851-7123a3210947.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-089",
    "slug": "the-eternity-diamond-statement-collar-necklace",
    "name": "The Eternity Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/8366c2c6-e013-4fc5-8bbf-941fee4e63a6.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-090",
    "slug": "the-brilliant-diamond-tennis-bracelet-2",
    "name": "The Brilliant Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/8614f66f-2a11-4032-ba76-b307e566f69b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-091",
    "slug": "the-radiance-diamond-statement-collar-necklace-4",
    "name": "The Radiance Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/8721353c-6df8-4e44-b330-242dce4ea715.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-092",
    "slug": "the-solitaire-diamond-statement-collar-necklace",
    "name": "The Solitaire Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/876d9f7b-0589-430c-816d-cef166dc7631.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-093",
    "slug": "the-zambian-emerald-line-bracelet-3",
    "name": "The Zambian Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/87c28ede-b74a-479b-9623-ed1b7b662de3.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-094",
    "slug": "the-sovereign-emerald-necklace-2",
    "name": "The Sovereign Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/88846040-3933-4707-b00a-6333bf74d53c.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-095",
    "slug": "the-radiance-diamond-tennis-bracelet-2",
    "name": "The Radiance Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/888fb1a5-55ed-4150-8da8-dcc555075018.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-096",
    "slug": "the-emerald-line-bracelet-3",
    "name": "The Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/890b74c9-0ef4-4d52-80ea-e987865a5a3a.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-097",
    "slug": "the-nocturne-sapphire-line-bracelet",
    "name": "The Nocturne Sapphire Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/893c90b7-40dc-46ca-9ea8-56ff62c6c350.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-098",
    "slug": "the-celestial-diamond-statement-collar-necklace-2",
    "name": "The Celestial Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/8af30b4f-7d8b-4441-957d-69aeee48cb51.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-099",
    "slug": "the-celestial-diamond-tennis-bracelet",
    "name": "The Celestial Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/8b21b83e-d770-4124-b70b-22b1542c165b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-100",
    "slug": "the-prismatic-diamond-statement-collar-necklace-3",
    "name": "The Prismatic Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/8cbc79b9-0ecf-4504-8718-d37d17452df7.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-101",
    "slug": "the-emerald-drop-earrings",
    "name": "The Emerald Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/8cf25dde-f6d6-40a2-8bad-a558c7249bf4.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-102",
    "slug": "the-florentine-ruby-necklace",
    "name": "The Florentine Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/8d391817-e40c-4395-ad81-9788f9189c73.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-103",
    "slug": "the-aurora-emerald-line-bracelet-2",
    "name": "The Aurora Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/908e4958-79d7-4eee-a3f7-05ae064bf65d.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-104",
    "slug": "starlight-diamond-stud-earrings",
    "name": "Starlight Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/91152875-1612-4321-8bb0-e12bd772db27.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-105",
    "slug": "the-verdant-emerald-solitaire-ring",
    "name": "The Verdant Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/92c5abff-7ab5-40c9-a261-7740074adfb2.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-106",
    "slug": "the-brilliant-diamond-solitaire-ring",
    "name": "The Brilliant Diamond Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/93f0e5bc-d826-47fa-a422-57b529d777ee.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-107",
    "slug": "the-timeless-diamond-statement-collar-necklace",
    "name": "The Timeless Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/9517efe1-8848-4b30-b852-d7fae26cb025.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-108",
    "slug": "the-botanical-emerald-drop-earrings",
    "name": "The Botanical Emerald Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/9539cb13-8a6e-4623-a3d8-317abb6b6282.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-109",
    "slug": "the-florentine-ruby-line-bracelet-2",
    "name": "The Florentine Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/96b9ab7b-99c0-413e-acba-5d2ad3a9a1c6.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-110",
    "slug": "the-imperial-ruby-line-bracelet",
    "name": "The Imperial Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/96c6d11d-296e-4339-ab4a-013369f1e601.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-111",
    "slug": "the-verdant-emerald-solitaire-necklace",
    "name": "The Verdant Emerald Solitaire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/96f2f3f2-d5d2-482d-b872-60dfa81280a2.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-brac-112",
    "slug": "the-verdant-emerald-line-bracelet-3",
    "name": "The Verdant Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/9867228e-1307-46a5-951a-3b35a29354e4.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-113",
    "slug": "the-brilliant-diamond-tennis-bracelet-3",
    "name": "The Brilliant Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/98be934d-e198-4817-8b05-e3709afaf547.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-114",
    "slug": "the-aurora-emerald-earrings",
    "name": "The Aurora Emerald Earrings",
    "category": "Earrings",
    "image": "/images/shop/996f31aa-b150-4382-8a10-8fb8101440c1.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-115",
    "slug": "the-zambian-emerald-line-bracelet-4",
    "name": "The Zambian Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/9a5491ff-44c0-4679-a863-182901e118c0.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-116",
    "slug": "the-florentine-ruby-drop-earrings",
    "name": "The Florentine Ruby Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/9bc084b2-6fb7-4444-a572-aa6d8f33ad96.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-117",
    "slug": "the-royal-sapphire-necklace",
    "name": "The Royal Sapphire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/9c30c497-9eb5-4346-b40a-d4aa797cd291.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-118",
    "slug": "the-velvet-ruby-line-bracelet",
    "name": "The Velvet Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/9d83d37d-bf7c-4cbc-97f5-f9566c83fd1b.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-119",
    "slug": "the-emerald-line-bracelet-4",
    "name": "The Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/9f71f31a-d257-4ebd-a01c-fb09810533dd.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-120",
    "slug": "the-zambian-emerald-solitaire-ring-2",
    "name": "The Zambian Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/9f90d5b5-fe35-4c6d-98ac-8f266c675ca6(1).jpg",
    "gallery": [
      "/images/shop/9f90d5b5-fe35-4c6d-98ac-8f266c675ca6.jpg"
    ],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-121",
    "slug": "the-frost-aquamarine-ring",
    "name": "The Frost Aquamarine Ring",
    "category": "Rings",
    "image": "/images/shop/Aquamarine ring  .jpg",
    "gallery": [],
    "shortDescription": "An exceptional high jewelry heirloom piece combining natural gemstone beauty and artisanal white metal metallurgy.",
    "visualAttributes": {
      "visibleStone": "aquamarine gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-122",
    "slug": "the-rouge-ruby-bracelet",
    "name": "The Rouge Ruby Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/B656A-18RWDVS5549.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-bang-123",
    "slug": "the-crimson-ruby-drop-bangle",
    "name": "The Crimson Ruby Drop Bangle",
    "category": "Bangles",
    "image": "/images/shop/BG1538A-BL15774-1.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-124",
    "slug": "timeless-diamond-drop-earrings",
    "name": "Timeless Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/ChatGPT Image May 27, 2026 at 03_19_51 PM.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-125",
    "slug": "the-zambian-emerald-necklace",
    "name": "The Zambian Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/ChatGPT Image Sep 24, 2026 at 12_44_13 PM.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-126",
    "slug": "the-solaris-ruby-line-bracelet-4",
    "name": "The Solaris Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/ChatGPT Image Sep 24, 2026 at 12_49_24 PM.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-127",
    "slug": "the-majestic-ruby-line-bracelet",
    "name": "The Majestic Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/ChatGPT Image Sep 24, 2026 at 12_53_31 PM.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-128",
    "slug": "the-scarlet-ruby-earrings",
    "name": "The Scarlet Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/E1648A-18RWD22.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-129",
    "slug": "the-crimson-ruby-earrings",
    "name": "The Crimson Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/E4362A-18WWDVSCO.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-130",
    "slug": "the-pigeon-blood-ruby-earrings",
    "name": "The Pigeon Blood Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/E4401AS-JT59894.JPG",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-131",
    "slug": "the-velvet-ruby-earrings",
    "name": "The Velvet Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/E7178A-BL23319.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-132",
    "slug": "solitaire-diamond-sculpted-earrings",
    "name": "Solitaire Diamond Sculpted Earrings",
    "category": "Earrings",
    "image": "/images/shop/E7541A-18WWDVS.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-133",
    "slug": "the-rouge-ruby-earrings-2",
    "name": "The Rouge Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/E8329A-18RWDWMOP.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-134",
    "slug": "the-solaris-ruby-earrings",
    "name": "The Solaris Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/E9215AS-18RWWDVS.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-135",
    "slug": "the-majestic-ruby-earrings",
    "name": "The Majestic Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/ER5435C-BL25423.JPG",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-136",
    "slug": "the-emerald-cabochon-ring",
    "name": "The Emerald Cabochon Ring",
    "category": "Rings",
    "image": "/images/shop/Em cab ring .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "cabochon"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-137",
    "slug": "the-sovereign-emerald-cabochon-ring",
    "name": "The Sovereign Emerald Cabochon Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald cab dia tapp ring .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "cabochon"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-138",
    "slug": "the-botanical-emerald-cabochon-ring",
    "name": "The Botanical Emerald Cabochon Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald cab ring  2.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "cabochon"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-139",
    "slug": "the-aurora-emerald-cabochon-ring",
    "name": "The Aurora Emerald Cabochon Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald cab ring .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "cabochon"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-140",
    "slug": "the-opulent-emerald-cabochon-ring",
    "name": "The Opulent Emerald Cabochon Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald cabs ring .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "cabochon"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-141",
    "slug": "the-regal-emerald-solitaire-ring-2",
    "name": "The Regal Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald dia ring gold .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished yellow gold with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "yellow gold",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-142",
    "slug": "the-verdant-emerald-halo-ring",
    "name": "The Verdant Emerald Halo Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald dia ring.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-143",
    "slug": "the-imperial-emerald-oval-cut-ring",
    "name": "The Imperial Emerald Oval Cut Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald oval cut ring .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "oval cut"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-144",
    "slug": "the-zambian-emerald-oval-cut-ring",
    "name": "The Zambian Emerald Oval Cut Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald oval dia ring .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "oval cut"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-145",
    "slug": "the-c-leste-emerald-ring",
    "name": "The Céleste Emerald Ring",
    "category": "Rings",
    "image": "/images/shop/Emerald ring .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-146",
    "slug": "the-sapphire-halo-ring",
    "name": "The Sapphire Halo Ring",
    "category": "Rings",
    "image": "/images/shop/Iolite ring .jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-147",
    "slug": "the-opulent-emerald-line-bracelet-2",
    "name": "The Opulent Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/Multi col dia.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-148",
    "slug": "the-c-leste-emerald-necklace",
    "name": "The Céleste Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/N1544A-BL21981.JPG",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-149",
    "slug": "the-ruby-necklace",
    "name": "The Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/N4401ASI-18WWDPS18.JPG",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-150",
    "slug": "the-rouge-ruby-necklace",
    "name": "The Rouge Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/N4407AS-18WWDVSPS18.JPG",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-151",
    "slug": "the-solaris-ruby-necklace",
    "name": "The Solaris Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/N8442AS-JT61746.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-152",
    "slug": "the-seraphic-sapphire-necklace",
    "name": "The Seraphic Sapphire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/NK2868A-18WWDBSPR36.JPG",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-153",
    "slug": "the-florentine-ruby-necklace-2",
    "name": "The Florentine Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/NK2874A-18WWDRUPR36-1.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-154",
    "slug": "the-imperial-ruby-necklace",
    "name": "The Imperial Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/NK3186A-18WWDCRRU36.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-155",
    "slug": "the-azure-sapphire-necklace",
    "name": "The Azure Sapphire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/NK3417B-JT56715.JPG",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-156",
    "slug": "the-crimson-ruby-necklace-2",
    "name": "The Crimson Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/NNK320-18KWWDCO2330-16BL.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous yellow gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "yellow gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-157",
    "slug": "the-sovereign-emerald-ring",
    "name": "The Sovereign Emerald Ring",
    "category": "Rings",
    "image": "/images/shop/NRG261-18KWWDEM7.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished yellow gold with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "yellow gold",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-158",
    "slug": "the-celestial-diamond-statement-collar-ring",
    "name": "The Celestial Diamond Statement Collar Ring",
    "category": "Rings",
    "image": "/images/shop/Pineapple cut ring .jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-159",
    "slug": "the-majestic-ruby-ring",
    "name": "The Majestic Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/R4342BS-18RWWDWMOP7.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-160",
    "slug": "the-florentine-ruby-solitaire-ring",
    "name": "The Florentine Ruby Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/R4407AS-18WWDVSPS7.JPG",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-161",
    "slug": "the-imperial-ruby-ring",
    "name": "The Imperial Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/R4443AS-JT59895.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-162",
    "slug": "the-azure-sapphire-ring",
    "name": "The Azure Sapphire Ring",
    "category": "Rings",
    "image": "/images/shop/R7162A-BL25809.JPG",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-163",
    "slug": "the-crimson-ruby-ring",
    "name": "The Crimson Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/R7553AS-18WWDVSCO7.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-164",
    "slug": "the-pigeon-blood-ruby-ring",
    "name": "The Pigeon Blood Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/R954A-18RWDVS7.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-165",
    "slug": "the-velvet-ruby-ring",
    "name": "The Velvet Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/RE101A-18RWD6.5.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-166",
    "slug": "the-solitaire-diamond-stud-ring",
    "name": "The Solitaire Diamond Stud Ring",
    "category": "Rings",
    "image": "/images/shop/RE101A-18WOMB6-7.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-167",
    "slug": "the-rouge-ruby-ring",
    "name": "The Rouge Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/RG3240B-18RWD7.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-168",
    "slug": "the-solaris-ruby-ring",
    "name": "The Solaris Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/Rose gold dia ring .jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-169",
    "slug": "the-majestic-ruby-ring-2",
    "name": "The Majestic Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/Ruby ring .jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-170",
    "slug": "the-kashmir-sapphire-necklace",
    "name": "The Kashmir Sapphire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/Screenshot 2026-05-26 at 1.08.59 PM.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-171",
    "slug": "the-aura-tourmaline-oval-cut-ring",
    "name": "The Aura Tourmaline Oval Cut Ring",
    "category": "Rings",
    "image": "/images/shop/Tourmaline ring oval.jpg",
    "gallery": [],
    "shortDescription": "An exceptional high jewelry heirloom piece combining natural gemstone beauty and artisanal white metal metallurgy.",
    "visualAttributes": {
      "visibleStone": "tourmaline gemstone",
      "apparentMetalColor": "white metal",
      "design": "oval cut"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-172",
    "slug": "the-regal-emerald-line-bracelet",
    "name": "The Regal Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.12.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-173",
    "slug": "the-radiance-diamond-statement-collar-necklace-5",
    "name": "The Radiance Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.45 (1).jpeg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-174",
    "slug": "the-emerald-necklace-2",
    "name": "The Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.45 (2).jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-175",
    "slug": "the-sovereign-emerald-necklace-3",
    "name": "The Sovereign Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.45 (3).jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-176",
    "slug": "the-verdant-emerald-line-bracelet-4",
    "name": "The Verdant Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.45 (4).jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-177",
    "slug": "the-imperial-emerald-line-bracelet",
    "name": "The Imperial Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.45 (5).jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-178",
    "slug": "the-zambian-emerald-line-bracelet-5",
    "name": "The Zambian Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.45 (6).jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-179",
    "slug": "the-c-leste-emerald-line-bracelet-3",
    "name": "The Céleste Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/WhatsApp Image 2026-05-26 at 14.45.45.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-180",
    "slug": "the-celestial-sapphire-halo-ring",
    "name": "The Celestial Sapphire Halo Ring",
    "category": "Rings",
    "image": "/images/shop/WhatsApp Image 2026-06-22 at 18.24.48 (1).jpeg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-181",
    "slug": "the-azure-sapphire-solitaire-ring",
    "name": "The Azure Sapphire Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/WhatsApp Image 2026-06-22 at 18.24.48.jpeg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-182",
    "slug": "the-crimson-ruby-halo-ring",
    "name": "The Crimson Ruby Halo Ring",
    "category": "Rings",
    "image": "/images/shop/WhatsApp Image 2026-06-23 at 10.50.46.jpeg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-183",
    "slug": "the-zambian-emerald-solitaire-ring-3",
    "name": "The Zambian Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/WhatsApp Image 2026-09-15 at 15.31.15.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-184",
    "slug": "the-velvet-ruby-halo-ring",
    "name": "The Velvet Ruby Halo Ring",
    "category": "Rings",
    "image": "/images/shop/WhatsApp Image 2026-09-15 at 15.31.16.jpeg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-185",
    "slug": "the-florentine-ruby-drop-earrings-2",
    "name": "The Florentine Ruby Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/WhatsApp Image 2026-09-15 at 15.46.21.jpeg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-186",
    "slug": "the-botanical-emerald-solitaire-necklace",
    "name": "The Botanical Emerald Solitaire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/WhatsApp Image 2026-09-16 at 17.42.26.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-earr-187",
    "slug": "timeless-diamond-stud-earrings-2",
    "name": "Timeless Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/a32dda43-aecf-42c3-b012-0cd232df7b50.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-188",
    "slug": "the-prismatic-diamond-statement-collar-necklace-4",
    "name": "The Prismatic Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/a388c11b-8c00-4404-8ef7-95c2cf228182.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-189",
    "slug": "the-aura-diamond-statement-collar-necklace-3",
    "name": "The Aura Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/a497f0ec-ca49-4b95-b042-793003e35407.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-190",
    "slug": "the-ruby-line-bracelet",
    "name": "The Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/a588daa2-de84-402d-8b43-aa667685f4ec.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-191",
    "slug": "the-sovereign-emerald-line-bracelet",
    "name": "The Sovereign Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/a5946ae4-2484-41e9-b12c-f7265561e20d.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-192",
    "slug": "the-imperial-ruby-necklace-2",
    "name": "The Imperial Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/a9876b58-4c72-428e-8c5e-121b59baa5c8.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-193",
    "slug": "the-solaris-ruby-line-bracelet-5",
    "name": "The Solaris Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/ac70bdc8-d7f2-4d02-8501-cf7f6bd73e8b.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-194",
    "slug": "the-aurora-emerald-line-bracelet-3",
    "name": "The Aurora Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/ad7edc37-be2b-41df-9c60-0a7dcb5bca07.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-195",
    "slug": "lumi-re-diamond-stud-earrings",
    "name": "Lumière Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/af095c5d-ded6-4423-9a7f-0c4753f88e58.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-196",
    "slug": "the-opulent-emerald-line-bracelet-3",
    "name": "The Opulent Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/b2d50b39-7e28-4cd5-b8c6-5357fe6a556f.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-197",
    "slug": "the-crimson-ruby-drop-earrings-2",
    "name": "The Crimson Ruby Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/b47ff74a-4e14-4557-99f2-47e82aaec08e.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-198",
    "slug": "the-timeless-diamond-tennis-bracelet-4",
    "name": "The Timeless Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/b524d9ef-6b91-4779-99f5-ab9967dd2b60.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-199",
    "slug": "the-verdant-emerald-necklace",
    "name": "The Verdant Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/b58ee35a-434e-4c18-ac96-e8f9d4da116c.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-200",
    "slug": "the-verdant-emerald-line-bracelet-5",
    "name": "The Verdant Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/b8b27c9c-3abd-4f88-8af6-1926b01783fc.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-201",
    "slug": "the-brilliant-diamond-pendant-necklace",
    "name": "The Brilliant Diamond Pendant Necklace",
    "category": "Necklaces",
    "image": "/images/shop/b92b3768-21fc-41e9-b353-c550eb6eded6.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-202",
    "slug": "the-eternity-diamond-statement-collar-necklace-2",
    "name": "The Eternity Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/ba49598f-0ccb-4fc0-ba4e-8f701d6f850f.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-203",
    "slug": "eternity-diamond-stud-earrings-2",
    "name": "Eternity Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/bb0f94ac-a599-4840-b319-ec85011f6bec.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-bang-204",
    "slug": "the-eternity-diamond-bangle",
    "name": "The Eternity Diamond Bangle",
    "category": "Bangles",
    "image": "/images/shop/bb429fa0-023d-44ae-b0dc-049f52aca782.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-205",
    "slug": "radiance-diamond-drop-earrings-2",
    "name": "Radiance Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/be033523-b1a5-40d8-9b77-9a0754a916b9.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-206",
    "slug": "the-imperial-emerald-line-bracelet-2",
    "name": "The Imperial Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/be0b32a4-e452-4a4b-82b7-67b09cc3a74f.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-207",
    "slug": "the-velvet-ruby-necklace",
    "name": "The Velvet Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/bf7eaf97-84d9-4905-8d9d-b4e0a897517f.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-208",
    "slug": "the-ruby-necklace-2",
    "name": "The Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/bvlgari.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-209",
    "slug": "the-zambian-emerald-line-bracelet-6",
    "name": "The Zambian Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/c041e69d-5b04-48ed-8040-f33c28d70ebc.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-210",
    "slug": "the-starlight-diamond-statement-collar-necklace-2",
    "name": "The Starlight Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/c0b7ed14-df33-4ee2-ab41-a43899724522.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-211",
    "slug": "solitaire-diamond-stud-earrings-2",
    "name": "Solitaire Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/c0dc4d90-d993-4bbd-9b8d-61ca36697cf5.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-212",
    "slug": "the-c-leste-emerald-line-bracelet-4",
    "name": "The Céleste Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/c122d8bd-0710-4a30-b3d5-36f9d4561ef9.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-213",
    "slug": "the-solitaire-diamond-tennis-bracelet-2",
    "name": "The Solitaire Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/c31b3318-92eb-4c5c-9a87-965c66c149f6.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-214",
    "slug": "the-celestial-diamond-statement-collar-necklace-3",
    "name": "The Celestial Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/c40993f9-ade4-44f0-a07a-d41917d4d60e.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-215",
    "slug": "the-prismatic-diamond-statement-collar-necklace-5",
    "name": "The Prismatic Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/c5ccac37-9495-4b1e-91d0-30f8cc1392af.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-216",
    "slug": "the-opulent-emerald-necklace",
    "name": "The Opulent Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/c67688ec-70ce-4154-8402-f2be9af6a7da.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-217",
    "slug": "the-imperial-ruby-necklace-3",
    "name": "The Imperial Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/c88874da-ae30-41ec-bf88-3d4f8b0b4776.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-218",
    "slug": "starlight-diamond-stud-earrings-2",
    "name": "Starlight Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/c925a973-a8e1-466d-85e8-7ba99517e4ae.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-219",
    "slug": "the-verdant-emerald-necklace-2",
    "name": "The Verdant Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/c991be02-cad8-4432-9848-3045f620cc5d.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-220",
    "slug": "the-royal-sapphire-necklace-2",
    "name": "The Royal Sapphire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/c9a64156-a74d-4c5b-aa1b-f617d4ddaeac.jpg",
    "gallery": [],
    "shortDescription": "Deep royal blue saturation with exceptional geometric clarity, set in handcrafted white metal.",
    "visualAttributes": {
      "visibleStone": "sapphire gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-221",
    "slug": "the-eternity-diamond-sculpted-necklace",
    "name": "The Eternity Diamond Sculpted Necklace",
    "category": "Necklaces",
    "image": "/images/shop/cdd15237-8847-4783-9844-f00cdf3e67fd.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-222",
    "slug": "the-rouge-ruby-line-bracelet",
    "name": "The Rouge Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/cdd78c06-d6e3-4c99-ab50-5c2d2cb397e1.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-223",
    "slug": "the-radiance-diamond-pendant-necklace",
    "name": "The Radiance Diamond Pendant Necklace",
    "category": "Necklaces",
    "image": "/images/shop/cddf3297-0d6b-43aa-b6da-65038ec4a6c2.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-224",
    "slug": "celestial-diamond-stud-earrings",
    "name": "Celestial Diamond Stud Earrings",
    "category": "Earrings",
    "image": "/images/shop/d043a41a-c815-4c97-a184-14c1f403337a.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-225",
    "slug": "the-aurora-emerald-drop-earrings",
    "name": "The Aurora Emerald Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/d270572d-997c-475c-a16f-b65987bb8fac.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-226",
    "slug": "the-solitaire-diamond-statement-collar-necklace-2",
    "name": "The Solitaire Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/d3c4a53e-86eb-4b8a-96fb-e0df71440fa5.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-227",
    "slug": "the-starlight-diamond-statement-collar-necklace-3",
    "name": "The Starlight Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/d63c5752-e445-4fdc-beea-05187170baae.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-228",
    "slug": "the-celestial-diamond-solitaire-necklace",
    "name": "The Celestial Diamond Solitaire Necklace",
    "category": "Necklaces",
    "image": "/images/shop/d6de9397-0de7-46c2-8b2c-08fb130435dd.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "medium"
  },
  {
    "id": "uni-neck-229",
    "slug": "the-majestic-ruby-necklace-2",
    "name": "The Majestic Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/d6fb65b2-1d78-4f9b-9950-341d8f318645.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous rose gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "rose gold",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-230",
    "slug": "the-aura-diamond-pendant-necklace",
    "name": "The Aura Diamond Pendant Necklace",
    "category": "Necklaces",
    "image": "/images/shop/d8b8980b-1d5c-4f98-9e4e-bb1b341a65f9.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-231",
    "slug": "the-imperial-ruby-necklace-4",
    "name": "The Imperial Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/d9bd97e3-f1e6-4a98-ad17-6f92c6d4635b.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-232",
    "slug": "the-lumi-re-diamond-sculpted-necklace",
    "name": "The Lumière Diamond Sculpted Necklace",
    "category": "Necklaces",
    "image": "/images/shop/dcf3114f-76ca-4c9d-9c50-661b6dfe68f0.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-233",
    "slug": "the-brilliant-diamond-sculpted-necklace",
    "name": "The Brilliant Diamond Sculpted Necklace",
    "category": "Necklaces",
    "image": "/images/shop/dd95a2f4-6b2c-4c73-8d6e-c59b29f39fde.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-234",
    "slug": "the-zambian-emerald-necklace-2",
    "name": "The Zambian Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/dda1a14c-c5a9-4c5c-a86f-bccefdfac696.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-235",
    "slug": "the-celestial-diamond-tennis-bracelet-2",
    "name": "The Celestial Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/de5556c5-35ce-4522-b95f-f1442220b6c9.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-236",
    "slug": "the-aurora-emerald-line-bracelet-4",
    "name": "The Aurora Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/e0ab97e9-c124-48b8-bbcc-0d697f1928d1.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-237",
    "slug": "the-aura-diamond-tennis-bracelet-2",
    "name": "The Aura Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/e1f62276-aaae-40f1-b94a-0f9e2f5887e1.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-238",
    "slug": "aura-diamond-drop-earrings-2",
    "name": "Aura Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/e26233e6-f26a-4b9d-9e20-dcb2b997b09c.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-239",
    "slug": "the-radiance-diamond-sculpted-necklace",
    "name": "The Radiance Diamond Sculpted Necklace",
    "category": "Necklaces",
    "image": "/images/shop/e3fc1de9-260b-49b4-b474-3b947fa41e62.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-240",
    "slug": "the-regal-emerald-line-bracelet-2",
    "name": "The Regal Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/e4e72e53-aed0-4c7a-bb3a-61ae05779d15.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-241",
    "slug": "the-emerald-necklace-3",
    "name": "The Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/e5e43ad8-66cc-4cca-b289-43e9c3dc8808.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-242",
    "slug": "the-lumi-re-diamond-tennis-bracelet",
    "name": "The Lumière Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/e8fdeefe-0ba2-4249-83ae-c3140c432172.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-243",
    "slug": "the-brilliant-diamond-tennis-bracelet-4",
    "name": "The Brilliant Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/e93b4966-02de-4ac7-b487-0cf5cf8d0223.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-244",
    "slug": "the-regal-emerald-earrings",
    "name": "The Regal Emerald Earrings",
    "category": "Earrings",
    "image": "/images/shop/e9989473-294c-4282-b6c0-82887661fe02.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-245",
    "slug": "the-zambian-emerald-line-bracelet-7",
    "name": "The Zambian Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/ebd9f226-2d66-4b0b-8650-f62cf29c8427.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-246",
    "slug": "the-c-leste-emerald-line-bracelet-5",
    "name": "The Céleste Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/ed4640ce-09f8-468e-8a6c-87f24ec4a4d3.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-247",
    "slug": "the-solitaire-diamond-tennis-bracelet-3",
    "name": "The Solitaire Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/edb8f57b-a0d7-4c7d-8775-09d75eac73a2.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-248",
    "slug": "the-verdant-emerald-drop-earrings",
    "name": "The Verdant Emerald Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/emerald .jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-249",
    "slug": "the-starlight-diamond-tennis-bracelet-3",
    "name": "The Starlight Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/f0cf9326-401f-4f57-a714-0d3a95cdf534.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-250",
    "slug": "the-celestial-diamond-tennis-bracelet-3",
    "name": "The Celestial Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/f13a32dd-98bc-4f1f-a152-5b76d395604b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-251",
    "slug": "the-imperial-emerald-earrings",
    "name": "The Imperial Emerald Earrings",
    "category": "Earrings",
    "image": "/images/shop/f182d102-984a-487e-861e-f0ee4820045e.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-252",
    "slug": "the-aurora-emerald-line-bracelet-5",
    "name": "The Aurora Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/f4296c62-bcb4-4573-89cd-be23c27e674d.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-253",
    "slug": "the-aura-diamond-tennis-bracelet-3",
    "name": "The Aura Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/f5c3c17d-8e89-4082-b9db-635202340b79.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-254",
    "slug": "the-imperial-ruby-line-bracelet-2",
    "name": "The Imperial Ruby Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/f6e04739-694b-4d39-a805-21595aa9e5c6.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous yellow gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "yellow gold",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-255",
    "slug": "the-verdant-emerald-line-bracelet-6",
    "name": "The Verdant Emerald Line Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/f8f0d879-694a-45f1-9c34-4c21b30df8f4.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-256",
    "slug": "the-starlight-diamond-statement-collar-necklace-4",
    "name": "The Starlight Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/fc73e4bc-2e8c-498f-9b0a-3a9dc483803f.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-257",
    "slug": "the-celestial-diamond-statement-collar-necklace-4",
    "name": "The Celestial Diamond Statement Collar Necklace",
    "category": "Necklaces",
    "image": "/images/shop/fda0462d-0e88-4ae5-8325-be2f37349b7b.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-258",
    "slug": "the-pigeon-blood-ruby-earrings-2",
    "name": "The Pigeon Blood Ruby Earrings",
    "category": "Earrings",
    "image": "/images/shop/ff0fdf6f-2b29-4cb1-adde-75330d4f99e4.jpg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous yellow gold.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "yellow gold",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-259",
    "slug": "the-ruby-solitaire-ring-2",
    "name": "The Ruby Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/hello.jpeg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-260",
    "slug": "the-aurora-emerald-necklace",
    "name": "The Aurora Emerald Necklace",
    "category": "Necklaces",
    "image": "/images/shop/hello.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-261",
    "slug": "the-florentine-ruby-necklace-3",
    "name": "The Florentine Ruby Necklace",
    "category": "Necklaces",
    "image": "/images/shop/helo.jpeg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "sculpted"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-262",
    "slug": "the-sovereign-emerald-halo-ring",
    "name": "The Sovereign Emerald Halo Ring",
    "category": "Rings",
    "image": "/images/shop/hi.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-263",
    "slug": "the-botanical-emerald-solitaire-ring",
    "name": "The Botanical Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/ok.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-264",
    "slug": "the-aurora-emerald-halo-ring",
    "name": "The Aurora Emerald Halo Ring",
    "category": "Rings",
    "image": "/images/shop/okay.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "halo"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-265",
    "slug": "the-opulent-emerald-solitaire-ring",
    "name": "The Opulent Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/ring 1.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-266",
    "slug": "the-regal-emerald-solitaire-ring-3",
    "name": "The Regal Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/ring 2.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-267",
    "slug": "the-verdant-emerald-solitaire-ring-2",
    "name": "The Verdant Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/ring 3 .jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-268",
    "slug": "the-imperial-emerald-ring",
    "name": "The Imperial Emerald Ring",
    "category": "Rings",
    "image": "/images/shop/ring 4.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "cuff"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-269",
    "slug": "the-pigeon-blood-ruby-ring-2",
    "name": "The Pigeon Blood Ruby Ring",
    "category": "Rings",
    "image": "/images/shop/ring 5.jpeg",
    "gallery": [],
    "shortDescription": "A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous white metal.",
    "visualAttributes": {
      "visibleStone": "ruby gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-270",
    "slug": "the-c-leste-emerald-ring-2",
    "name": "The Céleste Emerald Ring",
    "category": "Rings",
    "image": "/images/shop/ring 6.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-271",
    "slug": "the-emerald-ring",
    "name": "The Emerald Ring",
    "category": "Rings",
    "image": "/images/shop/ring 7.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "statement"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-272",
    "slug": "the-sovereign-emerald-solitaire-ring-2",
    "name": "The Sovereign Emerald Solitaire Ring",
    "category": "Rings",
    "image": "/images/shop/ring.jpeg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "solitaire"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-273",
    "slug": "the-brilliant-diamond-tennis-bracelet-5",
    "name": "The Brilliant Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/s.jpeg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-274",
    "slug": "the-eternity-diamond-tennis-bracelet-2",
    "name": "The Eternity Diamond Tennis Bracelet",
    "category": "Bracelets",
    "image": "/images/shop/‎Untitled 3.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "tennis"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-275",
    "slug": "radiance-diamond-drop-earrings-3",
    "name": "Radiance Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/‎Untitled 4.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-276",
    "slug": "the-emerald-earrings",
    "name": "The Emerald Earrings",
    "category": "Earrings",
    "image": "/images/shop/‎Untitled 5.jpg",
    "gallery": [],
    "shortDescription": "Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished white metal with calibrated proportions.",
    "visualAttributes": {
      "visibleStone": "emerald gemstone",
      "apparentMetalColor": "white metal",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-277",
    "slug": "starlight-diamond-drop-earrings",
    "name": "Starlight Diamond Drop Earrings",
    "category": "Earrings",
    "image": "/images/shop/‎Untitled 6.jpg",
    "gallery": [],
    "shortDescription": "Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring white metal.",
    "visualAttributes": {
      "visibleStone": "diamond",
      "apparentMetalColor": "white metal",
      "design": "drop"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  }
];

export const CATEGORIES = [
  "All Jewellery",
  "Rings",
  "Earrings",
  "Necklaces",
  "Bracelets",
  "Bangles",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const STONE_TYPES = [
  "All Gemstones",
  "Emerald",
  "Diamond",
  "Ruby",
  "Sapphire",
  "Tourmaline",
  "Aquamarine",
] as const;

export const METAL_COLORS = [
  "All Metals",
  "White Metal",
  "Yellow Gold",
  "Rose Gold",
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, limit);
}

export default PRODUCTS;
