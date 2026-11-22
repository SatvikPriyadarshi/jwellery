// Uni Fine Jewelry shop catalogue.
// Photos keep their original backgrounds and are centered in each card.

export interface VisualAttributes {
  visibleStone: string;
  apparentMetalColor: string;
  design: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Rings" | "Earrings" | "Necklaces" | "Bracelets" | "Bangles" | "Brooches";
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
    "id": "uni-brac-001",
    "slug": "bracelet-001",
    "name": "Bracelet 01",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-002",
    "slug": "bracelet-002",
    "name": "Bracelet 02",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-003",
    "slug": "bracelet-003",
    "name": "Bracelet 03",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-003.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-004",
    "slug": "bracelet-004",
    "name": "Bracelet 04",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-004.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-005",
    "slug": "bracelet-005",
    "name": "Bracelet 05",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-005.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-006",
    "slug": "bracelet-006",
    "name": "Bracelet 06",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-006.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-007",
    "slug": "bracelet-007",
    "name": "Bracelet 07",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-007.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-008",
    "slug": "bracelet-008",
    "name": "Bracelet 08",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-008.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-009",
    "slug": "bracelet-009",
    "name": "Bracelet 09",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-009.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-010",
    "slug": "bracelet-010",
    "name": "Bracelet 10",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-010.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-011",
    "slug": "bracelet-011",
    "name": "Bracelet 11",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-011.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-012",
    "slug": "bracelet-012",
    "name": "Bracelet 12",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-012.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-013",
    "slug": "bracelet-013",
    "name": "Bracelet 13",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-013.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-014",
    "slug": "bracelet-014",
    "name": "Bracelet 14",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-014.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-015",
    "slug": "bracelet-015",
    "name": "Bracelet 15",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-015.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-016",
    "slug": "bracelet-016",
    "name": "Bracelet 16",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-016.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-017",
    "slug": "bracelet-017",
    "name": "Bracelet 17",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-017.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-018",
    "slug": "bracelet-018",
    "name": "Bracelet 18",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-018.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-019",
    "slug": "bracelet-019",
    "name": "Bracelet 19",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-019.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-020",
    "slug": "bracelet-020",
    "name": "Bracelet 20",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-020.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-021",
    "slug": "bracelet-021",
    "name": "Bracelet 21",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-021.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-022",
    "slug": "bracelet-022",
    "name": "Bracelet 22",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-022.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-023",
    "slug": "bracelet-023",
    "name": "Bracelet 23",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-023.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-024",
    "slug": "bracelet-024",
    "name": "Bracelet 24",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-024.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-025",
    "slug": "bracelet-025",
    "name": "Bracelet 25",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-025.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-026",
    "slug": "bracelet-026",
    "name": "Bracelet 26",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-026.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-027",
    "slug": "bracelet-027",
    "name": "Bracelet 27",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-027.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-028",
    "slug": "bracelet-028",
    "name": "Bracelet 28",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-028.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-029",
    "slug": "bracelet-029",
    "name": "Bracelet 29",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-029.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-030",
    "slug": "bracelet-030",
    "name": "Bracelet 30",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-030.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-031",
    "slug": "bracelet-031",
    "name": "Bracelet 31",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-031.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-032",
    "slug": "bracelet-032",
    "name": "Bracelet 32",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-032.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-033",
    "slug": "bracelet-033",
    "name": "Bracelet 33",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-033.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-034",
    "slug": "bracelet-034",
    "name": "Bracelet 34",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-034.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-035",
    "slug": "bracelet-035",
    "name": "Bracelet 35",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-035.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-036",
    "slug": "bracelet-036",
    "name": "Bracelet 36",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-036.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-037",
    "slug": "bracelet-037",
    "name": "Bracelet 37",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-037.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-038",
    "slug": "bracelet-038",
    "name": "Bracelet 38",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-038.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-039",
    "slug": "bracelet-039",
    "name": "Bracelet 39",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-039.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-040",
    "slug": "bracelet-040",
    "name": "Bracelet 40",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-040.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-041",
    "slug": "bracelet-041",
    "name": "Bracelet 41",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-041.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-042",
    "slug": "bracelet-042",
    "name": "Bracelet 42",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-042.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-043",
    "slug": "bracelet-043",
    "name": "Bracelet 43",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-043.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-044",
    "slug": "bracelet-044",
    "name": "Bracelet 44",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-044.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-045",
    "slug": "bracelet-045",
    "name": "Bracelet 45",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-045.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-046",
    "slug": "bracelet-046",
    "name": "Bracelet 46",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-046.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-047",
    "slug": "bracelet-047",
    "name": "Bracelet 47",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-047.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-048",
    "slug": "bracelet-048",
    "name": "Bracelet 48",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-048.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-049",
    "slug": "bracelet-049",
    "name": "Bracelet 49",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-049.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-050",
    "slug": "bracelet-050",
    "name": "Bracelet 50",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-050.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-051",
    "slug": "bracelet-051",
    "name": "Bracelet 51",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-051.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-052",
    "slug": "bracelet-052",
    "name": "Bracelet 52",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-052.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-053",
    "slug": "bracelet-053",
    "name": "Bracelet 53",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-053.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-054",
    "slug": "bracelet-054",
    "name": "Bracelet 54",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-054.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-055",
    "slug": "bracelet-055",
    "name": "Bracelet 55",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-055.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-056",
    "slug": "bracelet-056",
    "name": "Bracelet 56",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-056.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-057",
    "slug": "bracelet-057",
    "name": "Bracelet 57",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-057.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-058",
    "slug": "bracelet-058",
    "name": "Bracelet 58",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-058.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-059",
    "slug": "bracelet-059",
    "name": "Bracelet 59",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-059.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-060",
    "slug": "bracelet-060",
    "name": "Bracelet 60",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-060.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-061",
    "slug": "bracelet-061",
    "name": "Bracelet 61",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-061.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-062",
    "slug": "bracelet-062",
    "name": "Bracelet 62",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-062.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-063",
    "slug": "bracelet-063",
    "name": "Bracelet 63",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-063.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-064",
    "slug": "bracelet-064",
    "name": "Bracelet 64",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-064.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-065",
    "slug": "bracelet-065",
    "name": "Bracelet 65",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-065.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-066",
    "slug": "bracelet-066",
    "name": "Bracelet 66",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-066.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-067",
    "slug": "bracelet-067",
    "name": "Bracelet 67",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-067.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-068",
    "slug": "bracelet-068",
    "name": "Bracelet 68",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-068.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-069",
    "slug": "bracelet-069",
    "name": "Bracelet 69",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-069.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-070",
    "slug": "bracelet-070",
    "name": "Bracelet 70",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-070.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-071",
    "slug": "bracelet-071",
    "name": "Bracelet 71",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-071.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-072",
    "slug": "bracelet-072",
    "name": "Bracelet 72",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-072.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-073",
    "slug": "bracelet-073",
    "name": "Bracelet 73",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-073.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-074",
    "slug": "bracelet-074",
    "name": "Bracelet 74",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-074.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-075",
    "slug": "bracelet-075",
    "name": "Bracelet 75",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-075.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-076",
    "slug": "bracelet-076",
    "name": "Bracelet 76",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-076.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-077",
    "slug": "bracelet-077",
    "name": "Bracelet 77",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-077.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-078",
    "slug": "bracelet-078",
    "name": "Bracelet 78",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-078.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-079",
    "slug": "bracelet-079",
    "name": "Bracelet 79",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-079.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-080",
    "slug": "bracelet-080",
    "name": "Bracelet 80",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-080.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-081",
    "slug": "bracelet-081",
    "name": "Bracelet 81",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-081.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-082",
    "slug": "bracelet-082",
    "name": "Bracelet 82",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-082.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-083",
    "slug": "bracelet-083",
    "name": "Bracelet 83",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-083.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-084",
    "slug": "bracelet-084",
    "name": "Bracelet 84",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-084.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-085",
    "slug": "bracelet-085",
    "name": "Bracelet 85",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-085.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-086",
    "slug": "bracelet-086",
    "name": "Bracelet 86",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-086.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-087",
    "slug": "bracelet-087",
    "name": "Bracelet 87",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-087.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-088",
    "slug": "bracelet-088",
    "name": "Bracelet 88",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-088.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-089",
    "slug": "bracelet-089",
    "name": "Bracelet 89",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-089.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-090",
    "slug": "bracelet-090",
    "name": "Bracelet 90",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-090.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-091",
    "slug": "bracelet-091",
    "name": "Bracelet 91",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-091.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-092",
    "slug": "bracelet-092",
    "name": "Bracelet 92",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-092.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-093",
    "slug": "bracelet-093",
    "name": "Bracelet 93",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-093.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-094",
    "slug": "bracelet-094",
    "name": "Bracelet 94",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-094.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-095",
    "slug": "bracelet-095",
    "name": "Bracelet 95",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-095.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-096",
    "slug": "bracelet-096",
    "name": "Bracelet 96",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-096.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-097",
    "slug": "bracelet-097",
    "name": "Bracelet 97",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-097.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-098",
    "slug": "bracelet-098",
    "name": "Bracelet 98",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-098.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-099",
    "slug": "bracelet-099",
    "name": "Bracelet 99",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-099.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-100",
    "slug": "bracelet-100",
    "name": "Bracelet 100",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-100.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-101",
    "slug": "bracelet-101",
    "name": "Bracelet 101",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-101.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-102",
    "slug": "bracelet-102",
    "name": "Bracelet 102",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-102.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-103",
    "slug": "bracelet-103",
    "name": "Bracelet 103",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-103.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-104",
    "slug": "bracelet-104",
    "name": "Bracelet 104",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-104.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-brac-105",
    "slug": "bracelet-105",
    "name": "Bracelet 105",
    "category": "Bracelets",
    "image": "/images/shop-catalogue-v2/bracelet-105.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bracelet from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "line"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-001",
    "slug": "ring-001",
    "name": "Ring 01",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-002",
    "slug": "ring-002",
    "name": "Ring 02",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-003",
    "slug": "ring-003",
    "name": "Ring 03",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-003.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-004",
    "slug": "ring-004",
    "name": "Ring 04",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-004.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-005",
    "slug": "ring-005",
    "name": "Ring 05",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-005.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-006",
    "slug": "ring-006",
    "name": "Ring 06",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-006.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-007",
    "slug": "ring-007",
    "name": "Ring 07",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-007.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-008",
    "slug": "ring-008",
    "name": "Ring 08",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-008.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-009",
    "slug": "ring-009",
    "name": "Ring 09",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-009.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-010",
    "slug": "ring-010",
    "name": "Ring 10",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-010.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-011",
    "slug": "ring-011",
    "name": "Ring 11",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-011.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-012",
    "slug": "ring-012",
    "name": "Ring 12",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-012.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-013",
    "slug": "ring-013",
    "name": "Ring 13",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-013.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-014",
    "slug": "ring-014",
    "name": "Ring 14",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-014.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-015",
    "slug": "ring-015",
    "name": "Ring 15",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-015.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-016",
    "slug": "ring-016",
    "name": "Ring 16",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-016.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-017",
    "slug": "ring-017",
    "name": "Ring 17",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-017.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-018",
    "slug": "ring-018",
    "name": "Ring 18",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-018.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-019",
    "slug": "ring-019",
    "name": "Ring 19",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-019.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-020",
    "slug": "ring-020",
    "name": "Ring 20",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-020.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-021",
    "slug": "ring-021",
    "name": "Ring 21",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-021.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-022",
    "slug": "ring-022",
    "name": "Ring 22",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-022.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-023",
    "slug": "ring-023",
    "name": "Ring 23",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-023.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-024",
    "slug": "ring-024",
    "name": "Ring 24",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-024.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-025",
    "slug": "ring-025",
    "name": "Ring 25",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-025.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-026",
    "slug": "ring-026",
    "name": "Ring 26",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-026.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-027",
    "slug": "ring-027",
    "name": "Ring 27",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-027.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-028",
    "slug": "ring-028",
    "name": "Ring 28",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-028.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-029",
    "slug": "ring-029",
    "name": "Ring 29",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-029.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-030",
    "slug": "ring-030",
    "name": "Ring 30",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-030.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-031",
    "slug": "ring-031",
    "name": "Ring 31",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-031.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-032",
    "slug": "ring-032",
    "name": "Ring 32",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-032.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-033",
    "slug": "ring-033",
    "name": "Ring 33",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-033.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-034",
    "slug": "ring-034",
    "name": "Ring 34",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-034.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-035",
    "slug": "ring-035",
    "name": "Ring 35",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-035.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-036",
    "slug": "ring-036",
    "name": "Ring 36",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-036.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-037",
    "slug": "ring-037",
    "name": "Ring 37",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-037.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-038",
    "slug": "ring-038",
    "name": "Ring 38",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-038.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-039",
    "slug": "ring-039",
    "name": "Ring 39",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-039.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-040",
    "slug": "ring-040",
    "name": "Ring 40",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-040.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-041",
    "slug": "ring-041",
    "name": "Ring 41",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-041.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-042",
    "slug": "ring-042",
    "name": "Ring 42",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-042.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-043",
    "slug": "ring-043",
    "name": "Ring 43",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-043.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-044",
    "slug": "ring-044",
    "name": "Ring 44",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-044.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-045",
    "slug": "ring-045",
    "name": "Ring 45",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-045.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-046",
    "slug": "ring-046",
    "name": "Ring 46",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-046.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-047",
    "slug": "ring-047",
    "name": "Ring 47",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-047.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-048",
    "slug": "ring-048",
    "name": "Ring 48",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-048.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-049",
    "slug": "ring-049",
    "name": "Ring 49",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-049.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-050",
    "slug": "ring-050",
    "name": "Ring 50",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-050.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-051",
    "slug": "ring-051",
    "name": "Ring 51",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-051.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-052",
    "slug": "ring-052",
    "name": "Ring 52",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-052.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-053",
    "slug": "ring-053",
    "name": "Ring 53",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-053.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-054",
    "slug": "ring-054",
    "name": "Ring 54",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-054.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-055",
    "slug": "ring-055",
    "name": "Ring 55",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-055.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-056",
    "slug": "ring-056",
    "name": "Ring 56",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-056.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-057",
    "slug": "ring-057",
    "name": "Ring 57",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-057.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-058",
    "slug": "ring-058",
    "name": "Ring 58",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-058.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-059",
    "slug": "ring-059",
    "name": "Ring 59",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-059.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-060",
    "slug": "ring-060",
    "name": "Ring 60",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-060.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-061",
    "slug": "ring-061",
    "name": "Ring 61",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-061.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-062",
    "slug": "ring-062",
    "name": "Ring 62",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-062.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-063",
    "slug": "ring-063",
    "name": "Ring 63",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-063.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-064",
    "slug": "ring-064",
    "name": "Ring 64",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-064.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-065",
    "slug": "ring-065",
    "name": "Ring 65",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-065.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-066",
    "slug": "ring-066",
    "name": "Ring 66",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-066.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-ring-067",
    "slug": "ring-067",
    "name": "Ring 67",
    "category": "Rings",
    "image": "/images/shop-catalogue-v2/ring-067.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished ring from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "ring"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-001",
    "slug": "earrings-001",
    "name": "Earrings 01",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-002",
    "slug": "earrings-002",
    "name": "Earrings 02",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-003",
    "slug": "earrings-003",
    "name": "Earrings 03",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-003.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-004",
    "slug": "earrings-004",
    "name": "Earrings 04",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-004.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-005",
    "slug": "earrings-005",
    "name": "Earrings 05",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-005.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-006",
    "slug": "earrings-006",
    "name": "Earrings 06",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-006.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-007",
    "slug": "earrings-007",
    "name": "Earrings 07",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-007.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-008",
    "slug": "earrings-008",
    "name": "Earrings 08",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-008.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-009",
    "slug": "earrings-009",
    "name": "Earrings 09",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-009.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-010",
    "slug": "earrings-010",
    "name": "Earrings 10",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-010.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-011",
    "slug": "earrings-011",
    "name": "Earrings 11",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-011.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-012",
    "slug": "earrings-012",
    "name": "Earrings 12",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-012.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-013",
    "slug": "earrings-013",
    "name": "Earrings 13",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-013.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-014",
    "slug": "earrings-014",
    "name": "Earrings 14",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-014.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-015",
    "slug": "earrings-015",
    "name": "Earrings 15",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-015.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-016",
    "slug": "earrings-016",
    "name": "Earrings 16",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-016.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-017",
    "slug": "earrings-017",
    "name": "Earrings 17",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-017.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-018",
    "slug": "earrings-018",
    "name": "Earrings 18",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-018.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-019",
    "slug": "earrings-019",
    "name": "Earrings 19",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-019.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-020",
    "slug": "earrings-020",
    "name": "Earrings 20",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-020.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-021",
    "slug": "earrings-021",
    "name": "Earrings 21",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-021.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-022",
    "slug": "earrings-022",
    "name": "Earrings 22",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-022.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-023",
    "slug": "earrings-023",
    "name": "Earrings 23",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-023.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-024",
    "slug": "earrings-024",
    "name": "Earrings 24",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-024.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-025",
    "slug": "earrings-025",
    "name": "Earrings 25",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-025.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-026",
    "slug": "earrings-026",
    "name": "Earrings 26",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-026.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-027",
    "slug": "earrings-027",
    "name": "Earrings 27",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-027.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-028",
    "slug": "earrings-028",
    "name": "Earrings 28",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-028.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-029",
    "slug": "earrings-029",
    "name": "Earrings 29",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-029.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-030",
    "slug": "earrings-030",
    "name": "Earrings 30",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-030.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-031",
    "slug": "earrings-031",
    "name": "Earrings 31",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-031.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-032",
    "slug": "earrings-032",
    "name": "Earrings 32",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/earrings-032.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "stud"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-033",
    "slug": "button-earrings-001",
    "name": "Button Earrings 01",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/button-earrings-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "button"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-earr-034",
    "slug": "button-earrings-002",
    "name": "Button Earrings 02",
    "category": "Earrings",
    "image": "/images/shop-catalogue-v2/button-earrings-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished pair of earrings from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "button"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-001",
    "slug": "necklace-001",
    "name": "Necklace 01",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-002",
    "slug": "necklace-002",
    "name": "Necklace 02",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-003",
    "slug": "necklace-003",
    "name": "Necklace 03",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-003.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-004",
    "slug": "necklace-004",
    "name": "Necklace 04",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-004.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-005",
    "slug": "necklace-005",
    "name": "Necklace 05",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-005.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-006",
    "slug": "necklace-006",
    "name": "Necklace 06",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-006.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-007",
    "slug": "necklace-007",
    "name": "Necklace 07",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-007.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-008",
    "slug": "necklace-008",
    "name": "Necklace 08",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-008.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-009",
    "slug": "necklace-009",
    "name": "Necklace 09",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-009.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-010",
    "slug": "necklace-010",
    "name": "Necklace 10",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-010.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-011",
    "slug": "necklace-011",
    "name": "Necklace 11",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-011.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-012",
    "slug": "necklace-012",
    "name": "Necklace 12",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-012.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-013",
    "slug": "necklace-013",
    "name": "Necklace 13",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-013.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-014",
    "slug": "necklace-014",
    "name": "Necklace 14",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-014.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-015",
    "slug": "necklace-015",
    "name": "Necklace 15",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-015.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-016",
    "slug": "necklace-016",
    "name": "Necklace 16",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-016.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-017",
    "slug": "necklace-017",
    "name": "Necklace 17",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-017.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-018",
    "slug": "necklace-018",
    "name": "Necklace 18",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-018.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-019",
    "slug": "necklace-019",
    "name": "Necklace 19",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-019.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-020",
    "slug": "necklace-020",
    "name": "Necklace 20",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-020.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-021",
    "slug": "necklace-021",
    "name": "Necklace 21",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-021.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-022",
    "slug": "necklace-022",
    "name": "Necklace 22",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-022.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-023",
    "slug": "necklace-023",
    "name": "Necklace 23",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-023.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-024",
    "slug": "necklace-024",
    "name": "Necklace 24",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-024.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-025",
    "slug": "necklace-025",
    "name": "Necklace 25",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-025.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-026",
    "slug": "necklace-026",
    "name": "Necklace 26",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-026.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-027",
    "slug": "necklace-027",
    "name": "Necklace 27",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-027.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-028",
    "slug": "necklace-028",
    "name": "Necklace 28",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-028.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-029",
    "slug": "necklace-029",
    "name": "Necklace 29",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-029.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-030",
    "slug": "necklace-030",
    "name": "Necklace 30",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-030.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-031",
    "slug": "necklace-031",
    "name": "Necklace 31",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-031.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-032",
    "slug": "necklace-032",
    "name": "Necklace 32",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-032.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-033",
    "slug": "necklace-033",
    "name": "Necklace 33",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-033.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-034",
    "slug": "necklace-034",
    "name": "Necklace 34",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-034.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-035",
    "slug": "necklace-035",
    "name": "Necklace 35",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-035.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-036",
    "slug": "necklace-036",
    "name": "Necklace 36",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-036.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-037",
    "slug": "necklace-037",
    "name": "Necklace 37",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-037.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-038",
    "slug": "necklace-038",
    "name": "Necklace 38",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-038.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-039",
    "slug": "necklace-039",
    "name": "Necklace 39",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-039.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-040",
    "slug": "necklace-040",
    "name": "Necklace 40",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-040.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-041",
    "slug": "necklace-041",
    "name": "Necklace 41",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/necklace-041.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "necklace"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-042",
    "slug": "pendant-necklace-001",
    "name": "Pendant Necklace 01",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/pendant-necklace-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-043",
    "slug": "pendant-necklace-002",
    "name": "Pendant Necklace 02",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/pendant-necklace-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-044",
    "slug": "pendant-necklace-003",
    "name": "Pendant Necklace 03",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/pendant-necklace-003.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-045",
    "slug": "pendant-necklace-004",
    "name": "Pendant Necklace 04",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/pendant-necklace-004.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-046",
    "slug": "pendant-necklace-005",
    "name": "Pendant Necklace 05",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/pendant-necklace-005.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-047",
    "slug": "pendant-necklace-006",
    "name": "Pendant Necklace 06",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/pendant-necklace-006.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-neck-048",
    "slug": "pendant-necklace-007",
    "name": "Pendant Necklace 07",
    "category": "Necklaces",
    "image": "/images/shop-catalogue-v2/pendant-necklace-007.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished necklace from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "pendant"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-bang-001",
    "slug": "bangle-001",
    "name": "Bangle 01",
    "category": "Bangles",
    "image": "/images/shop-catalogue-v2/bangle-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bangle from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "bangle"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-bang-002",
    "slug": "bangle-002",
    "name": "Bangle 02",
    "category": "Bangles",
    "image": "/images/shop-catalogue-v2/bangle-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bangle from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "bangle"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-bang-003",
    "slug": "bangle-003",
    "name": "Bangle 03",
    "category": "Bangles",
    "image": "/images/shop-catalogue-v2/bangle-003.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished bangle from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "bangle"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-001",
    "slug": "brooch-001",
    "name": "Brooch 01",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-001.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-002",
    "slug": "brooch-002",
    "name": "Brooch 02",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-002.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": true,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-003",
    "slug": "brooch-003",
    "name": "Brooch 03",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-003.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-004",
    "slug": "brooch-004",
    "name": "Brooch 04",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-004.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-005",
    "slug": "brooch-005",
    "name": "Brooch 05",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-005.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-006",
    "slug": "brooch-006",
    "name": "Brooch 06",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-006.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-007",
    "slug": "brooch-007",
    "name": "Brooch 07",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-007.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-008",
    "slug": "brooch-008",
    "name": "Brooch 08",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-008.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-009",
    "slug": "brooch-009",
    "name": "Brooch 09",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-009.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-010",
    "slug": "brooch-010",
    "name": "Brooch 10",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-010.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-011",
    "slug": "brooch-011",
    "name": "Brooch 11",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-011.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-012",
    "slug": "brooch-012",
    "name": "Brooch 12",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-012.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-013",
    "slug": "brooch-013",
    "name": "Brooch 13",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-013.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-014",
    "slug": "brooch-014",
    "name": "Brooch 14",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-014.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
  {
    "id": "uni-broo-015",
    "slug": "brooch-015",
    "name": "Brooch 15",
    "category": "Brooches",
    "image": "/images/shop-catalogue-v2/brooch-015.jpg",
    "gallery": [],
    "shortDescription": "A hand-finished brooch from the Uni atelier, prepared for private viewing.",
    "visualAttributes": {
      "visibleStone": "",
      "apparentMetalColor": "",
      "design": "brooch"
    },
    "price": null,
    "priceLabel": "Contact for Pricing",
    "featured": false,
    "identificationConfidence": "high"
  },
];

export const CATEGORIES = [
  "All Jewellery",
  "Rings",
  "Earrings",
  "Necklaces",
  "Bracelets",
  "Bangles",
  "Brooches",
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
