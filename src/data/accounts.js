/** @typedef {{ src: string; alt: string }} ShowcaseImage */
/** @typedef {{
 *   id: string
 *   title: string
 *   blurb?: string
 *   images: ShowcaseImage[]
 *   pairWithNext?: boolean
 * }} ShowcaseSection */

/** Static assets: public/images/accounts/<account-id>/<section>/<file>.jpg */
const DEATH_F2P_DIR = 'accounts/deathf2p'
const DEATH_F2P_ALT_DIR = 'accounts/deathf2palt'

/** @param {string} file */
function imgDeathF2P(file) {
  return `/images/${DEATH_F2P_DIR}/${file}`
}

/** @param {string} file */
function imgDeathF2PAlt(file) {
  return `/images/${DEATH_F2P_ALT_DIR}/${file}`
}

/** @type {ShowcaseSection[]} */
const DEATH_F2P_SHOWCASE = [
  {
    id: 'research',
    title: 'Research',
    blurb: 'Level 50 Research Center plus Battle and Armies branch progress.',
    images: [
      {
        src: imgDeathF2P('research/center-overview.jpg'),
        alt: 'Nexus War research center overview at level 50 with Development, Battle, Armaments, and Armies orbs',
      },
      {
        src: imgDeathF2P('research/battle-branch.jpg'),
        alt: 'Battle research branch stats including Army Enhancement, City Attack, and City Wall percentages',
      },
      {
        src: imgDeathF2P('research/armies-branch.jpg'),
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
        src: imgDeathF2P('titans/whale-killer-1.jpg'),
        alt: 'Marching army whale killer with level 60 titan, heroes Animox Floranis Cintra, and 113.6M power',
      },
      {
        src: imgDeathF2P('titans/whale-killer-2.jpg'),
        alt: 'Marching army whale killer alternate view with 112.9M power and full troop capacity',
      },
      {
        src: imgDeathF2P('titans/f2p-killer.jpg'),
        alt: 'Marching army F2P killer with heroes X-578 Nameless Miryam and 77.7M power',
      },
      {
        src: imgDeathF2P('titans/backup.jpg'),
        alt: 'Marching army backup with Medellia Ingrid Bonnie and 73.0M power',
      },
      {
        src: imgDeathF2P('titans/gatherer.jpg'),
        alt: 'Marching army gatherer with Djemes Salazaria Khyrus and 50.5M power',
      },
      {
        src: imgDeathF2P('titans/defense.jpg'),
        alt: 'Defense army preset with Violet Baeyum Iarhen and 35.0M power',
      },
    ],
  },
  {
    id: 'battlefield',
    title: 'Battlefield',
    blurb: 'Marching army presets with titan and T-Frame power as shown in the battlefield UI.',
    images: [
      {
        src: imgDeathF2P('battlefield/whale-killer.jpg'),
        alt: 'Marching army whale killer with level 60 titan, heroes Animox Floranis Cintra, IX+ marches, 127.5M power',
      },
      {
        src: imgDeathF2P('battlefield/f2p-killer.jpg'),
        alt: 'Marching army F2P killer with heroes X-578 Nameless Miryam, level 56 T-Frame, IX+ troops, 85.3M power',
      },
      {
        src: imgDeathF2P('battlefield/backup.jpg'),
        alt: 'Marching army backup with heroes Medellia Ingrid Bonnie, level 56 T-Frame, IX+ troops, 80.0M power',
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
        src: imgDeathF2P('titan-parts/f2p-killer.jpg'),
        alt: 'Titan Parts screen for F2P killer ship with Control Chip Command Center Engine Platform Deck Detector levels',
      },
      {
        src: imgDeathF2P('titan-parts/whale-killer.jpg'),
        alt: 'Titan Parts for whale killer level 60 with six parts at high star levels',
      },
      {
        src: imgDeathF2P('titan-parts/backup-duke.jpg'),
        alt: 'Titan Parts for backup ship DUKE level 40 with six equipped components',
      },
      {
        src: imgDeathF2P('titan-parts/gatherer.jpg'),
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
        src: imgDeathF2P('component-storage/energy-convertor.jpg'),
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
        src: imgDeathF2P('artifact-lab/research-grid.jpg'),
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
        src: imgDeathF2P('details/player-info.jpg'),
        alt: 'Player info screen with total power, combat points, tech, military, hero, and battle statistics',
      },
      {
        src: imgDeathF2P('details/space-domain-37-6.jpg'),
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
        src: imgDeathF2P('inventory/resources-tab.jpg'),
        alt: 'Items resources tab showing stockpiled gold food energy coal metal and Ion Reactor item detail',
      },
    ],
  },
]

/** @type {ShowcaseSection[]} */
const DEATH_F2P_ALT_SHOWCASE = [
  {
    id: 'research',
    title: 'Research',
    blurb: 'Level 50 Research Center — Development and Armaments complete; Battle and Armies in progress.',
    images: [
      {
        src: imgDeathF2PAlt('research/center-overview.jpg'),
        alt: 'Research Center level 50 with Development Battle Armaments and Armies branch progress orbs',
      },
      {
        src: imgDeathF2PAlt('research/battle-branch.jpg'),
        alt: 'Battle research branch with Army Enhancement City Attack City Wall Pre-Enhancement and Impregnability stats',
      },
      {
        src: imgDeathF2PAlt('research/armies-branch.jpg'),
        alt: 'Armies research progress for Titan Sigma Central Titan Titan Delta Titan Omega and Defense Army',
      },
    ],
  },
  {
    id: 'titans',
    title: 'Titans',
    blurb: 'Marching army presets at 330k troops — All for one and Titan Δ (non-battlefield row).',
    images: [
      {
        src: imgDeathF2PAlt('titans/all-for-one-330k.jpg'),
        alt: 'Marching army All for one with 330k troops 109.7M power IX+ heroes Animox Floranis Cintra',
      },
      {
        src: imgDeathF2PAlt('titans/titan-delta-330k.jpg'),
        alt: 'Marching army Titan Delta with 330k troops 57.9M power heroes X-578 Miryam Nameless IX tanks',
      },
    ],
  },
  {
    id: 'battlefield',
    title: 'Battlefield',
    blurb: 'Battlefield stats at full 366k troop cap — same presets with maxed marching capacity.',
    images: [
      {
        src: imgDeathF2PAlt('battlefield/all-for-one-366k.jpg'),
        alt: 'Battlefield marching army All for one 366k troops level 60 titan heroes Animox Floranis Cintra 119.1M power',
      },
      {
        src: imgDeathF2PAlt('battlefield/titan-delta-366k.jpg'),
        alt: 'Battlefield marching army Titan Delta 366k troops heroes X-578 Miryam Nameless 72.2M power T-Frame 97',
      },
    ],
  },
  {
    id: 'component-storage',
    title: 'Component storage',
    blurb: 'T-Frame components — Force Field Generator accessory, reinforce grid, and inventory.',
    images: [
      {
        src: imgDeathF2PAlt('component-storage/force-field-generator.jpg'),
        alt: 'Component Storage with Force Field Generator level 9 T-Skill defense and component grid',
      },
    ],
  },
  {
    id: 'artifact-lab',
    title: 'Artifact Lab',
    blurb: 'Artifact research list and tech tree progress including Graviton Cannon and Shield Substrate.',
    images: [
      {
        src: imgDeathF2PAlt('artifact-lab/artifact-list.jpg'),
        alt: 'Artifact Research screen with Graviton Cannon in progress Cerebral Amplifier Galactic Resonator percentages',
      },
      {
        src: imgDeathF2PAlt('artifact-lab/research-tree.jpg'),
        alt: 'Artifact Research hex tree with Shield Substrate active research and node levels out of ten',
      },
    ],
  },
  {
    id: 'details',
    title: 'Details',
    blurb: 'Player info plus Space Domain progress (through 38-6).',
    images: [
      {
        src: imgDeathF2PAlt('details/player-info.jpg'),
        alt: 'Player info screen with about 393M total power combat points tech military hero T-Frame and battle statistics',
      },
      {
        src: imgDeathF2PAlt('details/space-domain-38-6.jpg'),
        alt: 'Space Domain stage 38-5 cleanup at 116M recommended power with progression through 38-6 on the timeline and jump to 37-10',
      },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    blurb: 'Items, resources, accelerators, and OTHER — stockpiles, tickets, and materials.',
    images: [
      {
        src: imgDeathF2PAlt('inventory/items-all.jpg'),
        alt: 'Items inventory ALL tab with resources chests materials and Selectable Titan skin Chest detail',
      },
      {
        src: imgDeathF2PAlt('inventory/resources-tab.jpg'),
        alt: 'Items RESOURCES tab with Ion Reactor stacks and top-bar resource totals',
      },
      {
        src: imgDeathF2PAlt('inventory/resources-packs.jpg'),
        alt: 'Items RESOURCES tab with stacked gold ore packs and liquid resource vouchers',
      },
      {
        src: imgDeathF2PAlt('inventory/accelerators-tab.jpg'),
        alt: 'Items ACCELERATORS tab with universal training healing research and construction speedups',
      },
      {
        src: imgDeathF2PAlt('inventory/other-tab.jpg'),
        alt: 'Items OTHER tab with Selectable Titan skin Chest grid of chests components and alliance chat',
      },
      {
        src: imgDeathF2PAlt('inventory/other-supplies.jpg'),
        alt: 'Items OTHER tab showing recruitment tickets city items and large stacks of upgrade materials',
      },
    ],
  },
]

/*
  Add another account: create public/images/accounts/<id>/{research,titans,...}/ with .jpg files,
  build a SHOWCASE array, then append { id, title, server, power, highlights, badge?, image, showcase }.
  Listing URL: /account/<id>
*/

export const ACCOUNTS = [
  {
    id: 'deathf2p',
    title: 'DeathF2P',
    server: 'S-40',
    power: '~485M',
    highlights: [
      'L50 Research Center · strong Battle & Armies branches',
      'Multiple IX+ marches · L60 whale-killer + upgraded Titan parts',
      'Space Domain 37-6 · deep resources & components',
    ],
    badge: 'Featured',
    image: imgDeathF2P('battlefield/whale-killer.jpg'),
    showcase: DEATH_F2P_SHOWCASE,
  },
  {
    id: 'deathf2palt',
    title: 'DeathF2PAlt',
    server: 'S-40',
    power: '~393M',
    highlights: [
      'L50 Research Center · Development & Armaments maxed; Battle & Armies advancing',
      'L60 titan · All for one & Titan Δ marches with IX+ and ~50M+ T-Frame power',
      'Space Domain through 38-6 · deep bags, components, and stacked resources',
    ],
    image: imgDeathF2PAlt('battlefield/all-for-one-366k.jpg'),
    showcase: DEATH_F2P_ALT_SHOWCASE,
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
