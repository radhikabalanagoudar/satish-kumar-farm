// Farm data for D. Satish Kumar Family Farm
// All information strictly adheres to confirmed details without invented figures.

export const FARM_META = {
  ownerName: "D. Satish Kumar",
  ownerTitle: "Owner — Family Farm",
  farmName: "D. Satish Kumar Family Farm",
  subtitle: "FAMILY FARM",
  tagline: "Rooted in the Land. Growing for Tomorrow.",
  description: "A family-owned farm growing a variety of fruits, vegetables and timber trees, with a focus on cultivation, quality and direct farm sales.",
  quote: "Built on the belief that good things take time to grow.",
  foundedNote: "Acquired approximately 5 years ago as a dedicated family agricultural venture.",
  journeyStages: [
    "FARM",
    "CULTIVATION",
    "FARM CARE",
    "GROWTH",
    "HARVEST",
    "SORTING & HANDLING",
    "DIRECT FARM COLLECTION"
  ],
  ownerPhoto: "/images/owner-satish-kumar.jpeg",
  heroImage: "/images/hero-farm.jpg",
  contact: {
    phone: "7892999939",
    phoneDisplay: "+91 78929 99939",
    whatsappNumber: "917892999939",
    whatsappUrl: "https://wa.me/917892999939",
    email: "satishgvt1@gmail.com",
    defaultWhatsappMessage: "Hello, I am interested in purchasing produce from Satish Kumar Family Farm. Could you please share the latest prices and availability?",
    defaultWhatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing produce from Satish Kumar Family Farm. Could you please share the latest prices and availability?"),
    location: {
      latitude: 15.631811,
      longitude: 76.366635,
      coordinatesDisplay: "15.631811° N, 76.366635° E",
      sharedMapUrl: "https://maps.app.goo.gl/N6h8jKs1ZSar3GUW6?g_st=aw",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=15.631811,76.366635",
      embedMapUrl: "https://maps.google.com/maps?q=15.631811,76.366635&hl=en&z=15&output=embed"
    },
    salesPolicyNotice: "Direct Farm Sales – Visit our farm to select and collect fresh produce. We currently offer farm-gate collection only. Home delivery and shipping are not available.",
    priceDisclaimer: "Prices may vary depending on season, quality and market conditions. Please contact the farm for the latest price before visiting."
  }
};

export const CROPS_DATA = [
  // Fruits
  {
    id: "pomegranate",
    name: "Pomegranate",
    category: "Fruit",
    kannadaName: "Dalimbey",
    image: "/originalcrops/Pomegranate.jpeg",
    originalCropPhoto: "/originalcrops/Pomegranate.jpeg",
    accent: "#8F2D3B", // Burgundy
    price: "₹100–₹120 / kg",
    priceAmount: "₹100–₹120",
    priceUnit: "per kg",
    priceLabel: "Farm Price",
    priceType: "fixed",
    pricingDescription: "Direct farm price.",
    whatsappMessage: "Hello, I am interested in purchasing pomegranate from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing pomegranate from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
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
    image: "/originalcrops/dragon.jpeg",
    originalCropPhoto: "/originalcrops/dragon.jpeg",
    accent: "#D94676",
    price: "₹50 / kg",
    priceAmount: "₹50",
    priceUnit: "per kg",
    priceLabel: "Farm Price",
    priceType: "fixed",
    pricingDescription: "Direct farm price.",
    whatsappMessage: "Hello, I am interested in purchasing dragon fruit from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing dragon fruit from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
    shortDesc: "Vibrant pink-crimson exotic pitaya cultivated along sturdy trellis posts under radiant, warm sunshine.",
    fullDesc: "Dragon fruit flourishes along supported concrete and wooden trellises on the farm. Attentive weed management, organic compost, and warm sunlight ensure robust cactus stems and vibrant, nutrient-dense fruit.",
    seasonNote: "Produces multiple seasonal fruiting flushes throughout warm summer and monsoon cycles.",
    type: "fruit"
  },
  {
    id: "lemon",
    name: "Lemon",
    category: "Fruit",
    kannadaName: "Nimbe Hannu",
    image: "/originalcrops/lemon.jpeg",
    originalCropPhoto: "/originalcrops/lemon.jpeg",
    accent: "#C69214",
    price: "₹4,000 / ~800–1,000 lemons",
    priceAmount: "₹4,000",
    priceUnit: "approx. 800–1,000 lemons",
    priceLabel: "Seasonal Reference Price",
    priceType: "variable",
    pricingDescription: "Price depends on the season, size and quality. Summer reference price: ₹4,000 for approximately 800–1,000 lemons. This is a seasonal reference price, not a fixed per-kg price.",
    whatsappMessage: "Hello, I am interested in purchasing lemon from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing lemon from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
    shortDesc: "Crisp, aromatic citrus grown with attentive soil feeding, sun-exposed branches, and precise root hydration.",
    fullDesc: "Our lemon trees receive constant sunshine and aerated soil management. Their intense aroma, bright acidity, and generous juice content make them a staple agricultural harvest.",
    seasonNote: "Strong summer demand with periodic harvests across multiple warm months.",
    type: "fruit"
  },
  {
    id: "mango",
    name: "Mango",
    category: "Fruit",
    kannadaName: "Mavinakayi",
    image: "/originalcrops/mango.jpeg",
    originalCropPhoto: "/originalcrops/mango.jpeg",
    accent: "#E7A93B", // Mango Gold
    price: "₹30 / kg",
    priceAmount: "₹30",
    priceUnit: "per kg",
    priceLabel: "Farm Price",
    priceType: "fixed",
    pricingDescription: "Direct farm price.",
    whatsappMessage: "Hello, I am interested in purchasing mango from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing mango from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
    shortDesc: "Fragrant, sun-drenched orchard mangoes developed patiently across five years of dedicated canopy care.",
    fullDesc: "The pride of our summer orchard. Grown with deep seasonal patience, our mango trees undergo careful winter resting before bursting into springtime blooms and bearing sun-ripened, golden-hued fruit.",
    seasonNote: "Anticipated seasonal harvest during peak summer months.",
    type: "fruit"
  },
  {
    id: "papaya",
    name: "Papaya",
    category: "Fruit",
    kannadaName: "Parangi Hannu",
    image: "/originalcrops/papaya.jpeg",
    originalCropPhoto: "/originalcrops/papaya.jpeg",
    accent: "#E07A2B",
    price: "₹15 / kg",
    priceAmount: "₹15",
    priceUnit: "per kg",
    priceLabel: "Farm Price",
    priceType: "fixed",
    pricingDescription: "Farm price.",
    whatsappMessage: "Hello, I am interested in purchasing papaya from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing papaya from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
    shortDesc: "Nutrient-rich, sweet papayas flourishing in clusters along healthy trunks under tropical open skies.",
    fullDesc: "Cultivated in deeply worked beds with optimal moisture retention, our papaya trees thrive on organic care, producing smooth, sweet, salmon-orange fleshed fruit.",
    seasonNote: "Enjoys an ongoing, periodic harvest cycle through multiple stages of the year.",
    type: "fruit"
  },
  {
    id: "jamun",
    name: "Jamun (Nerale Kayi)",
    category: "Fruit",
    kannadaName: "Nerala Hannu",
    image: "/originalcrops/neralakayi.jpeg",
    originalCropPhoto: "/originalcrops/neralakayi.jpeg",
    accent: "#4A235A",
    price: "₹4,000–₹5,000 / tree",
    priceAmount: "₹4,000–₹5,000",
    priceUnit: "per tree",
    priceLabel: "Per-Tree Price",
    priceType: "tree",
    pricingDescription: "Price: ₹4,000–₹5,000 per tree. Depends on the crop value. Please note price is per tree, not per kg.",
    whatsappMessage: "Hello, I am interested in purchasing Jamun (Nerale Kayi) from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing Jamun (Nerale Kayi) from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
    shortDesc: "Traditional native Indian black plum trees deeply anchored in the farm soil, bearing mineral-rich purple fruit.",
    fullDesc: "Known locally as Nerale Kayi, these hardy, heritage trees add biodiversity to the farm. Their deep purple, glossy berries develop slowly and are sold per tree based on seasonal crop value.",
    seasonNote: "Distinct seasonal fruiting arriving with early monsoon weather.",
    type: "fruit"
  },

  // Vegetables
  {
    id: "brinjal",
    name: "Brinjal / Eggplant",
    category: "Vegetable",
    kannadaName: "Badanekayi",
    image: "/originalcrops/brinjal.jpeg",
    originalCropPhoto: "/originalcrops/brinjal.jpeg",
    accent: "#5B3256",
    price: "₹15 / kg",
    priceAmount: "₹15",
    priceUnit: "per kg",
    priceLabel: "Farm Price",
    priceType: "fixed",
    pricingDescription: "Farm price.",
    whatsappMessage: "Hello, I am interested in purchasing brinjal from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing brinjal from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
    shortDesc: "Hearty vegetables cultivated in seasonal rotation beds with organic mulch and vigilant care.",
    fullDesc: "Grown as part of our regular vegetable rotation, our brinjal crops benefit from active soil mulching, companion planting principles, and hand-tended weed control.",
    seasonNote: "Harvested in cyclical seasonal batches throughout favorable growing cycles.",
    type: "vegetable"
  },
  {
    id: "tomato",
    name: "Tomato",
    category: "Vegetable",
    kannadaName: "Tometo",
    image: "/originalcrops/tomato.jpeg",
    originalCropPhoto: "/originalcrops/tomato.jpeg",
    accent: "#8F2D3B",
    price: "~₹1,000 / tray (~22 kg)",
    priceAmount: "~₹1,000",
    priceUnit: "per tray (~22 kg)",
    priceLabel: "Price Varies / Reference Price",
    priceType: "variable",
    pricingDescription: "Price depends on market demand and supply. During high demand, the price can be approximately ₹1,000 per tray (one tray weighs approx. 22 kg) for good-quality tomatoes. This is a reference price, not a guaranteed current price.",
    whatsappMessage: "Hello, I am interested in purchasing tomato from Satish Kumar Family Farm. Could you please share the latest price and availability?",
    whatsappLink: "https://wa.me/917892999939?text=" + encodeURIComponent("Hello, I am interested in purchasing tomato from Satish Kumar Family Farm. Could you please share the latest price and availability?"),
    shortDesc: "Vine-ripened, flavorful tomatoes nurtured in raised beds and hand-picked at peak firmness for direct collection.",
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
    headline: "Harvested produce is prepared for direct farm-gate collection.",
    details: "Produce is carefully inspected, graded by size and maturity, cleaned, and crated gently to avoid bruising or damage.",
    icon: "Boxes"
  },
  {
    number: "07",
    name: "DIRECT FARM COLLECTION",
    headline: "Direct farm-gate collection connects buyers with fresh harvests.",
    details: "Buyers personally visit the farm to select and collect fresh produce directly at the farm gate. Customers visit our fields and orchards directly to select farm-fresh produce.",
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
    harvestStatus: "Early seasonal mangoes begin maturing alongside regular direct lemon collection at the farm gate."
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
    focusCrops: ["Jamun (Nerale Kayi)", "Dragon Fruit", "Timber Trees"],
    activities: "Rainwater channel clearing, soil nutrient absorption, timber sapling checks.",
    harvestStatus: "Seasonal fruiting of native Jamun / Nerale Kayi with early dragon fruit."
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
    description: "High-quality saplings of Pomegranate, Mango, Dragon Fruit, Lemon, Papaya, and native Jamun (Nerale Kayi) were established alongside long-term timber trees.",
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
    title: "Abundant Fruit, Direct Farm Sales",
    description: "Today, the farm flourishes with reliable seasonal harvest cycles. Baskets of fresh produce move from orchard to farm gate for direct collection, while timber trees silently compound in value.",
    detail: "Every harvest validates the time, physical effort, and family dedication poured into the land."
  },
  {
    year: "Future",
    phase: "Future Growth",
    title: "Sustainable Horizon",
    description: "Looking forward with disciplined ambition: expanding technology-assisted irrigation, strengthening direct farm collection relationships, and patiently nurturing our timber heritage.",
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
      "Sorting, grading, and crate preparation for direct collection"
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Original Pomegranate Orchard",
    cropName: "Pomegranate",
    category: "Fruits",
    image: "/originalcrops/Pomegranate.jpeg",
    alt: "Original photograph of pomegranate crop at Satish Kumar Family Farm"
  },
  {
    id: 2,
    title: "Original Dragon Fruit Trellis",
    cropName: "Dragon Fruit",
    category: "Fruits",
    image: "/originalcrops/dragon.jpeg",
    alt: "Original photograph of dragon fruit growing on trellis at Satish Kumar Family Farm"
  },
  {
    id: 3,
    title: "Original Mango Orchard Rows",
    cropName: "Mango",
    category: "Fruits",
    image: "/originalcrops/mango.jpeg",
    alt: "Original photograph of mango crop at Satish Kumar Family Farm"
  },
  {
    id: 4,
    title: "Original Hand-Harvested Fresh Lemons",
    cropName: "Lemon",
    category: "Fruits",
    image: "/originalcrops/lemon.jpeg",
    alt: "Original photograph of lemon harvest at Satish Kumar Family Farm"
  },
  {
    id: 5,
    title: "Original Papaya Orchard Trees",
    cropName: "Papaya",
    category: "Fruits",
    image: "/originalcrops/papaya.jpeg",
    alt: "Original photograph of papaya trees at Satish Kumar Family Farm"
  },
  {
    id: 6,
    title: "Original Heritage Jamun / Nerale Kayi",
    cropName: "Jamun (Nerale Kayi)",
    category: "Fruits",
    image: "/originalcrops/neralakayi.jpeg",
    alt: "Original photograph of Jamun (Nerale Kayi) berries at Satish Kumar Family Farm"
  },
  {
    id: 7,
    title: "Original Farm Brinjal Field Rows",
    cropName: "Brinjal",
    category: "Vegetables",
    image: "/originalcrops/brinjal.jpeg",
    alt: "Original photograph of brinjal eggplant crop at Satish Kumar Family Farm"
  },
  {
    id: 8,
    title: "Original Vine-Ripened Tomato Staking",
    cropName: "Tomato",
    category: "Vegetables",
    image: "/originalcrops/tomato.jpeg",
    alt: "Original photograph of vine-ripened tomatoes at Satish Kumar Family Farm"
  }
];

export const FUTURE_PILLARS = [
  {
    title: "Advanced Soil Biology",
    subtitle: "Nourishing Living Ground",
    description: "Expanding organic bio-composting, minimal tillage, and cover cropping to elevate soil carbon and microbial vitality year over year.",
    desc: "Expanding organic bio-composting, minimal tillage, and cover cropping to elevate soil carbon and microbial vitality year over year.",
    icon: "Sprout"
  },
  {
    title: "Precision Water Management",
    subtitle: "Every Drop Accounted For",
    description: "Upgrading smart soil moisture sensors and gravity-optimized drip systems to minimize water loss and protect regional groundwater reserves.",
    desc: "Upgrading smart soil moisture sensors and gravity-optimized drip systems to minimize water loss and protect regional groundwater reserves.",
    icon: "Droplets"
  },
  {
    title: "Timber Maturation & Legacy",
    subtitle: "Compounding Decades of Value",
    description: "Nurturing our growing timber trees through their crucial growth decades, creating an enduring asset for fine furniture craftsmanship.",
    desc: "Nurturing our growing timber trees through their crucial growth decades, creating an enduring asset for fine furniture craftsmanship.",
    icon: "TreePine"
  },
  {
    title: "Direct Farm Sales & Community",
    subtitle: "Farm-Gate Transparency",
    description: "Strengthening direct relationships with visitors who come to the farm gate to collect wholesome produce fresh from the trees.",
    desc: "Strengthening direct relationships with visitors who come to the farm gate to collect wholesome produce fresh from the trees.",
    icon: "Route"
  },
  {
    title: "Technology-Enabled Monitoring",
    subtitle: "Data Supporting Intuition",
    description: "Integrating lightweight weather tracking, canopy health diagnostics, and seasonal yield projections without losing the human touch.",
    desc: "Integrating lightweight weather tracking, canopy health diagnostics, and seasonal yield projections without losing the human touch.",
    icon: "Cpu"
  },
  {
    title: "Generational Family Stewardship",
    subtitle: "Roots for Tomorrow",
    description: "Preserving the farm as a cohesive family asset that blends commercial discipline with natural ecological balance.",
    desc: "Preserving the farm as a cohesive family asset that blends commercial discipline with natural ecological balance.",
    icon: "Compass"
  }
];

export const FARM_FEATURES = FUTURE_PILLARS;
