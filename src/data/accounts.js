/** @typedef {{ src: string; alt: string }} ShowcaseImage */
/** @typedef {{
 *   id: string
 *   title: string
 *   blurb?: string
 *   images: ShowcaseImage[]
 *   pairWithNext?: boolean
 * }} ShowcaseSection */

const D = 'DeathF2P'

/** @param {string} file */
function img(file) {
  return `/images/${D}/${file}`
}

/** @type {ShowcaseSection[]} */
const DEATH_F2P_SHOWCASE = [
  {
    id: 'research',
    title: 'Research',
    blurb: 'Level 50 Research Center plus Battle and Armies branch progress.',
    images: [
      {
        src: img('Screenshot_2026-04-10-01-53-30-00_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Nexus War research center overview at level 50 with Development, Battle, Armaments, and Armies orbs',
      },
      {
        src: img('Screenshot_2026-04-10-01-53-34-35_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Battle research branch stats including Army Enhancement, City Attack, and City Wall percentages',
      },
      {
        src: img('Screenshot_2026-04-10-01-53-39-39_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Armies research progress for Titan Sigma, Central Titan, Titan Delta, Titan Omega, and Defense Army',
      },
    ],
  },
  {
    id: 'titans',
    title: 'Titans',
    blurb: 'Marching army presets and marches across multiple saved setups.',
    images: [
      {
        src: img('Screenshot_2026-04-10-01-55-33-79_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Marching army whale killer with level 60 titan, heroes Animox Floranis Cintra, and 113.6M power',
      },
      {
        src: img('Screenshot_2026-04-10-01-55-38-94_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Marching army whale killer alternate view with 112.9M power and full troop capacity',
      },
      {
        src: img('Screenshot_2026-04-10-01-55-47-77_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Marching army F2P killer with heroes X-578 Nameless Miryam and 77.7M power',
      },
      {
        src: img('Screenshot_2026-04-10-01-55-55-76_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Marching army backup with Medellia Ingrid Bonnie and 73.0M power',
      },
      {
        src: img('Screenshot_2026-04-10-01-56-02-30_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Marching army gatherer with Djemes Salazaria Khyrus and 50.5M power',
      },
      {
        src: img('Screenshot_2026-04-10-01-56-08-71_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Defense army preset with Violet Baeyum Iarhen and 35.0M power',
      },
    ],
  },
  {
    id: 'titan-parts',
    title: 'Titan parts',
    pairWithNext: true,
    blurb: 'Per-ship Titan Parts screens (Control Chip, Engine, Deck, Detector, etc.).',
    images: [
      {
        src: img('Screenshot_2026-04-10-01-56-23-64_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Titan Parts screen for F2P killer ship with Control Chip Command Center Engine Platform Deck Detector levels',
      },
      {
        src: img('Screenshot_2026-04-10-01-56-26-40_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Titan Parts for whale killer level 60 with six parts at high star levels',
      },
      {
        src: img('Screenshot_2026-04-10-01-56-28-81_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Titan Parts for backup ship DUKE level 40 with six equipped components',
      },
      {
        src: img('Screenshot_2026-04-10-01-56-31-19_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Titan Parts for gatherer with partial part slots equipped',
      },
    ],
  },
  {
    id: 'component-storage',
    title: 'Component storage',
    blurb:
      'T-Frame components: accessories, reinforce levels, and the full component grid (e.g. Energy Convertor).',
    images: [
      {
        src: img('Screenshot_2026-04-10-01-57-46-49_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Component Storage with Energy Convertor accessory and reinforce progress grid',
      },
    ],
  },
  {
    id: 'artifact-lab',
    title: 'Artifact Lab',
    blurb: 'Artifact research grid showing progress on key artifacts.',
    images: [
      {
        src: img('Screenshot_2026-04-10-01-53-57-13_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Artifact Research screen with Graviton Cannon Cerebral Amplifier and other artifact completion percentages',
      },
    ],
  },
  {
    id: 'details',
    title: 'Details',
    blurb: 'Account profile power breakdown and Space Domain campaign progress.',
    images: [
      {
        src: img('Screenshot_2026-04-10-01-54-39-39_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Player info screen with total power, combat points, tech, military, hero, and battle statistics',
      },
      {
        src: img('Screenshot_2026-04-10-01-57-24-35_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Space Domain stage 37-6 with 111.5M recommended power and cleanup rewards',
      },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    blurb: 'Resources tab — stockpiles and key items.',
    images: [
      {
        src: img('Screenshot_2026-04-10-01-54-12-75_f57a4059871cdc74497da166880ee049.jpg'),
        alt: 'Items resources tab showing stockpiled gold food energy coal metal and Ion Reactor item detail',
      },
    ],
  },
]

/*
  Add another account: copy an image folder under public/images/, build a SHOWCASE array,
  then append { id, title, server, power, priceUsd, priceNote?, highlights, badge?, image, showcase }.
  Listing URL: /account/<id>
*/

export const ACCOUNTS = [
  {
    id: 'deathf2p',
    title: 'DeathF2P',
    server: 'S-40',
    power: '~485M',
    priceUsd: 700,
    priceNote: 'Excluding fees · negotiable',
    highlights: [
      'L50 Research Center · strong Battle & Armies branches',
      'Multiple IX+ marches · L60 whale-killer + upgraded Titan parts',
      'Space Domain 37-6 · deep resources & components',
    ],
    badge: 'Featured',
    image: img('Screenshot_2026-04-10-01-55-33-79_f57a4059871cdc74497da166880ee049.jpg'),
    showcase: DEATH_F2P_SHOWCASE,
  },
]

/**
 * @param {string} id
 */
export function getAccountById(id) {
  return ACCOUNTS.find((a) => a.id === id) ?? null
}

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85'
