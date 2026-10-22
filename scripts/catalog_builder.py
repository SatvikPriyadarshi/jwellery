import os
import re
import json
import hashlib
from PIL import Image

SHOP_DIR = 'public/images/shop'

SKU_PREFIXES = {
    'BG': 'Bangles',
    'B': 'Bracelets',
    'ER': 'Earrings',
    'E': 'Earrings',
    'NNK': 'Necklaces',
    'NK': 'Necklaces',
    'N': 'Necklaces',
    'NRG': 'Rings',
    'RG': 'Rings',
    'RE': 'Rings',
    'R': 'Rings'
}

def analyze_image(path):
    try:
        im = Image.open(path).convert('RGB')
    except Exception as e:
        return {
            'empty': True,
            'aspect': 1.0,
            'stone': 'diamond',
            'metal': 'white metal',
            'design': 'classic',
            'category': 'Rings',
            'confidence': 'needs_review'
        }

    w, h = im.size
    scale = 4
    sw, sh = max(1, w // scale), max(1, h // scale)
    sim = im.resize((sw, sh))
    
    corners = [sim.getpixel((0,0)), sim.getpixel((sw-1, 0)), sim.getpixel((0, sh-1)), sim.getpixel((sw-1, sh-1))]
    bg_r = sum(c[0] for c in corners) // 4
    bg_g = sum(c[1] for c in corners) // 4
    bg_b = sum(c[2] for c in corners) // 4
    
    obj_pixels = []
    for y in range(sh):
        for x in range(sw):
            r, g, b = sim.getpixel((x, y))
            diff = abs(r - bg_r) + abs(g - bg_g) + abs(b - bg_b)
            if diff > 28:
                obj_pixels.append((x, y, r, g, b))
                
    if not obj_pixels:
        return {
            'empty': True,
            'aspect': 1.0,
            'stone': 'diamond',
            'metal': 'white metal',
            'design': 'classic',
            'category': 'Rings',
            'confidence': 'needs_review'
        }
        
    xs = [p[0] for p in obj_pixels]
    ys = [p[1] for p in obj_pixels]
    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)
    bw = max_x - min_x
    bh = max_y - min_y
    aspect = bw / float(bh) if bh > 0 else 1.0
    
    mid_x = (min_x + max_x) // 2
    mid_y = (min_y + max_y) // 2
    center_color = sim.getpixel((mid_x, mid_y))
    center_is_bg = (abs(center_color[0] - bg_r) + abs(center_color[1] - bg_g) + abs(center_color[2] - bg_b)) < 32
    
    total = len(obj_pixels)
    green = sum(1 for _,_,r,g,b in obj_pixels if g > r + 15 and g > b + 15)
    red = sum(1 for _,_,r,g,b in obj_pixels if r > g + 25 and r > b + 25)
    blue = sum(1 for _,_,r,g,b in obj_pixels if b > r + 18 and b > g + 15)
    gold = sum(1 for _,_,r,g,b in obj_pixels if r > 160 and g > 130 and b < 105)
    rose = sum(1 for _,_,r,g,b in obj_pixels if r > 170 and 110 < g < 155 and b < 130)
    
    stone = 'diamond'
    if green > total * 0.035:
        stone = 'emerald'
    elif red > total * 0.035:
        stone = 'ruby'
    elif blue > total * 0.035:
        stone = 'sapphire'
    elif (green > total * 0.02 and red > total * 0.02) or (green > total * 0.02 and blue > total * 0.02):
        stone = 'multicolor gemstone'
        
    metal = 'white metal'
    if gold > total * 0.07:
        metal = 'yellow gold'
    elif rose > total * 0.06:
        metal = 'rose gold'
        
    # Check if two distinct clusters exist horizontally (earrings pair)
    left_count = sum(1 for x,_,_,_,_ in obj_pixels if x < mid_x - bw * 0.08)
    right_count = sum(1 for x,_,_,_,_ in obj_pixels if x > mid_x + bw * 0.08)
    center_band_count = sum(1 for x,_,_,_,_ in obj_pixels if abs(x - mid_x) <= bw * 0.08)
    is_pair = (left_count > total * 0.35 and right_count > total * 0.35 and center_band_count < total * 0.15)
    
    # Categorization heuristic
    category = 'Rings'
    design = 'classic'
    confidence = 'high'
    
    if is_pair:
        category = 'Earrings'
        design = 'drop' if aspect < 0.65 else 'stud'
    elif aspect < 0.18:
        category = 'Bracelets'
        design = 'tennis'
    elif aspect < 0.45:
        if bh > sh * 0.55:
            category = 'Necklaces'
            design = 'pendant'
        else:
            category = 'Earrings'
            design = 'drop'
    elif 0.7 <= aspect <= 1.35 and bh < sh * 0.48:
        category = 'Rings'
        if stone != 'diamond':
            design = 'halo' if aspect > 1.05 else 'solitaire'
        else:
            design = 'solitaire' if aspect < 0.95 else 'pave band'
    elif center_is_bg and bw > sw * 0.42:
        category = 'Bangles' if aspect > 0.85 else 'Necklaces'
        design = 'sculpted'
    elif bh > sh * 0.55 and aspect > 0.55:
        category = 'Necklaces'
        design = 'statement'
    elif aspect > 1.4:
        category = 'Bracelets'
        design = 'tennis' if bh < sh * 0.3 else 'cuff'
    else:
        category = 'Rings' if bh < sh * 0.42 else 'Necklaces'
        design = 'solitaire'
        confidence = 'medium'
        
    return {
        'empty': False,
        'aspect': aspect,
        'stone': stone,
        'metal': metal,
        'design': design,
        'category': category,
        'confidence': confidence,
        'is_pair': is_pair
    }

def generate_catalog():
    files = sorted([f for f in os.listdir(SHOP_DIR) if any(f.lower().endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp'])])
    
    # Track hashes to detect exact duplicates
    hashes = {}
    duplicates = {}
    for f in files:
        p = os.path.join(SHOP_DIR, f)
        with open(p, 'rb') as fp:
            h = hashlib.md5(fp.read()).hexdigest()
        if h in hashes:
            primary = hashes[h]
            if primary not in duplicates:
                duplicates[primary] = []
            duplicates[primary].append(f)
        else:
            hashes[h] = f
            
    # Process primary files
    primary_files = sorted(list(hashes.values()))
    products = []
    seen_slugs = set()
    category_counts = {}
    
    # High-luxury name vocabulary
    descriptors = {
        'emerald': ['Verdant', 'Imperial', 'Zambian', 'Céleste', 'Emerald', 'Sovereign', 'Botanical', 'Aurora', 'Opulent', 'Regal'],
        'diamond': ['Lumière', 'Brilliant', 'Eternity', 'Radiance', 'Solitaire', 'Starlight', 'Celestial', 'Prismatic', 'Aura', 'Timeless'],
        'ruby': ['Scarlet', 'Crimson', 'Pigeon Blood', 'Velvet', 'Ruby', 'Rouge', 'Solaris', 'Majestic', 'Florentine', 'Imperial'],
        'sapphire': ['Azure', 'Royal', 'Kashmir', 'Midnight', 'Sapphire', 'Nocturne', 'Deep Sea', 'Seraphic', 'Cornflower', 'Celestial'],
        'tourmaline': ['Kaleidoscope', 'Prism', 'Tourmaline', 'Paraíba-Toned', 'Chromatic', 'Sunburst', 'Aura', 'Bespoke'],
        'aquamarine': ['Aquamarine', 'Cerulean', 'Lagoon', 'Glacial', 'Azure Solitaire', 'Oceanic', 'Frost'],
        'multicolor gemstone': ['Polychrome', 'Mosaic', 'Harlequin', 'Garden of Eden', 'Prismatic', 'Archival']
    }
    
    design_descriptors = {
        'halo': 'Halo',
        'solitaire': 'Solitaire',
        'pave band': 'Pavé Band',
        'cluster': 'Cluster',
        'drop': 'Drop',
        'stud': 'Stud',
        'tennis': 'Tennis',
        'cuff': 'Cuff',
        'sculpted': 'Sculpted',
        'pendant': 'Pendant',
        'statement': 'Statement Collar',
        'classic': 'Classic'
    }

    item_singular = {
        'Rings': 'Ring',
        'Earrings': 'Earrings',
        'Necklaces': 'Necklace',
        'Bracelets': 'Bracelet',
        'Bangles': 'Bangle'
    }

    for idx, f in enumerate(primary_files, start=1):
        p = os.path.join(SHOP_DIR, f)
        fl = f.lower()
        vis = analyze_image(p)
        
        category = vis['category']
        stone = vis['stone']
        metal = vis['metal']
        design = vis['design']
        confidence = vis['confidence']
        
        # Override with explicit filename information if present
        if 'ring' in fl:
            category = 'Rings'
            confidence = 'high'
        elif 'earring' in fl:
            category = 'Earrings'
            confidence = 'high'
        elif 'necklace' in fl or 'choker' in fl or 'pendant' in fl:
            category = 'Necklaces'
            confidence = 'high'
        elif 'bracelet' in fl or 'tennis' in fl:
            category = 'Bracelets'
            confidence = 'high'
        elif 'bangle' in fl:
            category = 'Bangles'
            confidence = 'high'
            
        m = re.match(r'^([A-Z]{1,3})\d+', f)
        if m and m.group(1) in SKU_PREFIXES:
            category = SKU_PREFIXES[m.group(1)]
            confidence = 'high'
            
        # Stone overrides
        if 'emerald' in fl or 'em ' in fl or 'cab' in fl:
            stone = 'emerald'
        elif 'ruby' in fl:
            stone = 'ruby'
        elif 'sapphire' in fl or 'iolite' in fl:
            stone = 'sapphire'
        elif 'aquamarine' in fl:
            stone = 'aquamarine'
        elif 'tourmaline' in fl:
            stone = 'tourmaline'
            
        # Metal overrides
        if 'rose gold' in fl or '18rw' in fl or '18r' in fl:
            metal = 'rose gold'
        elif 'gold' in fl or '18k' in fl or 'yellow' in fl:
            metal = 'yellow gold'
        elif '18w' in fl or 'white' in fl:
            metal = 'white metal'

        # Specific design overrides
        if 'cab' in fl:
            design = 'cabochon'
        elif 'oval' in fl:
            design = 'oval cut'
        elif 'dia' in fl and 'halo' in fl:
            design = 'halo'

        # Generate elegant title
        cat_single = item_singular[category]
        cat_count = category_counts.get(category, 0) + 1
        category_counts[category] = cat_count
        
        stone_pool = descriptors.get(stone, ['Fine Gemstone', 'Bespoke'])
        adj = stone_pool[(cat_count - 1) % len(stone_pool)]
        style_title = design_descriptors.get(design, design.title())
        
        # Create cohesive luxury name
        if stone == 'diamond':
            if category == 'Bracelets' and design == 'tennis':
                name = f"The {adj} Diamond Tennis Bracelet"
            elif category == 'Rings':
                name = f"The {adj} Diamond {style_title} Ring"
            elif category == 'Earrings':
                name = f"{adj} Diamond {style_title} Earrings"
            elif category == 'Necklaces':
                name = f"The {adj} Diamond {style_title} Necklace"
            else:
                name = f"The {adj} Diamond {cat_single}"
        else:
            stone_cap = stone.title()
            if design in ['halo', 'solitaire', 'drop', 'cabochon', 'oval cut']:
                name = f"The {adj} {stone_cap} {design.title()} {cat_single}"
            elif design == 'tennis' and category == 'Bracelets':
                name = f"The {adj} {stone_cap} Line Bracelet"
            else:
                name = f"The {adj} {stone_cap} {cat_single}"
                
        # Clean up repeated words
        words = name.split()
        deduped = []
        for w in words:
            if not deduped or w.lower() != deduped[-1].lower():
                deduped.append(w)
        name = " ".join(deduped)

        # Generate unique slug
        base_slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
        slug = base_slug
        counter = 1
        while slug in seen_slugs:
            counter += 1
            slug = f"{base_slug}-{counter}"
        seen_slugs.add(slug)
        
        # Build gallery if duplicates/alt views exist
        gallery = []
        if f in duplicates:
            for alt in duplicates[f]:
                gallery.append(f"/images/shop/{alt}")
                
        # Curate featured status across categories
        is_featured = (cat_count in [1, 2, 3] and confidence == 'high')
        
        # Editorial short description
        if stone == 'emerald':
            short_desc = f"Exquisite craftsmanship showcasing velvety green crystalline hue set in hand-finished {metal} with calibrated proportions."
        elif stone == 'diamond':
            short_desc = f"Hand-selected diamonds exhibiting remarkable fire, scintillation, and optical precision in enduring {metal}."
        elif stone == 'ruby':
            short_desc = f"A rare pigeon-blood crimson gemstone illuminated by delicate micro-pavé accents in lustrous {metal}."
        elif stone == 'sapphire':
            short_desc = f"Deep royal blue saturation with exceptional geometric clarity, set in handcrafted {metal}."
        else:
            short_desc = f"An exceptional high jewelry heirloom piece combining natural gemstone beauty and artisanal {metal} metallurgy."

        pid = f"uni-{category.lower()[:4]}-{idx:03d}"
        
        products.append({
            'id': pid,
            'slug': slug,
            'name': name,
            'category': category,
            'image': f"/images/shop/{f}",
            'gallery': gallery,
            'shortDescription': short_desc,
            'visualAttributes': {
                'visibleStone': f"{stone} gemstone" if stone != 'diamond' else 'diamond',
                'apparentMetalColor': metal,
                'design': design
            },
            'price': None,
            'priceLabel': "Contact for Pricing",
            'featured': is_featured,
            'identificationConfidence': confidence
        })
        
    return products, duplicates

if __name__ == '__main__':
    prods, dups = generate_catalog()
    print(f"Generated {len(prods)} products successfully.")
    
    # Category summary
    cats = {}
    for p in prods:
        c = p['category']
        cats[c] = cats.get(c, 0) + 1
    print("Category breakdown:", cats)
    print(f"Products with gallery alternates: {len(dups)}")
    
    # Write TS file
    ts_code = '''// =========================================================================
// UNI FINE JEWELRY — COMPREHENSIVE LUXURY PRODUCT CATALOG
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

export const PRODUCTS: Product[] = ''' + json.dumps(prods, indent=2) + ''';

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

export default PRODUCTS;
'''

    with open('src/data/products.ts', 'w', encoding='utf-8') as f:
        f.write(ts_code)
        
    print("Saved to src/data/products.ts")
