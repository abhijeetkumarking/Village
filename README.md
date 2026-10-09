# Aluara Village Digital Archive (अलुआरा ग्राम अभिलेखागार)

> **Where our roots become our story.**  
> A premium, documentary-archive web experience dedicated to safeguarding the oral histories, ancestral traditions, landmarks, and lived memories of **Aluara** (Bokaro, Jharkhand, India).

---

## 1. Project Overview

The **Aluara Village Archive** is designed with a literary, documentary-grade editorial aesthetic celebrating rural Jharkhand. Built purely with modern React, TypeScript, and semantic CSS tokens, it serves as an extensible digital archive awaiting community-driven oral history documentation.

### Core Principles
- **Strict Archival Truth**: No fabricated dates, folklore, or lineages. Only four established administrative/geographic facts are stated as verified (*Aluara*, *Bokaro*, *Jharkhand*, *India*), with the archive status catalogued as *Growing*.
- **Calm Visual Completeness**: Every entry begins with an honest status tag (`placeholder`, `draft`, or `verified`). The archive appears complete, inviting elders and descendants to fill in real memories.
- **Pure Native Tooling**: 100% powered by **Bun**. No heavy CSS frameworks, no client routing dependencies, and no stock photography.

---

## 2. Technology Stack

- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Frontend Core**: React 19 + TypeScript + Vite
- **Styling Architecture**: Plain Modern CSS with Custom Properties (CSS variables) split by concern (`tokens`, `base`, `layout`, `components`)
- **Typography**: Google Fonts: *Cormorant Garamond* (editorial serif headings), *Plus Jakarta Sans* (clean modern sans-serif body), and *Kalam* (subtle handwritten accent notes)
- **Accessibility**: Semantic HTML5 landmarks, full keyboard operability, accessible dialog modals, skip link, and `prefers-reduced-motion` compliance.

---

## 3. Directory Structure

```
village/
├── public/
│   ├── favicon.svg               # Stylized Jharkhand sprout & earthen motif
│   └── images/                   # Asset folders for photography
│       ├── hero/                 # Hero backdrop imagery (.gitkeep)
│       ├── village/              # General village landscape views (.gitkeep)
│       ├── people/               # Elders, families, portraits (.gitkeep)
│       ├── culture/              # Rituals, crafts, traditional attire (.gitkeep)
│       ├── festivals/            # Harvest, seasonal village events (.gitkeep)
│       ├── places/               # Sacred groves, ponds, schools (.gitkeep)
│       └── gallery/              # Gallery photos (.gitkeep)
├── src/
│   ├── components/               # Modular UI sections & shared components
│   │   ├── About.tsx             # Village overview, history, people, land
│   │   ├── ContributionForm.tsx  # Participatory submission forms & validation
│   │   ├── CultureCard.tsx       # Cultural entry card
│   │   ├── CultureSection.tsx    # 8 cultural domains
│   │   ├── FactCard.tsx          # Key village facts
│   │   ├── FactsSection.tsx      # Verified administrative facts
│   │   ├── Footer.tsx            # Archive footer & community notice
│   │   ├── Gallery.tsx           # Categorized photo grid & filter pills
│   │   ├── Hero.tsx              # SVG landscape contours & headline
│   │   ├── LightboxModal.tsx     # Accessible image/placeholder viewer
│   │   ├── Navbar.tsx            # Sticky responsive nav with mobile drawer
│   │   ├── PlaceCard.tsx         # Geographic place category card
│   │   ├── PlacesSection.tsx     # Important village places
│   │   ├── PlaceholderImage.tsx  # Handcrafted CSS/SVG photo slot
│   │   ├── SectionHeading.tsx    # Editorial eyebrow, title & rule
│   │   ├── StatusBadge.tsx       # Placeholder / Draft / Verified indicator
│   │   ├── StoriesSection.tsx    # Oral history cards & narrative dialogs
│   │   ├── StoryCard.tsx         # Elder story excerpt card
│   │   ├── StoryModal.tsx        # Accessible story reader dialog
│   │   ├── Timeline.tsx          # Vertical historical chronology
│   │   └── VillageLifeSection.tsx# 8 village life dimensions
│   ├── data/                     # Archive datasets (edit these to add real facts)
│   │   ├── culture.ts            # Cultural practices, rituals, attire, cuisine
│   │   ├── facts.ts              # Verified facts
│   │   ├── gallery.ts            # Photographic entries
│   │   ├── life.ts               # Daily routines, farming, schooling
│   │   ├── places.ts             # Sacred sites, water sources, institutions
│   │   ├── stories.ts            # Oral accounts from village elders
│   │   ├── timeline.ts           # Chronological periods & milestones
│   │   └── village.ts            # Metadata and About section texts
│   ├── styles/                   # Modular style system
│   │   ├── base.css              # Typography, reset, focus rings, skip link
│   │   ├── components.css        # Cards, dialogs, forms, badges
│   │   ├── index.css             # Stylesheet bundle entry
│   │   ├── layout.css            # Responsive containers & grid systems
│   │   └── tokens.css            # Colors, spacing, typography scales
│   ├── App.tsx                   # Composes sections with scroll observer
│   ├── main.tsx                  # React DOM mount
│   └── types.ts                  # Strict TypeScript interfaces
├── bun.lock                      # Bun lockfile
├── index.html                    # SEO metadata & Open Graph tags
├── package.json                  # Scripts and dependencies
├── tsconfig.json                 # TypeScript project configuration
└── vite.config.ts                # Vite build config
```

---

## 4. Bun Commands

This project uses **Bun exclusively**:

```bash
# 1. Install dependencies
bun install

# 2. Start local development server (with HMR)
bun run dev

# 3. Type check & build production bundle
bun run build

# 4. Preview the production build locally
bun run preview

# 5. Type checking only
bunx tsc -b
```

---

## 5. How to Add Village Information

All village content is isolated in `src/data/`. Adding a real entry or updating information simply requires editing the corresponding TypeScript file.

### Understanding `status`
Every entry has a `status` field defined in `src/types.ts`:
- `'placeholder'`: Highlighted in warm terracotta; indicates that research or elder interviews have not yet started.
- `'draft'`: Highlighted in muted gold; indicates information collected but still pending community or elder verification.
- `'verified'`: Highlighted in deep forest green; indicates authenticated history or official geographic records.

### Which File to Edit:
| Content Type | File Path | What to Edit |
|---|---|---|
| **Village Overview, History, Land** | `src/data/village.ts` | Update `aboutSectionData` (history, people, land features). Change `status` to `'verified'`. |
| **Culture, Rituals, Food, Attire** | `src/data/culture.ts` | Add or update objects in `cultureItems`. Add cultural notes and set `status: 'verified'`. |
| **Oral Stories & Elder Interviews** | `src/data/stories.ts` | Update `storyItems` with actual elder names, approximate era, topic, and `fullNote`. |
| **Daily Life, Farming, Work** | `src/data/life.ts` | Expand `villageLifeItems` with specific crops, daily customs, and generational changes. |
| **Ponds, Sacred Trees, Schools** | `src/data/places.ts` | Populate `placeItems` with authentic place names, descriptions, and directions. |
| **Historical Timeline** | `src/data/timeline.ts` | Update `timelineItems` with corroborated milestones and periods. |
| **Verified Administrative Facts** | `src/data/facts.ts` | Append new objects to `factItems` (e.g., coordinates, elevation, postal pin code once verified). |

---

## 6. Where to Add Photographs

Photographs can be placed into the appropriate subfolder inside `public/images/`:

```
public/images/
├── hero/        # Panorama shots for the hero section
├── village/     # General landscape, village paths, horizon
├── people/      # Portraits of elders, families, community gatherings
├── culture/     # Traditional attire, tools, rituals, pottery
├── festivals/   # Seasonal village fairs and sacred ceremonies
├── places/      # Ponds, trees, school grounds, temples
└── gallery/     # General gallery photographs
```

### Referencing an Image in Data:
Any dataset entry with an optional `imageSrc` or `src` property can reference your photo:

```ts
// Example: Adding a photo to src/data/gallery.ts
{
  id: 'gal-landscape-1',
  title: 'Morning over the Paddy Terraces',
  category: 'Landscapes',
  caption: 'Sunrise over Aluara fields during the monsoon sowing season.',
  src: '/images/gallery/aluara-fields.jpg', // File placed at public/images/gallery/aluara-fields.jpg
  aspectRatio: 'landscape',
  status: 'verified',
}
```

> **Automatic Fallback Guarantee**: If `src` is omitted, blank, or points to a missing file, the UI automatically renders a styled SVG/CSS archival placeholder with vintage photo mounts and category labels. Images will never appear broken.

---

## 7. How to Change Colors and Fonts

All visual variables are defined in `src/styles/tokens.css`.

### Color Palette Tokens
```css
:root {
  --color-forest: #1d3a24;        /* Primary forest green */
  --color-forest-dark: #122417;   /* Deep charcoal-green */
  --color-terracotta: #b85333;    /* Rural clay accent */
  --color-earth: #5c4033;         /* Soil brown */
  --color-gold: #c59b27;          /* Brass / harvest gold */
  --color-cream: #fbf8f1;         /* Warm background parchment */
  --color-offwhite: #f4eee1;      /* Secondary surface background */
}
```

### Typography Tokens
```css
:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif; /* Editorial headings */
  --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif; /* Clean body text */
  --font-accent: 'Kalam', cursive; /* Subtle handwritten notes */
}
```
To use different fonts, update the Google Fonts `<link>` in `index.html` and modify these three variables in `src/styles/tokens.css`.

---

## 8. Deployment Guide

Because Vite is configured with `base: './'`, the production bundle is completely host-agnostic and ready to deploy anywhere:

### Vercel / Cloudflare Pages / Netlify
- **Install Command**: `bun install`
- **Build Command**: `bun run build`
- **Output / Publish Directory**: `dist`
- **Framework Preset**: `Vite`

### GitHub Pages
1. Push your repository to GitHub.
2. In repository **Settings > Pages**, set **Source** to **GitHub Actions**.
3. Select the static Vite build workflow or deploy the built `dist/` folder.

---

## 9. License & Community Notice

This archive belongs to the community of **Aluara** (Bokaro, Jharkhand). Designed for preservation of indigenous memory, oral lore, and local cultural heritage.
