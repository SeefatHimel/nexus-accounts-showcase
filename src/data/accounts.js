/** @typedef {{ src: string; alt: string; lastUpdated?: string }} ShowcaseImage */
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

const DEFAULT_IMAGE_UPDATED_AT = 'March 2026'
const DEATH_F2P_UPDATED_AT = 'June 30, 2026'
const DEATH_F2P_UPDATED_AT_JULY = 'July 1, 2026'
const DEATH_F2P_UPDATED_AT_JULY2 = 'July 2, 2026'

/**
 * @param {ShowcaseSection[]} sections
 * @returns {ShowcaseSection[]}
 */
function withDefaultShowcaseDates(sections) {
  return sections.map((section) => ({
    ...section,
    images: section.images.map((shot) => ({
      lastUpdated: DEFAULT_IMAGE_UPDATED_AT,
      ...shot,
    })),
  }))
}

/** @type {ShowcaseSection[]} */
const DEATH_F2P_SHOWCASE_RAW = [
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
        alt: 'Battle research overview with Army Enhancement 100.0 percent, City Attack 95.4 percent, City Wall 100.0 percent, Pre-Enhancement 80.0 percent, and Impregnability 49.0 percent',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
      },
      {
        src: imgDeathF2P('research/armies-branch.jpg'),
        alt: 'Armies research overview showing Titan Sigma 92.3 percent, Central Titan 75.0 percent, Titan Delta 55.4 percent, Titan Omega 40.2 percent, and Defense Army 100.0 percent',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
      },
    ],
  },
  {
    id: 'tx-t10-titans',
    title: 'TX / T10 titans',
    blurb: 'Highest-tier titan marches at roughly 150M+ power.',
    images: [
      {
        src: imgDeathF2P('titans/whale-killer-330k-160m.jpg'),
        alt: 'TX or T10 whale killer march with 330k troops, 160.8M power, and heroes Animox Floranis Cintra',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('battlefield/whale-killer-378k-182m.jpg'),
        alt: 'TX or T10 whale killer battlefield march with 378k troops and 182.2M power',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('battlefield/whale-killer-378k-187m.jpg'),
        alt: 'TX or T10 whale killer battlefield march with 377.5k out of 378k troops, 187.5M power, and 475 march speed stat',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
    ],
  },
  {
    id: 't9-plus-titans',
    title: 'T9+ titans',
    blurb: 'Strong titan marches below the 150M range, including season and battlefield screens.',
    images: [
      {
        src: imgDeathF2P('titans/whale-killer-330k-117m-a.jpg'),
        alt: 'T9 plus whale killer march with 330k troops, level 60 titan, heroes Animox Floranis Cintra, and 117.4M power',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('battlefield/whale-killer-378k-129m.jpg'),
        alt: 'T9 plus whale killer battlefield march with 378k troops and 129.6M power',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('titans/f2p-killer-330k.jpg'),
        alt: 'T9 plus F2P killer season march with 330k troops, heroes X-578 Miryam Samuel, and 64.0M power',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('battlefield/f2p-killer-378k.jpg'),
        alt: 'T9 plus F2P killer battlefield march with 378k troops, heroes X-578 Miryam Samuel, and 83.2M power',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
    ],
  },
  {
    id: 'defense-titans',
    title: 'Defense titan',
    blurb: 'Defense Army marching screens with higher defense troop caps outside season and battlefield.',
    images: [
      {
        src: imgDeathF2P('defense-titans/defense-army-423k.jpg'),
        alt: 'Defense Army marching screen with 423k troops, heroes Medellia Ingrid Bonnie, and 63.3M power',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('defense-titans/defense-army-471k.jpg'),
        alt: 'Defense Army marching screen with 471k troops, heroes Medellia Ingrid Bonnie, and 79.5M power',
        lastUpdated: DEATH_F2P_UPDATED_AT,
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
        alt: 'Titan Parts screen for F2P killer ship at level 59 with level 60 parts on most slots and a level 59 command center',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('titan-parts/whale-killer.jpg'),
        alt: 'Titan Parts for whale killer level 60 with highly starred level 60 parts across all six slots',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('titan-parts/defense-army.jpg'),
        alt: 'Titan Parts for Defense Army level 40 with parts around level 40 to 41 across all six slots',
        lastUpdated: DEATH_F2P_UPDATED_AT,
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
    id: 'daemons',
    title: 'Daemons',
    blurb: 'T-Frame Workshop daemon synthesis progress across multiple rarity and level ranges.',
    images: [
      {
        src: imgDeathF2P('daemons/daemon-synthesis-low.jpg'),
        alt: 'T-Frame Workshop daemon synthesis screen with lower-level daemon materials around levels 7 to 9',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('daemons/daemon-synthesis-mid.jpg'),
        alt: 'T-Frame Workshop daemon synthesis screen with mixed daemon materials around levels 9 to 12',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('daemons/daemon-synthesis-high.jpg'),
        alt: 'T-Frame Workshop daemon synthesis screen with higher-level daemon materials around levels 13 to 17',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
    ],
  },
  {
    id: 'imprint-helmet',
    title: 'Imprint helmet',
    blurb: 'Imprint Helmet activation and hero pairing setup.',
    images: [
      {
        src: imgDeathF2P('imprint-helmet/floranis-magni.jpg'),
        alt: 'Imprint Helmet activated screen showing Floranis linked with Magni and equipped skill nodes',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
    ],
  },
  {
    id: 'artifact-lab',
    title: 'Artifact Lab',
    blurb: 'Artifact research progress across the main overview and deeper node trees.',
    images: [
      {
        src: imgDeathF2P('artifact-lab/artifact-overview.jpg'),
        alt: 'Artifact Research overview with Graviton Cannon at 74 percent, Cerebral Amplifier at 100 percent, Galactic Resonator at 31 percent, and several lower-progress artifacts',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
      },
      {
        src: imgDeathF2P('artifact-lab/offense-tree.jpg'),
        alt: 'Artifact Research offense-oriented node tree with multiple purple nodes ranging from 1 out of 10 to 6 out of 10',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
      },
      {
        src: imgDeathF2P('artifact-lab/support-tree.jpg'),
        alt: 'Artifact Research support-oriented node tree with top nodes at 9 out of 10, middle nodes at 10 out of 10, and lower nodes between 5 out of 10 and 6 out of 10',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
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
        alt: 'Player info screen with about 495M total power, combat points, tech, military, hero, T-Frame, and battle statistics',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
      {
        src: imgDeathF2P('details/space-domain-41-10.jpg'),
        alt: 'Space Domain stage 41-10 cleanup with 133.5M recommended power and progression visible through 42-2',
        lastUpdated: DEATH_F2P_UPDATED_AT,
      },
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    blurb: 'Resources, accelerators, buffs, and other items — stockpiles, skin chests, and utility consumables.',
    images: [
      {
        src: imgDeathF2P('inventory/resources-ion-reactor-overview.jpg'),
        alt: 'Items resources tab showing Ion Reactor selected with stockpiled reactors, resource packs, and crafting materials',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/resources-ion-reactor-stockpiles.jpg'),
        alt: 'Items resources tab with Ion Reactor selected and large stacks of gold, peaches, batteries, and volcanic materials',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/accelerators-general.jpg'),
        alt: 'Items accelerators tab with general, building, research, and other speedups in large quantities',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/buff-force-field.jpg'),
        alt: 'Items buff tab with Force Field 8 Hours selected and a grid of combat, scout, and city utility buffs',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/other-skin-chest-utility.jpg'),
        alt: 'Items other tab with Selectable Titan skin Chest selected and utility items such as chests, vouchers, and event consumables',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/other-skin-chest-materials.jpg'),
        alt: 'Items other tab with Selectable Titan skin Chest selected and assorted materials, boxes, rings, and crafting items',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/other-skin-chest-heroes.jpg'),
        alt: 'Items other tab with Selectable Titan skin Chest selected and a collection of hero and titan portrait tokens',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/other-skin-chest-exp.jpg'),
        alt: 'Items other tab with Selectable Titan skin Chest selected and experience items, burgers, and assorted premium consumables',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
      {
        src: imgDeathF2P('inventory/other-skin-chest-currency.jpg'),
        alt: 'Items other tab with Selectable Titan skin Chest selected and currencies, crystals, atoms, and premium tickets',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY,
      },
    ],
  },
]

const DEATH_F2P_SHOWCASE = withDefaultShowcaseDates(DEATH_F2P_SHOWCASE_RAW)

/** @type {ShowcaseSection[]} */
const DEATH_F2P_ALT_SHOWCASE_RAW = [
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
        alt: 'Battle research overview with Army Enhancement 87.1 percent, City Attack 89.1 percent, City Wall 98.5 percent, Pre-Enhancement 59.1 percent, and Impregnability 36.2 percent',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
      },
      {
        src: imgDeathF2PAlt('research/armies-branch.jpg'),
        alt: 'Armies research overview showing Titan Sigma 78.2 percent, Central Titan 61.9 percent, Titan Delta 55.4 percent, Titan Omega 36.9 percent, and Defense Army 100.0 percent',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
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
        alt: 'Marching army All for one with 330k troops, about 112.9M power, heroes Animox Floranis Cintra, and IX plus squads',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
      },
      {
        src: imgDeathF2PAlt('titans/titan-delta-330k.jpg'),
        alt: 'Marching army Titan Delta with 330k troops, about 45.0M power, heroes X-578 Magni Miryam, and IX squads',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
      },
    ],
  },
  {
    id: 'defense-titans',
    title: 'Defense titan',
    blurb: 'Defense Army marching screen for the alt account.',
    images: [
      {
        src: imgDeathF2PAlt('defense-titans/defense-army.jpg'),
        alt: 'Defense Army marching screen with about 37.0M power, 459k troops loaded, and heroes Baka-Ri Saphiya Khyrus',
        lastUpdated: DEATH_F2P_UPDATED_AT_JULY2,
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

const DEATH_F2P_ALT_SHOWCASE = withDefaultShowcaseDates(DEATH_F2P_ALT_SHOWCASE_RAW)

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
    power: '~495M',
    highlights: [
      'L50 Research Center · strong Battle & Armies branches',
      'Multiple IX+ marches · L60 whale-killer + upgraded Titan parts',
      'Space Domain 41-10 · deep resources & components',
    ],
    badge: 'Featured',
    image: imgDeathF2P('battlefield/whale-killer-378k-187m.jpg'),
    imageUpdatedAt: DEFAULT_IMAGE_UPDATED_AT,
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
    imageUpdatedAt: DEFAULT_IMAGE_UPDATED_AT,
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
