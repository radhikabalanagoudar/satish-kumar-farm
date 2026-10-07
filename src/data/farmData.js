// Farm data for D. Satish Kumar Family Farm
// All information strictly adheres to confirmed details without invented figures.

export const FARM_META = {
  ownerName: "D. Satish Kumar",
  ownerTitle: "Owner — Family Farm",
  farmName: "D. Satish Kumar Family Farm",
  subtitle: "FAMILY FARM",
  tagline: "Rooted in the Land. Growing for Tomorrow.",
  description: "A family-owned farm cultivating fruits, vegetables and long-term agricultural investments with care, patience and purpose.",
  quote: "Built on the belief that good things take time to grow.",
  foundedNote: "Acquired approximately 5 years ago as a dedicated family agricultural venture.",
  journeyStages: ["LAND", "CULTIVATION", "CARE", "GROWTH", "HARVEST", "SUPPLY", "FUTURE"],
  ownerPhoto: "/images/owner-satish-kumar.jpeg",
  heroImage: "/images/hero-farm.jpg",
  contact: {
    phonePlaceholder: "Contact details to be added",
    emailPlaceholder: "Contact details to be added",
    locationPlaceholder: "Farm location to be added",
  }
};

export const CROPS_DATA = [
  // Fruits
  {
    id: "pomegranate",
    name: "Pomegranate",
    category: "Fruit",
    kannadaName: "Dalimbey",
    image: "/images/crops/pomegranate.jpg",
    accent: "#8F2D3B", // Burgundy
    shortDesc: "Vibrant, ruby-seeded pomegranates nurtured in well-drained fertile soil with careful pruning and drip nourishment.",
    fullDesc: "Our pomegranate orchards are maintained with meticulous branch training, targeted drip irrigation, and balanced organic soil enrichment to yield crisp, jewel-like fruit rich in natural flavor.",
    seasonNote: "Typical seasonal harvest occurs across late monsoon into the winter months.",
    type: "fruit"
  },
  {
    id: "dragon-fruit",
    name: "Dragon Fruit",
    category: "Fruit",
    kannadaName: "Pitaya",
    image: "/images/crops/dragonfruit.jpg",
    accent: "#D94676",
    shortDesc: "Vibrant pink-crimson exotic pitaya cultivated along sturdy trellis posts under radiant, warm sunshine.",
    fullDesc: "Dragon fruit flourishes along supported concrete and wooden trellises on the farm. Attentive weed management, organic compost, and warm sunlight ensure robust cactus stems and vibrant, nutrient-dense fruit.",
    seasonNote: "Produces multiple seasonal fruiting flushes throughout warm summer and monsoon cycles.",
    type: "fruit"
  },
  {
    id: "mango",
    name: "Mango",
    category: "Fruit",
    kannadaName: "Mavinakayi",
    image: "/images/crops/mango.jpg",
    accent: "#E7A93B", // Mango Gold
    shortDesc: "Fragrant, sun-drenched orchard mangoes developed patiently across five years of dedicated canopy care.",
    fullDesc: "The pride of our summer orchard. Grown with deep seasonal patience, our mango trees undergo careful winter resting before bursting into springtime blooms and bearing sun-ripened, golden-hued fruit.",
    seasonNote: "Anticipated seasonal harvest during peak summer months.",
    type: "fruit"
  },
  {
    id: "lemon",
    name: "Lemon",
    category: "Fruit",
    kannadaName: "Nimbe Hannu",
    image: "/images/crops/lemon.jpg",
    accent: "#C69214",
    shortDesc: "Crisp, aromatic citrus grown with attentive soil feeding, sun-exposed branches, and precise root hydration.",
    fullDesc: "Our lemon trees receive constant sunshine and aerated soil management. Their intense aroma, bright acidity, and generous juice content make them a staple agricultural harvest.",
    seasonNote: "Strong summer demand with periodic harvests across multiple warm months.",
    type: "fruit"
  },
  {
    id: "papaya",
    name: "Papaya",
    category: "Fruit",
    kannadaName: "Parangi Hannu",
    image: "/images/crops/papaya.jpg",
    accent: "#E07A2B",
    shortDesc: "Nutrient-rich, sweet papayas flourishing in clusters along healthy trunks under tropical open skies.",
    fullDesc: "Cultivated in deeply worked beds with optimal moisture retention, our papaya trees thrive on organic organic care, producing smooth, sweet, salmon-orange fleshed fruit.",
    seasonNote: "Enjoys an ongoing, periodic harvest cycle through multiple stages of the year.",
    type: "fruit"
  },
  {
    id: "jamun",
    name: "Nerala Kayi / Jamun",
    category: "Fruit",
    kannadaName: "Nerala Hannu",
    image: "/images/crops/jamun.jpg",
    accent: "#4A235A",
    shortDesc: "Traditional native Indian black plum trees deeply anchored in the farm soil, bearing mineral-rich purple fruit.",
    fullDesc: "Known locally as Nerala Kayi, these hardy, heritage trees add biodiversity to the farm. Their deep purple, glossy berries develop slowly and are harvested fresh at peak ripeness.",
    seasonNote: "Distinct seasonal fruiting arriving with early monsoon weather.",
    type: "fruit"
  },

  // Vegetables
  {
    id: "brinjal",
    name: "Brinjal / Eggplant",
    category: "Vegetable",
    kannadaName: "Badanekayi",
    image: "/images/crops/brinjal.jpg",
    accent: "#5B3256",
    shortDesc: "Hearty, deep purple vegetables cultivated in seasonal rotation beds with organic mulch and vigilant care.",
    fullDesc: "Grown as part of our regular vegetable rotation, our brinjal crops benefit from active soil mulching, companion planting principles, and hand-tended weed control.",
    seasonNote: "Harvested in cyclical seasonal batches throughout favorable growing cycles.",
    type: "vegetable"
  },
  {
    id: "tomato",
    name: "Tomato",
    category: "Vegetable",
    kannadaName: "Tometo",
    image: "/images/crops/tomato.jpg",
    accent: "#8F2D3B",
    shortDesc: "Vine-ripened, flavorful tomatoes nurtured in raised beds and hand-picked at peak firmness for market supply.",
    fullDesc: "Our tomato plots are carefully staked and tied to promote healthy air circulation and uniform sun exposure. Hand-harvested when firm and richly colored for dependable freshness.",
    seasonNote: "Managed in structured crop cycles tailored to seasonal temperatures.",
    type: "vegetable"
  }
];

export const TIMBER_DATA = {
  title: "Growing Value for Tomorrow",
  subtitle: "A Long-Term Agricultural Investment",
  description: "The farm also includes trees being grown as a long-term agricultural investment. As they mature, the timber can be used for furniture-making and other applications.",
  philosophy: "Just as seasonal crops reward daily diligence, hardwood timber embodies patience—standing through years of rain and sun, silently accruing natural value for decades to come.",
  stages: [
    {
      step: "01",
      name: "Sapling",
      image: "/images/timber/sapling.jpg",
      description: "Young seedlings carefully planted in mineral-rich soil, sheltered from extreme winds and nurtured with deep root watering."
    },
    {
      step: "02",
      name: "Growing Tree",
      image: "/images/timber/growing.jpg",
      description: "Steadily developing trunk girth and sturdy vertical canopies, maintained with protective pruning and seasonal soil enrichment."
    },
    {
      step: "03",
      name: "Mature Tree",
      image: "/images/timber/mature.jpg",
      description: "Tall, robust hardwood trees reaching physical maturity across seasons, creating micro-climatic balance on the farm."
    },
    {
      step: "04",
      name: "Timber",
      image: "/images/timber/timber.jpg",
      description: "Selectively harvested seasoned wood logs exhibiting dense grain patterns, ready for precision woodworking and seasoning."
    },
    {
      step: "05",
      name: "Furniture",
      image: "/images/timber/furniture.jpg",
      description: "Enduring, handcrafted solid wood tables, cabinetry, and bespoke furniture pieces built to last generations."
    }
  ]
};

export const SUPPLY_CHAIN_STAGES = [
  {
    number: "01",
    name: "FARM",
    headline: "The journey begins with the land.",
    details: "Careful stewardship of soil biology, natural water resources, and thoughtful parcel layouts establish the foundation for all living growth.",
    icon: "Landmark"
  },
  {
    number: "02",
    name: "CULTIVATION",
    headline: "Plants are cultivated according to their growing requirements.",
    details: "Each fruit variety, vegetable bed, and timber grove is established with optimal spacing, sun exposure, and root conditions.",
    icon: "Sprout"
  },
  {
    number: "03",
    name: "FARM CARE",
    headline: "Daily care and seasonal agricultural activities keep the farm productive.",
    details: "Resident caretakers and skilled farm hands handle drip irrigation, weeding, natural mulching, and vigilant plant health monitoring.",
    icon: "HeartHandshake"
  },
  {
    number: "04",
    name: "GROWTH",
    headline: "Crops develop through changing seasons and careful management.",
    details: "From vegetative vigor to seasonal flower blooms and fruit set, crops develop through nature's cycles under watchful guidance.",
    icon: "Sun"
  },
  {
    number: "05",
    name: "HARVEST",
    headline: "Produce is harvested according to its crop cycle.",
    details: "Gentle manual picking at peak maturity guarantees produce retains maximum flavor, integrity, and natural freshness.",
    icon: "PackageCheck"
  },
  {
    number: "06",
    name: "SORTING & HANDLING",
    headline: "Harvested produce is prepared for movement and supply.",
    details: "Produce is carefully inspected, graded by size and maturity, cleaned, and crated gently to avoid bruising or damage.",
    icon: "Boxes"
  },
  {
    number: "07",
    name: "SUPPLY",
    headline: "Produce moves from the farm toward its intended market.",
    details: "Organized dispatch ensures rapid farm-gate departure so farm-fresh harvests travel smoothly toward distribution hubs.",
    icon: "Truck"
  },
  {
    number: "08",
    name: "MARKET / CUSTOMER",
    headline: "The journey connects agricultural produce with customers and markets.",
    details: "Closing the loop between land and table, delivering wholesome agricultural produce to appreciative buyers and households.",
    icon: "Store"
  }
];

export const SEASONS_DATA = [
  {
    month: "JAN",
    name: "January",
    season: "Winter Refreshment",
    focusCrops: ["Pomegranate", "Lemon", "Tomato"],
    activities: "Winter pruning, soil mulching, compost application, and drip emitter inspection.",
    harvestStatus: "Active harvest for winter tomato cycles and maturing pomegranates."
  },
  {
    month: "FEB",
    name: "February",
    season: "Early Spring Bloom",
    focusCrops: ["Mango (Flowering)", "Papaya", "Lemon"],
    activities: "Monitoring mango blossoms, supporting pollinator activity, root aeration.",
    harvestStatus: "Steady lemon harvests and periodic papaya cutting."
  },
  {
    month: "MAR",
    name: "March",
    season: "Pre-Summer Warmth",
    focusCrops: ["Lemon", "Mango (Fruit Set)", "Brinjal"],
    activities: "Increasing irrigation frequency, organic pest prevention, shade management.",
    harvestStatus: "Peak summer lemon supply and rotational brinjal harvesting."
  },
  {
    month: "APR",
    name: "April",
    season: "Mid-Summer Vitality",
    focusCrops: ["Mango", "Lemon", "Papaya"],
    activities: "Canopy heat protection, moisture conservation, fruit thinning.",
    harvestStatus: "Early seasonal mangoes begin maturing alongside regular lemon dispatch."
  },
  {
    month: "MAY",
    name: "May",
    season: "Peak Summer Harvest",
    focusCrops: ["Mango", "Papaya", "Dragon Fruit (Budding)"],
    activities: "Intense mango picking, trellis maintenance for dragon fruit, soil hydration.",
    harvestStatus: "Major seasonal harvest window for ripe mangoes."
  },
  {
    month: "JUN",
    name: "June",
    season: "Monsoon Arrival",
    focusCrops: ["Jamun / Nerala Kayi", "Dragon Fruit", "Timber Trees"],
    activities: "Rainwater channel clearing, soil nutrient absorption, timber sapling checks.",
    harvestStatus: "Seasonal fruiting of native Jamun / Nerala Kayi with early dragon fruit."
  },
  {
    month: "JUL",
    name: "July",
    season: "Lush Monsoon Care",
    focusCrops: ["Dragon Fruit", "Papaya", "Timber Trees"],
    activities: "Weed management, natural fertilizer incorporation, drainage oversight.",
    harvestStatus: "Active dragon fruit flushes and ongoing papaya yield."
  },
  {
    month: "AUG",
    name: "August",
    season: "Mid-Monsoon Growth",
    focusCrops: ["Dragon Fruit", "Brinjal", "Tomato"],
    activities: "Vegetable seed bed preparation, staking support against monsoon winds.",
    harvestStatus: "Continued dragon fruit pickings and rotational vegetable yields."
  },
  {
    month: "SEP",
    name: "September",
    season: "Post-Monsoon Transition",
    focusCrops: ["Pomegranate (Fruit Set)", "Dragon Fruit", "Tomato"],
    activities: "Soil tillage, organic manure top-dressing, pomegranate shoot thinning.",
    harvestStatus: "Dragon fruit late flushes and fresh tomato harvesting."
  },
  {
    month: "OCT",
    name: "October",
    season: "Autumn Maturation",
    focusCrops: ["Pomegranate", "Papaya", "Brinjal"],
    activities: "Preparing fruit protection bags, irrigation regulation as rains recede.",
    harvestStatus: "Early pomegranate pickings and steady vegetable crop cycles."
  },
  {
    month: "NOV",
    name: "November",
    season: "Crisp Winter Rhythm",
    focusCrops: ["Pomegranate", "Lemon", "Tomato"],
    activities: "Deep root trenching, organic compost feeding, orchard floor maintenance.",
    harvestStatus: "Prime pomegranate harvest period alongside fresh winter tomatoes."
  },
  {
    month: "DEC",
    name: "December",
    season: "Year-End Reflection",
    focusCrops: ["Pomegranate", "Lemon", "Timber Care"],
    activities: "Winter rest management, orchard review, annual planning for land nourishment.",
    harvestStatus: "Ongoing pomegranate harvest and healthy citrus harvesting."
  }
];

export const STORY_MILESTONES = [
  {
    year: "Year 1",
    phase: "Farm Acquired",
    title: "A Vision Rooted in the Soil",
    description: "Approximately five years ago, the land was acquired by D. Satish Kumar with a clear aspiration: to build a resilient, multi-crop family agricultural venture rooted in patience and genuine care.",
    detail: "The journey started with an honest assessment of soil characteristics, natural sun patterns, and water tables."
  },
  {
    year: "Year 2",
    phase: "Land Development",
    title: "Shaping the Living Canvas",
    description: "Extensive groundwork transformed the acreage. Natural contour trenches, boundary plantings, drip lines, and dedicated residential shelters were thoughtfully constructed.",
    detail: "Enriched organic compost and bio-matter were tilled into the earth to build lasting micro-biology."
  },
  {
    year: "Year 3",
    phase: "Crop Cultivation",
    title: "Planting Diverse Fruit Orchards & Timber",
    description: "High-quality saplings of Pomegranate, Mango, Dragon Fruit, Lemon, Papaya, and native Nerala Kayi / Jamun were established alongside long-term timber trees.",
    detail: "Trellis structures were erected for pitaya, and rotational vegetable beds were prepared for brinjal and tomato."
  },
  {
    year: "Year 4",
    phase: "Farm Expansion",
    title: "Stewardship & Resident Care",
    description: "With trees establishing strong root networks, full-time resident farm care was solidified. Daily rounds, precise irrigation, and seasonal pruning routines became the farm's heartbeat.",
    detail: "A family couple moved to reside permanently on the land, bringing warmth and round-the-clock dedication."
  },
  {
    year: "Year 5",
    phase: "Seasonal Harvests",
    title: "Abundant Fruit, Growing Value",
    description: "Today, the farm flourishes with reliable seasonal harvest cycles. Baskets of fresh produce move from orchard to market, while timber trees silently compound in value.",
    detail: "Every harvest validates the time, physical effort, and family dedication poured into the land."
  },
  {
    year: "Future",
    phase: "Future Growth",
    title: "Sustainable Horizon",
    description: "Looking forward with disciplined ambition: expanding technology-assisted irrigation, strengthening direct supply relationships, and patiently nurturing our timber heritage.",
    detail: "Cultivating with tomorrow in mind, preserving soil vitality for the next generation."
  }
];

export const PEOPLE_DATA = [
  {
    role: "Resident Family Caretakers",
    headline: "Everyday Stewardship Living on the Soil",
    description: "A husband and wife live full-time on the farm property. They provide everyday attentive care—from early dawn inspection walks and monitoring irrigation lines to tending soil beds and guarding the orchard gates.",
    image: "/images/people/farm-care.jpg",
    responsibilities: [
      "Early morning orchard inspection walks",
      "Daily drip irrigation oversight and valve adjustment",
      "Weed prevention and organic bed mulching",
      "Continuous protection and animal companionship"
    ]
  },
  {
    role: "Resident Agricultural Operations",
    headline: "Dedicated Hands-on Farm Responsibilities",
    description: "Another trusted team member lives separately on the farm premises, handling critical operational responsibilities, equipment upkeep, soil aeration, and coordinating agricultural inputs.",
    image: "/images/people/daily-routine.jpg",
    responsibilities: [
      "Trellis maintenance and tree staking",
      "Pump, solar, and water filter servicing",
      "Compost heap turning and organic manure mixing",
      "Coordination of supply crates and tool readiness"
    ]
  },
  {
    role: "Seasonal Agricultural Workforce",
    headline: "Skilled Support for Intensive Rhythms",
    description: "During peak seasons, trusted local agricultural workers join the farm family. Their generational understanding of crop care powers intensive agricultural tasks without taking shortcuts.",
    image: "/images/people/harvest-team.jpg",
    responsibilities: [
      "Careful hand-harvesting of ripe fruit and vegetables",
      "Detailed winter and post-harvest canopy pruning",
      "Organic manure and nutrient application",
      "Sorting, grading, and crate packaging for supply dispatch"
    ]
  }
];

export const GALLERY_ITEMS = [
  { id: 1, title: "Lush Orchard at Sunrise", category: "Farm Landscape", image: "/images/gallery/orchard-morning.jpg", alt: "Sun rising gently over the green fruit tree orchard" },
  { id: 2, title: "Ruby Pomegranates on Branch", category: "Fruits", image: "/images/crops/pomegranate.jpg", alt: "Fresh pomegranates grown on the family farm" },
  { id: 3, title: "Dragon Fruit Trellis Rows", category: "Fruits", image: "/images/crops/dragonfruit.jpg", alt: "Ripe dragon fruit growing on trellis posts" },
  { id: 4, title: "Golden Mango Orchard", category: "Fruits", image: "/images/crops/mango.jpg", alt: "Mango clusters hanging from mature orchard trees" },
  { id: 5, title: "Sunlit Lemons in Foliage", category: "Fruits", image: "/images/crops/lemon.jpg", alt: "Bright fresh lemons ripening in the sun" },
  { id: 6, title: "Papaya Clusters on Stem", category: "Fruits", image: "/images/crops/papaya.jpg", alt: "Clustered sweet papayas thriving on tree trunk" },
  { id: 7, title: "Heritage Nerala Kayi / Jamun", category: "Fruits", image: "/images/crops/jamun.jpg", alt: "Dark purple jamun berries on the tree" },
  { id: 8, title: "Vine-Ripened Fresh Tomatoes", category: "Vegetables", image: "/images/crops/tomato.jpg", alt: "Rich red tomatoes harvested from the vine" },
  { id: 9, title: "Glossy Purple Brinjal Bed", category: "Vegetables", image: "/images/crops/brinjal.jpg", alt: "Brinjal eggplant growing in cultivated soil" },
  { id: 10, title: "Long-Term Timber Grove", category: "Timber & Trees", image: "/images/timber/mature.jpg", alt: "Tall hardwood timber trees growing on the farm" },
  { id: 11, title: "Soil Cultivation & Composting", category: "Farm Life", image: "/images/gallery/soil-cultivation.jpg", alt: "Natural soil cultivation and organic enrichment" },
  { id: 12, title: "Drip Irrigation Management", category: "Farm Life", image: "/images/gallery/irrigation.jpg", alt: "Sustainable drip irrigation running through tree rows" },
  { id: 13, title: "Crated Produce for Supply", category: "Farm Life", image: "/images/gallery/harvest-crates.jpg", alt: "Freshly sorted farm produce in crates ready for dispatch" },
  { id: 14, title: "Timber to Craftsmanship", category: "Timber & Trees", image: "/images/timber/furniture.jpg", alt: "Fine solid timber furniture showcasing mature wood quality" }
];

export const FUTURE_PILLARS = [
  {
    title: "Advanced Soil Biology",
    subtitle: "Nourishing Living Ground",
    desc: "Expanding organic bio-composting, minimal tillage, and cover cropping to elevate soil carbon and microbial vitality year over year.",
    icon: "Sprout"
  },
  {
    title: "Precision Water Management",
    subtitle: "Every Drop Accounted For",
    desc: "Upgrading smart soil moisture sensors and gravity-optimized drip systems to minimize water loss and protect regional groundwater reserves.",
    icon: "Droplets"
  },
  {
    title: "Timber Maturation & Legacy",
    subtitle: "Compounding Decades of Value",
    desc: "Nurturing our growing timber trees through their crucial growth decades, creating an enduring asset for fine furniture craftsmanship.",
    icon: "TreePine"
  },
  {
    title: "Direct-to-Market Linkages",
    subtitle: "Transparent Supply Movement",
    desc: "Strengthening farm-to-table visibility so buyers receive harvested fruit and vegetables faster, fresher, and with verified origin.",
    icon: "Route"
  },
  {
    title: "Technology-Enabled Monitoring",
    subtitle: "Data Supporting Intuition",
    desc: "Integrating lightweight weather tracking, canopy health diagnostics, and seasonal yield projections without losing the human touch.",
    icon: "Cpu"
  },
  {
    title: "Generational Family Stewardship",
    subtitle: "Roots for Tomorrow",
    desc: "Preserving the farm as a cohesive family asset that blends commercial discipline with natural ecological balance.",
    icon: "Compass"
  }
];
