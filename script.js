// ============================================================================
// Spot the NOVA Group — Standalone Game Engine (script.js)
// Grounded in FAO & Open Food Facts NOVA Food Classification (Groups 1–4)
// ============================================================================

const PHOTO_ASSETS = {
  nova1_whole: 'images/nova1_whole_foods.jpg',
  nova1_yogurt: 'images/nova1_greek_yogurt.jpg',
  nova1_lentils: 'images/nova1_lentils_almonds_spinach.jpg',
  nova2_oils: 'images/nova2_oil_butter_salt_honey.jpg',
  nova2_vinegar: 'images/nova2_vinegar_sugar.jpg',
  nova3_artisan: 'images/nova3_bread_cheese_chickpeas_cashews.jpg',
  nova3_tinned: 'images/nova3_sardines_peaches.jpg',
  nova4_snacks: 'images/nova4_cola_chips_cereal_bar.jpg',
  nova4_supermarket: 'images/nova4_sliced_bread_flavored_yogurt.jpg',
  nova4_can_chips: 'images/nova4_soda_can_nacho_chips.jpg'
};

const GROUP_PHOTOS = {
  1: PHOTO_ASSETS.nova1_whole,
  2: PHOTO_ASSETS.nova2_oils,
  3: PHOTO_ASSETS.nova3_artisan,
  4: PHOTO_ASSETS.nova4_snacks
};

const NOVA_GROUP_META = {
  1: {
    name: 'Unprocessed or Minimally Processed Foods',
    short: 'NOVA 1 • Whole / Minimally Processed',
    color: '#10b981',
    badgeClass: 'bg-emerald-500 text-slate-950'
  },
  2: {
    name: 'Processed Culinary Ingredients',
    short: 'NOVA 2 • Culinary Ingredient',
    color: '#f59e0b',
    badgeClass: 'bg-amber-400 text-slate-950'
  },
  3: {
    name: 'Processed Foods',
    short: 'NOVA 3 • Processed Food',
    color: '#f97316',
    badgeClass: 'bg-orange-500 text-slate-950'
  },
  4: {
    name: 'Ultra-Processed Food & Drink Products',
    short: 'NOVA 4 • Ultra-Processed (UPF)',
    color: '#ef4444',
    badgeClass: 'bg-rose-500 text-white'
  }
};

// 24 Authenticated Food Specimens with Real Studio Photography & Crop Regions
const SPECIMENS = [
  // ---------------- NOVA GROUP 1 ----------------
  {
    id: 'rolled-oats',
    name: '100% Whole Grain Rolled Oats',
    category: 'Grains & Cereals',
    aisle: 'Breakfast & Grains',
    serving: '40g Dry Cup',
    shelfLife: '12 Months Dry',
    kitchenTest: 'Whole grain steamed & rolled',
    processMethod: 'Dehusked, kiln-steamed & flaked',
    nova: 1,
    artType: 'oats',
    photo: PHOTO_ASSETS.nova1_whole,
    photoFocus: '72% 48%',
    photoCaption: 'Ceramic bowl of plain rolled oats (steamed & flaked whole grain)',
    primaryColor: '#d97706',
    accentColor: '#fef3c7',
    packageStamp: '100% WHOLE GRAIN • NOTHING ADDED',
    ingredients: [
      { name: '100% Whole Grain Rolled Oats', role: 'g1', note: 'Whole cereal grain altered only by steaming and flaking.' }
    ],
    explanation: 'Steaming, rolling, or grinding whole grains without adding sugar, salt, oil, or flavorings keeps them strictly in NOVA Group 1.'
  },
  {
    id: 'greek-yogurt',
    name: 'Plain Authentic Greek Yogurt',
    category: 'Dairy & Cultured',
    aisle: 'Chilled Dairy Case',
    serving: '170g Tub',
    shelfLife: '14 Days Chilled',
    kitchenTest: 'Milk + bacterial fermentation',
    processMethod: 'Pasteurization & strained fermentation',
    nova: 1,
    artType: 'yogurt_plain',
    photo: PHOTO_ASSETS.nova1_yogurt,
    photoFocus: '50% 52%',
    photoCaption: 'Thick plain Greek yogurt cultured only from milk and live bacteria',
    primaryColor: '#0284c7',
    accentColor: '#e0f2fe',
    packageStamp: 'PLAIN • UNSWEETENED • LIVE CULTURES',
    ingredients: [
      { name: 'Pasteurized Cow\'s Milk', role: 'g1', note: 'Minimally processed whole milk.' },
      { name: 'Live & Active Yogurt Cultures (L. bulgaricus, S. thermophilus)', role: 'g1', note: 'Non-alcoholic fermentation cultures allowed in NOVA 1.' }
    ],
    explanation: 'Plain yogurt made solely from pasteurized milk and live fermentation cultures—with zero added sugar, thickeners, or flavors—is NOVA Group 1.'
  },
  {
    id: 'frozen-spinach',
    name: 'Flash-Frozen Organic Spinach Florets',
    category: 'Produce',
    aisle: 'Freezer Case',
    serving: '85g Florets',
    shelfLife: '18 Months Frozen',
    kitchenTest: 'Washed & frozen leaves',
    processMethod: 'Washing, blanching & flash-freezing',
    nova: 1,
    artType: 'spinach',
    photo: PHOTO_ASSETS.nova1_lentils,
    photoFocus: '82% 42%',
    photoCaption: 'Whole green spinach leaves preserved purely by washing and freezing',
    primaryColor: '#059669',
    accentColor: '#d1fae5',
    packageStamp: 'FLASH FROZEN • NO SALT OR SAUCE',
    ingredients: [
      { name: 'Organic Whole Leaf Spinach', role: 'g1', note: 'Whole vegetable preserved purely by freezing.' }
    ],
    explanation: 'Freezing vegetables or fruits without adding salt, butter sauces, or chemical additives preserves them as NOVA Group 1.'
  },
  {
    id: 'raw-almonds',
    name: 'Raw Unsalted Whole Almonds',
    category: 'Nuts & Seeds',
    aisle: 'Baking & Raw Nuts',
    serving: '28g Handful',
    shelfLife: '9 Months Sealed',
    kitchenTest: 'Shelled raw tree nuts',
    processMethod: 'Hulling, shelling & drying',
    nova: 1,
    artType: 'almonds',
    photo: PHOTO_ASSETS.nova1_lentils,
    photoFocus: '68% 78%',
    photoCaption: 'Raw unsalted whole almonds without oil roasting or flavor dust',
    primaryColor: '#92400e',
    accentColor: '#fde68a',
    packageStamp: 'RAW • UNROASTED • UNSALTED',
    ingredients: [
      { name: 'Raw Whole Almonds', role: 'g1', note: 'Unprocessed tree nut kernels with no oil or salt.' }
    ],
    explanation: 'Plain nuts and seeds with no added roasting oil, salt, sugar, or flavor coatings belong to NOVA Group 1.'
  },
  {
    id: 'red-lentils',
    name: 'Dried Split Red Lentils',
    category: 'Legumes & Pulses',
    aisle: 'Dry Beans & Rice',
    serving: '50g Dry',
    shelfLife: '24 Months Dry',
    kitchenTest: 'Cleaned & dried pulse',
    processMethod: 'Drying, hulling & splitting',
    nova: 1,
    artType: 'lentils',
    photo: PHOTO_ASSETS.nova1_lentils,
    photoFocus: '32% 55%',
    photoCaption: 'Dried split coral red lentils in a wooden scoop and burlap sack',
    primaryColor: '#ea580c',
    accentColor: '#ffedd5',
    packageStamp: 'DRIED PULSE • SINGLE INGREDIENT',
    ingredients: [
      { name: 'Dried Split Red Lentils', role: 'g1', note: 'Minimally processed legume pulse.' }
    ],
    explanation: 'Drying and splitting legumes or pulses removes moisture for storage without adding any culinary or industrial substances (NOVA Group 1).'
  },
  {
    id: 'fresh-eggs-apple',
    name: 'Farm Brown Eggs & Crisp Red Apple',
    category: 'Fresh Whole Foods',
    aisle: 'Farm Stand / Produce',
    serving: '1 Egg + 1 Apple',
    shelfLife: '3 Weeks Cool',
    kitchenTest: 'Direct from farm/orchard',
    processMethod: 'Washing, grading & chilling',
    nova: 1,
    artType: 'egg_apple',
    photo: PHOTO_ASSETS.nova1_whole,
    photoFocus: '30% 60%',
    photoCaption: 'Whole red orchard apple and fresh brown farm egg on butcher block',
    primaryColor: '#dc2626',
    accentColor: '#fef2f2',
    packageStamp: 'GRADE A WHOLE • UNPROCESSED',
    ingredients: [
      { name: 'Fresh Shell Egg', role: 'g1', note: 'Unprocessed animal food.' },
      { name: 'Fresh Red Apple', role: 'g1', note: 'Unprocessed plant fruit.' }
    ],
    explanation: 'Fresh eggs, fruits, and vegetables in their natural state are the textbook foundation of NOVA Group 1.'
  },

  // ---------------- NOVA GROUP 2 ----------------
  {
    id: 'olive-oil',
    name: 'Cold-Pressed Extra Virgin Olive Oil',
    category: 'Cooking Oils & Fats',
    aisle: 'Oils & Vinegars',
    serving: '15mL (1 Tbsp)',
    shelfLife: '18 Months Dark Bottle',
    kitchenTest: 'Culinary cooking & dressing oil',
    processMethod: 'Mechanical cold-pressing of olives',
    nova: 2,
    artType: 'olive_oil',
    photo: PHOTO_ASSETS.nova2_oils,
    photoFocus: '18% 50%',
    photoCaption: 'Glass cruet of golden cold-pressed extra virgin olive oil',
    primaryColor: '#65a30d',
    accentColor: '#ecfccb',
    packageStamp: 'FIRST COLD PRESS • CULINARY OIL',
    ingredients: [
      { name: 'Cold-Pressed Extra Virgin Olive Oil', role: 'g2', note: 'Fat extracted from Group 1 olives for cooking and seasoning.' }
    ],
    explanation: 'Plant oils pressed from olives, seeds, or nuts are NOVA Group 2 Processed Culinary Ingredients—extracted from Group 1 foods to cook and season meals.'
  },
  {
    id: 'unsalted-butter',
    name: 'Creamery Unsalted Butter Block',
    category: 'Cooking Oils & Fats',
    aisle: 'Dairy & Butter',
    serving: '14g Pat',
    shelfLife: '60 Days Chilled',
    kitchenTest: 'Culinary baking & pan fat',
    processMethod: 'Churning & separating milk fat',
    nova: 2,
    artType: 'butter',
    photo: PHOTO_ASSETS.nova2_oils,
    photoFocus: '60% 38%',
    photoCaption: 'Block of churned unsalted creamery butter on parchment paper',
    primaryColor: '#eab308',
    accentColor: '#fef9c3',
    packageStamp: 'SWEET CREAM BUTTER • CULINARY FAT',
    ingredients: [
      { name: 'Pasteurized Sweet Cream (Milk Fat)', role: 'g2', note: 'Churned milk fat used as a culinary ingredient.' }
    ],
    explanation: 'Butter churned from cream is classified in NOVA Group 2 because it is an extracted fat used as a culinary cooking and baking ingredient.'
  },
  {
    id: 'sea-salt',
    name: 'Coarse Solar-Evaporated Sea Salt',
    category: 'Seasoning & Minerals',
    aisle: 'Spices & Baking',
    serving: '1.5g Pinch',
    shelfLife: 'Indefinite',
    kitchenTest: 'Essential kitchen seasoning',
    processMethod: 'Solar evaporation of seawater',
    nova: 2,
    artType: 'salt',
    photo: PHOTO_ASSETS.nova2_oils,
    photoFocus: '50% 78%',
    photoCaption: 'Coarse white sea salt crystals in a ceramic pinch bowl',
    primaryColor: '#0ea5e9',
    accentColor: '#e0f2fe',
    packageStamp: 'PURE CRYSTALS • CULINARY SEASONING',
    ingredients: [
      { name: 'Evaporated Sea Salt (Sodium Chloride)', role: 'g2', note: 'Mineral extracted from nature used to season food.' }
    ],
    explanation: 'Salt mined from rock deposits or evaporated from seawater is a NOVA Group 2 Processed Culinary Ingredient obtained from nature.'
  },
  {
    id: 'raw-honey',
    name: 'Pure Wildflower Honey',
    category: 'Culinary Sweeteners',
    aisle: 'Baking & Sweeteners',
    serving: '21g Drizzle',
    shelfLife: '24+ Months',
    kitchenTest: 'Natural culinary sweetener',
    processMethod: 'Centrifugal extraction & straining',
    nova: 2,
    artType: 'honey',
    photo: PHOTO_ASSETS.nova2_oils,
    photoFocus: '86% 62%',
    photoCaption: 'Golden wildflower honey drizzling from a wooden honey dipper',
    primaryColor: '#d97706',
    accentColor: '#fef3c7',
    packageStamp: '100% PURE EXTRACTED HONEY',
    ingredients: [
      { name: 'Pure Filtered Wildflower Honey', role: 'g2', note: 'Extracted natural culinary sweetener.' }
    ],
    explanation: 'Honey harvested from beehives and maple syrup boiled from tree sap are NOVA Group 2 culinary sweeteners used to prepare food and drinks.'
  },
  {
    id: 'cane-sugar',
    name: 'Granulated Pure Cane Sugar',
    category: 'Culinary Sweeteners',
    aisle: 'Baking & Sweeteners',
    serving: '4g Teaspoon',
    shelfLife: 'Indefinite Dry',
    kitchenTest: 'Kitchen baking sweetener',
    processMethod: 'Crushing, boiling & crystallization',
    nova: 2,
    artType: 'sugar',
    photo: PHOTO_ASSETS.nova2_vinegar,
    photoFocus: '78% 68%',
    photoCaption: 'Bowl of refined white granulated cane sugar with brass spoon',
    primaryColor: '#f59e0b',
    accentColor: '#fffbeb',
    packageStamp: '100% CANE SUGAR • BAKING STAPLE',
    ingredients: [
      { name: 'Crystallized Cane Sugar (Sucrose)', role: 'g2', note: 'Extracted from sugarcane (Group 1) for culinary use.' }
    ],
    explanation: 'Table sugar extracted from sugarcane or sugar beets is a NOVA Group 2 Processed Culinary Ingredient (unlike high-fructose corn syrup or artificial sweeteners, which are Group 4 markers).'
  },
  {
    id: 'apple-cider-vinegar',
    name: 'Raw Apple Cider Vinegar',
    category: 'Oils & Vinegars',
    aisle: 'Condiments & Dressings',
    serving: '15mL Splash',
    shelfLife: '24 Months',
    kitchenTest: 'Acidic culinary seasoning',
    processMethod: 'Acetic fermentation of pressed apples',
    nova: 2,
    artType: 'vinegar',
    photo: PHOTO_ASSETS.nova2_vinegar,
    photoFocus: '48% 52%',
    photoCaption: 'Amber glass bottle of fermented apple cider vinegar with whole apples',
    primaryColor: '#b45309',
    accentColor: '#ffedd5',
    packageStamp: '5% ACIDITY • CULINARY VINEGAR',
    ingredients: [
      { name: 'Fermented Apple Cider Vinegar', role: 'g2', note: 'Culinary acid obtained by fermenting apple juice.' },
      { name: 'Water (Diluted to 5% Acidity)', role: 'g1', note: 'Standard dilution water.' }
    ],
    explanation: 'Vinegars produced by acetic fermentation of fruit or grain liquids are NOVA Group 2 culinary ingredients used for dressings, pickling, and cooking.'
  },

  // ---------------- NOVA GROUP 3 ----------------
  {
    id: 'sourdough-bread',
    name: 'Artisanal Crusty Sourdough Loaf',
    category: 'Bakery',
    aisle: 'Fresh Bakery Counter',
    serving: '1 Thick Slice (55g)',
    shelfLife: '4 Days Room Temp',
    kitchenTest: 'Group 1 Flour + Group 2 Salt',
    processMethod: 'Wild fermentation & hearth baking',
    nova: 3,
    artType: 'sourdough',
    photo: PHOTO_ASSETS.nova3_artisan,
    photoFocus: '36% 48%',
    photoCaption: 'Sliced crusty sourdough boule baked from flour, water, starter & salt',
    primaryColor: '#b45309',
    accentColor: '#fde68a',
    packageStamp: '4 SIMPLE INGREDIENTS • NO EMULSIFIERS',
    ingredients: [
      { name: 'Unbleached Wheat Flour', role: 'g1', note: 'Minimally processed milled wheat (Group 1).' },
      { name: 'Water', role: 'g1', note: 'Water.' },
      { name: 'Sourdough Starter (Wheat Flour, Water)', role: 'g1', note: 'Natural fermentation culture.' },
      { name: 'Sea Salt', role: 'g2', note: 'Group 2 culinary seasoning.' }
    ],
    explanation: 'Freshly baked bread made solely from flour, water, yeast or sourdough starter, and salt—with zero emulsifiers or dough conditioners—is NOVA Group 3.'
  },
  {
    id: 'cheddar-cheese',
    name: 'Aged Cave-Ripened Cheddar Wedge',
    category: 'Dairy & Cheese',
    aisle: 'Cheese & Deli',
    serving: '30g Wedge',
    shelfLife: '6 Weeks Chilled',
    kitchenTest: 'Group 1 Milk + Group 2 Salt',
    processMethod: 'Curdling, pressing, salting & aging',
    nova: 3,
    artType: 'cheddar',
    photo: PHOTO_ASSETS.nova3_artisan,
    photoFocus: '72% 55%',
    photoCaption: 'Wedge of aged cheddar cheese made from milk, cultures, salt & rennet',
    primaryColor: '#f59e0b',
    accentColor: '#fef3c7',
    packageStamp: 'TRADITIONAL CULTURED CHEESE',
    ingredients: [
      { name: 'Pasteurized Cow\'s Milk', role: 'g1', note: 'Group 1 milk base.' },
      { name: 'Cheese Cultures', role: 'g1', note: 'Fermentation starter.' },
      { name: 'Sea Salt', role: 'g2', note: 'Group 2 culinary salt for preservation and flavor.' },
      { name: 'Microbial Rennet', role: 'g1', note: 'Coagulating enzyme.' }
    ],
    explanation: 'Traditional cheeses made from milk, starter cultures, rennet, and salt are NOVA Group 3 Processed Foods (unlike plastic-wrapped "processed cheese slices" with emulsifying salts, which are Group 4).'
  },
  {
    id: 'canned-chickpeas',
    name: 'Tinned Chickpeas in Salted Brine',
    category: 'Canned Legumes',
    aisle: 'Canned Goods',
    serving: '130g Drained',
    shelfLife: '36 Months Canned',
    kitchenTest: 'Group 1 Beans + Group 2 Salt',
    processMethod: 'Pressure canning in salted water',
    nova: 3,
    artType: 'chickpeas',
    photo: PHOTO_ASSETS.nova3_artisan,
    photoFocus: '65% 24%',
    photoCaption: 'Open tin of whole chickpeas preserved in water and sea salt',
    primaryColor: '#d97706',
    accentColor: '#fef3c7',
    packageStamp: 'PRESERVED IN WATER & SEA SALT',
    ingredients: [
      { name: 'Organic Chickpeas (Garbanzo Beans)', role: 'g1', note: 'Group 1 whole legume.' },
      { name: 'Water', role: 'g1', note: 'Brine liquid.' },
      { name: 'Sea Salt', role: 'g2', note: 'Group 2 culinary salt.' }
    ],
    explanation: 'Canning whole legumes or vegetables in water and salt (NOVA 1 + NOVA 2) to extend shelf life creates a classic NOVA Group 3 Processed Food.'
  },
  {
    id: 'salted-cashews',
    name: 'Roasted & Salted Whole Cashews',
    category: 'Nuts & Snacks',
    aisle: 'Snack Nuts',
    serving: '30g Handful',
    shelfLife: '6 Months Tin',
    kitchenTest: 'Group 1 Nuts + Group 2 Oil & Salt',
    processMethod: 'Oil roasting & salting',
    nova: 3,
    artType: 'cashews',
    photo: PHOTO_ASSETS.nova3_artisan,
    photoFocus: '86% 80%',
    photoCaption: 'Bowl of roasted whole cashews seasoned with culinary oil and sea salt',
    primaryColor: '#ea580c',
    accentColor: '#ffedd5',
    packageStamp: 'ROASTED IN OIL WITH SEA SALT',
    ingredients: [
      { name: 'Whole Cashew Nuts', role: 'g1', note: 'Group 1 tree nut.' },
      { name: 'Peanut Oil', role: 'g2', note: 'Group 2 culinary oil.' },
      { name: 'Sea Salt', role: 'g2', note: 'Group 2 culinary salt.' }
    ],
    explanation: 'Whereas raw unsalted nuts are NOVA 1, roasting nuts with culinary oil and salt (NOVA 2) makes them NOVA Group 3 Processed Foods.'
  },
  {
    id: 'tinned-sardines',
    name: 'Wild Sardines Canned in Olive Oil',
    category: 'Canned Seafood',
    aisle: 'Tinned Fish & Meats',
    serving: '90g Can',
    shelfLife: '48 Months Tin',
    kitchenTest: 'Group 1 Fish + Group 2 Olive Oil & Salt',
    processMethod: 'Steaming, tinning in oil & sterilization',
    nova: 3,
    artType: 'sardines',
    photo: PHOTO_ASSETS.nova3_tinned,
    photoFocus: '28% 62%',
    photoCaption: 'Open pull-tab tin of wild sardines preserved in extra virgin olive oil',
    primaryColor: '#0284c7',
    accentColor: '#e0f2fe',
    packageStamp: 'WILD CAUGHT • IN EXTRA VIRGIN OLIVE OIL',
    ingredients: [
      { name: 'Wild Pilchard Sardines', role: 'g1', note: 'Group 1 whole fish.' },
      { name: 'Extra Virgin Olive Oil', role: 'g2', note: 'Group 2 culinary oil.' },
      { name: 'Sea Salt', role: 'g2', note: 'Group 2 culinary salt.' }
    ],
    explanation: 'Fish preserved in culinary olive oil and salt has only Group 1 and Group 2 ingredients, making it a nutritious NOVA Group 3 Processed Food.'
  },
  {
    id: 'canned-peaches',
    name: 'Sliced Peaches in Light Cane Syrup',
    category: 'Canned Fruit',
    aisle: 'Canned Fruit & Baking',
    serving: '140g Jar',
    shelfLife: '24 Months Sealed',
    kitchenTest: 'Group 1 Fruit + Group 2 Sugar',
    processMethod: 'Bottling in sugar syrup & pasteurizing',
    nova: 3,
    artType: 'peaches',
    photo: PHOTO_ASSETS.nova3_tinned,
    photoFocus: '76% 48%',
    photoCaption: 'Glass jar of yellow cling peach slices preserved in water and cane sugar',
    primaryColor: '#f97316',
    accentColor: '#ffedd5',
    packageStamp: 'BOTTLED IN WATER & CANE SUGAR',
    ingredients: [
      { name: 'Yellow Cling Peaches', role: 'g1', note: 'Group 1 whole fruit slices.' },
      { name: 'Water', role: 'g1', note: 'Syrup base.' },
      { name: 'Cane Sugar', role: 'g2', note: 'Group 2 culinary sugar.' }
    ],
    explanation: 'Fruits preserved in water and cane sugar (with no high-fructose corn syrup, artificial flavors, or synthetic dyes) are NOVA Group 3 Processed Foods.'
  },

  // ---------------- NOVA GROUP 4 ----------------
  {
    id: 'cola-soda',
    name: 'Neon Fizz Carbonated Cola Drink',
    category: 'Soft Drinks',
    aisle: 'Carbonated Beverages',
    serving: '355mL Can',
    shelfLife: '9 Months Canned',
    kitchenTest: 'Industrial syrup, dye & sweetener',
    processMethod: 'Industrial carbonation & additive blending',
    nova: 4,
    artType: 'cola',
    photo: PHOTO_ASSETS.nova4_can_chips,
    photoFocus: '26% 48%',
    photoCaption: 'Carbonated cola soft drink formulated with HFCS, caramel color & sucralose',
    primaryColor: '#e11d48',
    accentColor: '#ffe4e6',
    packageStamp: 'CARBONATED COLA • ULTRA-REFRESH',
    ingredients: [
      { name: 'Carbonated Water', role: 'g1', note: 'Water base.' },
      { name: 'High Fructose Corn Syrup', role: 'g4', note: 'Industrial enzymatic corn syrup marker of NOVA 4.' },
      { name: 'Caramel Color (Class IV E150d)', role: 'g4', note: 'Cosmetic industrial coloring additive.' },
      { name: 'Phosphoric Acid', role: 'g4', note: 'Industrial acidulant.' },
      { name: 'Natural Flavors', role: 'g4', note: 'Cosmetic flavor formulation.' },
      { name: 'Sucralose', role: 'g4', note: 'Artificial non-sugar sweetener (NOVA 4 marker).' }
    ],
    explanation: 'Carbonated soft drinks contain zero whole foods and rely on High Fructose Corn Syrup, cosmetic caramel coloring, flavorings, and non-sugar sweeteners—making them classic NOVA Group 4 Ultra-Processed products.'
  },
  {
    id: 'nacho-chips',
    name: 'Extreme Nacho Cheese Ridged Chips',
    category: 'Packaged Savoury Snacks',
    aisle: 'Chips & Crisps',
    serving: '28g Bag',
    shelfLife: '6 Months Nitrogen Bag',
    kitchenTest: 'Maltodextrin, MSG & synthetic lakes',
    processMethod: 'Industrial frying & flavor-dust coating',
    nova: 4,
    artType: 'chips',
    photo: PHOTO_ASSETS.nova4_can_chips,
    photoFocus: '66% 64%',
    photoCaption: 'Ridged snack chips coated with maltodextrin, whey, MSG & Yellow 6 Lake',
    primaryColor: '#dc2626',
    accentColor: '#fef08a',
    packageStamp: 'BOLD NACHO BLAST • FLAVOR DUSTED',
    ingredients: [
      { name: 'Potatoes', role: 'g1', note: 'Base potato.' },
      { name: 'Vegetable Oil', role: 'g2', note: 'Frying oil.' },
      { name: 'Maltodextrin (from Corn)', role: 'g4', note: 'Industrial hydrolyzed starch carrier (NOVA 4 marker).' },
      { name: 'Whey Powder', role: 'g4', note: 'Fractionated dairy substance.' },
      { name: 'Monosodium Glutamate (MSG)', role: 'g4', note: 'Cosmetic flavor enhancer (NOVA 4 marker).' },
      { name: 'Artificial Cheese Flavor', role: 'g4', note: 'Synthetic flavor compound.' },
      { name: 'Yellow 6 Lake & Red 40', role: 'g4', note: 'Synthetic azo cosmetic food dyes.' }
    ],
    explanation: 'Plain potato chips made only of potato, oil, and salt can sit in NOVA 3, but flavored chips coated in maltodextrin, whey powder, MSG, artificial flavors, and synthetic dyes are strictly NOVA Group 4.'
  },
  {
    id: 'rainbow-cereal',
    name: 'Rainbow Frosted Crunch Loops',
    category: 'Breakfast Cereals',
    aisle: 'Cereal Aisle',
    serving: '39g Bowl',
    shelfLife: '12 Months Boxed',
    kitchenTest: 'Extruded starch, hydrogenated oil & dyes',
    processMethod: 'High-pressure extrusion & sugar coating',
    nova: 4,
    artType: 'cereal',
    photo: PHOTO_ASSETS.nova4_snacks,
    photoFocus: '25% 84%',
    photoCaption: 'Extruded rainbow cereal rings dyed with Red 40, Yellow 5 & Blue 1',
    primaryColor: '#9333ea',
    accentColor: '#f3e8ff',
    packageStamp: 'FRUITY CRUNCH RINGS • VITAMIN FORTIFIED',
    ingredients: [
      { name: 'Degerminated Corn Flour Blend', role: 'g1', note: 'Milled grain.' },
      { name: 'Sugar', role: 'g2', note: 'Sugar.' },
      { name: 'Hydrogenated Coconut & Soybean Oil', role: 'g4', note: 'Chemically hydrogenated fat (exclusive NOVA 4 marker).' },
      { name: 'Modified Corn Starch', role: 'g4', note: 'Chemically modified starch.' },
      { name: 'Natural & Artificial Fruit Flavor', role: 'g4', note: 'Cosmetic flavoring.' },
      { name: 'Red 40, Yellow 5, Blue 1', role: 'g4', note: 'Synthetic cosmetic colors.' },
      { name: 'BHT (Preservative)', role: 'g4', note: 'Synthetic antioxidant additive.' }
    ],
    explanation: 'Most sweetened breakfast cereals undergo industrial extrusion and include hydrogenated oils, modified starches, artificial flavors, and synthetic dyes (Red 40, Yellow 5, Blue 1), placing them in NOVA Group 4.'
  },
  {
    id: 'protein-bar',
    name: 'Double Chocolate Caramel Protein Bar',
    category: 'Sports & Nutrition Bars',
    aisle: 'Health & Fitness Bars',
    serving: '60g Bar',
    shelfLife: '12 Months Foil Wrap',
    kitchenTest: 'Built from protein isolates & emulsifiers',
    processMethod: 'Industrial protein extrusion & enrobing',
    nova: 4,
    artType: 'protein_bar',
    photo: PHOTO_ASSETS.nova4_snacks,
    photoFocus: '86% 72%',
    photoCaption: 'Chocolate-enrobed protein bar formulated from whey/soy isolates & soy lecithin',
    primaryColor: '#4f46e5',
    accentColor: '#e0e7ff',
    packageStamp: '20G PROTEIN • ZERO ADDED SUGAR',
    ingredients: [
      { name: 'Whey Protein Isolate', role: 'g4', note: 'Industrially isolated protein fraction (NOVA 4 marker).' },
      { name: 'Soy Protein Isolate', role: 'g4', note: 'Extracted industrial protein isolate.' },
      { name: 'Polydextrose (Synthetic Soluble Fiber)', role: 'g4', note: 'Synthesized bulking agent.' },
      { name: 'Fractionated Palm Kernel Oil', role: 'g4', note: 'Industrially modified fat.' },
      { name: 'Soy Lecithin (Emulsifier)', role: 'g4', note: 'Cosmetic emulsifier additive.' },
      { name: 'Sucralose', role: 'g4', note: 'Non-sugar intense sweetener.' },
      { name: 'Natural & Artificial Caramel Flavor', role: 'g4', note: 'Cosmetic flavoring.' }
    ],
    explanation: 'Despite "20g Protein" health claims on the wrapper, bars constructed from whey/soy protein isolates, polydextrose, emulsifiers (soy lecithin), and sucralose are textbook NOVA Group 4 Ultra-Processed formulations.'
  },
  {
    id: 'packaged-bread',
    name: 'Super-Soft Mass-Produced Sliced Loaf',
    category: 'Packaged Bakery',
    aisle: 'Supermarket Bread Aisle',
    serving: '2 Slices (57g)',
    shelfLife: '21 Days Plastic Bag',
    kitchenTest: 'Contains industrial emulsifiers (DATEM)',
    processMethod: 'Chorleywood high-speed industrial mixing',
    nova: 4,
    artType: 'sliced_bread',
    photo: PHOTO_ASSETS.nova4_supermarket,
    photoFocus: '30% 50%',
    photoCaption: 'Mass-produced sliced white bread made with mono- & diglycerides and DATEM',
    primaryColor: '#db2777',
    accentColor: '#fce7f3',
    packageStamp: 'STAY-SOFT LOAF • ENRICHED SANDWICH BREAD',
    ingredients: [
      { name: 'Enriched Wheat Flour', role: 'g1', note: 'Flour base.' },
      { name: 'Sugar', role: 'g2', note: 'Culinary sugar.' },
      { name: 'Soybean Oil', role: 'g2', note: 'Vegetable oil.' },
      { name: 'Mono- and Diglycerides', role: 'g4', note: 'Industrial emulsifier for crumb softness (NOVA 4 marker).' },
      { name: 'DATEM (Diacetyl Tartaric Acid Esters)', role: 'g4', note: 'Industrial dough conditioner & emulsifier.' },
      { name: 'Soy Lecithin', role: 'g4', note: 'Industrial emulsifier.' },
      { name: 'Calcium Propionate', role: 'g4', note: 'Mold inhibitor preservative.' }
    ],
    explanation: 'Here is the classic NOVA bread distinction: while simple bakery bread is NOVA 3, mass-produced packaged bread containing emulsifiers (mono- and diglycerides, DATEM, soy lecithin) is classified by Monteiro & FAO as NOVA Group 4.'
  },
  {
    id: 'strawberry-yogurt',
    name: 'Strawberry Swirl Fruit-on-the-Bottom Yogurt',
    category: 'Flavored Dairy',
    aisle: 'Chilled Yogurt Aisle',
    serving: '150g Cup',
    shelfLife: '35 Days Chilled',
    kitchenTest: 'Modified starch, carrageenan & Red 40',
    processMethod: 'Industrial sweetening, thickening & flavoring',
    nova: 4,
    artType: 'yogurt_flavored',
    photo: PHOTO_ASSETS.nova4_supermarket,
    photoFocus: '76% 58%',
    photoCaption: 'Plastic cup of pink strawberry yogurt thickened with modified starch & carrageenan',
    primaryColor: '#ec4899',
    accentColor: '#fce7f3',
    packageStamp: 'STRAWBERRY BURST • CREAMY TEXTURE',
    ingredients: [
      { name: 'Cultured Pasteurized Nonfat Milk', role: 'g1', note: 'Milk base.' },
      { name: 'Fructose Syrup', role: 'g4', note: 'Industrial liquid sugar.' },
      { name: 'Modified Food Starch', role: 'g4', note: 'Chemically modified thickener (NOVA 4 marker).' },
      { name: 'Carrageenan & Pectin', role: 'g4', note: 'Cosmetic gelling & stabilizing agents.' },
      { name: 'Artificial Strawberry Flavor', role: 'g4', note: 'Cosmetic flavor additive.' },
      { name: 'Red 40', role: 'g4', note: 'Synthetic cosmetic dye.' },
      { name: 'Acesulfame Potassium', role: 'g4', note: 'Non-sugar artificial sweetener.' }
    ],
    explanation: 'Unlike plain yogurt (NOVA 1), fruit-flavored yogurts made with fructose syrup, modified food starch, carrageenan, artificial flavors, Red 40, and non-sugar sweeteners belong to NOVA Group 4.'
  }
];

// Preload all Specimen Images for Canvas Drawing
const loadedPhotos = {};
SPECIMENS.forEach(item => {
  if (item.photo && !loadedPhotos[item.photo]) {
    const img = new Image();
    img.src = item.photo;
    loadedPhotos[item.photo] = img;
  }
});

// Synthesized Web Audio API Sound Engine
const SoundFX = {
  ctx: null,
  muted: false,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },
  playTone(freq, type, duration, delay = 0, gainVal = 0.12) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime + delay;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  },
  correct() {
    this.playTone(523.25, 'triangle', 0.14, 0, 0.14);
    this.playTone(659.25, 'triangle', 0.14, 0.08, 0.14);
    this.playTone(783.99, 'triangle', 0.22, 0.16, 0.16);
  },
  wrong() {
    this.playTone(220, 'sawtooth', 0.18, 0, 0.11);
    this.playTone(164.81, 'sawtooth', 0.28, 0.12, 0.11);
  },
  scan() {
    this.playTone(880, 'sine', 0.07, 0, 0.08);
    this.playTone(1174.66, 'sine', 0.11, 0.06, 0.08);
  },
  slide() {
    this.playTone(330, 'sine', 0.08, 0, 0.06);
  }
};

// Application State
const state = {
  activeTab: 'play',
  gameMode: 'deck',
  clueMode: 'both',
  deck: [],
  currentIndex: 0,
  currentSpecimen: null,
  answered: false,
  lastGuess: null,
  cluesRevealed: false,
  score: 0,
  streak: 0,
  bestStreak: 0,
  lives: 3,
  totalAnswered: 0,
  totalCorrect: 0,
  roundHistory: [],
  rushSecondsLeft: 60,
  rushTimerId: null,
  loupeEnabled: true,
  pointer: { x: 0, y: 0, active: false },
  beltOffset: 0,
  cardSlideX: 0,
  cardTargetX: 0,
  scanLaserY: 0,
  particles: [],
  dexFilter: 'all',
  dexQuery: '',
  activeCodeFile: 'index.html'
};

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startNewRound() {
  if (state.rushTimerId) {
    clearInterval(state.rushTimerId);
    state.rushTimerId = null;
  }

  const shuffled = shuffleArray(SPECIMENS);
  state.deck = state.gameMode === 'deck' ? shuffled.slice(0, 10) : shuffled;
  state.currentIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.lives = 3;
  state.totalAnswered = 0;
  state.totalCorrect = 0;
  state.roundHistory = [];
  state.rushSecondsLeft = 60;

  const modal = document.getElementById('summaryModal');
  if (modal) modal.classList.add('hidden');

  if (state.gameMode === 'rush') {
    state.rushTimerId = setInterval(() => {
      state.rushSecondsLeft = Math.max(0, state.rushSecondsLeft - 1);
      updateHUD();
      if (state.rushSecondsLeft <= 0) {
        clearInterval(state.rushTimerId);
        state.rushTimerId = null;
        showRoundSummary('Time Up! 60-Second Belt Rush Complete');
      }
    }, 1000);
  }

  loadSpecimenAt(0);
}

function loadSpecimenAt(index) {
  if (state.gameMode === 'deck' && index >= state.deck.length) {
    showRoundSummary('Shift Complete! All 10 Specimens Classified');
    return;
  }
  if (index >= state.deck.length) {
    state.deck = shuffleArray(SPECIMENS);
    index = 0;
  }
  state.currentIndex = index;
  state.currentSpecimen = state.deck[index];
  state.answered = false;
  state.lastGuess = null;
  state.cluesRevealed = false;
  state.cardSlideX = -320;
  state.cardTargetX = 0;
  SoundFX.slide();
  renderCurrentSpecimenUI();
  updateHUD();
}

function loadSpecificSpecimenById(id) {
  const found = SPECIMENS.find(s => s.id === id);
  if (!found) return;
  switchTab('play');
  state.currentSpecimen = found;
  state.answered = false;
  state.lastGuess = null;
  state.cluesRevealed = false;
  state.cardSlideX = -320;
  state.cardTargetX = 0;
  SoundFX.slide();
  renderCurrentSpecimenUI();
  updateHUD();
}

function renderCurrentSpecimenUI() {
  const item = state.currentSpecimen;
  if (!item) return;

  const redactProductIdentity = (state.clueMode === 'ingredients' && !state.answered);
  const redactIngredients = (state.clueMode === 'image' && !state.answered && !state.cluesRevealed);

  // Prominent Studio Product Photo Card
  const mainPhotoImg = document.getElementById('specimenMainPhotoImg');
  const mainPhotoCaption = document.getElementById('specimenPhotoCaption');
  const mainPhotoRedacted = document.getElementById('specimenPhotoRedactedOverlay');
  if (mainPhotoImg) {
    mainPhotoImg.src = item.photo;
    mainPhotoImg.style.objectPosition = item.photoFocus || '50% 50%';
    if (redactProductIdentity) {
      mainPhotoImg.classList.add('redacted-blur');
      if (mainPhotoRedacted) mainPhotoRedacted.classList.remove('hidden');
      if (mainPhotoCaption) mainPhotoCaption.textContent = '🔒 Product Photo Sealed in Ingredients-Only Mode';
    } else {
      mainPhotoImg.classList.remove('redacted-blur');
      if (mainPhotoRedacted) mainPhotoRedacted.classList.add('hidden');
      if (mainPhotoCaption) mainPhotoCaption.textContent = item.photoCaption || item.name;
    }
  }

  document.getElementById('specimenCategoryBadge').textContent = redactProductIdentity
    ? 'Mystery Category (Label Detective)'
    : item.category;

  document.getElementById('productTitleDisplay').textContent = redactProductIdentity
    ? '🔒 Mystery Product (Classify from Ingredients List)'
    : item.name;

  document.getElementById('productAisleDisplay').textContent = redactProductIdentity
    ? 'Redacted until guess'
    : item.aisle;

  document.getElementById('productProcessDisplay').textContent = state.answered
    ? item.processMethod
    : 'Classify to reveal';

  const photoBadge = document.getElementById('photoRefBadge');
  if (photoBadge) {
    if (state.answered) {
      photoBadge.classList.remove('hidden');
      document.getElementById('photoRefImg').src = item.photo;
      document.getElementById('photoRefTitle').textContent = `NOVA Group ${item.nova} Verified`;
      document.getElementById('photoRefSub').textContent = NOVA_GROUP_META[item.nova].name;
    } else {
      photoBadge.classList.add('hidden');
    }
  }

  document.getElementById('ingredientCountPill').textContent =
    `${item.ingredients.length} Ingredient${item.ingredients.length === 1 ? '' : 's'}`;
  document.getElementById('nutriServing').textContent = item.serving;
  document.getElementById('nutriShelf').textContent = item.shelfLife;
  document.getElementById('nutriKitchen').textContent = (state.answered || state.cluesRevealed)
    ? item.kitchenTest
    : 'Scan or guess';

  const redactedBox = document.getElementById('ingredientsRedactedBox');
  const chipsContainer = document.getElementById('ingredientsListContainer');
  const rawTextEl = document.getElementById('ingredientsRawText');

  if (redactIngredients) {
    redactedBox.classList.remove('hidden');
    chipsContainer.classList.add('hidden');
    rawTextEl.classList.add('hidden');
  } else {
    redactedBox.classList.add('hidden');
    chipsContainer.classList.remove('hidden');
    rawTextEl.classList.remove('hidden');

    chipsContainer.innerHTML = '';
    item.ingredients.forEach((ing) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      const showColor = state.answered || state.cluesRevealed;
      let colorClasses = 'bg-white hover:bg-slate-100 text-slate-900 border-slate-400';
      let prefixDot = 'bg-slate-400';

      if (showColor) {
        if (ing.role === 'g1') {
          colorClasses = 'bg-emerald-100 text-emerald-950 border-emerald-500 font-bold';
          prefixDot = 'bg-emerald-600';
        } else if (ing.role === 'g2') {
          colorClasses = 'bg-amber-100 text-amber-950 border-amber-500 font-bold';
          prefixDot = 'bg-amber-600';
        } else if (ing.role === 'g4') {
          colorClasses = 'bg-rose-100 text-rose-950 border-rose-500 font-bold';
          prefixDot = 'bg-rose-600';
        }
      }

      btn.className = `ingredient-chip inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs border shadow-sm ${colorClasses}`;
      btn.innerHTML = `<span class="w-2 h-2 rounded-full ${prefixDot}"></span><span>${ing.name}</span>`;
      btn.addEventListener('click', () => {
        state.cluesRevealed = true;
        SoundFX.scan();
        document.getElementById('spectrometerNote').textContent = `🔬 ${ing.name}: ${ing.note}`;
        renderCurrentSpecimenUI();
      });
      chipsContainer.appendChild(btn);
    });

    rawTextEl.textContent = 'INGREDIENTS: ' + item.ingredients.map(i => i.name).join(', ') + '.';
  }

  const novaBtns = [
    document.getElementById('guessNova1Btn'),
    document.getElementById('guessNova2Btn'),
    document.getElementById('guessNova3Btn'),
    document.getElementById('guessNova4Btn')
  ];

  novaBtns.forEach(btn => {
    const g = Number(btn.getAttribute('data-nova'));
    btn.disabled = state.answered;
    btn.classList.remove('ring-4', 'ring-emerald-400', 'ring-rose-500', 'opacity-40');
    if (state.answered) {
      if (g === item.nova) {
        btn.classList.add('ring-4', 'ring-emerald-400');
      } else if (g === state.lastGuess && state.lastGuess !== item.nova) {
        btn.classList.add('ring-4', 'ring-rose-500');
      } else {
        btn.classList.add('opacity-40');
      }
    }
  });

  const drawer = document.getElementById('verdictDrawer');
  if (!state.answered) {
    drawer.classList.add('hidden');
  } else {
    drawer.classList.remove('hidden');
    const isCorrect = state.lastGuess === item.nova;
    drawer.className = isCorrect
      ? 'rounded-xl border-2 border-emerald-500/70 bg-emerald-950/35 p-4 transition-all'
      : 'rounded-xl border-2 border-rose-500/70 bg-rose-950/35 p-4 transition-all';

    const statusBadge = document.getElementById('verdictStatusBadge');
    statusBadge.className = isCorrect
      ? 'px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-400 text-slate-950'
      : 'px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500 text-white';
    statusBadge.textContent = isCorrect
      ? `✓ Spot On! +${state.lastPointsEarned || 100} pts`
      : `✗ Missed — You Guessed NOVA ${state.lastGuess}`;

    const actualBadge = document.getElementById('verdictActualGroupBadge');
    actualBadge.className = `px-2.5 py-0.5 rounded-md text-xs font-bold mono ${NOVA_GROUP_META[item.nova].badgeClass}`;
    actualBadge.textContent = NOVA_GROUP_META[item.nova].short;

    document.getElementById('verdictHeadline').textContent =
      `${item.name} is ${NOVA_GROUP_META[item.nova].name} (Group ${item.nova})`;
    document.getElementById('verdictExplanation').textContent = item.explanation;
  }
}

function updateHUD() {
  document.getElementById('hudScore').textContent = state.score.toLocaleString();
  document.getElementById('hudStreak').textContent = `${state.streak}x`;

  const progLabel = document.getElementById('hudProgressLabel');
  const progVal = document.getElementById('hudProgress');
  const statusLabel = document.getElementById('hudStatusLabel');
  const statusVal = document.getElementById('hudStatusValue');

  if (state.gameMode === 'deck') {
    progLabel.textContent = 'Specimen';
    progVal.textContent = `${Math.min(state.currentIndex + 1, state.deck.length)}/${state.deck.length}`;
    statusLabel.textContent = 'Lives';
    statusVal.textContent = '❤'.repeat(Math.max(0, state.lives)) + '♡'.repeat(Math.max(0, 3 - state.lives));
  } else if (state.gameMode === 'rush') {
    progLabel.textContent = 'Sorted';
    progVal.textContent = `${state.totalAnswered}`;
    statusLabel.textContent = 'Clock';
    statusVal.textContent = `${state.rushSecondsLeft}s`;
  } else {
    progLabel.textContent = 'Inspected';
    progVal.textContent = `${state.totalAnswered}`;
    statusLabel.textContent = 'Mode';
    statusVal.textContent = '∞ Lab';
  }

  const accPct = state.totalAnswered > 0
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100)
    : 100;
  document.getElementById('accuracyTrackerText').textContent =
    `Session Accuracy: ${accPct}% (${state.totalCorrect}/${state.totalAnswered})`;
}

function submitNovaGuess(guessedGroup) {
  if (state.answered || !state.currentSpecimen) return;
  const item = state.currentSpecimen;
  state.answered = true;
  state.lastGuess = guessedGroup;
  state.totalAnswered += 1;

  const isCorrect = guessedGroup === item.nova;
  if (isCorrect) {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.totalCorrect += 1;
    const basePoints = state.cluesRevealed ? 75 : 100;
    const clueBonus = state.clueMode !== 'both' ? 25 : 0;
    const streakBonus = Math.min(100, (state.streak - 1) * 20);
    const points = basePoints + clueBonus + streakBonus;
    state.lastPointsEarned = points;
    state.score += points;
    SoundFX.correct();
    spawnCanvasParticles(NOVA_GROUP_META[item.nova].color, 28);
  } else {
    state.streak = 0;
    state.lastPointsEarned = 0;
    if (state.gameMode === 'deck') {
      state.lives = Math.max(0, state.lives - 1);
    }
    SoundFX.wrong();
    spawnCanvasParticles('#ef4444', 18);
  }

  state.roundHistory.push({
    name: item.name,
    actual: item.nova,
    guessed: guessedGroup,
    correct: isCorrect
  });

  renderCurrentSpecimenUI();
  updateHUD();

  if (state.gameMode === 'deck' && state.lives <= 0) {
    setTimeout(() => {
      showRoundSummary('Out of Lives! Inspector Shift Ended');
    }, 1400);
  }
}

function showRoundSummary(headline) {
  if (state.rushTimerId) {
    clearInterval(state.rushTimerId);
    state.rushTimerId = null;
  }
  const modal = document.getElementById('summaryModal');
  modal.classList.remove('hidden');
  document.getElementById('modalTitle').textContent = headline;

  const acc = state.totalAnswered > 0
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100)
    : 0;

  let rank = 'Junior Label Reader';
  if (acc >= 90 && state.totalAnswered >= 5) rank = 'Chief NOVA Food Scientist';
  else if (acc >= 75) rank = 'Senior Ingredient Detective';
  else if (acc >= 55) rank = 'Certified Grocery Inspector';

  document.getElementById('modalBadge').textContent = `Rank: ${rank}`;
  document.getElementById('modalSubtitle').textContent =
    `You correctly classified ${state.totalCorrect} out of ${state.totalAnswered} food specimens across NOVA Groups 1–4.`;
  document.getElementById('modalScore').textContent = state.score.toLocaleString();
  document.getElementById('modalAccuracy').textContent = `${acc}%`;
  document.getElementById('modalBestStreak').textContent = `${state.bestStreak}x`;

  const listEl = document.getElementById('modalHistoryList');
  listEl.innerHTML = '';
  if (state.roundHistory.length === 0) {
    listEl.innerHTML = `<div class="text-xs text-slate-400 py-2 text-center">No specimens classified yet.</div>`;
  } else {
    state.roundHistory.forEach(entry => {
      const row = document.createElement('div');
      row.className = 'flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs';
      row.innerHTML = `
        <span class="font-semibold text-slate-200 truncate pr-2">${entry.correct ? '✅' : '❌'} ${entry.name}</span>
        <span class="mono shrink-0 ${entry.correct ? 'text-emerald-400' : 'text-rose-400'}">
          NOVA ${entry.actual} ${entry.correct ? '' : `(Guessed ${entry.guessed})`}
        </span>
      `;
      listEl.appendChild(row);
    });
  }
}

// ============================================================================
// HTML5 Canvas Optical Scanner (Draws Real Food Photo + Packaging Card)
// ============================================================================
let canvas = null;
let ctx = null;

function resizeCanvas() {
  canvas = document.getElementById('scannerCanvas');
  const container = document.getElementById('canvasContainer');
  if (!canvas || !container) return;
  ctx = canvas.getContext('2d');
  const rect = container.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(280, Math.floor(rect.width * dpr));
  canvas.height = Math.max(190, Math.floor(rect.height * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function spawnCanvasParticles(color, count) {
  if (!canvas) return;
  const w = canvas.clientWidth || 500;
  const h = canvas.clientHeight || 240;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const speed = 2 + Math.random() * 5;
    state.particles.push({
      x: w / 2,
      y: h / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.5,
      size: 4 + Math.random() * 5,
      color,
      alpha: 1
    });
  }
}

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function drawProductIllustration(g, item, cx, cy, scale = 1, isLoupe = false) {
  g.save();
  g.translate(cx, cy);
  g.scale(scale, scale);

  const redactVisual = (state.clueMode === 'ingredients' && !state.answered);

  if (redactVisual) {
    g.fillStyle = '#1e293b';
    g.strokeStyle = '#f59e0b';
    g.lineWidth = 3;
    roundRect(g, -120, -78, 240, 156, 16);
    g.fill();
    g.stroke();

    g.fillStyle = '#f59e0b';
    roundRect(g, -106, -66, 212, 22, 6);
    g.fill();
    g.fillStyle = '#0f172a';
    g.font = '900 10px Inter, sans-serif';
    g.textAlign = 'center';
    g.fillText('LABEL DETECTIVE • PHOTO REDACTED', 0, -51);

    g.fillStyle = '#e2e8f0';
    g.font = '900 36px JetBrains Mono, monospace';
    g.fillText('?', 0, 8);

    g.fillStyle = '#94a3b8';
    g.font = '600 11px Inter, sans-serif';
    g.fillText('Read Ingredients on Right →', 0, 42);
    g.fillText('Guess NOVA 1–4 to Reveal Photo', 0, 58);
    g.restore();
    return;
  }

  // Card Backdrop
  g.fillStyle = '#0f172a';
  g.strokeStyle = item.primaryColor;
  g.lineWidth = 3;
  roundRect(g, -128, -82, 256, 164, 16);
  g.fill();
  g.stroke();

  // Draw Actual Loaded Product Photograph inside the Canvas Card!
  const imgObj = loadedPhotos[item.photo];
  if (imgObj && imgObj.complete && imgObj.naturalWidth > 0) {
    g.save();
    roundRect(g, -120, -50, 240, 92, 10);
    g.clip();
    // Compute focus offset from photoFocus ("72% 48%")
    const parts = (item.photoFocus || '50% 50%').split(' ');
    const fx = (parseFloat(parts[0]) || 50) / 100;
    const fy = (parseFloat(parts[1]) || 50) / 100;
    const srcW = imgObj.naturalWidth * 0.65;
    const srcH = imgObj.naturalHeight * 0.55;
    const sx = Math.max(0, Math.min(imgObj.naturalWidth - srcW, fx * imgObj.naturalWidth - srcW / 2));
    const sy = Math.max(0, Math.min(imgObj.naturalHeight - srcH, fy * imgObj.naturalHeight - srcH / 2));
    g.drawImage(imgObj, sx, sy, srcW, srcH, -120, -50, 240, 92);
    g.restore();
  }

  // Top Header Stamp
  g.fillStyle = item.primaryColor;
  roundRect(g, -120, -76, 240, 22, 8);
  g.fill();
  g.fillStyle = '#ffffff';
  g.font = '800 9.5px JetBrains Mono, monospace';
  g.textAlign = 'center';
  g.fillText(item.packageStamp, 0, -61);

  // Bottom Specimen Title & Process Micro-stamp
  g.fillStyle = '#020617';
  roundRect(g, -120, 46, 240, 30, 8);
  g.fill();
  g.fillStyle = '#f8fafc';
  g.font = '800 11px Inter, sans-serif';
  g.fillText(item.name.slice(0, 32), 0, 59);

  if (isLoupe || state.cluesRevealed || state.answered) {
    g.fillStyle = '#38bdf8';
    g.font = '700 8.5px JetBrains Mono, monospace';
    g.fillText(`PROCESS: ${item.processMethod.toUpperCase()}`, 0, 71);
  } else {
    g.fillStyle = '#64748b';
    g.font = '600 8.5px JetBrains Mono, monospace';
    g.fillText('HOVER X-RAY LOUPE TO ZOOM PHOTO & STAMP', 0, 71);
  }

  if (state.answered) {
    const badgeColor = NOVA_GROUP_META[item.nova].color;
    g.fillStyle = badgeColor;
    roundRect(g, 52, -92, 78, 28, 9);
    g.fill();
    g.strokeStyle = '#0f172a';
    g.lineWidth = 2;
    g.stroke();
    g.fillStyle = item.nova === 4 ? '#ffffff' : '#0f172a';
    g.font = '900 12px JetBrains Mono, monospace';
    g.fillText(`NOVA ${item.nova}`, 91, -74);
  }

  g.restore();
}

function renderCanvasFrame() {
  if (!canvas || !ctx) {
    requestAnimationFrame(renderCanvasFrame);
    return;
  }
  const w = canvas.clientWidth || 500;
  const h = canvas.clientHeight || 220;
  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(30, 41, 59, 0.55)';
  ctx.lineWidth = 1;
  const gridStep = 28;
  for (let x = 0; x < w; x += gridStep) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += gridStep) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  const beltY = h - 36;
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, beltY, w, 36);
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, beltY);
  ctx.lineTo(w, beltY);
  ctx.stroke();

  state.beltOffset = (state.beltOffset + (state.gameMode === 'rush' ? 1.6 : 0.5)) % 36;
  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 4;
  for (let x = -36 + state.beltOffset; x < w + 36; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, beltY + 5);
    ctx.lineTo(x - 12, h - 5);
    ctx.stroke();
  }

  state.cardSlideX += (state.cardTargetX - state.cardSlideX) * 0.16;
  const centerX = w / 2 + state.cardSlideX;
  const centerY = h / 2 - 10;

  if (state.currentSpecimen) {
    drawProductIllustration(ctx, state.currentSpecimen, centerX, centerY, 0.98, false);
  }

  state.scanLaserY = (state.scanLaserY + 1.6) % Math.max(40, h - 40);
  const laserGrad = ctx.createLinearGradient(centerX - 130, 0, centerX + 130, 0);
  laserGrad.addColorStop(0, 'rgba(16, 185, 129, 0)');
  laserGrad.addColorStop(0.5, 'rgba(16, 185, 129, 0.35)');
  laserGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
  ctx.fillStyle = laserGrad;
  ctx.fillRect(centerX - 130, state.scanLaserY, 260, 2);

  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.14;
    p.alpha -= 0.022;
    if (p.alpha <= 0) {
      state.particles.splice(i, 1);
      continue;
    }
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if (state.loupeEnabled && state.pointer.active && state.currentSpecimen) {
    const lx = state.pointer.x;
    const ly = state.pointer.y;
    const radius = 54;

    ctx.save();
    ctx.beginPath();
    ctx.arc(lx, ly, radius, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = '#020617';
    ctx.fillRect(lx - radius, ly - radius, radius * 2, radius * 2);

    const dx = lx - centerX;
    const dy = ly - centerY;
    drawProductIllustration(ctx, state.currentSpecimen, lx - dx * 1.55, ly - dy * 1.55, 1.55, true);

    ctx.restore();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(lx, ly, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  requestAnimationFrame(renderCanvasFrame);
}

// Pantry Dex Rendering (With Real Product Photos on Every Card)
function renderPantryDex() {
  const container = document.getElementById('dexGridContainer');
  if (!container) return;
  container.innerHTML = '';

  const query = state.dexQuery.trim().toLowerCase();
  const filtered = SPECIMENS.filter(item => {
    const matchesGroup = state.dexFilter === 'all' || String(item.nova) === String(state.dexFilter);
    const matchesText = !query ||
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.ingredients.some(i => i.name.toLowerCase().includes(query));
    return matchesGroup && matchesText;
  });

  filtered.forEach(item => {
    const meta = NOVA_GROUP_META[item.nova];
    const card = document.createElement('div');
    card.className = 'bg-slate-900/90 border border-slate-800 hover:border-slate-600 rounded-2xl overflow-hidden flex flex-col justify-between transition';
    card.innerHTML = `
      <div>
        <div class="relative h-36 bg-slate-950 overflow-hidden border-b border-slate-800">
          <img src="${item.photo}" alt="${item.name}" style="object-position: ${item.photoFocus || '50% 50%'}" class="w-full h-full object-cover" />
          <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md text-xs font-black mono shadow ${meta.badgeClass}">
            NOVA ${item.nova}
          </span>
          <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/85 text-[10px] font-semibold text-slate-200 border border-slate-700">
            ${item.category}
          </span>
        </div>
        <div class="p-4">
          <h3 class="text-sm font-extrabold text-white">${item.name}</h3>
          <p class="text-[11px] text-slate-300 mt-1.5 mono bg-slate-950/80 p-2 rounded-lg border border-slate-800">
            <strong>Ingredients:</strong> ${item.ingredients.map(i => i.name).join(', ')}
          </p>
          <p class="text-xs text-slate-400 mt-2 leading-relaxed">${item.explanation}</p>
        </div>
      </div>
      <div class="px-4 pb-4">
        <button type="button" class="w-full py-2 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition">
          Inspect on Scanner Workbench →
        </button>
      </div>
    `;
    card.querySelector('button').addEventListener('click', () => {
      loadSpecificSpecimenById(item.id);
    });
    container.appendChild(card);
  });
}

function switchTab(tab) {
  state.activeTab = tab;
  const views = {
    play: document.getElementById('viewPlay'),
    guide: document.getElementById('viewGuide'),
    dex: document.getElementById('viewDex'),
    github: document.getElementById('viewGithub')
  };
  const btns = {
    play: document.getElementById('tabPlayBtn'),
    guide: document.getElementById('tabGuideBtn'),
    dex: document.getElementById('tabDexBtn'),
    github: document.getElementById('tabGithubBtn')
  };

  Object.keys(views).forEach(k => {
    if (!views[k] || !btns[k]) return;
    if (k === tab) {
      views[k].classList.remove('hidden');
      btns[k].className = 'px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-emerald-500 text-slate-950 shadow';
    } else {
      views[k].classList.add('hidden');
      btns[k].className = 'px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all text-slate-300 hover:text-white';
    }
  });

  if (tab === 'play') {
    resizeCanvas();
  } else if (tab === 'dex') {
    renderPantryDex();
  } else if (tab === 'github' && typeof renderGithubCodeViewer === 'function') {
    renderGithubCodeViewer();
  }
}

function setGameMode(mode) {
  state.gameMode = mode;
  const map = {
    deck: document.getElementById('modeDeckBtn'),
    rush: document.getElementById('modeRushBtn'),
    practice: document.getElementById('modePracticeBtn')
  };
  Object.keys(map).forEach(k => {
    map[k].className = k === mode
      ? 'px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-500 text-white transition'
      : 'px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition';
  });
  startNewRound();
}

function setClueMode(clue) {
  state.clueMode = clue;
  const map = {
    both: document.getElementById('clueBothBtn'),
    image: document.getElementById('clueImageBtn'),
    ingredients: document.getElementById('clueIngredientsBtn')
  };
  Object.keys(map).forEach(k => {
    map[k].className = k === clue
      ? 'px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950 transition'
      : 'px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition';
  });
  renderCurrentSpecimenUI();
}

function bindEvents() {
  document.getElementById('tabPlayBtn').addEventListener('click', () => switchTab('play'));
  document.getElementById('tabGuideBtn').addEventListener('click', () => switchTab('guide'));
  document.getElementById('tabDexBtn').addEventListener('click', () => switchTab('dex'));
  const githubBtn = document.getElementById('tabGithubBtn');
  if (githubBtn) {
    githubBtn.addEventListener('click', () => switchTab('github'));
  }

  document.getElementById('soundToggleBtn').addEventListener('click', () => {
    SoundFX.muted = !SoundFX.muted;
    document.getElementById('soundOnIcon').classList.toggle('hidden', SoundFX.muted);
    document.getElementById('soundOffIcon').classList.toggle('hidden', !SoundFX.muted);
  });

  document.getElementById('modeDeckBtn').addEventListener('click', () => setGameMode('deck'));
  document.getElementById('modeRushBtn').addEventListener('click', () => setGameMode('rush'));
  document.getElementById('modePracticeBtn').addEventListener('click', () => setGameMode('practice'));

  document.getElementById('clueBothBtn').addEventListener('click', () => setClueMode('both'));
  document.getElementById('clueImageBtn').addEventListener('click', () => setClueMode('image'));
  document.getElementById('clueIngredientsBtn').addEventListener('click', () => setClueMode('ingredients'));

  document.getElementById('toggleLoupeBtn').addEventListener('click', () => {
    state.loupeEnabled = !state.loupeEnabled;
    const txt = document.getElementById('loupeStateText');
    txt.textContent = state.loupeEnabled ? 'ON' : 'OFF';
    txt.className = state.loupeEnabled ? 'font-bold text-emerald-400' : 'font-bold text-slate-400';
  });
  document.getElementById('restartRoundBtn').addEventListener('click', () => startNewRound());

  document.getElementById('scanCluesBtn').addEventListener('click', () => {
    state.cluesRevealed = true;
    SoundFX.scan();
    renderCurrentSpecimenUI();
  });

  [1, 2, 3, 4].forEach(g => {
    document.getElementById(`guessNova${g}Btn`).addEventListener('click', () => submitNovaGuess(g));
  });

  document.getElementById('nextSpecimenBtn').addEventListener('click', () => {
    if (state.answered) {
      loadSpecimenAt(state.currentIndex + 1);
    }
  });

  document.getElementById('modalPlayAgainBtn').addEventListener('click', () => startNewRound());
  document.getElementById('modalReviewGuideBtn').addEventListener('click', () => {
    document.getElementById('summaryModal').classList.add('hidden');
    switchTab('guide');
  });

  document.querySelectorAll('.dex-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.dexFilter = btn.getAttribute('data-dex-filter');
      document.querySelectorAll('.dex-filter-btn').forEach(b => {
        b.className = b === btn
          ? 'dex-filter-btn px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500 text-slate-950'
          : 'dex-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white';
      });
      renderPantryDex();
    });
  });

  document.getElementById('dexSearchInput').addEventListener('input', (e) => {
    state.dexQuery = e.target.value;
    renderPantryDex();
  });

  const cEl = document.getElementById('scannerCanvas');
  if (cEl) {
    const updatePointer = (clientX, clientY) => {
      const rect = cEl.getBoundingClientRect();
      state.pointer.x = clientX - rect.left;
      state.pointer.y = clientY - rect.top;
      state.pointer.active = true;
    };
    cEl.addEventListener('mousemove', e => updatePointer(e.clientX, e.clientY));
    cEl.addEventListener('mouseleave', () => { state.pointer.active = false; });
    cEl.addEventListener('touchstart', e => {
      if (e.touches[0]) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    cEl.addEventListener('touchmove', e => {
      if (e.touches[0]) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    cEl.addEventListener('touchend', () => { state.pointer.active = false; });
  }

  window.addEventListener('keydown', e => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (state.activeTab !== 'play') return;

    if (['1', '2', '3', '4'].includes(e.key)) {
      e.preventDefault();
      submitNovaGuess(Number(e.key));
    } else if (e.key.toLowerCase() === 'h') {
      e.preventDefault();
      state.cluesRevealed = true;
      SoundFX.scan();
      renderCurrentSpecimenUI();
    } else if ((e.key === ' ' || e.key === 'Enter') && state.answered) {
      e.preventDefault();
      loadSpecimenAt(state.currentIndex + 1);
    } else if (e.key.toLowerCase() === 'm') {
      document.getElementById('soundToggleBtn').click();
    }
  });

  window.addEventListener('resize', resizeCanvas);
}

window.onload = function () {
  bindEvents();
  resizeCanvas();
  startNewRound();
  renderPantryDex();
  initGithubViewerEvents();
  requestAnimationFrame(renderCanvasFrame);
};



const GITHUB_REPO_FILES_B64 = {
  'index.html': 'PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KPGhlYWQ+CiAgPG1ldGEgY2hhcnNldD0iVVRGLTgiIC8+CiAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiIC8+CiAgPHRpdGxlPlNwb3QgdGhlIE5PVkEgR3JvdXAg4oCUIEZvb2QgUHJvY2Vzc2luZyAmYW1wOyBJbmdyZWRpZW50IERldGVjdGl2ZSBHYW1lPC90aXRsZT4KICA8c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tLzMuNC4xNyI+PC9zY3JpcHQ+CiAgPGxpbmsgcmVsPSJwcmVjb25uZWN0IiBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tIiAvPgogIDxsaW5rIHJlbD0icHJlY29ubmVjdCIgaHJlZj0iaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbSIgY3Jvc3NvcmlnaW4gLz4KICA8bGluayBocmVmPSJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZmFtaWx5PUpldEJyYWlucytNb25vOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXAiIHJlbD0ic3R5bGVzaGVldCIgLz4KICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9InN0eWxlLmNzcyIgLz4KPC9oZWFkPgo8Ym9keSBjbGFzcz0iYW50aWFsaWFzZWQgc2VsZWN0aW9uOmJnLWVtZXJhbGQtNTAwIHNlbGVjdGlvbjp0ZXh0LXNsYXRlLTk1MCI+CgogIDwhLS0gVG9wIE5hdmlnYXRpb24gJiBTdGF0dXMgSGVhZGVyIC0tPgogIDxoZWFkZXIgY2xhc3M9InN0aWNreSB0b3AtMCB6LTMwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAvODAgYmctc2xhdGUtOTUwLzkwIGJhY2tkcm9wLWJsdXItbWQiPgogICAgPGRpdiBjbGFzcz0ibWF4LXctN3hsIG14LWF1dG8gcHgtMyBzbTpweC02IHB5LTIuNSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIj4KICAgICAgPGRpdiBjbGFzcz0iZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSI+CiAgICAgICAgPGRpdiBjbGFzcz0idy05IGgtOSByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tZW1lcmFsZC00MDAgdmlhLWFtYmVyLTQwMCB0by1yb3NlLTUwMCBwLTAuNSBzaGFkb3ctbGcgc2hhZG93LWVtZXJhbGQtNTAwLzEwIj4KICAgICAgICAgIDxkaXYgY2xhc3M9InctZnVsbCBoLWZ1bGwgYmctc2xhdGUtOTUwIHJvdW5kZWQtWzEwcHhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYmxhY2sgdGV4dC14cyB0cmFja2luZy10aWdodGVyIj4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9InRleHQtZW1lcmFsZC00MDAiPjE8L3NwYW4+PHNwYW4gY2xhc3M9InRleHQtYW1iZXItNDAwIj4yPC9zcGFuPjxzcGFuIGNsYXNzPSJ0ZXh0LW9yYW5nZS00MDAiPjM8L3NwYW4+PHNwYW4gY2xhc3M9InRleHQtcm9zZS01MDAiPjQ8L3NwYW4+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIiPgogICAgICAgICAgICA8aDEgY2xhc3M9ImZvbnQtZXh0cmFib2xkIHRleHQtYmFzZSBzbTp0ZXh0LWxnIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUiPlNQT1QgVEhFIE5PVkEgR1JPVVA8L2gxPgogICAgICAgICAgICA8c3BhbiBjbGFzcz0iaGlkZGVuIG1kOmlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCBiZy1lbWVyYWxkLTUwMC8xNSB0ZXh0LWVtZXJhbGQtMzAwIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvMzAiPgogICAgICAgICAgICAgIFBob3RvICZhbXA7IEluZ3JlZGllbnQgRGV0ZWN0aXZlCiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPHAgY2xhc3M9InRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIGhpZGRlbiBzbTpibG9jayI+Q2xhc3NpZnkgZm9vZHMgZnJvbSBOT1ZBIDEgKFVucHJvY2Vzc2VkKSB0byBOT1ZBIDQgKFVsdHJhLVByb2Nlc3NlZCkgYnkgcHJvZHVjdCBwaG90byBvciBpbmdyZWRpZW50IGxpc3Q8L3A+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBzbTpnYXAtMiI+CiAgICAgICAgPG5hdiBjbGFzcz0iZmxleCBpdGVtcy1jZW50ZXIgYmctc2xhdGUtOTAwLzkwIHAtMSByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIiBhcmlhLWxhYmVsPSJNYWluIFZpZXdzIj4KICAgICAgICAgIDxidXR0b24gaWQ9InRhYlBsYXlCdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB4LTIuNSBzbTpweC0zLjUgcHktMS41IHJvdW5kZWQtbGcgdGV4dC14cyBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgYmctZW1lcmFsZC01MDAgdGV4dC1zbGF0ZS05NTAgc2hhZG93Ij4KICAgICAgICAgICAgU2Nhbm5lciBHYW1lCiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgIDxidXR0b24gaWQ9InRhYkd1aWRlQnRuIiB0eXBlPSJidXR0b24iIGNsYXNzPSJweC0yLjUgc206cHgtMy41IHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIj4KICAgICAgICAgICAgTk9WQSBHdWlkZQogICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICA8YnV0dG9uIGlkPSJ0YWJEZXhCdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB4LTIuNSBzbTpweC0zLjUgcHktMS41IHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIHRleHQtc2xhdGUtMzAwIGhvdmVyOnRleHQtd2hpdGUiPgogICAgICAgICAgICBQYW50cnkgRGV4ICgyNCkKICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgPGJ1dHRvbiBpZD0idGFiR2l0aHViQnRuIiB0eXBlPSJidXR0b24iIGNsYXNzPSJweC0yLjUgc206cHgtMy41IHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlIj4KICAgICAgICAgICAgR2l0SHViIEZpbGVzCiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICA8L25hdj4KCiAgICAgICAgPGJ1dHRvbiBpZD0ic291bmRUb2dnbGVCdG4iIHR5cGU9ImJ1dHRvbiIgdGl0bGU9IlRvZ2dsZSBTb3VuZCBFZmZlY3RzIChNKSIgY2xhc3M9InAtMiByb3VuZGVkLXhsIGJnLXNsYXRlLTkwMCBob3ZlcjpiZy1zbGF0ZS04MDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIj4KICAgICAgICAgIDxzdmcgaWQ9InNvdW5kT25JY29uIiBjbGFzcz0idy00IGgtNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMTEgNUw2IDlIMnY2aDRsNSA0VjV6IiAvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNS41NCA4LjQ2YTUgNSAwIDAxMCA3LjA3TTE5LjA3IDQuOTNhMTAgMTAgMCAwMTAgMTQuMTQiIC8+CiAgICAgICAgICA8L3N2Zz4KICAgICAgICAgIDxzdmcgaWQ9InNvdW5kT2ZmSWNvbiIgY2xhc3M9InctNCBoLTQgaGlkZGVuIHRleHQtcm9zZS00MDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTExIDVMNiA5SDJ2Nmg0bDUgNFY1ek0yMyA5bC02IDZNMTcgOWw2IDYiIC8+CiAgICAgICAgICA8L3N2Zz4KICAgICAgICA8L2J1dHRvbj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICA8L2hlYWRlcj4KCiAgPG1haW4gY2xhc3M9Im1heC13LTd4bCBteC1hdXRvIHB4LTMgc206cHgtNiBweS00Ij4KCiAgICA8IS0tID09PT09PT09PT09PT09PT09PT09IFZJRVcgMTogU0NBTk5FUiBHQU1FID09PT09PT09PT09PT09PT09PT09IC0tPgogICAgPHNlY3Rpb24gaWQ9InZpZXdQbGF5IiBjbGFzcz0ic3BhY2UteS00Ij4KCiAgICAgIDwhLS0gTW9kZSAmIENsdWUgQ29udHJvbCBCYXIgKyBMaXZlIEhVRCAtLT4KICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTMgaXRlbXMtc3RyZXRjaCI+CiAgICAgICAgPGRpdiBjbGFzcz0ibGc6Y29sLXNwYW4tNyBiZy1zbGF0ZS05MDAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvOTAgcm91bmRlZC0yeGwgcC0zIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMiPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmxleCBmbGV4LWNvbCBnYXAtMSI+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJ0ZXh0LVsxMHB4XSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwIj5HYW1lIE1vZGU8L3NwYW4+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImlubGluZS1mbGV4IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwIHAtMSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCI+CiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ibW9kZURlY2tCdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LWJvbGQgYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgICAgMTAtQ2FyZCBTaGlmdAogICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgIDxidXR0b24gaWQ9Im1vZGVSdXNoQnRuIiB0eXBlPSJidXR0b24iIGNsYXNzPSJweC0yLjUgcHktMSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgICAgNjBzIEJlbHQgUnVzaAogICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgIDxidXR0b24gaWQ9Im1vZGVQcmFjdGljZUJ0biIgdHlwZT0iYnV0dG9uIiBjbGFzcz0icHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIj4KICAgICAgICAgICAgICAgIEVuZGxlc3MgTGFiCiAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CgogICAgICAgICAgPGRpdiBjbGFzcz0iZmxleCBmbGV4LWNvbCBnYXAtMSI+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJ0ZXh0LVsxMHB4XSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwIj5DaGFsbGVuZ2UgQ2x1ZSBGaWx0ZXI8L3NwYW4+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImlubGluZS1mbGV4IHJvdW5kZWQteGwgYmctc2xhdGUtOTUwIHAtMSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCI+CiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iY2x1ZUJvdGhCdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LWJvbGQgYmctZW1lcmFsZC01MDAgdGV4dC1zbGF0ZS05NTAgdHJhbnNpdGlvbiI+CiAgICAgICAgICAgICAgICBJbWFnZSArIEluZ3JlZGllbnRzCiAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iY2x1ZUltYWdlQnRuIiB0eXBlPSJidXR0b24iIGNsYXNzPSJweC0yLjUgcHktMSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgICAgSW1hZ2UgT25seQogICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgIDxidXR0b24gaWQ9ImNsdWVJbmdyZWRpZW50c0J0biIgdHlwZT0iYnV0dG9uIiBjbGFzcz0icHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIj4KICAgICAgICAgICAgICAgIEluZ3JlZGllbnRzIE9ubHkKICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0ibGc6Y29sLXNwYW4tNSBiZy1zbGF0ZS05MDAvODAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvOTAgcm91bmRlZC0yeGwgcC0zIGdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTIgdGV4dC1jZW50ZXIgaXRlbXMtY2VudGVyIj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImJnLXNsYXRlLTk1MC84MCByb3VuZGVkLXhsIHB5LTEuNSBweC0yIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzcwIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwIGZvbnQtc2VtaWJvbGQiPlNjb3JlPC9kaXY+CiAgICAgICAgICAgIDxkaXYgaWQ9Imh1ZFNjb3JlIiBjbGFzcz0idGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ibGFjayB0ZXh0LWVtZXJhbGQtNDAwIG1vbm8iPjA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iYmctc2xhdGUtOTUwLzgwIHJvdW5kZWQteGwgcHktMS41IHB4LTIgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNzAiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS00MDAgZm9udC1zZW1pYm9sZCI+U3RyZWFrPC9kaXY+CiAgICAgICAgICAgIDxkaXYgaWQ9Imh1ZFN0cmVhayIgY2xhc3M9InRleHQtYmFzZSBzbTp0ZXh0LWxnIGZvbnQtYmxhY2sgdGV4dC1hbWJlci00MDAgbW9ubyI+MHg8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iYmctc2xhdGUtOTUwLzgwIHJvdW5kZWQteGwgcHktMS41IHB4LTIgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNzAiPgogICAgICAgICAgICA8ZGl2IGlkPSJodWRQcm9ncmVzc0xhYmVsIiBjbGFzcz0idGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwIGZvbnQtc2VtaWJvbGQiPlNwZWNpbWVuPC9kaXY+CiAgICAgICAgICAgIDxkaXYgaWQ9Imh1ZFByb2dyZXNzIiBjbGFzcz0idGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ibGFjayB0ZXh0LXdoaXRlIG1vbm8iPjEvMTA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iYmctc2xhdGUtOTUwLzgwIHJvdW5kZWQteGwgcHktMS41IHB4LTIgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAvNzAiPgogICAgICAgICAgICA8ZGl2IGlkPSJodWRTdGF0dXNMYWJlbCIgY2xhc3M9InRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTQwMCBmb250LXNlbWlib2xkIj5MaXZlczwvZGl2PgogICAgICAgICAgICA8ZGl2IGlkPSJodWRTdGF0dXNWYWx1ZSIgY2xhc3M9InRleHQtc20gc206dGV4dC1iYXNlIGZvbnQtYmxhY2sgdGV4dC1yb3NlLTQwMCBtb25vIj7inaTinaTinaQ8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDwhLS0gTWFpbiBTcGxpdCBJbnNwZWN0aW9uIFdvcmtiZW5jaCAtLT4KICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTQgaXRlbXMtc3RyZXRjaCI+CgogICAgICAgIDwhLS0gTEVGVCBDT0xVTU46IFJlYWwgU3R1ZGlvIFByb2R1Y3QgUGhvdG8gKyBJbnRlcmFjdGl2ZSBPcHRpY2FsIFNjYW5uZXIgKDcgY29scykgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ibGc6Y29sLXNwYW4tNyBmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTkwMC85MCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXhsIj4KICAgICAgICAgIDwhLS0gU2Nhbm5lciBUb3AgQmFyIC0tPgogICAgICAgICAgPGRpdiBjbGFzcz0icHgtNCBweS0yLjUgYmctc2xhdGUtOTUwLzkwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS04MDAgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMiI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIj4KICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0idy0yLjUgaC0yLjUgcm91bmRlZC1mdWxsIGJnLWVtZXJhbGQtNDAwIGFuaW1hdGUtcHVsc2UiPjwvc3Bhbj4KICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0idGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtMzAwIj5Qcm9kdWN0IFBob3RvZ3JhcGggJmFtcDsgT3B0aWNhbCBTY2FubmVyPC9zcGFuPgogICAgICAgICAgICAgIDxzcGFuIGlkPSJzcGVjaW1lbkNhdGVnb3J5QmFkZ2UiIGNsYXNzPSJweC0yIHB5LTAuNSByb3VuZGVkLW1kIHRleHQtWzExcHhdIGZvbnQtc2VtaWJvbGQgYmctc2xhdGUtODAwIHRleHQtc2xhdGUtMzAwIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIj4KICAgICAgICAgICAgICAgIERhaXJ5ICZhbXA7IEVnZ3MKICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiI+CiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0idG9nZ2xlTG91cGVCdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdGV4dC1bMTFweF0gZm9udC1zZW1pYm9sZCBiZy1zbGF0ZS04MDAgaG92ZXI6Ymctc2xhdGUtNzAwIHRleHQtc2t5LTMwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIj4KICAgICAgICAgICAgICAgIDxzcGFuPvCflI0gWC1SYXkgTG91cGU6PC9zcGFuPgogICAgICAgICAgICAgICAgPHNwYW4gaWQ9ImxvdXBlU3RhdGVUZXh0IiBjbGFzcz0iZm9udC1ib2xkIHRleHQtZW1lcmFsZC00MDAiPk9OPC9zcGFuPgogICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICAgIDxidXR0b24gaWQ9InJlc3RhcnRSb3VuZEJ0biIgdHlwZT0iYnV0dG9uIiBjbGFzcz0icHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0zMDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAgdHJhbnNpdGlvbiI+CiAgICAgICAgICAgICAgICDihrsgTmV3IERlY2sKICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICA8IS0tIER1YWwgVmlzdWFsIEluc3BlY3Rpb24gU3RhZ2U6IFJlYWwgU3R1ZGlvIFBob3RvZ3JhcGggKyBJbnRlcmFjdGl2ZSBTY2FubmVyIENhbnZhcyAtLT4KICAgICAgICAgIDxkaXYgY2xhc3M9ImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTEyIGJnLXNsYXRlLTk1MCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIj4KICAgICAgICAgICAgPCEtLSBQcm9taW5lbnQgU3R1ZGlvIFBob3RvZ3JhcGggRnJhbWUgKDUgY29scyBvbiBzbSspIC0tPgogICAgICAgICAgICA8ZGl2IGlkPSJzcGVjaW1lbk1haW5QaG90b1dyYXAiIGNsYXNzPSJzbTpjb2wtc3Bhbi01IHAtMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBzbTpib3JkZXItYi0wIHNtOmJvcmRlci1yIGJvcmRlci1zbGF0ZS04MDAvOTAgYmctc2xhdGUtOTUwLzkwIj4KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzcGVjaW1lbi1waG90by1mcmFtZSBoLTQ4IHNtOmgtNTYgdy1mdWxsIj4KICAgICAgICAgICAgICAgIDxpbWcgaWQ9InNwZWNpbWVuTWFpblBob3RvSW1nIiBzcmM9ImltYWdlcy9ub3ZhMV93aG9sZV9mb29kcy5qcGciIGFsdD0iQ3VycmVudCBGb29kIFNwZWNpbWVuIiBjbGFzcz0ic3BlY2ltZW4tcGhvdG8taW1nIiAvPgogICAgICAgICAgICAgICAgPGRpdiBpZD0ic3BlY2ltZW5QaG90b1JlZGFjdGVkT3ZlcmxheSIgY2xhc3M9ImhpZGRlbiBhYnNvbHV0ZSBpbnNldC0wIGJnLXNsYXRlLTk1MC84MCBiYWNrZHJvcC1ibHVyLW1kIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNCB0ZXh0LWNlbnRlciI+CiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJweC0yLjUgcHktMSByb3VuZGVkLWZ1bGwgYmctYW1iZXItNDAwIHRleHQtc2xhdGUtOTUwIGZvbnQtYmxhY2sgdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIj4KICAgICAgICAgICAgICAgICAgICBJbmdyZWRpZW50cy1Pbmx5IE1vZGUKICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC0yIj5Qcm9kdWN0IFBob3RvIFNlYWxlZDwvcD4KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHQtWzExcHhdIHRleHQtc2xhdGUtMzAwIG10LTAuNSI+U3VibWl0IHlvdXIgTk9WQSAx4oCTNCBndWVzcyB0byByZXZlYWwgdGhlIHN0dWRpbyBwaG90byE8L3A+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFic29sdXRlIHRvcC0yIGxlZnQtMiBweC0yIHB5LTAuNSByb3VuZGVkIGJnLXNsYXRlLTk1MC84NSBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LVsxMHB4XSBmb250LWJvbGQgdGV4dC1lbWVyYWxkLTMwMCI+CiAgICAgICAgICAgICAgICAgIPCfk7cgU3R1ZGlvIFNwZWNpbWVuIFBob3RvCiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICA8cCBpZD0ic3BlY2ltZW5QaG90b0NhcHRpb24iIGNsYXNzPSJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTMwMCBmb250LW1lZGl1bSBtdC0yIGxlYWRpbmctc251ZyI+CiAgICAgICAgICAgICAgICBJbnNwZWN0IHRoZSByZWFsIHByb2R1Y3QgcGhvdG8gJmFtcDsgaG92ZXIgdGhlIHNjYW5uZXIgb24gdGhlIHJpZ2h0IHRvIHpvb20uCiAgICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgIDwhLS0gSW50ZXJhY3RpdmUgSFRNTDUgQ2FudmFzIFNjYW5uZXIgJiBMb3VwZSAoNyBjb2xzIG9uIHNtKykgLS0+CiAgICAgICAgICAgIDxkaXYgaWQ9ImNhbnZhc0NvbnRhaW5lciIgY2xhc3M9InNtOmNvbC1zcGFuLTcgcmVsYXRpdmUgdy1mdWxsIGgtNTYgc206aC02NCBiZy1zbGF0ZS05NTAgc2VsZWN0LW5vbmUgb3ZlcmZsb3ctaGlkZGVuIj4KICAgICAgICAgICAgICA8Y2FudmFzIGlkPSJzY2FubmVyQ2FudmFzIiBjbGFzcz0idy1mdWxsIGgtZnVsbCBibG9jayBjdXJzb3ItY3Jvc3NoYWlyIj48L2NhbnZhcz4KCiAgICAgICAgICAgICAgPGRpdiBpZD0icGhvdG9SZWZCYWRnZSIgY2xhc3M9ImhpZGRlbiBhYnNvbHV0ZSBib3R0b20tMi41IGxlZnQtMi41IGJnLXNsYXRlLTk1MC85NSBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMC85MCByb3VuZGVkLXhsIHAtMS41IHNoYWRvdy1sZyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYXgtdy1bMjMwcHhdIHBvaW50ZXItZXZlbnRzLW5vbmUiPgogICAgICAgICAgICAgICAgPGltZyBpZD0icGhvdG9SZWZJbWciIHNyYz0iaW1hZ2VzL25vdmExX3dob2xlX2Zvb2RzLmpwZyIgYWx0PSJOT1ZBIEdyb3VwIFJlZmVyZW5jZSIgY2xhc3M9InctMTAgaC05IG9iamVjdC1jb3ZlciByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHNocmluay0wIiAvPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1bMTBweF0gbGVhZGluZy10aWdodCI+CiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9InBob3RvUmVmVGl0bGUiIGNsYXNzPSJmb250LWJvbGQgdGV4dC13aGl0ZSI+Tk9WQSBHcm91cCBSZWZlcmVuY2U8L2Rpdj4KICAgICAgICAgICAgICAgICAgPGRpdiBpZD0icGhvdG9SZWZTdWIiIGNsYXNzPSJ0ZXh0LXNsYXRlLTQwMCI+VW5sb2NrZWQgYWZ0ZXIgdmVyZGljdDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFic29sdXRlIHRvcC0yLjUgcmlnaHQtMi41IGJnLXNsYXRlLTk1MC84NSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC85MCBweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LVsxMHB4XSB0ZXh0LXNsYXRlLTMwMCBwb2ludGVyLWV2ZW50cy1ub25lIj4KICAgICAgICAgICAgICAgIEhvdmVyIC8gdG91Y2ggZm9yIFgtUmF5IFpvb20KICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICA8IS0tIFByb2R1Y3QgUXVpY2sgTWV0YWRhdGEgQmFyIC0tPgogICAgICAgICAgPGRpdiBjbGFzcz0icHgtNCBweS0zIGJnLXNsYXRlLTk1MC83NSBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIj4KICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS00MDAgZm9udC1zZW1pYm9sZCI+U3BlY2ltZW4gTmFtZTwvZGl2PgogICAgICAgICAgICAgIDxoMiBpZD0icHJvZHVjdFRpdGxlRGlzcGxheSIgY2xhc3M9InRleHQtYmFzZSBzbTp0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUiPlBsYWluIEdyZWVrIFlvZ3VydDwvaDI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyI+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1yaWdodCI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS00MDAgZm9udC1zZW1pYm9sZCI+U3RvcmUgQWlzbGU8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgaWQ9InByb2R1Y3RBaXNsZURpc3BsYXkiIGNsYXNzPSJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTIwMCI+Q2hpbGxlZCBEYWlyeSBDYXNlPC9kaXY+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iaC03IHctcHggYmctc2xhdGUtODAwIj48L2Rpdj4KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0LXJpZ2h0Ij4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTQwMCBmb250LXNlbWlib2xkIj5Qcm9jZXNzaW5nIE1ldGhvZDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdiBpZD0icHJvZHVjdFByb2Nlc3NEaXNwbGF5IiBjbGFzcz0idGV4dC14cyBmb250LWJvbGQgdGV4dC1hbWJlci0zMDAiPkluc3BlY3QgdG8gcmV2ZWFsPC9kaXY+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDwhLS0gUklHSFQgQ09MVU1OOiBCYWNrLW9mLVBhY2sgSW5ncmVkaWVudHMgTGFiZWwgJiBEZXRlY3RpdmUgVG9vbHMgKDUgY29scykgLS0+CiAgICAgICAgPGRpdiBjbGFzcz0ibGc6Y29sLXNwYW4tNSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtMyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJudXRyaXRpb24tY2FyZCByb3VuZGVkLTJ4bCBwLTQgZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiI+CiAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iYm9yZGVyLWItNCBib3JkZXItc2xhdGUtOTAwIHBiLTIgbWItMyBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMiI+CiAgICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1zbGF0ZS02MDAiPk9mZmljaWFsIEJhY2stb2YtUGFjayBEZWNsYXJhdGlvbjwvZGl2PgogICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9InRleHQteGwgZm9udC1ibGFjayB0cmFja2luZy10aWdodCB0ZXh0LXNsYXRlLTkwMCBsZWFkaW5nLW5vbmUgbXQtMC41Ij5JTkdSRURJRU5UUyAmYW1wOyBGT1JNVUxBVElPTjwvaDM+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxzcGFuIGlkPSJpbmdyZWRpZW50Q291bnRQaWxsIiBjbGFzcz0icHgtMiBweS0wLjUgcm91bmRlZCBiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC14cyBtb25vIj4KICAgICAgICAgICAgICAgICAgMiBJbmdyZWRpZW50cwogICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJncmlkIGdyaWQtY29scy0zIGdhcC0xLjUgYm9yZGVyLWItMiBib3JkZXItc2xhdGUtOTAwIHBiLTIuNSBtYi0zIHRleHQtY2VudGVyIGJnLXNsYXRlLTEwMCByb3VuZGVkLWxnIHAtMS41Ij4KICAgICAgICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InRleHQtWzEwcHhdIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbGF0ZS01MDAiPlNlcnZpbmc8L2Rpdj4KICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ibnV0cmlTZXJ2aW5nIiBjbGFzcz0idGV4dC14cyBmb250LWV4dHJhYm9sZCB0ZXh0LXNsYXRlLTkwMCBtb25vIj4xNzBnIEN1cDwvZGl2PgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJib3JkZXIteCBib3JkZXItc2xhdGUtMzAwIj4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1bMTBweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTUwMCI+U2hlbGYgTGlmZTwvZGl2PgogICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJudXRyaVNoZWxmIiBjbGFzcz0idGV4dC14cyBmb250LWV4dHJhYm9sZCB0ZXh0LXNsYXRlLTkwMCBtb25vIj4xNCBEYXlzIENoaWxsZWQ8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1bMTBweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTUwMCI+S2l0Y2hlbiBUZXN0PC9kaXY+CiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9Im51dHJpS2l0Y2hlbiIgY2xhc3M9InRleHQteHMgZm9udC1leHRyYWJvbGQgdGV4dC1zbGF0ZS05MDAiPlNjYW4gb3IgZ3Vlc3M8L2Rpdj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJtYi0zIj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0xLjUiPgogICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0idGV4dC14cyBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTgwMCI+RGVjbGFyZWQgSW5ncmVkaWVudHMgTGlzdDo8L3NwYW4+CiAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9InNjYW5DbHVlc0J0biIgdHlwZT0iYnV0dG9uIiBjbGFzcz0icHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LVsxMXB4XSBmb250LWJvbGQgYmctYW1iZXItMTAwIGhvdmVyOmJnLWFtYmVyLTIwMCB0ZXh0LWFtYmVyLTk1MCBib3JkZXIgYm9yZGVyLWFtYmVyLTQwMCB0cmFuc2l0aW9uIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIj4KICAgICAgICAgICAgICAgICAgICA8c3Bhbj7wn5SsIEhpZ2hsaWdodCBOT1ZBIENsdWVzIChIKTwvc3Bhbj4KICAgICAgICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICAgICAgICA8L2Rpdj4KCiAgICAgICAgICAgICAgICA8ZGl2IGlkPSJpbmdyZWRpZW50c1JlZGFjdGVkQm94IiBjbGFzcz0iaGlkZGVuIHJvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLWRhc2hlZCBib3JkZXItc2xhdGUtNDAwIGJnLXNsYXRlLTIwMC85MCBwLTUgdGV4dC1jZW50ZXIgbXktMiI+CiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9InRleHQtc20gZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS04MDAiPvCflJIgSW5ncmVkaWVudHMgTGlzdCBTZWFsZWQ8L2Rpdj4KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHQteHMgdGV4dC1zbGF0ZS02MDAgbXQtMSI+CiAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBpbiA8c3Ryb25nPlByb2R1Y3QgSW1hZ2UgT25seTwvc3Ryb25nPiBtb2RlISBJbnNwZWN0IHRoZSBzdHVkaW8gcGhvdG8gYW5kIHNjYW5uZXIgb24gdGhlIGxlZnQsIG9yIGNsaWNrICJIaWdobGlnaHQgTk9WQSBDbHVlcyIgdG8gcGVlay4KICAgICAgICAgICAgICAgICAgPC9wPgogICAgICAgICAgICAgICAgPC9kaXY+CgogICAgICAgICAgICAgICAgPGRpdiBpZD0iaW5ncmVkaWVudHNMaXN0Q29udGFpbmVyIiBjbGFzcz0iZmxleCBmbGV4LXdyYXAgZ2FwLTEuNSBweS0xIj48L2Rpdj4KICAgICAgICAgICAgICAgIDxwIGlkPSJpbmdyZWRpZW50c1Jhd1RleHQiIGNsYXNzPSJtdC0yLjUgdGV4dC14cyB0ZXh0LXNsYXRlLTcwMCBsZWFkaW5nLXJlbGF4ZWQgYmctYW1iZXItNTAvNzAgYm9yZGVyIGJvcmRlci1hbWJlci0yMDAvODAgcm91bmRlZC1sZyBwLTIuNSBtb25vIj48L3A+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgICAgPGRpdiBjbGFzcz0iYm9yZGVyLXQtMiBib3JkZXItc2xhdGUtOTAwIHB0LTIuNSBtdC0yIj4KICAgICAgICAgICAgICA8ZGl2IGlkPSJjbHVlTGVnZW5kQm94IiBjbGFzcz0iZ3JpZCBncmlkLWNvbHMtMyBnYXAtMS41IHRleHQtWzEwcHhdIGZvbnQtYm9sZCI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGJnLWVtZXJhbGQtNTAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTMwMCB0ZXh0LWVtZXJhbGQtOTUwIHB4LTIgcHktMSByb3VuZGVkIj4KICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InctMi41IGgtMi41IHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTUwMCBzaHJpbmstMCI+PC9zcGFuPgogICAgICAgICAgICAgICAgICA8c3Bhbj5XaG9sZSBGb29kIChHMSk8L3NwYW4+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgYmctYW1iZXItNTAgYm9yZGVyIGJvcmRlci1hbWJlci0zMDAgdGV4dC1hbWJlci05NTAgcHgtMiBweS0xIHJvdW5kZWQiPgogICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0idy0yLjUgaC0yLjUgcm91bmRlZC1mdWxsIGJnLWFtYmVyLTUwMCBzaHJpbmstMCI+PC9zcGFuPgogICAgICAgICAgICAgICAgICA8c3Bhbj5DdWxpbmFyeSAoRzIpPC9zcGFuPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGJnLXJvc2UtNTAgYm9yZGVyIGJvcmRlci1yb3NlLTMwMCB0ZXh0LXJvc2UtOTUwIHB4LTIgcHktMSByb3VuZGVkIj4KICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InctMi41IGgtMi41IHJvdW5kZWQtZnVsbCBiZy1yb3NlLTUwMCBzaHJpbmstMCI+PC9zcGFuPgogICAgICAgICAgICAgICAgICA8c3Bhbj5VUEYgTWFya2VyIChHNCk8L3NwYW4+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICA8cCBpZD0ic3BlY3Ryb21ldGVyTm90ZSIgY2xhc3M9InRleHQtWzExcHhdIHRleHQtc2xhdGUtNjAwIG10LTEuNSBmb250LW1lZGl1bSI+CiAgICAgICAgICAgICAgICBUaXA6IENsaWNrIGFueSBpbmdyZWRpZW50IGNoaXAgb3IgcHJlc3MgPGtiZCBjbGFzcz0icHgtMS41IHB5LTAuNSBiZy1zbGF0ZS0yMDAgcm91bmRlZCB0ZXh0LXNsYXRlLTgwMCBmb250LWJvbGQiPkg8L2tiZD4gdG8gc2NhbiBmb3IgY3VsaW5hcnkgdnMuIGluZHVzdHJpYWwgbWFya2Vycy4KICAgICAgICAgICAgICA8L3A+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPCEtLSBCT1RUT00gQUNUSU9OIERFQ0s6IDQgTk9WQSBDbGFzc2lmaWNhdGlvbiBCdXR0b25zICsgUG9zdC1HdWVzcyBGb3JlbnNpYyBGZWVkYmFjayAtLT4KICAgICAgPGRpdiBjbGFzcz0iYmctc2xhdGUtOTAwLzk1IGJvcmRlciBib3JkZXItc2xhdGUtODAwIHJvdW5kZWQtMnhsIHAtNCBzaGFkb3cteGwgc3BhY2UteS0zIj4KICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIj4KICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgIDxoMyBjbGFzcz0idGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtZXh0cmFib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTIwMCI+CiAgICAgICAgICAgICAgQ2xhc3NpZnkgVGhpcyBTcGVjaW1lbjogV2hpY2ggTk9WQSBHcm91cCBEb2VzIEl0IEJlbG9uZyBUbz8KICAgICAgICAgICAgPC9oMz4KICAgICAgICAgICAgPHAgY2xhc3M9InRleHQteHMgdGV4dC1zbGF0ZS00MDAiPkNsaWNrIGEgTk9WQSBncm91cCBjYXJkIGJlbG93IG9yIHByZXNzIGtleXMgPGtiZCBjbGFzcz0icHgtMS41IHB5LTAuNSByb3VuZGVkIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTIwMCBtb25vIHRleHQtWzExcHhdIj4xPC9rYmQ+IDxrYmQgY2xhc3M9InB4LTEuNSBweS0wLjUgcm91bmRlZCBiZy1zbGF0ZS04MDAgdGV4dC1zbGF0ZS0yMDAgbW9ubyB0ZXh0LVsxMXB4XSI+Mjwva2JkPiA8a2JkIGNsYXNzPSJweC0xLjUgcHktMC41IHJvdW5kZWQgYmctc2xhdGUtODAwIHRleHQtc2xhdGUtMjAwIG1vbm8gdGV4dC1bMTFweF0iPjM8L2tiZD4gPGtiZCBjbGFzcz0icHgtMS41IHB5LTAuNSByb3VuZGVkIGJnLXNsYXRlLTgwMCB0ZXh0LXNsYXRlLTIwMCBtb25vIHRleHQtWzExcHhdIj40PC9rYmQ+PC9wPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGlkPSJhY2N1cmFjeVRyYWNrZXJUZXh0IiBjbGFzcz0idGV4dC14cyBmb250LWJvbGQgdGV4dC1zbGF0ZS00MDAgbW9ubyI+CiAgICAgICAgICAgIFNlc3Npb24gQWNjdXJhY3k6IDEwMCUgKDAvMCkKICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC0zIj4KICAgICAgICAgIDxidXR0b24gaWQ9Imd1ZXNzTm92YTFCdG4iIHR5cGU9ImJ1dHRvbiIgZGF0YS1ub3ZhPSIxIiBjbGFzcz0ibm92YS1idG4gZ3JvdXAgdGV4dC1sZWZ0IHJvdW5kZWQteGwgcC0zLjUgYmctc2xhdGUtOTUwIGhvdmVyOmJnLWVtZXJhbGQtOTUwLzQwIGJvcmRlci0yIGJvcmRlci1lbWVyYWxkLTUwMC80MCBob3Zlcjpib3JkZXItZW1lcmFsZC00MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG1iLTEuNSI+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTIuNSBweS0wLjUgcm91bmRlZC1sZyBiZy1lbWVyYWxkLTUwMCB0ZXh0LXNsYXRlLTk1MCBmb250LWJsYWNrIHRleHQteHMgbW9ubyI+Tk9WQSAxPC9zcGFuPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJ0ZXh0LVsxMXB4XSBmb250LWJvbGQgdGV4dC1zbGF0ZS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1lbWVyYWxkLTMwMCBtb25vIj5LZXkgWzFdPC9zcGFuPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9udC1leHRyYWJvbGQgdGV4dC1zbSB0ZXh0LXdoaXRlIGdyb3VwLWhvdmVyOnRleHQtZW1lcmFsZC0yMDAiPlVucHJvY2Vzc2VkIG9yIE1pbmltYWxseSBQcm9jZXNzZWQ8L2Rpdj4KICAgICAgICAgICAgPHAgY2xhc3M9InRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwIG10LTEgbGVhZGluZy1zbnVnIj4KICAgICAgICAgICAgICBXaG9sZSBwbGFudC9hbmltYWwgZm9vZHMgYWx0ZXJlZCBvbmx5IGJ5IHdhc2hpbmcsIGZyZWV6aW5nLCBkcnlpbmcsIGdyaW5kaW5nLCBvciBwYXN0ZXVyaXppbmcuIE5vdGhpbmcgYWRkZWQuCiAgICAgICAgICAgIDwvcD4KICAgICAgICAgIDwvYnV0dG9uPgoKICAgICAgICAgIDxidXR0b24gaWQ9Imd1ZXNzTm92YTJCdG4iIHR5cGU9ImJ1dHRvbiIgZGF0YS1ub3ZhPSIyIiBjbGFzcz0ibm92YS1idG4gZ3JvdXAgdGV4dC1sZWZ0IHJvdW5kZWQteGwgcC0zLjUgYmctc2xhdGUtOTUwIGhvdmVyOmJnLWFtYmVyLTk1MC80MCBib3JkZXItMiBib3JkZXItYW1iZXItNTAwLzQwIGhvdmVyOmJvcmRlci1hbWJlci00MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG1iLTEuNSI+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTIuNSBweS0wLjUgcm91bmRlZC1sZyBiZy1hbWJlci00MDAgdGV4dC1zbGF0ZS05NTAgZm9udC1ibGFjayB0ZXh0LXhzIG1vbm8iPk5PVkEgMjwvc3Bhbj4KICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0idGV4dC1bMTFweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOnRleHQtYW1iZXItMzAwIG1vbm8iPktleSBbMl08L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb250LWV4dHJhYm9sZCB0ZXh0LXNtIHRleHQtd2hpdGUgZ3JvdXAtaG92ZXI6dGV4dC1hbWJlci0yMDAiPlByb2Nlc3NlZCBDdWxpbmFyeSBJbmdyZWRpZW50czwvZGl2PgogICAgICAgICAgICA8cCBjbGFzcz0idGV4dC1bMTFweF0gdGV4dC1zbGF0ZS00MDAgbXQtMSBsZWFkaW5nLXNudWciPgogICAgICAgICAgICAgIFByZXNzZWQsIHJlZmluZWQsIG9yIGV4dHJhY3RlZCBzdWJzdGFuY2VzIHVzZWQgdG8gc2Vhc29uICZhbXA7IGNvb2sgKG9pbHMsIGJ1dHRlciwgc2FsdCwgc3VnYXIsIGhvbmV5LCB2aW5lZ2FyKS4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgPC9idXR0b24+CgogICAgICAgICAgPGJ1dHRvbiBpZD0iZ3Vlc3NOb3ZhM0J0biIgdHlwZT0iYnV0dG9uIiBkYXRhLW5vdmE9IjMiIGNsYXNzPSJub3ZhLWJ0biBncm91cCB0ZXh0LWxlZnQgcm91bmRlZC14bCBwLTMuNSBiZy1zbGF0ZS05NTAgaG92ZXI6Ymctb3JhbmdlLTk1MC80MCBib3JkZXItMiBib3JkZXItb3JhbmdlLTUwMC80MCBob3Zlcjpib3JkZXItb3JhbmdlLTQwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbWItMS41Ij4KICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMi41IHB5LTAuNSByb3VuZGVkLWxnIGJnLW9yYW5nZS01MDAgdGV4dC1zbGF0ZS05NTAgZm9udC1ibGFjayB0ZXh0LXhzIG1vbm8iPk5PVkEgMzwvc3Bhbj4KICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0idGV4dC1bMTFweF0gZm9udC1ib2xkIHRleHQtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOnRleHQtb3JhbmdlLTMwMCBtb25vIj5LZXkgWzNdPC9zcGFuPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9udC1leHRyYWJvbGQgdGV4dC1zbSB0ZXh0LXdoaXRlIGdyb3VwLWhvdmVyOnRleHQtb3JhbmdlLTIwMCI+UHJvY2Vzc2VkIEZvb2RzPC9kaXY+CiAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBtdC0xIGxlYWRpbmctc251ZyI+CiAgICAgICAgICAgICAgTk9WQSAxIGZvb2QgKyBOT1ZBIDIgc2FsdC9zdWdhci9vaWwgKGNhbm5lZCB2ZWcvZmlzaCwgdHJhZGl0aW9uYWwgY2hlZXNlLCBzYWx0ZWQgbnV0cywgc2ltcGxlIDQtaW5ncmVkaWVudCBicmVhZCkuCiAgICAgICAgICAgIDwvcD4KICAgICAgICAgIDwvYnV0dG9uPgoKICAgICAgICAgIDxidXR0b24gaWQ9Imd1ZXNzTm92YTRCdG4iIHR5cGU9ImJ1dHRvbiIgZGF0YS1ub3ZhPSI0IiBjbGFzcz0ibm92YS1idG4gZ3JvdXAgdGV4dC1sZWZ0IHJvdW5kZWQteGwgcC0zLjUgYmctc2xhdGUtOTUwIGhvdmVyOmJnLXJvc2UtOTUwLzQwIGJvcmRlci0yIGJvcmRlci1yb3NlLTUwMC80MCBob3Zlcjpib3JkZXItcm9zZS00MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4iPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIG1iLTEuNSI+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTIuNSBweS0wLjUgcm91bmRlZC1sZyBiZy1yb3NlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgdGV4dC14cyBtb25vIj5OT1ZBIDQ8L3NwYW4+CiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InRleHQtWzExcHhdIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTQwMCBncm91cC1ob3Zlcjp0ZXh0LXJvc2UtMzAwIG1vbm8iPktleSBbNF08L3NwYW4+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb250LWV4dHJhYm9sZCB0ZXh0LXNtIHRleHQtd2hpdGUgZ3JvdXAtaG92ZXI6dGV4dC1yb3NlLTIwMCI+VWx0cmEtUHJvY2Vzc2VkIEZvb2RzIChVUEYpPC9kaXY+CiAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0LVsxMXB4XSB0ZXh0LXNsYXRlLTQwMCBtdC0xIGxlYWRpbmctc251ZyI+CiAgICAgICAgICAgICAgSW5kdXN0cmlhbCBmb3JtdWxhdGlvbnMgd2l0aCBlbXVsc2lmaWVycywgcHJvdGVpbiBpc29sYXRlcywgbW9kaWZpZWQgc3RhcmNoZXMsIGFydGlmaWNpYWwgZmxhdm9ycywgY29sb3JzLCBvciBzd2VldGVuZXJzLgogICAgICAgICAgICA8L3A+CiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBpZD0idmVyZGljdERyYXdlciIgY2xhc3M9ImhpZGRlbiByb3VuZGVkLXhsIGJvcmRlciBwLTQgdHJhbnNpdGlvbi1hbGwiPgogICAgICAgICAgPGRpdiBjbGFzcz0iZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ic3BhY2UteS0xIj4KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBmbGV4LXdyYXAiPgogICAgICAgICAgICAgICAgPHNwYW4gaWQ9InZlcmRpY3RTdGF0dXNCYWRnZSIgY2xhc3M9InB4LTIuNSBweS0wLjUgcm91bmRlZC1mdWxsIHRleHQteHMgZm9udC1ibGFjayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIiPkNPUlJFQ1QhPC9zcGFuPgogICAgICAgICAgICAgICAgPHNwYW4gaWQ9InZlcmRpY3RBY3R1YWxHcm91cEJhZGdlIiBjbGFzcz0icHgtMi41IHB5LTAuNSByb3VuZGVkLW1kIHRleHQteHMgZm9udC1ib2xkIG1vbm8iPk9mZmljaWFsIENsYXNzaWZpY2F0aW9uPC9zcGFuPgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgIDxoNCBpZD0idmVyZGljdEhlYWRsaW5lIiBjbGFzcz0idGV4dC1iYXNlIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUiPjwvaDQ+CiAgICAgICAgICAgICAgPHAgaWQ9InZlcmRpY3RFeHBsYW5hdGlvbiIgY2xhc3M9InRleHQteHMgc206dGV4dC1zbSB0ZXh0LXNsYXRlLTIwMCBsZWFkaW5nLXJlbGF4ZWQiPjwvcD4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InNocmluay0wIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIj4KICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJuZXh0U3BlY2ltZW5CdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB1bHNlLW5leHQgdy1mdWxsIG1kOnctYXV0byBweC01IHB5LTIuNSByb3VuZGVkLXhsIGJnLWVtZXJhbGQtNTAwIGhvdmVyOmJnLWVtZXJhbGQtNDAwIHRleHQtc2xhdGUtOTUwIGZvbnQtYmxhY2sgdGV4dC14cyBzbTp0ZXh0LXNtIHRyYWNraW5nLXdpZGUgdHJhbnNpdGlvbiBzaGFkb3ctbGciPgogICAgICAgICAgICAgICAgTmV4dCBTcGVjaW1lbiAoU3BhY2UpIOKGkgogICAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICA8L3NlY3Rpb24+CgogICAgPCEtLSA9PT09PT09PT09PT09PT09PT09PSBWSUVXIDI6IE5PVkEgRklFTEQgR1VJREUgJiBQSE9UTyBHQUxMRVJZID09PT09PT09PT09PT09PT09PT09IC0tPgogICAgPHNlY3Rpb24gaWQ9InZpZXdHdWlkZSIgY2xhc3M9ImhpZGRlbiBzcGFjZS15LTYiPgogICAgICA8ZGl2IGNsYXNzPSJiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgcm91bmRlZC0yeGwgcC01Ij4KICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCBwYi00Ij4KICAgICAgICAgIDxkaXY+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJ0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXN0IHRleHQtZW1lcmFsZC00MDAiPk1vbnRlaXJvIGV0IGFsLiAmYW1wOyBGQU8gLyBPcGVuIEZvb2QgRmFjdHMgRnJhbWV3b3JrPC9zcGFuPgogICAgICAgICAgICA8aDIgY2xhc3M9InRleHQteGwgc206dGV4dC0yeGwgZm9udC1ibGFjayB0ZXh0LXdoaXRlIG10LTAuNSI+SG93IHRvIFNwb3QgdGhlIDQgTk9WQSBGb29kIEdyb3VwczwvaDI+CiAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1zbGF0ZS0zMDAgbXQtMSBtYXgtdy0zeGwiPgogICAgICAgICAgICAgIERldmVsb3BlZCBieSByZXNlYXJjaGVycyBhdCB0aGUgVW5pdmVyc2l0eSBvZiBTw6NvIFBhdWxvIGxlZCBieSBDYXJsb3MgTW9udGVpcm8sIHRoZSBOT1ZBIGNsYXNzaWZpY2F0aW9uIHNvcnRzIGZvb2RzIG5vdCBieSBjYWxvcmllcyBvciBudXRyaWVudHMsIGJ1dCBieSB0aGUgPHN0cm9uZz5uYXR1cmUsIGV4dGVudCwgYW5kIHB1cnBvc2Ugb2YgaW5kdXN0cmlhbCBwcm9jZXNzaW5nPC9zdHJvbmc+LgogICAgICAgICAgICA8L3A+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImZsZXggZmxleC13cmFwIGdhcC0yIHNocmluay0wIj4KICAgICAgICAgICAgPGEgaHJlZj0iaHR0cHM6Ly93b3JsZC5vcGVuZm9vZGZhY3RzLm9yZy9ub3ZhIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzcz0icHgtMyBweS0yIHJvdW5kZWQteGwgYmctc2xhdGUtOTUwIGhvdmVyOmJnLXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtMzAwIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgIE9wZW4gRm9vZCBGYWN0cyBOT1ZBIOKGlwogICAgICAgICAgICA8L2E+CiAgICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8vb3Blbmtub3dsZWRnZS5mYW8ub3JnL3NlcnZlci9hcGkvY29yZS9iaXRzdHJlYW1zLzUyNzdiMzc5LTBhY2ItNGQ5Ny1hNmEzLTYwMjc3NDEwNDYyOS9jb250ZW50IiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBjbGFzcz0icHgtMyBweS0yIHJvdW5kZWQteGwgYmctc2xhdGUtOTUwIGhvdmVyOmJnLXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTcwMCB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXNreS0zMDAgdHJhbnNpdGlvbiI+CiAgICAgICAgICAgICAgRkFPIE5PVkEgUmVwb3J0IOKGlwogICAgICAgICAgICA8L2E+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNCBtdC01Ij4KICAgICAgICAgIDxkaXYgY2xhc3M9ImJnLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzQwIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBncmlkLWNvbHMtMiBnYXAtMSBoLTQ4IGJnLXNsYXRlLTkwMCI+CiAgICAgICAgICAgICAgPGltZyBzcmM9ImltYWdlcy9ub3ZhMV93aG9sZV9mb29kcy5qcGciIGFsdD0iTk9WQSAxIFdob2xlIEZvb2RzIiBjbGFzcz0idy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIiIC8+CiAgICAgICAgICAgICAgPGltZyBzcmM9ImltYWdlcy9ub3ZhMV9sZW50aWxzX2FsbW9uZHNfc3BpbmFjaC5qcGciIGFsdD0iTk9WQSAxIExlbnRpbHMgQWxtb25kcyBTcGluYWNoIiBjbGFzcz0idy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIiIC8+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJwLTQgZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMiI+CiAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJweC0yLjUgcHktMC41IHJvdW5kZWQgYmctZW1lcmFsZC01MDAgdGV4dC1zbGF0ZS05NTAgZm9udC1ibGFjayB0ZXh0LXhzIG1vbm8iPk5PVkEgR1JPVVAgMTwvc3Bhbj4KICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0idGV4dC1iYXNlIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbXQtMS41Ij5VbnByb2Nlc3NlZCBvciBNaW5pbWFsbHkgUHJvY2Vzc2VkIEZvb2RzPC9oMz4KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIG10LTEgbGVhZGluZy1yZWxheGVkIj4KICAgICAgICAgICAgICAgICAgRWRpYmxlIHBhcnRzIG9mIHBsYW50cyBvciBhbmltYWxzIGluIHRoZWlyIG5hdHVyYWwgc3RhdGUsIG9yIGFsdGVyZWQgb25seSBieSBkcnlpbmcsIGNydXNoaW5nLCBncmluZGluZywgcGFzdGV1cml6aW5nLCBjaGlsbGluZywgZnJlZXppbmcsIG9yIHBsYWluIGZlcm1lbnRhdGlvbi4KICAgICAgICAgICAgICAgIDwvcD4KICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJiZy1lbWVyYWxkLTk1MC8zMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwLzMwIHJvdW5kZWQteGwgcC0yLjUgdGV4dC14cyI+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb250LWJvbGQgdGV4dC1lbWVyYWxkLTMwMCI+TGFiZWwgRGV0ZWN0aXZlIFJ1bGU6PC9kaXY+CiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dC1zbGF0ZS0zMDAgbXQtMC41Ij5Vc3VhbGx5IGEgc2luZ2xlIHdob2xlIGluZ3JlZGllbnQgKG9yIGxpdmUgY3VsdHVyZXMgaW4gcGxhaW4geW9ndXJ0KS4gPHN0cm9uZz5aZXJvPC9zdHJvbmc+IGFkZGVkIHNhbHQsIHN1Z2FyLCBvaWxzLCBmYXRzLCBvciBjb3NtZXRpYyBhZGRpdGl2ZXMuPC9wPgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXYgY2xhc3M9ImJnLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC80MCByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTEgaC00OCBiZy1zbGF0ZS05MDAiPgogICAgICAgICAgICAgIDxpbWcgc3JjPSJpbWFnZXMvbm92YTJfb2lsX2J1dHRlcl9zYWx0X2hvbmV5LmpwZyIgYWx0PSJOT1ZBIDIgT2lscyBCdXR0ZXIgU2FsdCBIb25leSIgY2xhc3M9InctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIiAvPgogICAgICAgICAgICAgIDxpbWcgc3JjPSJpbWFnZXMvbm92YTJfdmluZWdhcl9zdWdhci5qcGciIGFsdD0iTk9WQSAyIFZpbmVnYXIgYW5kIENhbmUgU3VnYXIiIGNsYXNzPSJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciIgLz4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InAtNCBmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS0yIj4KICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InB4LTIuNSBweS0wLjUgcm91bmRlZCBiZy1hbWJlci00MDAgdGV4dC1zbGF0ZS05NTAgZm9udC1ibGFjayB0ZXh0LXhzIG1vbm8iPk5PVkEgR1JPVVAgMjwvc3Bhbj4KICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0idGV4dC1iYXNlIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgbXQtMS41Ij5Qcm9jZXNzZWQgQ3VsaW5hcnkgSW5ncmVkaWVudHM8L2gzPgogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHQteHMgdGV4dC1zbGF0ZS0zMDAgbXQtMSBsZWFkaW5nLXJlbGF4ZWQiPgogICAgICAgICAgICAgICAgICBTdWJzdGFuY2VzIG9idGFpbmVkIGRpcmVjdGx5IGZyb20gR3JvdXAgMSBmb29kcyBvciBmcm9tIG5hdHVyZSBieSBwcmVzc2luZywgcmVmaW5pbmcsIGdyaW5kaW5nLCBtaWxsaW5nLCBvciBkcnlpbmcgdG8gcHJlcGFyZSwgc2Vhc29uLCBhbmQgY29vayBHcm91cCAxIG1lYWxzLgogICAgICAgICAgICAgICAgPC9wPgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImJnLWFtYmVyLTk1MC8zMCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCByb3VuZGVkLXhsIHAtMi41IHRleHQteHMiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9udC1ib2xkIHRleHQtYW1iZXItMzAwIj5MYWJlbCBEZXRlY3RpdmUgUnVsZTo8L2Rpdj4KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0LXNsYXRlLTMwMCBtdC0wLjUiPkluY2x1ZGVzIDxzdHJvbmc+b2xpdmUgJmFtcDsgc2VlZCBvaWxzLCB1bnNhbHRlZCBidXR0ZXIsIHNlYSBzYWx0LCBjYW5lIHN1Z2FyLCBwdXJlIGhvbmV5LCBhbmQgY3VsaW5hcnkgdmluZWdhcnM8L3N0cm9uZz4uPC9wPgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXYgY2xhc3M9ImJnLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLW9yYW5nZS01MDAvNDAgcm91bmRlZC0yeGwgb3ZlcmZsb3ctaGlkZGVuIGZsZXggZmxleC1jb2wiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJncmlkIGdyaWQtY29scy0yIGdhcC0xIGgtNDggYmctc2xhdGUtOTAwIj4KICAgICAgICAgICAgICA8aW1nIHNyYz0iaW1hZ2VzL25vdmEzX2JyZWFkX2NoZWVzZV9jaGlja3BlYXNfY2FzaGV3cy5qcGciIGFsdD0iTk9WQSAzIEJyZWFkIENoZWVzZSBDaGlja3BlYXMiIGNsYXNzPSJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciIgLz4KICAgICAgICAgICAgICA8aW1nIHNyYz0iaW1hZ2VzL25vdmEzX3NhcmRpbmVzX3BlYWNoZXMuanBnIiBhbHQ9Ik5PVkEgMyBUaW5uZWQgU2FyZGluZXMgYW5kIFBlYWNoZXMiIGNsYXNzPSJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciIgLz4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InAtNCBmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS0yIj4KICAgICAgICAgICAgICA8ZGl2PgogICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InB4LTIuNSBweS0wLjUgcm91bmRlZCBiZy1vcmFuZ2UtNTAwIHRleHQtc2xhdGUtOTUwIGZvbnQtYmxhY2sgdGV4dC14cyBtb25vIj5OT1ZBIEdST1VQIDM8L3NwYW4+CiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9InRleHQtYmFzZSBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIG10LTEuNSI+UHJvY2Vzc2VkIEZvb2RzPC9oMz4KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIG10LTEgbGVhZGluZy1yZWxheGVkIj4KICAgICAgICAgICAgICAgICAgTWFudWZhY3R1cmVkIGJ5IGFkZGluZyBHcm91cCAyIGN1bGluYXJ5IGluZ3JlZGllbnRzIChzYWx0LCBzdWdhciwgb2lsLCB2aW5lZ2FyKSB0byBHcm91cCAxIHdob2xlIGZvb2RzIHZpYSBjYW5uaW5nLCBib3R0bGluZywgY3VyaW5nLCBmZXJtZW50YXRpb24sIG9yIGJha2luZy4KICAgICAgICAgICAgICAgIDwvcD4KICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJiZy1vcmFuZ2UtOTUwLzMwIGJvcmRlciBib3JkZXItb3JhbmdlLTUwMC8zMCByb3VuZGVkLXhsIHAtMi41IHRleHQteHMiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9udC1ib2xkIHRleHQtb3JhbmdlLTMwMCI+TGFiZWwgRGV0ZWN0aXZlIFJ1bGU6PC9kaXY+CiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dC1zbGF0ZS0zMDAgbXQtMC41Ij5Gb3JtdWxhID0gPHN0cm9uZz5Hcm91cCAxIEZvb2QgKyBHcm91cCAyIEluZ3JlZGllbnQ8L3N0cm9uZz4gKDLigJM0IGtpdGNoZW4tcmVjb2duaXphYmxlIGluZ3JlZGllbnRzLCB6ZXJvIGVtdWxzaWZpZXJzIG9yIGFydGlmaWNpYWwgZmxhdm9ycykuPC9wPgogICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgoKICAgICAgICAgIDxkaXYgY2xhc3M9ImJnLXNsYXRlLTk1MCBib3JkZXIgYm9yZGVyLXJvc2UtNTAwLzQwIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZ3JpZCBncmlkLWNvbHMtMiBnYXAtMSBoLTQ4IGJnLXNsYXRlLTkwMCI+CiAgICAgICAgICAgICAgPGltZyBzcmM9ImltYWdlcy9ub3ZhNF9jb2xhX2NoaXBzX2NlcmVhbF9iYXIuanBnIiBhbHQ9Ik5PVkEgNCBTb2RhIENoaXBzIENlcmVhbCBCYXIiIGNsYXNzPSJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciIgLz4KICAgICAgICAgICAgICA8aW1nIHNyYz0iaW1hZ2VzL25vdmE0X3NsaWNlZF9icmVhZF9mbGF2b3JlZF95b2d1cnQuanBnIiBhbHQ9Ik5PVkEgNCBQYWNrYWdlZCBCcmVhZCBhbmQgRmxhdm9yZWQgWW9ndXJ0IiBjbGFzcz0idy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIiIC8+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJwLTQgZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXktMiI+CiAgICAgICAgICAgICAgPGRpdj4KICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJweC0yLjUgcHktMC41IHJvdW5kZWQgYmctcm9zZS01MDAgdGV4dC13aGl0ZSBmb250LWJsYWNrIHRleHQteHMgbW9ubyI+Tk9WQSBHUk9VUCA0PC9zcGFuPgogICAgICAgICAgICAgICAgPGgzIGNsYXNzPSJ0ZXh0LWJhc2UgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtdC0xLjUiPlVsdHJhLVByb2Nlc3NlZCBGb29kICZhbXA7IERyaW5rIFByb2R1Y3RzIChVUEZzKTwvaDM+CiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBtdC0xIGxlYWRpbmctcmVsYXhlZCI+CiAgICAgICAgICAgICAgICAgIEluZHVzdHJpYWwgZm9ybXVsYXRpb25zIG1hZGUgZnJvbSBleHRyYWN0ZWQgZm9vZCBzdWJzdGFuY2VzIChwcm90ZWluIGlzb2xhdGVzLCBtb2RpZmllZCBzdGFyY2hlcywgaHlkcm9nZW5hdGVkIG9pbHMsIEhGQ1MpIGFuZCBjb3NtZXRpYyBhZGRpdGl2ZXMuCiAgICAgICAgICAgICAgICA8L3A+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iYmctcm9zZS05NTAvMzAgYm9yZGVyIGJvcmRlci1yb3NlLTUwMC8zMCByb3VuZGVkLXhsIHAtMi41IHRleHQteHMiPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9udC1ib2xkIHRleHQtcm9zZS0zMDAiPkxhYmVsIERldGVjdGl2ZSBSdWxlOjwvZGl2PgogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHQtc2xhdGUtMzAwIG10LTAuNSI+U3BvdCBhdCBsZWFzdCBvbmUgPHN0cm9uZz5ub24ta2l0Y2hlbiBtYXJrZXI8L3N0cm9uZz46IGVtdWxzaWZpZXJzIChzb3kgbGVjaXRoaW4sIG1vbm8tL2RpZ2x5Y2VyaWRlcywgREFURU0pLCBhcnRpZmljaWFsIGZsYXZvcnMsIHN5bnRoZXRpYyBkeWVzLCBNU0csIG9yIHN1Y3JhbG9zZS48L3A+CiAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZGl2PgogICAgPC9zZWN0aW9uPgoKICAgIDwhLS0gPT09PT09PT09PT09PT09PT09PT0gVklFVyAzOiAyNC1JVEVNIFBBTlRSWSBERVggPT09PT09PT09PT09PT09PT09PT0gLS0+CiAgICA8c2VjdGlvbiBpZD0idmlld0RleCIgY2xhc3M9ImhpZGRlbiBzcGFjZS15LTQiPgogICAgICA8ZGl2IGNsYXNzPSJiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgcm91bmRlZC0yeGwgcC00IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMiPgogICAgICAgIDxkaXY+CiAgICAgICAgICA8aDIgY2xhc3M9InRleHQtbGcgZm9udC1ibGFjayB0ZXh0LXdoaXRlIj5QYW50cnkgU3BlY2ltZW4gRGV4ICgyNCBBdXRoZW50aWNhdGVkIFByb2R1Y3RzIHdpdGggUGhvdG9zKTwvaDI+CiAgICAgICAgICA8cCBjbGFzcz0idGV4dC14cyB0ZXh0LXNsYXRlLTQwMCI+RmlsdGVyIGJ5IE5PVkEgZ3JvdXAgb3Igc2VhcmNoIGluZ3JlZGllbnRzLiBDbGljayBhbnkgc3BlY2ltZW4gdG8gbG9hZCBpdHMgcGhvdG8gYW5kIGxhYmVsIG9udG8gdGhlIHNjYW5uZXIgd29ya2JlbmNoLjwvcD4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTIiPgogICAgICAgICAgPGRpdiBjbGFzcz0iaW5saW5lLWZsZXggcm91bmRlZC14bCBiZy1zbGF0ZS05NTAgcC0xIGJvcmRlciBib3JkZXItc2xhdGUtODAwIj4KICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGRhdGEtZGV4LWZpbHRlcj0iYWxsIiBjbGFzcz0iZGV4LWZpbHRlci1idG4gcHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBiZy1lbWVyYWxkLTUwMCB0ZXh0LXNsYXRlLTk1MCI+QWxsICgyNCk8L2J1dHRvbj4KICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGRhdGEtZGV4LWZpbHRlcj0iMSIgY2xhc3M9ImRleC1maWx0ZXItYnRuIHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGUiPk5PVkEgMTwvYnV0dG9uPgogICAgICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgZGF0YS1kZXgtZmlsdGVyPSIyIiBjbGFzcz0iZGV4LWZpbHRlci1idG4gcHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSI+Tk9WQSAyPC9idXR0b24+CiAgICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBkYXRhLWRleC1maWx0ZXI9IjMiIGNsYXNzPSJkZXgtZmlsdGVyLWJ0biBweC0yLjUgcHktMSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIj5OT1ZBIDM8L2J1dHRvbj4KICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGRhdGEtZGV4LWZpbHRlcj0iNCIgY2xhc3M9ImRleC1maWx0ZXItYnRuIHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtd2hpdGUiPk5PVkEgNDwvYnV0dG9uPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8aW5wdXQgaWQ9ImRleFNlYXJjaElucHV0IiB0eXBlPSJzZWFyY2giIHBsYWNlaG9sZGVyPSJTZWFyY2ggZm9vZCBvciBpbmdyZWRpZW50Li4uIiBjbGFzcz0icHgtMyBweS0xLjUgcm91bmRlZC14bCBiZy1zbGF0ZS05NTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC14cyB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyLXNsYXRlLTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWVtZXJhbGQtNTAwIiAvPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgaWQ9ImRleEdyaWRDb250YWluZXIiIGNsYXNzPSJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC0zIj48L2Rpdj4KICAgIDwvc2VjdGlvbj4KCiAgICA8IS0tID09PT09PT09PT09PT09PT09PT09IFZJRVcgNDogR0lUSFVCIFJFUE9TSVRPUlkgRklMRVMgKEhUTUwgLyBDU1MgLyBKUykgPT09PT09PT09PT09PT09PT09PT0gLS0+CiAgICA8c2VjdGlvbiBpZD0idmlld0dpdGh1YiIgY2xhc3M9ImhpZGRlbiBzcGFjZS15LTQiPgogICAgICA8ZGl2IGNsYXNzPSJiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgcm91bmRlZC0yeGwgcC01IHNwYWNlLXktNCI+CiAgICAgICAgPGRpdiBjbGFzcz0iZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIHBiLTQiPgogICAgICAgICAgPGRpdj4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9InRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgdGV4dC1lbWVyYWxkLTQwMCI+R2l0SHViIFBhZ2VzIFJlYWR5IEFyY2hpdGVjdHVyZTwvc3Bhbj4KICAgICAgICAgICAgPGgyIGNsYXNzPSJ0ZXh0LXhsIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSBtdC0wLjUiPlNlcGFyYXRlZCBSZXBvc2l0b3J5IEZpbGVzIChgaW5kZXguaHRtbGAsIGBzdHlsZS5jc3NgLCBgc2NyaXB0LmpzYCk8L2gyPgogICAgICAgICAgICA8cCBjbGFzcz0idGV4dC14cyB0ZXh0LXNsYXRlLTMwMCBtdC0xIj4KICAgICAgICAgICAgICBVc2UgdGhlIGRvd25sb2FkYWJsZSA8Y29kZSBjbGFzcz0idGV4dC1lbWVyYWxkLTMwMCBtb25vIj5ub3ZhX3Nwb3R0ZXJfZ2l0aHViLnppcDwvY29kZT4gYXJjaGl2ZSAod2hpY2ggaW5jbHVkZXMgPGNvZGUgY2xhc3M9Im1vbm8iPmluZGV4Lmh0bWw8L2NvZGU+LCA8Y29kZSBjbGFzcz0ibW9ubyI+c3R5bGUuY3NzPC9jb2RlPiwgPGNvZGUgY2xhc3M9Im1vbm8iPnNjcmlwdC5qczwvY29kZT4sIDxjb2RlIGNsYXNzPSJtb25vIj5SRUFETUUubWQ8L2NvZGU+LCBhbmQgdGhlIDxjb2RlIGNsYXNzPSJtb25vIj5pbWFnZXMvPC9jb2RlPiBmb2xkZXIpIG9yIGNvcHkvZG93bmxvYWQgaW5kaXZpZHVhbCBzb3VyY2UgZmlsZXMgYmVsb3cuCiAgICAgICAgICAgIDwvcD4KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yIj4KICAgICAgICAgICAgPGJ1dHRvbiBpZD0iY29weVNvdXJjZUJ0biIgdHlwZT0iYnV0dG9uIiBjbGFzcz0icHgtMy41IHB5LTIgcm91bmRlZC14bCBiZy1lbWVyYWxkLTUwMCBob3ZlcjpiZy1lbWVyYWxkLTQwMCB0ZXh0LXNsYXRlLTk1MCBmb250LWJsYWNrIHRleHQteHMgdHJhbnNpdGlvbiI+CiAgICAgICAgICAgICAg8J+TiyBDb3B5IEN1cnJlbnQgRmlsZQogICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgPGJ1dHRvbiBpZD0iZG93bmxvYWRTb3VyY2VCdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB4LTMuNSBweS0yIHJvdW5kZWQteGwgYmctc2xhdGUtODAwIGhvdmVyOmJnLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhzIGJvcmRlciBib3JkZXItc2xhdGUtNzAwIHRyYW5zaXRpb24iPgogICAgICAgICAgICAgIOKshyBEb3dubG9hZCBGaWxlCiAgICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9ImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMiI+CiAgICAgICAgICA8YnV0dG9uIHR5cGU9ImJ1dHRvbiIgZGF0YS1jb2RlLWZpbGU9ImluZGV4Lmh0bWwiIGNsYXNzPSJjb2RlLWZpbGUtdGFiIHB4LTMgcHktMS41IHJvdW5kZWQteGwgdGV4dC14cyBmb250LWJvbGQgYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIG1vbm8iPgogICAgICAgICAgICBpbmRleC5odG1sCiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBkYXRhLWNvZGUtZmlsZT0ic3R5bGUuY3NzIiBjbGFzcz0iY29kZS1maWxlLXRhYiBweC0zIHB5LTEuNSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBtb25vIj4KICAgICAgICAgICAgc3R5bGUuY3NzCiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBkYXRhLWNvZGUtZmlsZT0ic2NyaXB0LmpzIiBjbGFzcz0iY29kZS1maWxlLXRhYiBweC0zIHB5LTEuNSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBtb25vIj4KICAgICAgICAgICAgc2NyaXB0LmpzCiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgIDxidXR0b24gdHlwZT0iYnV0dG9uIiBkYXRhLWNvZGUtZmlsZT0iUkVBRE1FLm1kIiBjbGFzcz0iY29kZS1maWxlLXRhYiBweC0zIHB5LTEuNSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1zZW1pYm9sZCBiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0zMDAgaG92ZXI6dGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBtb25vIj4KICAgICAgICAgICAgUkVBRE1FLm1kCiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICA8L2Rpdj4KCiAgICAgICAgPHByZSBpZD0iZ2l0aHViQ29kZVByZSIgY2xhc3M9ImNvZGUtdmlld2VyLXByZSBjdXN0b20tc2Nyb2xsYmFyIG1vbm8iPjwvcHJlPgogICAgICA8L2Rpdj4KICAgIDwvc2VjdGlvbj4KCiAgPC9tYWluPgoKICA8IS0tIFJPVU5EIFNVTU1BUlkgLyBHQU1FIE9WRVIgTU9EQUwgLS0+CiAgPGRpdiBpZD0ic3VtbWFyeU1vZGFsIiBjbGFzcz0iaGlkZGVuIGZpeGVkIGluc2V0LTAgei01MCBiZy1zbGF0ZS05NTAvODUgYmFja2Ryb3AtYmx1ci1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQiPgogICAgPGRpdiBjbGFzcz0iYmctc2xhdGUtOTAwIGJvcmRlci0yIGJvcmRlci1zbGF0ZS03MDAgcm91bmRlZC0zeGwgbWF4LXctbGcgdy1mdWxsIHAtNiBzaGFkb3ctMnhsIHNwYWNlLXktNCB0ZXh0LWNlbnRlciI+CiAgICAgIDxkaXYgaWQ9Im1vZGFsQmFkZ2UiIGNsYXNzPSJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBiZy1lbWVyYWxkLTUwMC8yMCB0ZXh0LWVtZXJhbGQtMzAwIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvNDAiPgogICAgICAgIFNoaWZ0IENvbXBsZXRlCiAgICAgIDwvZGl2PgogICAgICA8aDIgaWQ9Im1vZGFsVGl0bGUiIGNsYXNzPSJ0ZXh0LTJ4bCBmb250LWJsYWNrIHRleHQtd2hpdGUiPkluc3BlY3RvciBDZXJ0aWZpY2F0aW9uIFJlcG9ydDwvaDI+CiAgICAgIDxwIGlkPSJtb2RhbFN1YnRpdGxlIiBjbGFzcz0idGV4dC14cyBzbTp0ZXh0LXNtIHRleHQtc2xhdGUtMzAwIj48L3A+CgogICAgICA8ZGl2IGNsYXNzPSJncmlkIGdyaWQtY29scy0zIGdhcC0yLjUgYmctc2xhdGUtOTUwIHAtMy41IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtODAwIj4KICAgICAgICA8ZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1bMTBweF0gdXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTQwMCI+RmluYWwgU2NvcmU8L2Rpdj4KICAgICAgICAgIDxkaXYgaWQ9Im1vZGFsU2NvcmUiIGNsYXNzPSJ0ZXh0LXhsIGZvbnQtYmxhY2sgdGV4dC1lbWVyYWxkLTQwMCBtb25vIj4wPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iYm9yZGVyLXggYm9yZGVyLXNsYXRlLTgwMCI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtc2xhdGUtNDAwIj5BY2N1cmFjeTwvZGl2PgogICAgICAgICAgPGRpdiBpZD0ibW9kYWxBY2N1cmFjeSIgY2xhc3M9InRleHQteGwgZm9udC1ibGFjayB0ZXh0LWFtYmVyLTQwMCBtb25vIj4wJTwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtc2xhdGUtNDAwIj5CZXN0IFN0cmVhazwvZGl2PgogICAgICAgICAgPGRpdiBpZD0ibW9kYWxCZXN0U3RyZWFrIiBjbGFzcz0idGV4dC14bCBmb250LWJsYWNrIHRleHQtc2t5LTQwMCBtb25vIj4weDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9InRleHQtbGVmdCI+CiAgICAgICAgPGRpdiBjbGFzcz0idGV4dC1bMTFweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTQwMCBtYi0xLjUiPlNwZWNpbWVucyBJbnNwZWN0ZWQgVGhpcyBTaGlmdDo8L2Rpdj4KICAgICAgICA8ZGl2IGlkPSJtb2RhbEhpc3RvcnlMaXN0IiBjbGFzcz0ibWF4LWgtNDQgb3ZlcmZsb3cteS1hdXRvIGN1c3RvbS1zY3JvbGxiYXIgc3BhY2UteS0xLjUgcHItMSI+PC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yLjUgcHQtMiI+CiAgICAgICAgPGJ1dHRvbiBpZD0ibW9kYWxQbGF5QWdhaW5CdG4iIHR5cGU9ImJ1dHRvbiIgY2xhc3M9InB4LTUgcHktMi41IHJvdW5kZWQteGwgYmctZW1lcmFsZC01MDAgaG92ZXI6YmctZW1lcmFsZC00MDAgdGV4dC1zbGF0ZS05NTAgZm9udC1ibGFjayB0ZXh0LXhzIHNtOnRleHQtc20gdHJhbnNpdGlvbiBzaGFkb3ctbGciPgogICAgICAgICAgUGxheSBOZXcgU2hpZnQKICAgICAgICA8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGlkPSJtb2RhbFJldmlld0d1aWRlQnRuIiB0eXBlPSJidXR0b24iIGNsYXNzPSJweC00IHB5LTIuNSByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0yMDAgZm9udC1ib2xkIHRleHQteHMgc206dGV4dC1zbSB0cmFuc2l0aW9uIj4KICAgICAgICAgIE9wZW4gTk9WQSBGaWVsZCBHdWlkZQogICAgICAgIDwvYnV0dG9uPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvZGl2PgoKICA8c2NyaXB0IHNyYz0ic2NyaXB0LmpzIj48L3NjcmlwdD4KPC9ib2R5Pgo8L2h0bWw+Cg==',
  'style.css': 'LyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgU3BvdCB0aGUgTk9WQSBHcm91cCDigJQgU3RhbmRhbG9uZSBTdHlsZXNoZWV0IChzdHlsZS5jc3MpCiAgIFJlYWR5IGZvciBHaXRIdWIgUGFnZXMgLyBTdGF0aWMgV2ViIEhvc3RpbmcKICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KCjpyb290IHsKICAtLW5vdmEtMTogIzEwYjk4MTsKICAtLW5vdmEtMjogI2Y1OWUwYjsKICAtLW5vdmEtMzogI2Y5NzMxNjsKICAtLW5vdmEtNDogI2VmNDQ0NDsKICAtLWJnLWRlZXA6ICMwNTA4MTE7CiAgLS1iZy1wYW5lbDogIzBmMTcyYTsKICAtLWJnLWNhcmQ6ICMwMjA2MTc7CiAgLS1ib3JkZXItbXV0ZWQ6ICMxZTI5M2I7CiAgLS10ZXh0LW1haW46ICNmOGZhZmM7CiAgLS10ZXh0LWRpbTogIzk0YTNiODsKfQoKKiB7CiAgYm94LXNpemluZzogYm9yZGVyLWJveDsKfQoKaHRtbCwgYm9keSB7CiAgbWFyZ2luOiAwOwogIHBhZGRpbmc6IDA7CiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmOwogIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTUlIDE1JSwgIzBmMTcyYSAwJSwgIzA5MGQxNiA2MCUsICMwNTA4MTEgMTAwJSk7CiAgY29sb3I6IHZhcigtLXRleHQtbWFpbik7CiAgbWluLWhlaWdodDogMTAwdmg7CiAgb3ZlcmZsb3cteDogaGlkZGVuOwp9CgoubW9ubyB7CiAgZm9udC1mYW1pbHk6ICdKZXRCcmFpbnMgTW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBtb25vc3BhY2U7Cn0KCi8qIE51dHJpdGlvbiAmIEJhY2stb2YtUGFjayBMYWJlbCBTdHlsaW5nICovCi5udXRyaXRpb24tY2FyZCB7CiAgYmFja2dyb3VuZDogI2ZmZmRmOTsKICBjb2xvcjogIzExMTgyNzsKICBib3JkZXI6IDNweCBzb2xpZCAjMTExODI3OwogIGJveC1zaGFkb3c6IDZweCA2cHggMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC43NSk7Cn0KCi8qIE5PVkEgR3JvdXAgQ2xhc3NpZmljYXRpb24gQnV0dG9ucyAqLwoubm92YS1idG4gewogIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE0cyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSksCiAgICAgICAgICAgICAgYm94LXNoYWRvdyAwLjE0cyBlYXNlLAogICAgICAgICAgICAgIGJvcmRlci1jb2xvciAwLjE0cyBlYXNlLAogICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4xNHMgZWFzZTsKICBjdXJzb3I6IHBvaW50ZXI7Cn0KCi5ub3ZhLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpOwogIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjUpOwp9Cgoubm92YS1idG46YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTsKfQoKLm5vdmEtYnRuOmRpc2FibGVkIHsKICBvcGFjaXR5OiAwLjY1OwogIGN1cnNvcjogbm90LWFsbG93ZWQ7Cn0KCi8qIEludGVyYWN0aXZlIEluZ3JlZGllbnQgQ2hpcHMgKi8KLmluZ3JlZGllbnQtY2hpcCB7CiAgdHJhbnNpdGlvbjogYWxsIDAuMThzIGVhc2U7CiAgY3Vyc29yOiBwb2ludGVyOwp9CgouaW5ncmVkaWVudC1jaGlwOmhvdmVyIHsKICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7Cn0KCi8qIFByb2R1Y3QgUGhvdG8gU2hvd2Nhc2UgRnJhbWUgKi8KLnNwZWNpbWVuLXBob3RvLWZyYW1lIHsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBib3JkZXItcmFkaXVzOiAwLjg1cmVtOwogIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTEsIDY1LCA4NSwgMC45KTsKICBiYWNrZ3JvdW5kOiAjMDIwNjE3OwogIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNHB4IHJnYmEoMCwgMCwgMCwgMC42NSk7Cn0KCi5zcGVjaW1lbi1waG90by1pbWcgewogIHdpZHRoOiAxMDAlOwogIGhlaWdodDogMTAwJTsKICBvYmplY3QtZml0OiBjb3ZlcjsKICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40NXMgY3ViaWMtYmV6aWVyKDAuMjIsIDEsIDAuMzYsIDEpLCBmaWx0ZXIgMC4zcyBlYXNlOwp9Cgouc3BlY2ltZW4tcGhvdG8taW1nLnJlZGFjdGVkLWJsdXIgewogIGZpbHRlcjogYmx1cigyMnB4KSBicmlnaHRuZXNzKDAuMzUpIGdyYXlzY2FsZSgwLjYpOwogIHRyYW5zZm9ybTogc2NhbGUoMS4xMik7Cn0KCi8qIEN1c3RvbSBTY3JvbGxiYXIgKi8KLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsKICB3aWR0aDogNnB4OwogIGhlaWdodDogNnB4Owp9CgouY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgewogIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC41KTsKfQoKLmN1c3RvbS1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsKICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTE2LCAxMzksIDAuNik7CiAgYm9yZGVyLXJhZGl1czogOTk5OXB4Owp9CgovKiBOZXh0IFNwZWNpbWVuIFB1bHNlIEFuaW1hdGlvbiAqLwpAa2V5ZnJhbWVzIHB1bHNlR2xvdyB7CiAgMCUsIDEwMCUgewogICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDE2LCAxODUsIDEyOSwgMC40NSk7CiAgfQogIDUwJSB7CiAgICBib3gtc2hhZG93OiAwIDAgMCA4cHggcmdiYSgxNiwgMTg1LCAxMjksIDApOwogIH0KfQoKLnB1bHNlLW5leHQgewogIGFuaW1hdGlvbjogcHVsc2VHbG93IDEuOHMgaW5maW5pdGU7Cn0KCi8qIENvZGUgVmlld2VyIEJsb2NrIGZvciBHaXRIdWIgRXhwb3J0IFRhYiAqLwouY29kZS12aWV3ZXItcHJlIHsKICBiYWNrZ3JvdW5kOiAjMDIwNjE3OwogIGNvbG9yOiAjZTJlOGYwOwogIGJvcmRlcjogMXB4IHNvbGlkICMxZTI5M2I7CiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTsKICBwYWRkaW5nOiAxcmVtOwogIGZvbnQtc2l6ZTogMC43NXJlbTsKICBsaW5lLWhlaWdodDogMS41NTsKICBvdmVyZmxvdy14OiBhdXRvOwogIG1heC1oZWlnaHQ6IDQ0MHB4Owp9Cg==',
  'script.js': 'Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQovLyBTcG90IHRoZSBOT1ZBIEdyb3VwIOKAlCBTdGFuZGFsb25lIEdhbWUgRW5naW5lIChzY3JpcHQuanMpCi8vIEdyb3VuZGVkIGluIEZBTyAmIE9wZW4gRm9vZCBGYWN0cyBOT1ZBIEZvb2QgQ2xhc3NpZmljYXRpb24gKEdyb3VwcyAx4oCTNCkKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKY29uc3QgUEhPVE9fQVNTRVRTID0gewogIG5vdmExX3dob2xlOiAnaW1hZ2VzL25vdmExX3dob2xlX2Zvb2RzLmpwZycsCiAgbm92YTFfeW9ndXJ0OiAnaW1hZ2VzL25vdmExX2dyZWVrX3lvZ3VydC5qcGcnLAogIG5vdmExX2xlbnRpbHM6ICdpbWFnZXMvbm92YTFfbGVudGlsc19hbG1vbmRzX3NwaW5hY2guanBnJywKICBub3ZhMl9vaWxzOiAnaW1hZ2VzL25vdmEyX29pbF9idXR0ZXJfc2FsdF9ob25leS5qcGcnLAogIG5vdmEyX3ZpbmVnYXI6ICdpbWFnZXMvbm92YTJfdmluZWdhcl9zdWdhci5qcGcnLAogIG5vdmEzX2FydGlzYW46ICdpbWFnZXMvbm92YTNfYnJlYWRfY2hlZXNlX2NoaWNrcGVhc19jYXNoZXdzLmpwZycsCiAgbm92YTNfdGlubmVkOiAnaW1hZ2VzL25vdmEzX3NhcmRpbmVzX3BlYWNoZXMuanBnJywKICBub3ZhNF9zbmFja3M6ICdpbWFnZXMvbm92YTRfY29sYV9jaGlwc19jZXJlYWxfYmFyLmpwZycsCiAgbm92YTRfc3VwZXJtYXJrZXQ6ICdpbWFnZXMvbm92YTRfc2xpY2VkX2JyZWFkX2ZsYXZvcmVkX3lvZ3VydC5qcGcnLAogIG5vdmE0X2Nhbl9jaGlwczogJ2ltYWdlcy9ub3ZhNF9zb2RhX2Nhbl9uYWNob19jaGlwcy5qcGcnCn07Cgpjb25zdCBHUk9VUF9QSE9UT1MgPSB7CiAgMTogUEhPVE9fQVNTRVRTLm5vdmExX3dob2xlLAogIDI6IFBIT1RPX0FTU0VUUy5ub3ZhMl9vaWxzLAogIDM6IFBIT1RPX0FTU0VUUy5ub3ZhM19hcnRpc2FuLAogIDQ6IFBIT1RPX0FTU0VUUy5ub3ZhNF9zbmFja3MKfTsKCmNvbnN0IE5PVkFfR1JPVVBfTUVUQSA9IHsKICAxOiB7CiAgICBuYW1lOiAnVW5wcm9jZXNzZWQgb3IgTWluaW1hbGx5IFByb2Nlc3NlZCBGb29kcycsCiAgICBzaG9ydDogJ05PVkEgMSDigKIgV2hvbGUgLyBNaW5pbWFsbHkgUHJvY2Vzc2VkJywKICAgIGNvbG9yOiAnIzEwYjk4MScsCiAgICBiYWRnZUNsYXNzOiAnYmctZW1lcmFsZC01MDAgdGV4dC1zbGF0ZS05NTAnCiAgfSwKICAyOiB7CiAgICBuYW1lOiAnUHJvY2Vzc2VkIEN1bGluYXJ5IEluZ3JlZGllbnRzJywKICAgIHNob3J0OiAnTk9WQSAyIOKAoiBDdWxpbmFyeSBJbmdyZWRpZW50JywKICAgIGNvbG9yOiAnI2Y1OWUwYicsCiAgICBiYWRnZUNsYXNzOiAnYmctYW1iZXItNDAwIHRleHQtc2xhdGUtOTUwJwogIH0sCiAgMzogewogICAgbmFtZTogJ1Byb2Nlc3NlZCBGb29kcycsCiAgICBzaG9ydDogJ05PVkEgMyDigKIgUHJvY2Vzc2VkIEZvb2QnLAogICAgY29sb3I6ICcjZjk3MzE2JywKICAgIGJhZGdlQ2xhc3M6ICdiZy1vcmFuZ2UtNTAwIHRleHQtc2xhdGUtOTUwJwogIH0sCiAgNDogewogICAgbmFtZTogJ1VsdHJhLVByb2Nlc3NlZCBGb29kICYgRHJpbmsgUHJvZHVjdHMnLAogICAgc2hvcnQ6ICdOT1ZBIDQg4oCiIFVsdHJhLVByb2Nlc3NlZCAoVVBGKScsCiAgICBjb2xvcjogJyNlZjQ0NDQnLAogICAgYmFkZ2VDbGFzczogJ2JnLXJvc2UtNTAwIHRleHQtd2hpdGUnCiAgfQp9OwoKLy8gMjQgQXV0aGVudGljYXRlZCBGb29kIFNwZWNpbWVucyB3aXRoIFJlYWwgU3R1ZGlvIFBob3RvZ3JhcGh5ICYgQ3JvcCBSZWdpb25zCmNvbnN0IFNQRUNJTUVOUyA9IFsKICAvLyAtLS0tLS0tLS0tLS0tLS0tIE5PVkEgR1JPVVAgMSAtLS0tLS0tLS0tLS0tLS0tCiAgewogICAgaWQ6ICdyb2xsZWQtb2F0cycsCiAgICBuYW1lOiAnMTAwJSBXaG9sZSBHcmFpbiBSb2xsZWQgT2F0cycsCiAgICBjYXRlZ29yeTogJ0dyYWlucyAmIENlcmVhbHMnLAogICAgYWlzbGU6ICdCcmVha2Zhc3QgJiBHcmFpbnMnLAogICAgc2VydmluZzogJzQwZyBEcnkgQ3VwJywKICAgIHNoZWxmTGlmZTogJzEyIE1vbnRocyBEcnknLAogICAga2l0Y2hlblRlc3Q6ICdXaG9sZSBncmFpbiBzdGVhbWVkICYgcm9sbGVkJywKICAgIHByb2Nlc3NNZXRob2Q6ICdEZWh1c2tlZCwga2lsbi1zdGVhbWVkICYgZmxha2VkJywKICAgIG5vdmE6IDEsCiAgICBhcnRUeXBlOiAnb2F0cycsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmExX3dob2xlLAogICAgcGhvdG9Gb2N1czogJzcyJSA0OCUnLAogICAgcGhvdG9DYXB0aW9uOiAnQ2VyYW1pYyBib3dsIG9mIHBsYWluIHJvbGxlZCBvYXRzIChzdGVhbWVkICYgZmxha2VkIHdob2xlIGdyYWluKScsCiAgICBwcmltYXJ5Q29sb3I6ICcjZDk3NzA2JywKICAgIGFjY2VudENvbG9yOiAnI2ZlZjNjNycsCiAgICBwYWNrYWdlU3RhbXA6ICcxMDAlIFdIT0xFIEdSQUlOIOKAoiBOT1RISU5HIEFEREVEJywKICAgIGluZ3JlZGllbnRzOiBbCiAgICAgIHsgbmFtZTogJzEwMCUgV2hvbGUgR3JhaW4gUm9sbGVkIE9hdHMnLCByb2xlOiAnZzEnLCBub3RlOiAnV2hvbGUgY2VyZWFsIGdyYWluIGFsdGVyZWQgb25seSBieSBzdGVhbWluZyBhbmQgZmxha2luZy4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ1N0ZWFtaW5nLCByb2xsaW5nLCBvciBncmluZGluZyB3aG9sZSBncmFpbnMgd2l0aG91dCBhZGRpbmcgc3VnYXIsIHNhbHQsIG9pbCwgb3IgZmxhdm9yaW5ncyBrZWVwcyB0aGVtIHN0cmljdGx5IGluIE5PVkEgR3JvdXAgMS4nCiAgfSwKICB7CiAgICBpZDogJ2dyZWVrLXlvZ3VydCcsCiAgICBuYW1lOiAnUGxhaW4gQXV0aGVudGljIEdyZWVrIFlvZ3VydCcsCiAgICBjYXRlZ29yeTogJ0RhaXJ5ICYgQ3VsdHVyZWQnLAogICAgYWlzbGU6ICdDaGlsbGVkIERhaXJ5IENhc2UnLAogICAgc2VydmluZzogJzE3MGcgVHViJywKICAgIHNoZWxmTGlmZTogJzE0IERheXMgQ2hpbGxlZCcsCiAgICBraXRjaGVuVGVzdDogJ01pbGsgKyBiYWN0ZXJpYWwgZmVybWVudGF0aW9uJywKICAgIHByb2Nlc3NNZXRob2Q6ICdQYXN0ZXVyaXphdGlvbiAmIHN0cmFpbmVkIGZlcm1lbnRhdGlvbicsCiAgICBub3ZhOiAxLAogICAgYXJ0VHlwZTogJ3lvZ3VydF9wbGFpbicsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmExX3lvZ3VydCwKICAgIHBob3RvRm9jdXM6ICc1MCUgNTIlJywKICAgIHBob3RvQ2FwdGlvbjogJ1RoaWNrIHBsYWluIEdyZWVrIHlvZ3VydCBjdWx0dXJlZCBvbmx5IGZyb20gbWlsayBhbmQgbGl2ZSBiYWN0ZXJpYScsCiAgICBwcmltYXJ5Q29sb3I6ICcjMDI4NGM3JywKICAgIGFjY2VudENvbG9yOiAnI2UwZjJmZScsCiAgICBwYWNrYWdlU3RhbXA6ICdQTEFJTiDigKIgVU5TV0VFVEVORUQg4oCiIExJVkUgQ1VMVFVSRVMnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnUGFzdGV1cml6ZWQgQ293XCdzIE1pbGsnLCByb2xlOiAnZzEnLCBub3RlOiAnTWluaW1hbGx5IHByb2Nlc3NlZCB3aG9sZSBtaWxrLicgfSwKICAgICAgeyBuYW1lOiAnTGl2ZSAmIEFjdGl2ZSBZb2d1cnQgQ3VsdHVyZXMgKEwuIGJ1bGdhcmljdXMsIFMuIHRoZXJtb3BoaWx1cyknLCByb2xlOiAnZzEnLCBub3RlOiAnTm9uLWFsY29ob2xpYyBmZXJtZW50YXRpb24gY3VsdHVyZXMgYWxsb3dlZCBpbiBOT1ZBIDEuJyB9CiAgICBdLAogICAgZXhwbGFuYXRpb246ICdQbGFpbiB5b2d1cnQgbWFkZSBzb2xlbHkgZnJvbSBwYXN0ZXVyaXplZCBtaWxrIGFuZCBsaXZlIGZlcm1lbnRhdGlvbiBjdWx0dXJlc+KAlHdpdGggemVybyBhZGRlZCBzdWdhciwgdGhpY2tlbmVycywgb3IgZmxhdm9yc+KAlGlzIE5PVkEgR3JvdXAgMS4nCiAgfSwKICB7CiAgICBpZDogJ2Zyb3plbi1zcGluYWNoJywKICAgIG5hbWU6ICdGbGFzaC1Gcm96ZW4gT3JnYW5pYyBTcGluYWNoIEZsb3JldHMnLAogICAgY2F0ZWdvcnk6ICdQcm9kdWNlJywKICAgIGFpc2xlOiAnRnJlZXplciBDYXNlJywKICAgIHNlcnZpbmc6ICc4NWcgRmxvcmV0cycsCiAgICBzaGVsZkxpZmU6ICcxOCBNb250aHMgRnJvemVuJywKICAgIGtpdGNoZW5UZXN0OiAnV2FzaGVkICYgZnJvemVuIGxlYXZlcycsCiAgICBwcm9jZXNzTWV0aG9kOiAnV2FzaGluZywgYmxhbmNoaW5nICYgZmxhc2gtZnJlZXppbmcnLAogICAgbm92YTogMSwKICAgIGFydFR5cGU6ICdzcGluYWNoJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTFfbGVudGlscywKICAgIHBob3RvRm9jdXM6ICc4MiUgNDIlJywKICAgIHBob3RvQ2FwdGlvbjogJ1dob2xlIGdyZWVuIHNwaW5hY2ggbGVhdmVzIHByZXNlcnZlZCBwdXJlbHkgYnkgd2FzaGluZyBhbmQgZnJlZXppbmcnLAogICAgcHJpbWFyeUNvbG9yOiAnIzA1OTY2OScsCiAgICBhY2NlbnRDb2xvcjogJyNkMWZhZTUnLAogICAgcGFja2FnZVN0YW1wOiAnRkxBU0ggRlJPWkVOIOKAoiBOTyBTQUxUIE9SIFNBVUNFJywKICAgIGluZ3JlZGllbnRzOiBbCiAgICAgIHsgbmFtZTogJ09yZ2FuaWMgV2hvbGUgTGVhZiBTcGluYWNoJywgcm9sZTogJ2cxJywgbm90ZTogJ1dob2xlIHZlZ2V0YWJsZSBwcmVzZXJ2ZWQgcHVyZWx5IGJ5IGZyZWV6aW5nLicgfQogICAgXSwKICAgIGV4cGxhbmF0aW9uOiAnRnJlZXppbmcgdmVnZXRhYmxlcyBvciBmcnVpdHMgd2l0aG91dCBhZGRpbmcgc2FsdCwgYnV0dGVyIHNhdWNlcywgb3IgY2hlbWljYWwgYWRkaXRpdmVzIHByZXNlcnZlcyB0aGVtIGFzIE5PVkEgR3JvdXAgMS4nCiAgfSwKICB7CiAgICBpZDogJ3Jhdy1hbG1vbmRzJywKICAgIG5hbWU6ICdSYXcgVW5zYWx0ZWQgV2hvbGUgQWxtb25kcycsCiAgICBjYXRlZ29yeTogJ051dHMgJiBTZWVkcycsCiAgICBhaXNsZTogJ0Jha2luZyAmIFJhdyBOdXRzJywKICAgIHNlcnZpbmc6ICcyOGcgSGFuZGZ1bCcsCiAgICBzaGVsZkxpZmU6ICc5IE1vbnRocyBTZWFsZWQnLAogICAga2l0Y2hlblRlc3Q6ICdTaGVsbGVkIHJhdyB0cmVlIG51dHMnLAogICAgcHJvY2Vzc01ldGhvZDogJ0h1bGxpbmcsIHNoZWxsaW5nICYgZHJ5aW5nJywKICAgIG5vdmE6IDEsCiAgICBhcnRUeXBlOiAnYWxtb25kcycsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmExX2xlbnRpbHMsCiAgICBwaG90b0ZvY3VzOiAnNjglIDc4JScsCiAgICBwaG90b0NhcHRpb246ICdSYXcgdW5zYWx0ZWQgd2hvbGUgYWxtb25kcyB3aXRob3V0IG9pbCByb2FzdGluZyBvciBmbGF2b3IgZHVzdCcsCiAgICBwcmltYXJ5Q29sb3I6ICcjOTI0MDBlJywKICAgIGFjY2VudENvbG9yOiAnI2ZkZTY4YScsCiAgICBwYWNrYWdlU3RhbXA6ICdSQVcg4oCiIFVOUk9BU1RFRCDigKIgVU5TQUxURUQnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnUmF3IFdob2xlIEFsbW9uZHMnLCByb2xlOiAnZzEnLCBub3RlOiAnVW5wcm9jZXNzZWQgdHJlZSBudXQga2VybmVscyB3aXRoIG5vIG9pbCBvciBzYWx0LicgfQogICAgXSwKICAgIGV4cGxhbmF0aW9uOiAnUGxhaW4gbnV0cyBhbmQgc2VlZHMgd2l0aCBubyBhZGRlZCByb2FzdGluZyBvaWwsIHNhbHQsIHN1Z2FyLCBvciBmbGF2b3IgY29hdGluZ3MgYmVsb25nIHRvIE5PVkEgR3JvdXAgMS4nCiAgfSwKICB7CiAgICBpZDogJ3JlZC1sZW50aWxzJywKICAgIG5hbWU6ICdEcmllZCBTcGxpdCBSZWQgTGVudGlscycsCiAgICBjYXRlZ29yeTogJ0xlZ3VtZXMgJiBQdWxzZXMnLAogICAgYWlzbGU6ICdEcnkgQmVhbnMgJiBSaWNlJywKICAgIHNlcnZpbmc6ICc1MGcgRHJ5JywKICAgIHNoZWxmTGlmZTogJzI0IE1vbnRocyBEcnknLAogICAga2l0Y2hlblRlc3Q6ICdDbGVhbmVkICYgZHJpZWQgcHVsc2UnLAogICAgcHJvY2Vzc01ldGhvZDogJ0RyeWluZywgaHVsbGluZyAmIHNwbGl0dGluZycsCiAgICBub3ZhOiAxLAogICAgYXJ0VHlwZTogJ2xlbnRpbHMnLAogICAgcGhvdG86IFBIT1RPX0FTU0VUUy5ub3ZhMV9sZW50aWxzLAogICAgcGhvdG9Gb2N1czogJzMyJSA1NSUnLAogICAgcGhvdG9DYXB0aW9uOiAnRHJpZWQgc3BsaXQgY29yYWwgcmVkIGxlbnRpbHMgaW4gYSB3b29kZW4gc2Nvb3AgYW5kIGJ1cmxhcCBzYWNrJywKICAgIHByaW1hcnlDb2xvcjogJyNlYTU4MGMnLAogICAgYWNjZW50Q29sb3I6ICcjZmZlZGQ1JywKICAgIHBhY2thZ2VTdGFtcDogJ0RSSUVEIFBVTFNFIOKAoiBTSU5HTEUgSU5HUkVESUVOVCcsCiAgICBpbmdyZWRpZW50czogWwogICAgICB7IG5hbWU6ICdEcmllZCBTcGxpdCBSZWQgTGVudGlscycsIHJvbGU6ICdnMScsIG5vdGU6ICdNaW5pbWFsbHkgcHJvY2Vzc2VkIGxlZ3VtZSBwdWxzZS4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ0RyeWluZyBhbmQgc3BsaXR0aW5nIGxlZ3VtZXMgb3IgcHVsc2VzIHJlbW92ZXMgbW9pc3R1cmUgZm9yIHN0b3JhZ2Ugd2l0aG91dCBhZGRpbmcgYW55IGN1bGluYXJ5IG9yIGluZHVzdHJpYWwgc3Vic3RhbmNlcyAoTk9WQSBHcm91cCAxKS4nCiAgfSwKICB7CiAgICBpZDogJ2ZyZXNoLWVnZ3MtYXBwbGUnLAogICAgbmFtZTogJ0Zhcm0gQnJvd24gRWdncyAmIENyaXNwIFJlZCBBcHBsZScsCiAgICBjYXRlZ29yeTogJ0ZyZXNoIFdob2xlIEZvb2RzJywKICAgIGFpc2xlOiAnRmFybSBTdGFuZCAvIFByb2R1Y2UnLAogICAgc2VydmluZzogJzEgRWdnICsgMSBBcHBsZScsCiAgICBzaGVsZkxpZmU6ICczIFdlZWtzIENvb2wnLAogICAga2l0Y2hlblRlc3Q6ICdEaXJlY3QgZnJvbSBmYXJtL29yY2hhcmQnLAogICAgcHJvY2Vzc01ldGhvZDogJ1dhc2hpbmcsIGdyYWRpbmcgJiBjaGlsbGluZycsCiAgICBub3ZhOiAxLAogICAgYXJ0VHlwZTogJ2VnZ19hcHBsZScsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmExX3dob2xlLAogICAgcGhvdG9Gb2N1czogJzMwJSA2MCUnLAogICAgcGhvdG9DYXB0aW9uOiAnV2hvbGUgcmVkIG9yY2hhcmQgYXBwbGUgYW5kIGZyZXNoIGJyb3duIGZhcm0gZWdnIG9uIGJ1dGNoZXIgYmxvY2snLAogICAgcHJpbWFyeUNvbG9yOiAnI2RjMjYyNicsCiAgICBhY2NlbnRDb2xvcjogJyNmZWYyZjInLAogICAgcGFja2FnZVN0YW1wOiAnR1JBREUgQSBXSE9MRSDigKIgVU5QUk9DRVNTRUQnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnRnJlc2ggU2hlbGwgRWdnJywgcm9sZTogJ2cxJywgbm90ZTogJ1VucHJvY2Vzc2VkIGFuaW1hbCBmb29kLicgfSwKICAgICAgeyBuYW1lOiAnRnJlc2ggUmVkIEFwcGxlJywgcm9sZTogJ2cxJywgbm90ZTogJ1VucHJvY2Vzc2VkIHBsYW50IGZydWl0LicgfQogICAgXSwKICAgIGV4cGxhbmF0aW9uOiAnRnJlc2ggZWdncywgZnJ1aXRzLCBhbmQgdmVnZXRhYmxlcyBpbiB0aGVpciBuYXR1cmFsIHN0YXRlIGFyZSB0aGUgdGV4dGJvb2sgZm91bmRhdGlvbiBvZiBOT1ZBIEdyb3VwIDEuJwogIH0sCgogIC8vIC0tLS0tLS0tLS0tLS0tLS0gTk9WQSBHUk9VUCAyIC0tLS0tLS0tLS0tLS0tLS0KICB7CiAgICBpZDogJ29saXZlLW9pbCcsCiAgICBuYW1lOiAnQ29sZC1QcmVzc2VkIEV4dHJhIFZpcmdpbiBPbGl2ZSBPaWwnLAogICAgY2F0ZWdvcnk6ICdDb29raW5nIE9pbHMgJiBGYXRzJywKICAgIGFpc2xlOiAnT2lscyAmIFZpbmVnYXJzJywKICAgIHNlcnZpbmc6ICcxNW1MICgxIFRic3ApJywKICAgIHNoZWxmTGlmZTogJzE4IE1vbnRocyBEYXJrIEJvdHRsZScsCiAgICBraXRjaGVuVGVzdDogJ0N1bGluYXJ5IGNvb2tpbmcgJiBkcmVzc2luZyBvaWwnLAogICAgcHJvY2Vzc01ldGhvZDogJ01lY2hhbmljYWwgY29sZC1wcmVzc2luZyBvZiBvbGl2ZXMnLAogICAgbm92YTogMiwKICAgIGFydFR5cGU6ICdvbGl2ZV9vaWwnLAogICAgcGhvdG86IFBIT1RPX0FTU0VUUy5ub3ZhMl9vaWxzLAogICAgcGhvdG9Gb2N1czogJzE4JSA1MCUnLAogICAgcGhvdG9DYXB0aW9uOiAnR2xhc3MgY3J1ZXQgb2YgZ29sZGVuIGNvbGQtcHJlc3NlZCBleHRyYSB2aXJnaW4gb2xpdmUgb2lsJywKICAgIHByaW1hcnlDb2xvcjogJyM2NWEzMGQnLAogICAgYWNjZW50Q29sb3I6ICcjZWNmY2NiJywKICAgIHBhY2thZ2VTdGFtcDogJ0ZJUlNUIENPTEQgUFJFU1Mg4oCiIENVTElOQVJZIE9JTCcsCiAgICBpbmdyZWRpZW50czogWwogICAgICB7IG5hbWU6ICdDb2xkLVByZXNzZWQgRXh0cmEgVmlyZ2luIE9saXZlIE9pbCcsIHJvbGU6ICdnMicsIG5vdGU6ICdGYXQgZXh0cmFjdGVkIGZyb20gR3JvdXAgMSBvbGl2ZXMgZm9yIGNvb2tpbmcgYW5kIHNlYXNvbmluZy4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ1BsYW50IG9pbHMgcHJlc3NlZCBmcm9tIG9saXZlcywgc2VlZHMsIG9yIG51dHMgYXJlIE5PVkEgR3JvdXAgMiBQcm9jZXNzZWQgQ3VsaW5hcnkgSW5ncmVkaWVudHPigJRleHRyYWN0ZWQgZnJvbSBHcm91cCAxIGZvb2RzIHRvIGNvb2sgYW5kIHNlYXNvbiBtZWFscy4nCiAgfSwKICB7CiAgICBpZDogJ3Vuc2FsdGVkLWJ1dHRlcicsCiAgICBuYW1lOiAnQ3JlYW1lcnkgVW5zYWx0ZWQgQnV0dGVyIEJsb2NrJywKICAgIGNhdGVnb3J5OiAnQ29va2luZyBPaWxzICYgRmF0cycsCiAgICBhaXNsZTogJ0RhaXJ5ICYgQnV0dGVyJywKICAgIHNlcnZpbmc6ICcxNGcgUGF0JywKICAgIHNoZWxmTGlmZTogJzYwIERheXMgQ2hpbGxlZCcsCiAgICBraXRjaGVuVGVzdDogJ0N1bGluYXJ5IGJha2luZyAmIHBhbiBmYXQnLAogICAgcHJvY2Vzc01ldGhvZDogJ0NodXJuaW5nICYgc2VwYXJhdGluZyBtaWxrIGZhdCcsCiAgICBub3ZhOiAyLAogICAgYXJ0VHlwZTogJ2J1dHRlcicsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmEyX29pbHMsCiAgICBwaG90b0ZvY3VzOiAnNjAlIDM4JScsCiAgICBwaG90b0NhcHRpb246ICdCbG9jayBvZiBjaHVybmVkIHVuc2FsdGVkIGNyZWFtZXJ5IGJ1dHRlciBvbiBwYXJjaG1lbnQgcGFwZXInLAogICAgcHJpbWFyeUNvbG9yOiAnI2VhYjMwOCcsCiAgICBhY2NlbnRDb2xvcjogJyNmZWY5YzMnLAogICAgcGFja2FnZVN0YW1wOiAnU1dFRVQgQ1JFQU0gQlVUVEVSIOKAoiBDVUxJTkFSWSBGQVQnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnUGFzdGV1cml6ZWQgU3dlZXQgQ3JlYW0gKE1pbGsgRmF0KScsIHJvbGU6ICdnMicsIG5vdGU6ICdDaHVybmVkIG1pbGsgZmF0IHVzZWQgYXMgYSBjdWxpbmFyeSBpbmdyZWRpZW50LicgfQogICAgXSwKICAgIGV4cGxhbmF0aW9uOiAnQnV0dGVyIGNodXJuZWQgZnJvbSBjcmVhbSBpcyBjbGFzc2lmaWVkIGluIE5PVkEgR3JvdXAgMiBiZWNhdXNlIGl0IGlzIGFuIGV4dHJhY3RlZCBmYXQgdXNlZCBhcyBhIGN1bGluYXJ5IGNvb2tpbmcgYW5kIGJha2luZyBpbmdyZWRpZW50LicKICB9LAogIHsKICAgIGlkOiAnc2VhLXNhbHQnLAogICAgbmFtZTogJ0NvYXJzZSBTb2xhci1FdmFwb3JhdGVkIFNlYSBTYWx0JywKICAgIGNhdGVnb3J5OiAnU2Vhc29uaW5nICYgTWluZXJhbHMnLAogICAgYWlzbGU6ICdTcGljZXMgJiBCYWtpbmcnLAogICAgc2VydmluZzogJzEuNWcgUGluY2gnLAogICAgc2hlbGZMaWZlOiAnSW5kZWZpbml0ZScsCiAgICBraXRjaGVuVGVzdDogJ0Vzc2VudGlhbCBraXRjaGVuIHNlYXNvbmluZycsCiAgICBwcm9jZXNzTWV0aG9kOiAnU29sYXIgZXZhcG9yYXRpb24gb2Ygc2Vhd2F0ZXInLAogICAgbm92YTogMiwKICAgIGFydFR5cGU6ICdzYWx0JywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTJfb2lscywKICAgIHBob3RvRm9jdXM6ICc1MCUgNzglJywKICAgIHBob3RvQ2FwdGlvbjogJ0NvYXJzZSB3aGl0ZSBzZWEgc2FsdCBjcnlzdGFscyBpbiBhIGNlcmFtaWMgcGluY2ggYm93bCcsCiAgICBwcmltYXJ5Q29sb3I6ICcjMGVhNWU5JywKICAgIGFjY2VudENvbG9yOiAnI2UwZjJmZScsCiAgICBwYWNrYWdlU3RhbXA6ICdQVVJFIENSWVNUQUxTIOKAoiBDVUxJTkFSWSBTRUFTT05JTkcnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnRXZhcG9yYXRlZCBTZWEgU2FsdCAoU29kaXVtIENobG9yaWRlKScsIHJvbGU6ICdnMicsIG5vdGU6ICdNaW5lcmFsIGV4dHJhY3RlZCBmcm9tIG5hdHVyZSB1c2VkIHRvIHNlYXNvbiBmb29kLicgfQogICAgXSwKICAgIGV4cGxhbmF0aW9uOiAnU2FsdCBtaW5lZCBmcm9tIHJvY2sgZGVwb3NpdHMgb3IgZXZhcG9yYXRlZCBmcm9tIHNlYXdhdGVyIGlzIGEgTk9WQSBHcm91cCAyIFByb2Nlc3NlZCBDdWxpbmFyeSBJbmdyZWRpZW50IG9idGFpbmVkIGZyb20gbmF0dXJlLicKICB9LAogIHsKICAgIGlkOiAncmF3LWhvbmV5JywKICAgIG5hbWU6ICdQdXJlIFdpbGRmbG93ZXIgSG9uZXknLAogICAgY2F0ZWdvcnk6ICdDdWxpbmFyeSBTd2VldGVuZXJzJywKICAgIGFpc2xlOiAnQmFraW5nICYgU3dlZXRlbmVycycsCiAgICBzZXJ2aW5nOiAnMjFnIERyaXp6bGUnLAogICAgc2hlbGZMaWZlOiAnMjQrIE1vbnRocycsCiAgICBraXRjaGVuVGVzdDogJ05hdHVyYWwgY3VsaW5hcnkgc3dlZXRlbmVyJywKICAgIHByb2Nlc3NNZXRob2Q6ICdDZW50cmlmdWdhbCBleHRyYWN0aW9uICYgc3RyYWluaW5nJywKICAgIG5vdmE6IDIsCiAgICBhcnRUeXBlOiAnaG9uZXknLAogICAgcGhvdG86IFBIT1RPX0FTU0VUUy5ub3ZhMl9vaWxzLAogICAgcGhvdG9Gb2N1czogJzg2JSA2MiUnLAogICAgcGhvdG9DYXB0aW9uOiAnR29sZGVuIHdpbGRmbG93ZXIgaG9uZXkgZHJpenpsaW5nIGZyb20gYSB3b29kZW4gaG9uZXkgZGlwcGVyJywKICAgIHByaW1hcnlDb2xvcjogJyNkOTc3MDYnLAogICAgYWNjZW50Q29sb3I6ICcjZmVmM2M3JywKICAgIHBhY2thZ2VTdGFtcDogJzEwMCUgUFVSRSBFWFRSQUNURUQgSE9ORVknLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnUHVyZSBGaWx0ZXJlZCBXaWxkZmxvd2VyIEhvbmV5Jywgcm9sZTogJ2cyJywgbm90ZTogJ0V4dHJhY3RlZCBuYXR1cmFsIGN1bGluYXJ5IHN3ZWV0ZW5lci4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ0hvbmV5IGhhcnZlc3RlZCBmcm9tIGJlZWhpdmVzIGFuZCBtYXBsZSBzeXJ1cCBib2lsZWQgZnJvbSB0cmVlIHNhcCBhcmUgTk9WQSBHcm91cCAyIGN1bGluYXJ5IHN3ZWV0ZW5lcnMgdXNlZCB0byBwcmVwYXJlIGZvb2QgYW5kIGRyaW5rcy4nCiAgfSwKICB7CiAgICBpZDogJ2NhbmUtc3VnYXInLAogICAgbmFtZTogJ0dyYW51bGF0ZWQgUHVyZSBDYW5lIFN1Z2FyJywKICAgIGNhdGVnb3J5OiAnQ3VsaW5hcnkgU3dlZXRlbmVycycsCiAgICBhaXNsZTogJ0Jha2luZyAmIFN3ZWV0ZW5lcnMnLAogICAgc2VydmluZzogJzRnIFRlYXNwb29uJywKICAgIHNoZWxmTGlmZTogJ0luZGVmaW5pdGUgRHJ5JywKICAgIGtpdGNoZW5UZXN0OiAnS2l0Y2hlbiBiYWtpbmcgc3dlZXRlbmVyJywKICAgIHByb2Nlc3NNZXRob2Q6ICdDcnVzaGluZywgYm9pbGluZyAmIGNyeXN0YWxsaXphdGlvbicsCiAgICBub3ZhOiAyLAogICAgYXJ0VHlwZTogJ3N1Z2FyJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTJfdmluZWdhciwKICAgIHBob3RvRm9jdXM6ICc3OCUgNjglJywKICAgIHBob3RvQ2FwdGlvbjogJ0Jvd2wgb2YgcmVmaW5lZCB3aGl0ZSBncmFudWxhdGVkIGNhbmUgc3VnYXIgd2l0aCBicmFzcyBzcG9vbicsCiAgICBwcmltYXJ5Q29sb3I6ICcjZjU5ZTBiJywKICAgIGFjY2VudENvbG9yOiAnI2ZmZmJlYicsCiAgICBwYWNrYWdlU3RhbXA6ICcxMDAlIENBTkUgU1VHQVIg4oCiIEJBS0lORyBTVEFQTEUnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnQ3J5c3RhbGxpemVkIENhbmUgU3VnYXIgKFN1Y3Jvc2UpJywgcm9sZTogJ2cyJywgbm90ZTogJ0V4dHJhY3RlZCBmcm9tIHN1Z2FyY2FuZSAoR3JvdXAgMSkgZm9yIGN1bGluYXJ5IHVzZS4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ1RhYmxlIHN1Z2FyIGV4dHJhY3RlZCBmcm9tIHN1Z2FyY2FuZSBvciBzdWdhciBiZWV0cyBpcyBhIE5PVkEgR3JvdXAgMiBQcm9jZXNzZWQgQ3VsaW5hcnkgSW5ncmVkaWVudCAodW5saWtlIGhpZ2gtZnJ1Y3Rvc2UgY29ybiBzeXJ1cCBvciBhcnRpZmljaWFsIHN3ZWV0ZW5lcnMsIHdoaWNoIGFyZSBHcm91cCA0IG1hcmtlcnMpLicKICB9LAogIHsKICAgIGlkOiAnYXBwbGUtY2lkZXItdmluZWdhcicsCiAgICBuYW1lOiAnUmF3IEFwcGxlIENpZGVyIFZpbmVnYXInLAogICAgY2F0ZWdvcnk6ICdPaWxzICYgVmluZWdhcnMnLAogICAgYWlzbGU6ICdDb25kaW1lbnRzICYgRHJlc3NpbmdzJywKICAgIHNlcnZpbmc6ICcxNW1MIFNwbGFzaCcsCiAgICBzaGVsZkxpZmU6ICcyNCBNb250aHMnLAogICAga2l0Y2hlblRlc3Q6ICdBY2lkaWMgY3VsaW5hcnkgc2Vhc29uaW5nJywKICAgIHByb2Nlc3NNZXRob2Q6ICdBY2V0aWMgZmVybWVudGF0aW9uIG9mIHByZXNzZWQgYXBwbGVzJywKICAgIG5vdmE6IDIsCiAgICBhcnRUeXBlOiAndmluZWdhcicsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmEyX3ZpbmVnYXIsCiAgICBwaG90b0ZvY3VzOiAnNDglIDUyJScsCiAgICBwaG90b0NhcHRpb246ICdBbWJlciBnbGFzcyBib3R0bGUgb2YgZmVybWVudGVkIGFwcGxlIGNpZGVyIHZpbmVnYXIgd2l0aCB3aG9sZSBhcHBsZXMnLAogICAgcHJpbWFyeUNvbG9yOiAnI2I0NTMwOScsCiAgICBhY2NlbnRDb2xvcjogJyNmZmVkZDUnLAogICAgcGFja2FnZVN0YW1wOiAnNSUgQUNJRElUWSDigKIgQ1VMSU5BUlkgVklORUdBUicsCiAgICBpbmdyZWRpZW50czogWwogICAgICB7IG5hbWU6ICdGZXJtZW50ZWQgQXBwbGUgQ2lkZXIgVmluZWdhcicsIHJvbGU6ICdnMicsIG5vdGU6ICdDdWxpbmFyeSBhY2lkIG9idGFpbmVkIGJ5IGZlcm1lbnRpbmcgYXBwbGUganVpY2UuJyB9LAogICAgICB7IG5hbWU6ICdXYXRlciAoRGlsdXRlZCB0byA1JSBBY2lkaXR5KScsIHJvbGU6ICdnMScsIG5vdGU6ICdTdGFuZGFyZCBkaWx1dGlvbiB3YXRlci4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ1ZpbmVnYXJzIHByb2R1Y2VkIGJ5IGFjZXRpYyBmZXJtZW50YXRpb24gb2YgZnJ1aXQgb3IgZ3JhaW4gbGlxdWlkcyBhcmUgTk9WQSBHcm91cCAyIGN1bGluYXJ5IGluZ3JlZGllbnRzIHVzZWQgZm9yIGRyZXNzaW5ncywgcGlja2xpbmcsIGFuZCBjb29raW5nLicKICB9LAoKICAvLyAtLS0tLS0tLS0tLS0tLS0tIE5PVkEgR1JPVVAgMyAtLS0tLS0tLS0tLS0tLS0tCiAgewogICAgaWQ6ICdzb3VyZG91Z2gtYnJlYWQnLAogICAgbmFtZTogJ0FydGlzYW5hbCBDcnVzdHkgU291cmRvdWdoIExvYWYnLAogICAgY2F0ZWdvcnk6ICdCYWtlcnknLAogICAgYWlzbGU6ICdGcmVzaCBCYWtlcnkgQ291bnRlcicsCiAgICBzZXJ2aW5nOiAnMSBUaGljayBTbGljZSAoNTVnKScsCiAgICBzaGVsZkxpZmU6ICc0IERheXMgUm9vbSBUZW1wJywKICAgIGtpdGNoZW5UZXN0OiAnR3JvdXAgMSBGbG91ciArIEdyb3VwIDIgU2FsdCcsCiAgICBwcm9jZXNzTWV0aG9kOiAnV2lsZCBmZXJtZW50YXRpb24gJiBoZWFydGggYmFraW5nJywKICAgIG5vdmE6IDMsCiAgICBhcnRUeXBlOiAnc291cmRvdWdoJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTNfYXJ0aXNhbiwKICAgIHBob3RvRm9jdXM6ICczNiUgNDglJywKICAgIHBob3RvQ2FwdGlvbjogJ1NsaWNlZCBjcnVzdHkgc291cmRvdWdoIGJvdWxlIGJha2VkIGZyb20gZmxvdXIsIHdhdGVyLCBzdGFydGVyICYgc2FsdCcsCiAgICBwcmltYXJ5Q29sb3I6ICcjYjQ1MzA5JywKICAgIGFjY2VudENvbG9yOiAnI2ZkZTY4YScsCiAgICBwYWNrYWdlU3RhbXA6ICc0IFNJTVBMRSBJTkdSRURJRU5UUyDigKIgTk8gRU1VTFNJRklFUlMnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnVW5ibGVhY2hlZCBXaGVhdCBGbG91cicsIHJvbGU6ICdnMScsIG5vdGU6ICdNaW5pbWFsbHkgcHJvY2Vzc2VkIG1pbGxlZCB3aGVhdCAoR3JvdXAgMSkuJyB9LAogICAgICB7IG5hbWU6ICdXYXRlcicsIHJvbGU6ICdnMScsIG5vdGU6ICdXYXRlci4nIH0sCiAgICAgIHsgbmFtZTogJ1NvdXJkb3VnaCBTdGFydGVyIChXaGVhdCBGbG91ciwgV2F0ZXIpJywgcm9sZTogJ2cxJywgbm90ZTogJ05hdHVyYWwgZmVybWVudGF0aW9uIGN1bHR1cmUuJyB9LAogICAgICB7IG5hbWU6ICdTZWEgU2FsdCcsIHJvbGU6ICdnMicsIG5vdGU6ICdHcm91cCAyIGN1bGluYXJ5IHNlYXNvbmluZy4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ0ZyZXNobHkgYmFrZWQgYnJlYWQgbWFkZSBzb2xlbHkgZnJvbSBmbG91ciwgd2F0ZXIsIHllYXN0IG9yIHNvdXJkb3VnaCBzdGFydGVyLCBhbmQgc2FsdOKAlHdpdGggemVybyBlbXVsc2lmaWVycyBvciBkb3VnaCBjb25kaXRpb25lcnPigJRpcyBOT1ZBIEdyb3VwIDMuJwogIH0sCiAgewogICAgaWQ6ICdjaGVkZGFyLWNoZWVzZScsCiAgICBuYW1lOiAnQWdlZCBDYXZlLVJpcGVuZWQgQ2hlZGRhciBXZWRnZScsCiAgICBjYXRlZ29yeTogJ0RhaXJ5ICYgQ2hlZXNlJywKICAgIGFpc2xlOiAnQ2hlZXNlICYgRGVsaScsCiAgICBzZXJ2aW5nOiAnMzBnIFdlZGdlJywKICAgIHNoZWxmTGlmZTogJzYgV2Vla3MgQ2hpbGxlZCcsCiAgICBraXRjaGVuVGVzdDogJ0dyb3VwIDEgTWlsayArIEdyb3VwIDIgU2FsdCcsCiAgICBwcm9jZXNzTWV0aG9kOiAnQ3VyZGxpbmcsIHByZXNzaW5nLCBzYWx0aW5nICYgYWdpbmcnLAogICAgbm92YTogMywKICAgIGFydFR5cGU6ICdjaGVkZGFyJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTNfYXJ0aXNhbiwKICAgIHBob3RvRm9jdXM6ICc3MiUgNTUlJywKICAgIHBob3RvQ2FwdGlvbjogJ1dlZGdlIG9mIGFnZWQgY2hlZGRhciBjaGVlc2UgbWFkZSBmcm9tIG1pbGssIGN1bHR1cmVzLCBzYWx0ICYgcmVubmV0JywKICAgIHByaW1hcnlDb2xvcjogJyNmNTllMGInLAogICAgYWNjZW50Q29sb3I6ICcjZmVmM2M3JywKICAgIHBhY2thZ2VTdGFtcDogJ1RSQURJVElPTkFMIENVTFRVUkVEIENIRUVTRScsCiAgICBpbmdyZWRpZW50czogWwogICAgICB7IG5hbWU6ICdQYXN0ZXVyaXplZCBDb3dcJ3MgTWlsaycsIHJvbGU6ICdnMScsIG5vdGU6ICdHcm91cCAxIG1pbGsgYmFzZS4nIH0sCiAgICAgIHsgbmFtZTogJ0NoZWVzZSBDdWx0dXJlcycsIHJvbGU6ICdnMScsIG5vdGU6ICdGZXJtZW50YXRpb24gc3RhcnRlci4nIH0sCiAgICAgIHsgbmFtZTogJ1NlYSBTYWx0Jywgcm9sZTogJ2cyJywgbm90ZTogJ0dyb3VwIDIgY3VsaW5hcnkgc2FsdCBmb3IgcHJlc2VydmF0aW9uIGFuZCBmbGF2b3IuJyB9LAogICAgICB7IG5hbWU6ICdNaWNyb2JpYWwgUmVubmV0Jywgcm9sZTogJ2cxJywgbm90ZTogJ0NvYWd1bGF0aW5nIGVuenltZS4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ1RyYWRpdGlvbmFsIGNoZWVzZXMgbWFkZSBmcm9tIG1pbGssIHN0YXJ0ZXIgY3VsdHVyZXMsIHJlbm5ldCwgYW5kIHNhbHQgYXJlIE5PVkEgR3JvdXAgMyBQcm9jZXNzZWQgRm9vZHMgKHVubGlrZSBwbGFzdGljLXdyYXBwZWQgInByb2Nlc3NlZCBjaGVlc2Ugc2xpY2VzIiB3aXRoIGVtdWxzaWZ5aW5nIHNhbHRzLCB3aGljaCBhcmUgR3JvdXAgNCkuJwogIH0sCiAgewogICAgaWQ6ICdjYW5uZWQtY2hpY2twZWFzJywKICAgIG5hbWU6ICdUaW5uZWQgQ2hpY2twZWFzIGluIFNhbHRlZCBCcmluZScsCiAgICBjYXRlZ29yeTogJ0Nhbm5lZCBMZWd1bWVzJywKICAgIGFpc2xlOiAnQ2FubmVkIEdvb2RzJywKICAgIHNlcnZpbmc6ICcxMzBnIERyYWluZWQnLAogICAgc2hlbGZMaWZlOiAnMzYgTW9udGhzIENhbm5lZCcsCiAgICBraXRjaGVuVGVzdDogJ0dyb3VwIDEgQmVhbnMgKyBHcm91cCAyIFNhbHQnLAogICAgcHJvY2Vzc01ldGhvZDogJ1ByZXNzdXJlIGNhbm5pbmcgaW4gc2FsdGVkIHdhdGVyJywKICAgIG5vdmE6IDMsCiAgICBhcnRUeXBlOiAnY2hpY2twZWFzJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTNfYXJ0aXNhbiwKICAgIHBob3RvRm9jdXM6ICc2NSUgMjQlJywKICAgIHBob3RvQ2FwdGlvbjogJ09wZW4gdGluIG9mIHdob2xlIGNoaWNrcGVhcyBwcmVzZXJ2ZWQgaW4gd2F0ZXIgYW5kIHNlYSBzYWx0JywKICAgIHByaW1hcnlDb2xvcjogJyNkOTc3MDYnLAogICAgYWNjZW50Q29sb3I6ICcjZmVmM2M3JywKICAgIHBhY2thZ2VTdGFtcDogJ1BSRVNFUlZFRCBJTiBXQVRFUiAmIFNFQSBTQUxUJywKICAgIGluZ3JlZGllbnRzOiBbCiAgICAgIHsgbmFtZTogJ09yZ2FuaWMgQ2hpY2twZWFzIChHYXJiYW56byBCZWFucyknLCByb2xlOiAnZzEnLCBub3RlOiAnR3JvdXAgMSB3aG9sZSBsZWd1bWUuJyB9LAogICAgICB7IG5hbWU6ICdXYXRlcicsIHJvbGU6ICdnMScsIG5vdGU6ICdCcmluZSBsaXF1aWQuJyB9LAogICAgICB7IG5hbWU6ICdTZWEgU2FsdCcsIHJvbGU6ICdnMicsIG5vdGU6ICdHcm91cCAyIGN1bGluYXJ5IHNhbHQuJyB9CiAgICBdLAogICAgZXhwbGFuYXRpb246ICdDYW5uaW5nIHdob2xlIGxlZ3VtZXMgb3IgdmVnZXRhYmxlcyBpbiB3YXRlciBhbmQgc2FsdCAoTk9WQSAxICsgTk9WQSAyKSB0byBleHRlbmQgc2hlbGYgbGlmZSBjcmVhdGVzIGEgY2xhc3NpYyBOT1ZBIEdyb3VwIDMgUHJvY2Vzc2VkIEZvb2QuJwogIH0sCiAgewogICAgaWQ6ICdzYWx0ZWQtY2FzaGV3cycsCiAgICBuYW1lOiAnUm9hc3RlZCAmIFNhbHRlZCBXaG9sZSBDYXNoZXdzJywKICAgIGNhdGVnb3J5OiAnTnV0cyAmIFNuYWNrcycsCiAgICBhaXNsZTogJ1NuYWNrIE51dHMnLAogICAgc2VydmluZzogJzMwZyBIYW5kZnVsJywKICAgIHNoZWxmTGlmZTogJzYgTW9udGhzIFRpbicsCiAgICBraXRjaGVuVGVzdDogJ0dyb3VwIDEgTnV0cyArIEdyb3VwIDIgT2lsICYgU2FsdCcsCiAgICBwcm9jZXNzTWV0aG9kOiAnT2lsIHJvYXN0aW5nICYgc2FsdGluZycsCiAgICBub3ZhOiAzLAogICAgYXJ0VHlwZTogJ2Nhc2hld3MnLAogICAgcGhvdG86IFBIT1RPX0FTU0VUUy5ub3ZhM19hcnRpc2FuLAogICAgcGhvdG9Gb2N1czogJzg2JSA4MCUnLAogICAgcGhvdG9DYXB0aW9uOiAnQm93bCBvZiByb2FzdGVkIHdob2xlIGNhc2hld3Mgc2Vhc29uZWQgd2l0aCBjdWxpbmFyeSBvaWwgYW5kIHNlYSBzYWx0JywKICAgIHByaW1hcnlDb2xvcjogJyNlYTU4MGMnLAogICAgYWNjZW50Q29sb3I6ICcjZmZlZGQ1JywKICAgIHBhY2thZ2VTdGFtcDogJ1JPQVNURUQgSU4gT0lMIFdJVEggU0VBIFNBTFQnLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnV2hvbGUgQ2FzaGV3IE51dHMnLCByb2xlOiAnZzEnLCBub3RlOiAnR3JvdXAgMSB0cmVlIG51dC4nIH0sCiAgICAgIHsgbmFtZTogJ1BlYW51dCBPaWwnLCByb2xlOiAnZzInLCBub3RlOiAnR3JvdXAgMiBjdWxpbmFyeSBvaWwuJyB9LAogICAgICB7IG5hbWU6ICdTZWEgU2FsdCcsIHJvbGU6ICdnMicsIG5vdGU6ICdHcm91cCAyIGN1bGluYXJ5IHNhbHQuJyB9CiAgICBdLAogICAgZXhwbGFuYXRpb246ICdXaGVyZWFzIHJhdyB1bnNhbHRlZCBudXRzIGFyZSBOT1ZBIDEsIHJvYXN0aW5nIG51dHMgd2l0aCBjdWxpbmFyeSBvaWwgYW5kIHNhbHQgKE5PVkEgMikgbWFrZXMgdGhlbSBOT1ZBIEdyb3VwIDMgUHJvY2Vzc2VkIEZvb2RzLicKICB9LAogIHsKICAgIGlkOiAndGlubmVkLXNhcmRpbmVzJywKICAgIG5hbWU6ICdXaWxkIFNhcmRpbmVzIENhbm5lZCBpbiBPbGl2ZSBPaWwnLAogICAgY2F0ZWdvcnk6ICdDYW5uZWQgU2VhZm9vZCcsCiAgICBhaXNsZTogJ1Rpbm5lZCBGaXNoICYgTWVhdHMnLAogICAgc2VydmluZzogJzkwZyBDYW4nLAogICAgc2hlbGZMaWZlOiAnNDggTW9udGhzIFRpbicsCiAgICBraXRjaGVuVGVzdDogJ0dyb3VwIDEgRmlzaCArIEdyb3VwIDIgT2xpdmUgT2lsICYgU2FsdCcsCiAgICBwcm9jZXNzTWV0aG9kOiAnU3RlYW1pbmcsIHRpbm5pbmcgaW4gb2lsICYgc3RlcmlsaXphdGlvbicsCiAgICBub3ZhOiAzLAogICAgYXJ0VHlwZTogJ3NhcmRpbmVzJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTNfdGlubmVkLAogICAgcGhvdG9Gb2N1czogJzI4JSA2MiUnLAogICAgcGhvdG9DYXB0aW9uOiAnT3BlbiBwdWxsLXRhYiB0aW4gb2Ygd2lsZCBzYXJkaW5lcyBwcmVzZXJ2ZWQgaW4gZXh0cmEgdmlyZ2luIG9saXZlIG9pbCcsCiAgICBwcmltYXJ5Q29sb3I6ICcjMDI4NGM3JywKICAgIGFjY2VudENvbG9yOiAnI2UwZjJmZScsCiAgICBwYWNrYWdlU3RhbXA6ICdXSUxEIENBVUdIVCDigKIgSU4gRVhUUkEgVklSR0lOIE9MSVZFIE9JTCcsCiAgICBpbmdyZWRpZW50czogWwogICAgICB7IG5hbWU6ICdXaWxkIFBpbGNoYXJkIFNhcmRpbmVzJywgcm9sZTogJ2cxJywgbm90ZTogJ0dyb3VwIDEgd2hvbGUgZmlzaC4nIH0sCiAgICAgIHsgbmFtZTogJ0V4dHJhIFZpcmdpbiBPbGl2ZSBPaWwnLCByb2xlOiAnZzInLCBub3RlOiAnR3JvdXAgMiBjdWxpbmFyeSBvaWwuJyB9LAogICAgICB7IG5hbWU6ICdTZWEgU2FsdCcsIHJvbGU6ICdnMicsIG5vdGU6ICdHcm91cCAyIGN1bGluYXJ5IHNhbHQuJyB9CiAgICBdLAogICAgZXhwbGFuYXRpb246ICdGaXNoIHByZXNlcnZlZCBpbiBjdWxpbmFyeSBvbGl2ZSBvaWwgYW5kIHNhbHQgaGFzIG9ubHkgR3JvdXAgMSBhbmQgR3JvdXAgMiBpbmdyZWRpZW50cywgbWFraW5nIGl0IGEgbnV0cml0aW91cyBOT1ZBIEdyb3VwIDMgUHJvY2Vzc2VkIEZvb2QuJwogIH0sCiAgewogICAgaWQ6ICdjYW5uZWQtcGVhY2hlcycsCiAgICBuYW1lOiAnU2xpY2VkIFBlYWNoZXMgaW4gTGlnaHQgQ2FuZSBTeXJ1cCcsCiAgICBjYXRlZ29yeTogJ0Nhbm5lZCBGcnVpdCcsCiAgICBhaXNsZTogJ0Nhbm5lZCBGcnVpdCAmIEJha2luZycsCiAgICBzZXJ2aW5nOiAnMTQwZyBKYXInLAogICAgc2hlbGZMaWZlOiAnMjQgTW9udGhzIFNlYWxlZCcsCiAgICBraXRjaGVuVGVzdDogJ0dyb3VwIDEgRnJ1aXQgKyBHcm91cCAyIFN1Z2FyJywKICAgIHByb2Nlc3NNZXRob2Q6ICdCb3R0bGluZyBpbiBzdWdhciBzeXJ1cCAmIHBhc3RldXJpemluZycsCiAgICBub3ZhOiAzLAogICAgYXJ0VHlwZTogJ3BlYWNoZXMnLAogICAgcGhvdG86IFBIT1RPX0FTU0VUUy5ub3ZhM190aW5uZWQsCiAgICBwaG90b0ZvY3VzOiAnNzYlIDQ4JScsCiAgICBwaG90b0NhcHRpb246ICdHbGFzcyBqYXIgb2YgeWVsbG93IGNsaW5nIHBlYWNoIHNsaWNlcyBwcmVzZXJ2ZWQgaW4gd2F0ZXIgYW5kIGNhbmUgc3VnYXInLAogICAgcHJpbWFyeUNvbG9yOiAnI2Y5NzMxNicsCiAgICBhY2NlbnRDb2xvcjogJyNmZmVkZDUnLAogICAgcGFja2FnZVN0YW1wOiAnQk9UVExFRCBJTiBXQVRFUiAmIENBTkUgU1VHQVInLAogICAgaW5ncmVkaWVudHM6IFsKICAgICAgeyBuYW1lOiAnWWVsbG93IENsaW5nIFBlYWNoZXMnLCByb2xlOiAnZzEnLCBub3RlOiAnR3JvdXAgMSB3aG9sZSBmcnVpdCBzbGljZXMuJyB9LAogICAgICB7IG5hbWU6ICdXYXRlcicsIHJvbGU6ICdnMScsIG5vdGU6ICdTeXJ1cCBiYXNlLicgfSwKICAgICAgeyBuYW1lOiAnQ2FuZSBTdWdhcicsIHJvbGU6ICdnMicsIG5vdGU6ICdHcm91cCAyIGN1bGluYXJ5IHN1Z2FyLicgfQogICAgXSwKICAgIGV4cGxhbmF0aW9uOiAnRnJ1aXRzIHByZXNlcnZlZCBpbiB3YXRlciBhbmQgY2FuZSBzdWdhciAod2l0aCBubyBoaWdoLWZydWN0b3NlIGNvcm4gc3lydXAsIGFydGlmaWNpYWwgZmxhdm9ycywgb3Igc3ludGhldGljIGR5ZXMpIGFyZSBOT1ZBIEdyb3VwIDMgUHJvY2Vzc2VkIEZvb2RzLicKICB9LAoKICAvLyAtLS0tLS0tLS0tLS0tLS0tIE5PVkEgR1JPVVAgNCAtLS0tLS0tLS0tLS0tLS0tCiAgewogICAgaWQ6ICdjb2xhLXNvZGEnLAogICAgbmFtZTogJ05lb24gRml6eiBDYXJib25hdGVkIENvbGEgRHJpbmsnLAogICAgY2F0ZWdvcnk6ICdTb2Z0IERyaW5rcycsCiAgICBhaXNsZTogJ0NhcmJvbmF0ZWQgQmV2ZXJhZ2VzJywKICAgIHNlcnZpbmc6ICczNTVtTCBDYW4nLAogICAgc2hlbGZMaWZlOiAnOSBNb250aHMgQ2FubmVkJywKICAgIGtpdGNoZW5UZXN0OiAnSW5kdXN0cmlhbCBzeXJ1cCwgZHllICYgc3dlZXRlbmVyJywKICAgIHByb2Nlc3NNZXRob2Q6ICdJbmR1c3RyaWFsIGNhcmJvbmF0aW9uICYgYWRkaXRpdmUgYmxlbmRpbmcnLAogICAgbm92YTogNCwKICAgIGFydFR5cGU6ICdjb2xhJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTRfY2FuX2NoaXBzLAogICAgcGhvdG9Gb2N1czogJzI2JSA0OCUnLAogICAgcGhvdG9DYXB0aW9uOiAnQ2FyYm9uYXRlZCBjb2xhIHNvZnQgZHJpbmsgZm9ybXVsYXRlZCB3aXRoIEhGQ1MsIGNhcmFtZWwgY29sb3IgJiBzdWNyYWxvc2UnLAogICAgcHJpbWFyeUNvbG9yOiAnI2UxMWQ0OCcsCiAgICBhY2NlbnRDb2xvcjogJyNmZmU0ZTYnLAogICAgcGFja2FnZVN0YW1wOiAnQ0FSQk9OQVRFRCBDT0xBIOKAoiBVTFRSQS1SRUZSRVNIJywKICAgIGluZ3JlZGllbnRzOiBbCiAgICAgIHsgbmFtZTogJ0NhcmJvbmF0ZWQgV2F0ZXInLCByb2xlOiAnZzEnLCBub3RlOiAnV2F0ZXIgYmFzZS4nIH0sCiAgICAgIHsgbmFtZTogJ0hpZ2ggRnJ1Y3Rvc2UgQ29ybiBTeXJ1cCcsIHJvbGU6ICdnNCcsIG5vdGU6ICdJbmR1c3RyaWFsIGVuenltYXRpYyBjb3JuIHN5cnVwIG1hcmtlciBvZiBOT1ZBIDQuJyB9LAogICAgICB7IG5hbWU6ICdDYXJhbWVsIENvbG9yIChDbGFzcyBJViBFMTUwZCknLCByb2xlOiAnZzQnLCBub3RlOiAnQ29zbWV0aWMgaW5kdXN0cmlhbCBjb2xvcmluZyBhZGRpdGl2ZS4nIH0sCiAgICAgIHsgbmFtZTogJ1Bob3NwaG9yaWMgQWNpZCcsIHJvbGU6ICdnNCcsIG5vdGU6ICdJbmR1c3RyaWFsIGFjaWR1bGFudC4nIH0sCiAgICAgIHsgbmFtZTogJ05hdHVyYWwgRmxhdm9ycycsIHJvbGU6ICdnNCcsIG5vdGU6ICdDb3NtZXRpYyBmbGF2b3IgZm9ybXVsYXRpb24uJyB9LAogICAgICB7IG5hbWU6ICdTdWNyYWxvc2UnLCByb2xlOiAnZzQnLCBub3RlOiAnQXJ0aWZpY2lhbCBub24tc3VnYXIgc3dlZXRlbmVyIChOT1ZBIDQgbWFya2VyKS4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ0NhcmJvbmF0ZWQgc29mdCBkcmlua3MgY29udGFpbiB6ZXJvIHdob2xlIGZvb2RzIGFuZCByZWx5IG9uIEhpZ2ggRnJ1Y3Rvc2UgQ29ybiBTeXJ1cCwgY29zbWV0aWMgY2FyYW1lbCBjb2xvcmluZywgZmxhdm9yaW5ncywgYW5kIG5vbi1zdWdhciBzd2VldGVuZXJz4oCUbWFraW5nIHRoZW0gY2xhc3NpYyBOT1ZBIEdyb3VwIDQgVWx0cmEtUHJvY2Vzc2VkIHByb2R1Y3RzLicKICB9LAogIHsKICAgIGlkOiAnbmFjaG8tY2hpcHMnLAogICAgbmFtZTogJ0V4dHJlbWUgTmFjaG8gQ2hlZXNlIFJpZGdlZCBDaGlwcycsCiAgICBjYXRlZ29yeTogJ1BhY2thZ2VkIFNhdm91cnkgU25hY2tzJywKICAgIGFpc2xlOiAnQ2hpcHMgJiBDcmlzcHMnLAogICAgc2VydmluZzogJzI4ZyBCYWcnLAogICAgc2hlbGZMaWZlOiAnNiBNb250aHMgTml0cm9nZW4gQmFnJywKICAgIGtpdGNoZW5UZXN0OiAnTWFsdG9kZXh0cmluLCBNU0cgJiBzeW50aGV0aWMgbGFrZXMnLAogICAgcHJvY2Vzc01ldGhvZDogJ0luZHVzdHJpYWwgZnJ5aW5nICYgZmxhdm9yLWR1c3QgY29hdGluZycsCiAgICBub3ZhOiA0LAogICAgYXJ0VHlwZTogJ2NoaXBzJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTRfY2FuX2NoaXBzLAogICAgcGhvdG9Gb2N1czogJzY2JSA2NCUnLAogICAgcGhvdG9DYXB0aW9uOiAnUmlkZ2VkIHNuYWNrIGNoaXBzIGNvYXRlZCB3aXRoIG1hbHRvZGV4dHJpbiwgd2hleSwgTVNHICYgWWVsbG93IDYgTGFrZScsCiAgICBwcmltYXJ5Q29sb3I6ICcjZGMyNjI2JywKICAgIGFjY2VudENvbG9yOiAnI2ZlZjA4YScsCiAgICBwYWNrYWdlU3RhbXA6ICdCT0xEIE5BQ0hPIEJMQVNUIOKAoiBGTEFWT1IgRFVTVEVEJywKICAgIGluZ3JlZGllbnRzOiBbCiAgICAgIHsgbmFtZTogJ1BvdGF0b2VzJywgcm9sZTogJ2cxJywgbm90ZTogJ0Jhc2UgcG90YXRvLicgfSwKICAgICAgeyBuYW1lOiAnVmVnZXRhYmxlIE9pbCcsIHJvbGU6ICdnMicsIG5vdGU6ICdGcnlpbmcgb2lsLicgfSwKICAgICAgeyBuYW1lOiAnTWFsdG9kZXh0cmluIChmcm9tIENvcm4pJywgcm9sZTogJ2c0Jywgbm90ZTogJ0luZHVzdHJpYWwgaHlkcm9seXplZCBzdGFyY2ggY2FycmllciAoTk9WQSA0IG1hcmtlcikuJyB9LAogICAgICB7IG5hbWU6ICdXaGV5IFBvd2RlcicsIHJvbGU6ICdnNCcsIG5vdGU6ICdGcmFjdGlvbmF0ZWQgZGFpcnkgc3Vic3RhbmNlLicgfSwKICAgICAgeyBuYW1lOiAnTW9ub3NvZGl1bSBHbHV0YW1hdGUgKE1TRyknLCByb2xlOiAnZzQnLCBub3RlOiAnQ29zbWV0aWMgZmxhdm9yIGVuaGFuY2VyIChOT1ZBIDQgbWFya2VyKS4nIH0sCiAgICAgIHsgbmFtZTogJ0FydGlmaWNpYWwgQ2hlZXNlIEZsYXZvcicsIHJvbGU6ICdnNCcsIG5vdGU6ICdTeW50aGV0aWMgZmxhdm9yIGNvbXBvdW5kLicgfSwKICAgICAgeyBuYW1lOiAnWWVsbG93IDYgTGFrZSAmIFJlZCA0MCcsIHJvbGU6ICdnNCcsIG5vdGU6ICdTeW50aGV0aWMgYXpvIGNvc21ldGljIGZvb2QgZHllcy4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ1BsYWluIHBvdGF0byBjaGlwcyBtYWRlIG9ubHkgb2YgcG90YXRvLCBvaWwsIGFuZCBzYWx0IGNhbiBzaXQgaW4gTk9WQSAzLCBidXQgZmxhdm9yZWQgY2hpcHMgY29hdGVkIGluIG1hbHRvZGV4dHJpbiwgd2hleSBwb3dkZXIsIE1TRywgYXJ0aWZpY2lhbCBmbGF2b3JzLCBhbmQgc3ludGhldGljIGR5ZXMgYXJlIHN0cmljdGx5IE5PVkEgR3JvdXAgNC4nCiAgfSwKICB7CiAgICBpZDogJ3JhaW5ib3ctY2VyZWFsJywKICAgIG5hbWU6ICdSYWluYm93IEZyb3N0ZWQgQ3J1bmNoIExvb3BzJywKICAgIGNhdGVnb3J5OiAnQnJlYWtmYXN0IENlcmVhbHMnLAogICAgYWlzbGU6ICdDZXJlYWwgQWlzbGUnLAogICAgc2VydmluZzogJzM5ZyBCb3dsJywKICAgIHNoZWxmTGlmZTogJzEyIE1vbnRocyBCb3hlZCcsCiAgICBraXRjaGVuVGVzdDogJ0V4dHJ1ZGVkIHN0YXJjaCwgaHlkcm9nZW5hdGVkIG9pbCAmIGR5ZXMnLAogICAgcHJvY2Vzc01ldGhvZDogJ0hpZ2gtcHJlc3N1cmUgZXh0cnVzaW9uICYgc3VnYXIgY29hdGluZycsCiAgICBub3ZhOiA0LAogICAgYXJ0VHlwZTogJ2NlcmVhbCcsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmE0X3NuYWNrcywKICAgIHBob3RvRm9jdXM6ICcyNSUgODQlJywKICAgIHBob3RvQ2FwdGlvbjogJ0V4dHJ1ZGVkIHJhaW5ib3cgY2VyZWFsIHJpbmdzIGR5ZWQgd2l0aCBSZWQgNDAsIFllbGxvdyA1ICYgQmx1ZSAxJywKICAgIHByaW1hcnlDb2xvcjogJyM5MzMzZWEnLAogICAgYWNjZW50Q29sb3I6ICcjZjNlOGZmJywKICAgIHBhY2thZ2VTdGFtcDogJ0ZSVUlUWSBDUlVOQ0ggUklOR1Mg4oCiIFZJVEFNSU4gRk9SVElGSUVEJywKICAgIGluZ3JlZGllbnRzOiBbCiAgICAgIHsgbmFtZTogJ0RlZ2VybWluYXRlZCBDb3JuIEZsb3VyIEJsZW5kJywgcm9sZTogJ2cxJywgbm90ZTogJ01pbGxlZCBncmFpbi4nIH0sCiAgICAgIHsgbmFtZTogJ1N1Z2FyJywgcm9sZTogJ2cyJywgbm90ZTogJ1N1Z2FyLicgfSwKICAgICAgeyBuYW1lOiAnSHlkcm9nZW5hdGVkIENvY29udXQgJiBTb3liZWFuIE9pbCcsIHJvbGU6ICdnNCcsIG5vdGU6ICdDaGVtaWNhbGx5IGh5ZHJvZ2VuYXRlZCBmYXQgKGV4Y2x1c2l2ZSBOT1ZBIDQgbWFya2VyKS4nIH0sCiAgICAgIHsgbmFtZTogJ01vZGlmaWVkIENvcm4gU3RhcmNoJywgcm9sZTogJ2c0Jywgbm90ZTogJ0NoZW1pY2FsbHkgbW9kaWZpZWQgc3RhcmNoLicgfSwKICAgICAgeyBuYW1lOiAnTmF0dXJhbCAmIEFydGlmaWNpYWwgRnJ1aXQgRmxhdm9yJywgcm9sZTogJ2c0Jywgbm90ZTogJ0Nvc21ldGljIGZsYXZvcmluZy4nIH0sCiAgICAgIHsgbmFtZTogJ1JlZCA0MCwgWWVsbG93IDUsIEJsdWUgMScsIHJvbGU6ICdnNCcsIG5vdGU6ICdTeW50aGV0aWMgY29zbWV0aWMgY29sb3JzLicgfSwKICAgICAgeyBuYW1lOiAnQkhUIChQcmVzZXJ2YXRpdmUpJywgcm9sZTogJ2c0Jywgbm90ZTogJ1N5bnRoZXRpYyBhbnRpb3hpZGFudCBhZGRpdGl2ZS4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ01vc3Qgc3dlZXRlbmVkIGJyZWFrZmFzdCBjZXJlYWxzIHVuZGVyZ28gaW5kdXN0cmlhbCBleHRydXNpb24gYW5kIGluY2x1ZGUgaHlkcm9nZW5hdGVkIG9pbHMsIG1vZGlmaWVkIHN0YXJjaGVzLCBhcnRpZmljaWFsIGZsYXZvcnMsIGFuZCBzeW50aGV0aWMgZHllcyAoUmVkIDQwLCBZZWxsb3cgNSwgQmx1ZSAxKSwgcGxhY2luZyB0aGVtIGluIE5PVkEgR3JvdXAgNC4nCiAgfSwKICB7CiAgICBpZDogJ3Byb3RlaW4tYmFyJywKICAgIG5hbWU6ICdEb3VibGUgQ2hvY29sYXRlIENhcmFtZWwgUHJvdGVpbiBCYXInLAogICAgY2F0ZWdvcnk6ICdTcG9ydHMgJiBOdXRyaXRpb24gQmFycycsCiAgICBhaXNsZTogJ0hlYWx0aCAmIEZpdG5lc3MgQmFycycsCiAgICBzZXJ2aW5nOiAnNjBnIEJhcicsCiAgICBzaGVsZkxpZmU6ICcxMiBNb250aHMgRm9pbCBXcmFwJywKICAgIGtpdGNoZW5UZXN0OiAnQnVpbHQgZnJvbSBwcm90ZWluIGlzb2xhdGVzICYgZW11bHNpZmllcnMnLAogICAgcHJvY2Vzc01ldGhvZDogJ0luZHVzdHJpYWwgcHJvdGVpbiBleHRydXNpb24gJiBlbnJvYmluZycsCiAgICBub3ZhOiA0LAogICAgYXJ0VHlwZTogJ3Byb3RlaW5fYmFyJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTRfc25hY2tzLAogICAgcGhvdG9Gb2N1czogJzg2JSA3MiUnLAogICAgcGhvdG9DYXB0aW9uOiAnQ2hvY29sYXRlLWVucm9iZWQgcHJvdGVpbiBiYXIgZm9ybXVsYXRlZCBmcm9tIHdoZXkvc295IGlzb2xhdGVzICYgc295IGxlY2l0aGluJywKICAgIHByaW1hcnlDb2xvcjogJyM0ZjQ2ZTUnLAogICAgYWNjZW50Q29sb3I6ICcjZTBlN2ZmJywKICAgIHBhY2thZ2VTdGFtcDogJzIwRyBQUk9URUlOIOKAoiBaRVJPIEFEREVEIFNVR0FSJywKICAgIGluZ3JlZGllbnRzOiBbCiAgICAgIHsgbmFtZTogJ1doZXkgUHJvdGVpbiBJc29sYXRlJywgcm9sZTogJ2c0Jywgbm90ZTogJ0luZHVzdHJpYWxseSBpc29sYXRlZCBwcm90ZWluIGZyYWN0aW9uIChOT1ZBIDQgbWFya2VyKS4nIH0sCiAgICAgIHsgbmFtZTogJ1NveSBQcm90ZWluIElzb2xhdGUnLCByb2xlOiAnZzQnLCBub3RlOiAnRXh0cmFjdGVkIGluZHVzdHJpYWwgcHJvdGVpbiBpc29sYXRlLicgfSwKICAgICAgeyBuYW1lOiAnUG9seWRleHRyb3NlIChTeW50aGV0aWMgU29sdWJsZSBGaWJlciknLCByb2xlOiAnZzQnLCBub3RlOiAnU3ludGhlc2l6ZWQgYnVsa2luZyBhZ2VudC4nIH0sCiAgICAgIHsgbmFtZTogJ0ZyYWN0aW9uYXRlZCBQYWxtIEtlcm5lbCBPaWwnLCByb2xlOiAnZzQnLCBub3RlOiAnSW5kdXN0cmlhbGx5IG1vZGlmaWVkIGZhdC4nIH0sCiAgICAgIHsgbmFtZTogJ1NveSBMZWNpdGhpbiAoRW11bHNpZmllciknLCByb2xlOiAnZzQnLCBub3RlOiAnQ29zbWV0aWMgZW11bHNpZmllciBhZGRpdGl2ZS4nIH0sCiAgICAgIHsgbmFtZTogJ1N1Y3JhbG9zZScsIHJvbGU6ICdnNCcsIG5vdGU6ICdOb24tc3VnYXIgaW50ZW5zZSBzd2VldGVuZXIuJyB9LAogICAgICB7IG5hbWU6ICdOYXR1cmFsICYgQXJ0aWZpY2lhbCBDYXJhbWVsIEZsYXZvcicsIHJvbGU6ICdnNCcsIG5vdGU6ICdDb3NtZXRpYyBmbGF2b3JpbmcuJyB9CiAgICBdLAogICAgZXhwbGFuYXRpb246ICdEZXNwaXRlICIyMGcgUHJvdGVpbiIgaGVhbHRoIGNsYWltcyBvbiB0aGUgd3JhcHBlciwgYmFycyBjb25zdHJ1Y3RlZCBmcm9tIHdoZXkvc295IHByb3RlaW4gaXNvbGF0ZXMsIHBvbHlkZXh0cm9zZSwgZW11bHNpZmllcnMgKHNveSBsZWNpdGhpbiksIGFuZCBzdWNyYWxvc2UgYXJlIHRleHRib29rIE5PVkEgR3JvdXAgNCBVbHRyYS1Qcm9jZXNzZWQgZm9ybXVsYXRpb25zLicKICB9LAogIHsKICAgIGlkOiAncGFja2FnZWQtYnJlYWQnLAogICAgbmFtZTogJ1N1cGVyLVNvZnQgTWFzcy1Qcm9kdWNlZCBTbGljZWQgTG9hZicsCiAgICBjYXRlZ29yeTogJ1BhY2thZ2VkIEJha2VyeScsCiAgICBhaXNsZTogJ1N1cGVybWFya2V0IEJyZWFkIEFpc2xlJywKICAgIHNlcnZpbmc6ICcyIFNsaWNlcyAoNTdnKScsCiAgICBzaGVsZkxpZmU6ICcyMSBEYXlzIFBsYXN0aWMgQmFnJywKICAgIGtpdGNoZW5UZXN0OiAnQ29udGFpbnMgaW5kdXN0cmlhbCBlbXVsc2lmaWVycyAoREFURU0pJywKICAgIHByb2Nlc3NNZXRob2Q6ICdDaG9ybGV5d29vZCBoaWdoLXNwZWVkIGluZHVzdHJpYWwgbWl4aW5nJywKICAgIG5vdmE6IDQsCiAgICBhcnRUeXBlOiAnc2xpY2VkX2JyZWFkJywKICAgIHBob3RvOiBQSE9UT19BU1NFVFMubm92YTRfc3VwZXJtYXJrZXQsCiAgICBwaG90b0ZvY3VzOiAnMzAlIDUwJScsCiAgICBwaG90b0NhcHRpb246ICdNYXNzLXByb2R1Y2VkIHNsaWNlZCB3aGl0ZSBicmVhZCBtYWRlIHdpdGggbW9uby0gJiBkaWdseWNlcmlkZXMgYW5kIERBVEVNJywKICAgIHByaW1hcnlDb2xvcjogJyNkYjI3NzcnLAogICAgYWNjZW50Q29sb3I6ICcjZmNlN2YzJywKICAgIHBhY2thZ2VTdGFtcDogJ1NUQVktU09GVCBMT0FGIOKAoiBFTlJJQ0hFRCBTQU5EV0lDSCBCUkVBRCcsCiAgICBpbmdyZWRpZW50czogWwogICAgICB7IG5hbWU6ICdFbnJpY2hlZCBXaGVhdCBGbG91cicsIHJvbGU6ICdnMScsIG5vdGU6ICdGbG91ciBiYXNlLicgfSwKICAgICAgeyBuYW1lOiAnU3VnYXInLCByb2xlOiAnZzInLCBub3RlOiAnQ3VsaW5hcnkgc3VnYXIuJyB9LAogICAgICB7IG5hbWU6ICdTb3liZWFuIE9pbCcsIHJvbGU6ICdnMicsIG5vdGU6ICdWZWdldGFibGUgb2lsLicgfSwKICAgICAgeyBuYW1lOiAnTW9uby0gYW5kIERpZ2x5Y2VyaWRlcycsIHJvbGU6ICdnNCcsIG5vdGU6ICdJbmR1c3RyaWFsIGVtdWxzaWZpZXIgZm9yIGNydW1iIHNvZnRuZXNzIChOT1ZBIDQgbWFya2VyKS4nIH0sCiAgICAgIHsgbmFtZTogJ0RBVEVNIChEaWFjZXR5bCBUYXJ0YXJpYyBBY2lkIEVzdGVycyknLCByb2xlOiAnZzQnLCBub3RlOiAnSW5kdXN0cmlhbCBkb3VnaCBjb25kaXRpb25lciAmIGVtdWxzaWZpZXIuJyB9LAogICAgICB7IG5hbWU6ICdTb3kgTGVjaXRoaW4nLCByb2xlOiAnZzQnLCBub3RlOiAnSW5kdXN0cmlhbCBlbXVsc2lmaWVyLicgfSwKICAgICAgeyBuYW1lOiAnQ2FsY2l1bSBQcm9waW9uYXRlJywgcm9sZTogJ2c0Jywgbm90ZTogJ01vbGQgaW5oaWJpdG9yIHByZXNlcnZhdGl2ZS4nIH0KICAgIF0sCiAgICBleHBsYW5hdGlvbjogJ0hlcmUgaXMgdGhlIGNsYXNzaWMgTk9WQSBicmVhZCBkaXN0aW5jdGlvbjogd2hpbGUgc2ltcGxlIGJha2VyeSBicmVhZCBpcyBOT1ZBIDMsIG1hc3MtcHJvZHVjZWQgcGFja2FnZWQgYnJlYWQgY29udGFpbmluZyBlbXVsc2lmaWVycyAobW9uby0gYW5kIGRpZ2x5Y2VyaWRlcywgREFURU0sIHNveSBsZWNpdGhpbikgaXMgY2xhc3NpZmllZCBieSBNb250ZWlybyAmIEZBTyBhcyBOT1ZBIEdyb3VwIDQuJwogIH0sCiAgewogICAgaWQ6ICdzdHJhd2JlcnJ5LXlvZ3VydCcsCiAgICBuYW1lOiAnU3RyYXdiZXJyeSBTd2lybCBGcnVpdC1vbi10aGUtQm90dG9tIFlvZ3VydCcsCiAgICBjYXRlZ29yeTogJ0ZsYXZvcmVkIERhaXJ5JywKICAgIGFpc2xlOiAnQ2hpbGxlZCBZb2d1cnQgQWlzbGUnLAogICAgc2VydmluZzogJzE1MGcgQ3VwJywKICAgIHNoZWxmTGlmZTogJzM1IERheXMgQ2hpbGxlZCcsCiAgICBraXRjaGVuVGVzdDogJ01vZGlmaWVkIHN0YXJjaCwgY2FycmFnZWVuYW4gJiBSZWQgNDAnLAogICAgcHJvY2Vzc01ldGhvZDogJ0luZHVzdHJpYWwgc3dlZXRlbmluZywgdGhpY2tlbmluZyAmIGZsYXZvcmluZycsCiAgICBub3ZhOiA0LAogICAgYXJ0VHlwZTogJ3lvZ3VydF9mbGF2b3JlZCcsCiAgICBwaG90bzogUEhPVE9fQVNTRVRTLm5vdmE0X3N1cGVybWFya2V0LAogICAgcGhvdG9Gb2N1czogJzc2JSA1OCUnLAogICAgcGhvdG9DYXB0aW9uOiAnUGxhc3RpYyBjdXAgb2YgcGluayBzdHJhd2JlcnJ5IHlvZ3VydCB0aGlja2VuZWQgd2l0aCBtb2RpZmllZCBzdGFyY2ggJiBjYXJyYWdlZW5hbicsCiAgICBwcmltYXJ5Q29sb3I6ICcjZWM0ODk5JywKICAgIGFjY2VudENvbG9yOiAnI2ZjZTdmMycsCiAgICBwYWNrYWdlU3RhbXA6ICdTVFJBV0JFUlJZIEJVUlNUIOKAoiBDUkVBTVkgVEVYVFVSRScsCiAgICBpbmdyZWRpZW50czogWwogICAgICB7IG5hbWU6ICdDdWx0dXJlZCBQYXN0ZXVyaXplZCBOb25mYXQgTWlsaycsIHJvbGU6ICdnMScsIG5vdGU6ICdNaWxrIGJhc2UuJyB9LAogICAgICB7IG5hbWU6ICdGcnVjdG9zZSBTeXJ1cCcsIHJvbGU6ICdnNCcsIG5vdGU6ICdJbmR1c3RyaWFsIGxpcXVpZCBzdWdhci4nIH0sCiAgICAgIHsgbmFtZTogJ01vZGlmaWVkIEZvb2QgU3RhcmNoJywgcm9sZTogJ2c0Jywgbm90ZTogJ0NoZW1pY2FsbHkgbW9kaWZpZWQgdGhpY2tlbmVyIChOT1ZBIDQgbWFya2VyKS4nIH0sCiAgICAgIHsgbmFtZTogJ0NhcnJhZ2VlbmFuICYgUGVjdGluJywgcm9sZTogJ2c0Jywgbm90ZTogJ0Nvc21ldGljIGdlbGxpbmcgJiBzdGFiaWxpemluZyBhZ2VudHMuJyB9LAogICAgICB7IG5hbWU6ICdBcnRpZmljaWFsIFN0cmF3YmVycnkgRmxhdm9yJywgcm9sZTogJ2c0Jywgbm90ZTogJ0Nvc21ldGljIGZsYXZvciBhZGRpdGl2ZS4nIH0sCiAgICAgIHsgbmFtZTogJ1JlZCA0MCcsIHJvbGU6ICdnNCcsIG5vdGU6ICdTeW50aGV0aWMgY29zbWV0aWMgZHllLicgfSwKICAgICAgeyBuYW1lOiAnQWNlc3VsZmFtZSBQb3Rhc3NpdW0nLCByb2xlOiAnZzQnLCBub3RlOiAnTm9uLXN1Z2FyIGFydGlmaWNpYWwgc3dlZXRlbmVyLicgfQogICAgXSwKICAgIGV4cGxhbmF0aW9uOiAnVW5saWtlIHBsYWluIHlvZ3VydCAoTk9WQSAxKSwgZnJ1aXQtZmxhdm9yZWQgeW9ndXJ0cyBtYWRlIHdpdGggZnJ1Y3Rvc2Ugc3lydXAsIG1vZGlmaWVkIGZvb2Qgc3RhcmNoLCBjYXJyYWdlZW5hbiwgYXJ0aWZpY2lhbCBmbGF2b3JzLCBSZWQgNDAsIGFuZCBub24tc3VnYXIgc3dlZXRlbmVycyBiZWxvbmcgdG8gTk9WQSBHcm91cCA0LicKICB9Cl07CgovLyBQcmVsb2FkIGFsbCBTcGVjaW1lbiBJbWFnZXMgZm9yIENhbnZhcyBEcmF3aW5nCmNvbnN0IGxvYWRlZFBob3RvcyA9IHt9OwpTUEVDSU1FTlMuZm9yRWFjaChpdGVtID0+IHsKICBpZiAoaXRlbS5waG90byAmJiAhbG9hZGVkUGhvdG9zW2l0ZW0ucGhvdG9dKSB7CiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTsKICAgIGltZy5zcmMgPSBpdGVtLnBob3RvOwogICAgbG9hZGVkUGhvdG9zW2l0ZW0ucGhvdG9dID0gaW1nOwogIH0KfSk7CgovLyBTeW50aGVzaXplZCBXZWIgQXVkaW8gQVBJIFNvdW5kIEVuZ2luZQpjb25zdCBTb3VuZEZYID0gewogIGN0eDogbnVsbCwKICBtdXRlZDogZmFsc2UsCiAgaW5pdCgpIHsKICAgIGlmICghdGhpcy5jdHgpIHsKICAgICAgY29uc3QgQXVkaW9DdHggPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7CiAgICAgIGlmIChBdWRpb0N0eCkgewogICAgICAgIHRoaXMuY3R4ID0gbmV3IEF1ZGlvQ3R4KCk7CiAgICAgIH0KICAgIH0KICAgIGlmICh0aGlzLmN0eCAmJiB0aGlzLmN0eC5zdGF0ZSA9PT0gJ3N1c3BlbmRlZCcpIHsKICAgICAgdGhpcy5jdHgucmVzdW1lKCk7CiAgICB9CiAgfSwKICBwbGF5VG9uZShmcmVxLCB0eXBlLCBkdXJhdGlvbiwgZGVsYXkgPSAwLCBnYWluVmFsID0gMC4xMikgewogICAgaWYgKHRoaXMubXV0ZWQpIHJldHVybjsKICAgIHRyeSB7CiAgICAgIHRoaXMuaW5pdCgpOwogICAgICBpZiAoIXRoaXMuY3R4KSByZXR1cm47CiAgICAgIGNvbnN0IG5vdyA9IHRoaXMuY3R4LmN1cnJlbnRUaW1lICsgZGVsYXk7CiAgICAgIGNvbnN0IG9zYyA9IHRoaXMuY3R4LmNyZWF0ZU9zY2lsbGF0b3IoKTsKICAgICAgY29uc3QgZ2FpbiA9IHRoaXMuY3R4LmNyZWF0ZUdhaW4oKTsKICAgICAgb3NjLnR5cGUgPSB0eXBlOwogICAgICBvc2MuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGZyZXEsIG5vdyk7CiAgICAgIGdhaW4uZ2Fpbi5zZXRWYWx1ZUF0VGltZShnYWluVmFsLCBub3cpOwogICAgICBnYWluLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgbm93ICsgZHVyYXRpb24pOwogICAgICBvc2MuY29ubmVjdChnYWluKTsKICAgICAgZ2Fpbi5jb25uZWN0KHRoaXMuY3R4LmRlc3RpbmF0aW9uKTsKICAgICAgb3NjLnN0YXJ0KG5vdyk7CiAgICAgIG9zYy5zdG9wKG5vdyArIGR1cmF0aW9uKTsKICAgIH0gY2F0Y2ggKGUpIHt9CiAgfSwKICBjb3JyZWN0KCkgewogICAgdGhpcy5wbGF5VG9uZSg1MjMuMjUsICd0cmlhbmdsZScsIDAuMTQsIDAsIDAuMTQpOwogICAgdGhpcy5wbGF5VG9uZSg2NTkuMjUsICd0cmlhbmdsZScsIDAuMTQsIDAuMDgsIDAuMTQpOwogICAgdGhpcy5wbGF5VG9uZSg3ODMuOTksICd0cmlhbmdsZScsIDAuMjIsIDAuMTYsIDAuMTYpOwogIH0sCiAgd3JvbmcoKSB7CiAgICB0aGlzLnBsYXlUb25lKDIyMCwgJ3Nhd3Rvb3RoJywgMC4xOCwgMCwgMC4xMSk7CiAgICB0aGlzLnBsYXlUb25lKDE2NC44MSwgJ3Nhd3Rvb3RoJywgMC4yOCwgMC4xMiwgMC4xMSk7CiAgfSwKICBzY2FuKCkgewogICAgdGhpcy5wbGF5VG9uZSg4ODAsICdzaW5lJywgMC4wNywgMCwgMC4wOCk7CiAgICB0aGlzLnBsYXlUb25lKDExNzQuNjYsICdzaW5lJywgMC4xMSwgMC4wNiwgMC4wOCk7CiAgfSwKICBzbGlkZSgpIHsKICAgIHRoaXMucGxheVRvbmUoMzMwLCAnc2luZScsIDAuMDgsIDAsIDAuMDYpOwogIH0KfTsKCi8vIEFwcGxpY2F0aW9uIFN0YXRlCmNvbnN0IHN0YXRlID0gewogIGFjdGl2ZVRhYjogJ3BsYXknLAogIGdhbWVNb2RlOiAnZGVjaycsCiAgY2x1ZU1vZGU6ICdib3RoJywKICBkZWNrOiBbXSwKICBjdXJyZW50SW5kZXg6IDAsCiAgY3VycmVudFNwZWNpbWVuOiBudWxsLAogIGFuc3dlcmVkOiBmYWxzZSwKICBsYXN0R3Vlc3M6IG51bGwsCiAgY2x1ZXNSZXZlYWxlZDogZmFsc2UsCiAgc2NvcmU6IDAsCiAgc3RyZWFrOiAwLAogIGJlc3RTdHJlYWs6IDAsCiAgbGl2ZXM6IDMsCiAgdG90YWxBbnN3ZXJlZDogMCwKICB0b3RhbENvcnJlY3Q6IDAsCiAgcm91bmRIaXN0b3J5OiBbXSwKICBydXNoU2Vjb25kc0xlZnQ6IDYwLAogIHJ1c2hUaW1lcklkOiBudWxsLAogIGxvdXBlRW5hYmxlZDogdHJ1ZSwKICBwb2ludGVyOiB7IHg6IDAsIHk6IDAsIGFjdGl2ZTogZmFsc2UgfSwKICBiZWx0T2Zmc2V0OiAwLAogIGNhcmRTbGlkZVg6IDAsCiAgY2FyZFRhcmdldFg6IDAsCiAgc2Nhbkxhc2VyWTogMCwKICBwYXJ0aWNsZXM6IFtdLAogIGRleEZpbHRlcjogJ2FsbCcsCiAgZGV4UXVlcnk6ICcnLAogIGFjdGl2ZUNvZGVGaWxlOiAnaW5kZXguaHRtbCcKfTsKCmZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnIpIHsKICBjb25zdCBjb3B5ID0gWy4uLmFycl07CiAgZm9yIChsZXQgaSA9IGNvcHkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkgewogICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpOwogICAgW2NvcHlbaV0sIGNvcHlbal1dID0gW2NvcHlbal0sIGNvcHlbaV1dOwogIH0KICByZXR1cm4gY29weTsKfQoKZnVuY3Rpb24gc3RhcnROZXdSb3VuZCgpIHsKICBpZiAoc3RhdGUucnVzaFRpbWVySWQpIHsKICAgIGNsZWFySW50ZXJ2YWwoc3RhdGUucnVzaFRpbWVySWQpOwogICAgc3RhdGUucnVzaFRpbWVySWQgPSBudWxsOwogIH0KCiAgY29uc3Qgc2h1ZmZsZWQgPSBzaHVmZmxlQXJyYXkoU1BFQ0lNRU5TKTsKICBzdGF0ZS5kZWNrID0gc3RhdGUuZ2FtZU1vZGUgPT09ICdkZWNrJyA/IHNodWZmbGVkLnNsaWNlKDAsIDEwKSA6IHNodWZmbGVkOwogIHN0YXRlLmN1cnJlbnRJbmRleCA9IDA7CiAgc3RhdGUuc2NvcmUgPSAwOwogIHN0YXRlLnN0cmVhayA9IDA7CiAgc3RhdGUuYmVzdFN0cmVhayA9IDA7CiAgc3RhdGUubGl2ZXMgPSAzOwogIHN0YXRlLnRvdGFsQW5zd2VyZWQgPSAwOwogIHN0YXRlLnRvdGFsQ29ycmVjdCA9IDA7CiAgc3RhdGUucm91bmRIaXN0b3J5ID0gW107CiAgc3RhdGUucnVzaFNlY29uZHNMZWZ0ID0gNjA7CgogIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnlNb2RhbCcpOwogIGlmIChtb2RhbCkgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7CgogIGlmIChzdGF0ZS5nYW1lTW9kZSA9PT0gJ3J1c2gnKSB7CiAgICBzdGF0ZS5ydXNoVGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHsKICAgICAgc3RhdGUucnVzaFNlY29uZHNMZWZ0ID0gTWF0aC5tYXgoMCwgc3RhdGUucnVzaFNlY29uZHNMZWZ0IC0gMSk7CiAgICAgIHVwZGF0ZUhVRCgpOwogICAgICBpZiAoc3RhdGUucnVzaFNlY29uZHNMZWZ0IDw9IDApIHsKICAgICAgICBjbGVhckludGVydmFsKHN0YXRlLnJ1c2hUaW1lcklkKTsKICAgICAgICBzdGF0ZS5ydXNoVGltZXJJZCA9IG51bGw7CiAgICAgICAgc2hvd1JvdW5kU3VtbWFyeSgnVGltZSBVcCEgNjAtU2Vjb25kIEJlbHQgUnVzaCBDb21wbGV0ZScpOwogICAgICB9CiAgICB9LCAxMDAwKTsKICB9CgogIGxvYWRTcGVjaW1lbkF0KDApOwp9CgpmdW5jdGlvbiBsb2FkU3BlY2ltZW5BdChpbmRleCkgewogIGlmIChzdGF0ZS5nYW1lTW9kZSA9PT0gJ2RlY2snICYmIGluZGV4ID49IHN0YXRlLmRlY2subGVuZ3RoKSB7CiAgICBzaG93Um91bmRTdW1tYXJ5KCdTaGlmdCBDb21wbGV0ZSEgQWxsIDEwIFNwZWNpbWVucyBDbGFzc2lmaWVkJyk7CiAgICByZXR1cm47CiAgfQogIGlmIChpbmRleCA+PSBzdGF0ZS5kZWNrLmxlbmd0aCkgewogICAgc3RhdGUuZGVjayA9IHNodWZmbGVBcnJheShTUEVDSU1FTlMpOwogICAgaW5kZXggPSAwOwogIH0KICBzdGF0ZS5jdXJyZW50SW5kZXggPSBpbmRleDsKICBzdGF0ZS5jdXJyZW50U3BlY2ltZW4gPSBzdGF0ZS5kZWNrW2luZGV4XTsKICBzdGF0ZS5hbnN3ZXJlZCA9IGZhbHNlOwogIHN0YXRlLmxhc3RHdWVzcyA9IG51bGw7CiAgc3RhdGUuY2x1ZXNSZXZlYWxlZCA9IGZhbHNlOwogIHN0YXRlLmNhcmRTbGlkZVggPSAtMzIwOwogIHN0YXRlLmNhcmRUYXJnZXRYID0gMDsKICBTb3VuZEZYLnNsaWRlKCk7CiAgcmVuZGVyQ3VycmVudFNwZWNpbWVuVUkoKTsKICB1cGRhdGVIVUQoKTsKfQoKZnVuY3Rpb24gbG9hZFNwZWNpZmljU3BlY2ltZW5CeUlkKGlkKSB7CiAgY29uc3QgZm91bmQgPSBTUEVDSU1FTlMuZmluZChzID0+IHMuaWQgPT09IGlkKTsKICBpZiAoIWZvdW5kKSByZXR1cm47CiAgc3dpdGNoVGFiKCdwbGF5Jyk7CiAgc3RhdGUuY3VycmVudFNwZWNpbWVuID0gZm91bmQ7CiAgc3RhdGUuYW5zd2VyZWQgPSBmYWxzZTsKICBzdGF0ZS5sYXN0R3Vlc3MgPSBudWxsOwogIHN0YXRlLmNsdWVzUmV2ZWFsZWQgPSBmYWxzZTsKICBzdGF0ZS5jYXJkU2xpZGVYID0gLTMyMDsKICBzdGF0ZS5jYXJkVGFyZ2V0WCA9IDA7CiAgU291bmRGWC5zbGlkZSgpOwogIHJlbmRlckN1cnJlbnRTcGVjaW1lblVJKCk7CiAgdXBkYXRlSFVEKCk7Cn0KCmZ1bmN0aW9uIHJlbmRlckN1cnJlbnRTcGVjaW1lblVJKCkgewogIGNvbnN0IGl0ZW0gPSBzdGF0ZS5jdXJyZW50U3BlY2ltZW47CiAgaWYgKCFpdGVtKSByZXR1cm47CgogIGNvbnN0IHJlZGFjdFByb2R1Y3RJZGVudGl0eSA9IChzdGF0ZS5jbHVlTW9kZSA9PT0gJ2luZ3JlZGllbnRzJyAmJiAhc3RhdGUuYW5zd2VyZWQpOwogIGNvbnN0IHJlZGFjdEluZ3JlZGllbnRzID0gKHN0YXRlLmNsdWVNb2RlID09PSAnaW1hZ2UnICYmICFzdGF0ZS5hbnN3ZXJlZCAmJiAhc3RhdGUuY2x1ZXNSZXZlYWxlZCk7CgogIC8vIFByb21pbmVudCBTdHVkaW8gUHJvZHVjdCBQaG90byBDYXJkCiAgY29uc3QgbWFpblBob3RvSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWNpbWVuTWFpblBob3RvSW1nJyk7CiAgY29uc3QgbWFpblBob3RvQ2FwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVjaW1lblBob3RvQ2FwdGlvbicpOwogIGNvbnN0IG1haW5QaG90b1JlZGFjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWNpbWVuUGhvdG9SZWRhY3RlZE92ZXJsYXknKTsKICBpZiAobWFpblBob3RvSW1nKSB7CiAgICBtYWluUGhvdG9JbWcuc3JjID0gaXRlbS5waG90bzsKICAgIG1haW5QaG90b0ltZy5zdHlsZS5vYmplY3RQb3NpdGlvbiA9IGl0ZW0ucGhvdG9Gb2N1cyB8fCAnNTAlIDUwJSc7CiAgICBpZiAocmVkYWN0UHJvZHVjdElkZW50aXR5KSB7CiAgICAgIG1haW5QaG90b0ltZy5jbGFzc0xpc3QuYWRkKCdyZWRhY3RlZC1ibHVyJyk7CiAgICAgIGlmIChtYWluUGhvdG9SZWRhY3RlZCkgbWFpblBob3RvUmVkYWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7CiAgICAgIGlmIChtYWluUGhvdG9DYXB0aW9uKSBtYWluUGhvdG9DYXB0aW9uLnRleHRDb250ZW50ID0gJ/CflJIgUHJvZHVjdCBQaG90byBTZWFsZWQgaW4gSW5ncmVkaWVudHMtT25seSBNb2RlJzsKICAgIH0gZWxzZSB7CiAgICAgIG1haW5QaG90b0ltZy5jbGFzc0xpc3QucmVtb3ZlKCdyZWRhY3RlZC1ibHVyJyk7CiAgICAgIGlmIChtYWluUGhvdG9SZWRhY3RlZCkgbWFpblBob3RvUmVkYWN0ZWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7CiAgICAgIGlmIChtYWluUGhvdG9DYXB0aW9uKSBtYWluUGhvdG9DYXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5waG90b0NhcHRpb24gfHwgaXRlbS5uYW1lOwogICAgfQogIH0KCiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWNpbWVuQ2F0ZWdvcnlCYWRnZScpLnRleHRDb250ZW50ID0gcmVkYWN0UHJvZHVjdElkZW50aXR5CiAgICA/ICdNeXN0ZXJ5IENhdGVnb3J5IChMYWJlbCBEZXRlY3RpdmUpJwogICAgOiBpdGVtLmNhdGVnb3J5OwoKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdFRpdGxlRGlzcGxheScpLnRleHRDb250ZW50ID0gcmVkYWN0UHJvZHVjdElkZW50aXR5CiAgICA/ICfwn5SSIE15c3RlcnkgUHJvZHVjdCAoQ2xhc3NpZnkgZnJvbSBJbmdyZWRpZW50cyBMaXN0KScKICAgIDogaXRlbS5uYW1lOwoKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdEFpc2xlRGlzcGxheScpLnRleHRDb250ZW50ID0gcmVkYWN0UHJvZHVjdElkZW50aXR5CiAgICA/ICdSZWRhY3RlZCB1bnRpbCBndWVzcycKICAgIDogaXRlbS5haXNsZTsKCiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3RQcm9jZXNzRGlzcGxheScpLnRleHRDb250ZW50ID0gc3RhdGUuYW5zd2VyZWQKICAgID8gaXRlbS5wcm9jZXNzTWV0aG9kCiAgICA6ICdDbGFzc2lmeSB0byByZXZlYWwnOwoKICBjb25zdCBwaG90b0JhZGdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob3RvUmVmQmFkZ2UnKTsKICBpZiAocGhvdG9CYWRnZSkgewogICAgaWYgKHN0YXRlLmFuc3dlcmVkKSB7CiAgICAgIHBob3RvQmFkZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7CiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG90b1JlZkltZycpLnNyYyA9IGl0ZW0ucGhvdG87CiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG90b1JlZlRpdGxlJykudGV4dENvbnRlbnQgPSBgTk9WQSBHcm91cCAke2l0ZW0ubm92YX0gVmVyaWZpZWRgOwogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvdG9SZWZTdWInKS50ZXh0Q29udGVudCA9IE5PVkFfR1JPVVBfTUVUQVtpdGVtLm5vdmFdLm5hbWU7CiAgICB9IGVsc2UgewogICAgICBwaG90b0JhZGdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOwogICAgfQogIH0KCiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZ3JlZGllbnRDb3VudFBpbGwnKS50ZXh0Q29udGVudCA9CiAgICBgJHtpdGVtLmluZ3JlZGllbnRzLmxlbmd0aH0gSW5ncmVkaWVudCR7aXRlbS5pbmdyZWRpZW50cy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ31gOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudXRyaVNlcnZpbmcnKS50ZXh0Q29udGVudCA9IGl0ZW0uc2VydmluZzsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnV0cmlTaGVsZicpLnRleHRDb250ZW50ID0gaXRlbS5zaGVsZkxpZmU7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251dHJpS2l0Y2hlbicpLnRleHRDb250ZW50ID0gKHN0YXRlLmFuc3dlcmVkIHx8IHN0YXRlLmNsdWVzUmV2ZWFsZWQpCiAgICA/IGl0ZW0ua2l0Y2hlblRlc3QKICAgIDogJ1NjYW4gb3IgZ3Vlc3MnOwoKICBjb25zdCByZWRhY3RlZEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmdyZWRpZW50c1JlZGFjdGVkQm94Jyk7CiAgY29uc3QgY2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ncmVkaWVudHNMaXN0Q29udGFpbmVyJyk7CiAgY29uc3QgcmF3VGV4dEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZ3JlZGllbnRzUmF3VGV4dCcpOwoKICBpZiAocmVkYWN0SW5ncmVkaWVudHMpIHsKICAgIHJlZGFjdGVkQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOwogICAgY2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7CiAgICByYXdUZXh0RWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7CiAgfSBlbHNlIHsKICAgIHJlZGFjdGVkQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOwogICAgY2hpcHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7CiAgICByYXdUZXh0RWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7CgogICAgY2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7CiAgICBpdGVtLmluZ3JlZGllbnRzLmZvckVhY2goKGluZykgPT4gewogICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsKICAgICAgYnRuLnR5cGUgPSAnYnV0dG9uJzsKICAgICAgY29uc3Qgc2hvd0NvbG9yID0gc3RhdGUuYW5zd2VyZWQgfHwgc3RhdGUuY2x1ZXNSZXZlYWxlZDsKICAgICAgbGV0IGNvbG9yQ2xhc3NlcyA9ICdiZy13aGl0ZSBob3ZlcjpiZy1zbGF0ZS0xMDAgdGV4dC1zbGF0ZS05MDAgYm9yZGVyLXNsYXRlLTQwMCc7CiAgICAgIGxldCBwcmVmaXhEb3QgPSAnYmctc2xhdGUtNDAwJzsKCiAgICAgIGlmIChzaG93Q29sb3IpIHsKICAgICAgICBpZiAoaW5nLnJvbGUgPT09ICdnMScpIHsKICAgICAgICAgIGNvbG9yQ2xhc3NlcyA9ICdiZy1lbWVyYWxkLTEwMCB0ZXh0LWVtZXJhbGQtOTUwIGJvcmRlci1lbWVyYWxkLTUwMCBmb250LWJvbGQnOwogICAgICAgICAgcHJlZml4RG90ID0gJ2JnLWVtZXJhbGQtNjAwJzsKICAgICAgICB9IGVsc2UgaWYgKGluZy5yb2xlID09PSAnZzInKSB7CiAgICAgICAgICBjb2xvckNsYXNzZXMgPSAnYmctYW1iZXItMTAwIHRleHQtYW1iZXItOTUwIGJvcmRlci1hbWJlci01MDAgZm9udC1ib2xkJzsKICAgICAgICAgIHByZWZpeERvdCA9ICdiZy1hbWJlci02MDAnOwogICAgICAgIH0gZWxzZSBpZiAoaW5nLnJvbGUgPT09ICdnNCcpIHsKICAgICAgICAgIGNvbG9yQ2xhc3NlcyA9ICdiZy1yb3NlLTEwMCB0ZXh0LXJvc2UtOTUwIGJvcmRlci1yb3NlLTUwMCBmb250LWJvbGQnOwogICAgICAgICAgcHJlZml4RG90ID0gJ2JnLXJvc2UtNjAwJzsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIGJ0bi5jbGFzc05hbWUgPSBgaW5ncmVkaWVudC1jaGlwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTIuNSBweS0xIHJvdW5kZWQtbGcgdGV4dC14cyBib3JkZXIgc2hhZG93LXNtICR7Y29sb3JDbGFzc2VzfWA7CiAgICAgIGJ0bi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9InctMiBoLTIgcm91bmRlZC1mdWxsICR7cHJlZml4RG90fSI+PC9zcGFuPjxzcGFuPiR7aW5nLm5hbWV9PC9zcGFuPmA7CiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgICAgICBzdGF0ZS5jbHVlc1JldmVhbGVkID0gdHJ1ZTsKICAgICAgICBTb3VuZEZYLnNjYW4oKTsKICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlY3Ryb21ldGVyTm90ZScpLnRleHRDb250ZW50ID0gYPCflKwgJHtpbmcubmFtZX06ICR7aW5nLm5vdGV9YDsKICAgICAgICByZW5kZXJDdXJyZW50U3BlY2ltZW5VSSgpOwogICAgICB9KTsKICAgICAgY2hpcHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTsKICAgIH0pOwoKICAgIHJhd1RleHRFbC50ZXh0Q29udGVudCA9ICdJTkdSRURJRU5UUzogJyArIGl0ZW0uaW5ncmVkaWVudHMubWFwKGkgPT4gaS5uYW1lKS5qb2luKCcsICcpICsgJy4nOwogIH0KCiAgY29uc3Qgbm92YUJ0bnMgPSBbCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3Vlc3NOb3ZhMUJ0bicpLAogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d1ZXNzTm92YTJCdG4nKSwKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWVzc05vdmEzQnRuJyksCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3Vlc3NOb3ZhNEJ0bicpCiAgXTsKCiAgbm92YUJ0bnMuZm9yRWFjaChidG4gPT4gewogICAgY29uc3QgZyA9IE51bWJlcihidG4uZ2V0QXR0cmlidXRlKCdkYXRhLW5vdmEnKSk7CiAgICBidG4uZGlzYWJsZWQgPSBzdGF0ZS5hbnN3ZXJlZDsKICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdyaW5nLTQnLCAncmluZy1lbWVyYWxkLTQwMCcsICdyaW5nLXJvc2UtNTAwJywgJ29wYWNpdHktNDAnKTsKICAgIGlmIChzdGF0ZS5hbnN3ZXJlZCkgewogICAgICBpZiAoZyA9PT0gaXRlbS5ub3ZhKSB7CiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3JpbmctNCcsICdyaW5nLWVtZXJhbGQtNDAwJyk7CiAgICAgIH0gZWxzZSBpZiAoZyA9PT0gc3RhdGUubGFzdEd1ZXNzICYmIHN0YXRlLmxhc3RHdWVzcyAhPT0gaXRlbS5ub3ZhKSB7CiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3JpbmctNCcsICdyaW5nLXJvc2UtNTAwJyk7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktNDAnKTsKICAgICAgfQogICAgfQogIH0pOwoKICBjb25zdCBkcmF3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyZGljdERyYXdlcicpOwogIGlmICghc3RhdGUuYW5zd2VyZWQpIHsKICAgIGRyYXdlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsKICB9IGVsc2UgewogICAgZHJhd2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOwogICAgY29uc3QgaXNDb3JyZWN0ID0gc3RhdGUubGFzdEd1ZXNzID09PSBpdGVtLm5vdmE7CiAgICBkcmF3ZXIuY2xhc3NOYW1lID0gaXNDb3JyZWN0CiAgICAgID8gJ3JvdW5kZWQteGwgYm9yZGVyLTIgYm9yZGVyLWVtZXJhbGQtNTAwLzcwIGJnLWVtZXJhbGQtOTUwLzM1IHAtNCB0cmFuc2l0aW9uLWFsbCcKICAgICAgOiAncm91bmRlZC14bCBib3JkZXItMiBib3JkZXItcm9zZS01MDAvNzAgYmctcm9zZS05NTAvMzUgcC00IHRyYW5zaXRpb24tYWxsJzsKCiAgICBjb25zdCBzdGF0dXNCYWRnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJkaWN0U3RhdHVzQmFkZ2UnKTsKICAgIHN0YXR1c0JhZGdlLmNsYXNzTmFtZSA9IGlzQ29ycmVjdAogICAgICA/ICdweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGJnLWVtZXJhbGQtNDAwIHRleHQtc2xhdGUtOTUwJwogICAgICA6ICdweC0yLjUgcHktMC41IHJvdW5kZWQtZnVsbCB0ZXh0LXhzIGZvbnQtYmxhY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGJnLXJvc2UtNTAwIHRleHQtd2hpdGUnOwogICAgc3RhdHVzQmFkZ2UudGV4dENvbnRlbnQgPSBpc0NvcnJlY3QKICAgICAgPyBg4pyTIFNwb3QgT24hICske3N0YXRlLmxhc3RQb2ludHNFYXJuZWQgfHwgMTAwfSBwdHNgCiAgICAgIDogYOKclyBNaXNzZWQg4oCUIFlvdSBHdWVzc2VkIE5PVkEgJHtzdGF0ZS5sYXN0R3Vlc3N9YDsKCiAgICBjb25zdCBhY3R1YWxCYWRnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJkaWN0QWN0dWFsR3JvdXBCYWRnZScpOwogICAgYWN0dWFsQmFkZ2UuY2xhc3NOYW1lID0gYHB4LTIuNSBweS0wLjUgcm91bmRlZC1tZCB0ZXh0LXhzIGZvbnQtYm9sZCBtb25vICR7Tk9WQV9HUk9VUF9NRVRBW2l0ZW0ubm92YV0uYmFkZ2VDbGFzc31gOwogICAgYWN0dWFsQmFkZ2UudGV4dENvbnRlbnQgPSBOT1ZBX0dST1VQX01FVEFbaXRlbS5ub3ZhXS5zaG9ydDsKCiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyZGljdEhlYWRsaW5lJykudGV4dENvbnRlbnQgPQogICAgICBgJHtpdGVtLm5hbWV9IGlzICR7Tk9WQV9HUk9VUF9NRVRBW2l0ZW0ubm92YV0ubmFtZX0gKEdyb3VwICR7aXRlbS5ub3ZhfSlgOwogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcmRpY3RFeHBsYW5hdGlvbicpLnRleHRDb250ZW50ID0gaXRlbS5leHBsYW5hdGlvbjsKICB9Cn0KCmZ1bmN0aW9uIHVwZGF0ZUhVRCgpIHsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkU2NvcmUnKS50ZXh0Q29udGVudCA9IHN0YXRlLnNjb3JlLnRvTG9jYWxlU3RyaW5nKCk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1ZFN0cmVhaycpLnRleHRDb250ZW50ID0gYCR7c3RhdGUuc3RyZWFrfXhgOwoKICBjb25zdCBwcm9nTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkUHJvZ3Jlc3NMYWJlbCcpOwogIGNvbnN0IHByb2dWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVkUHJvZ3Jlc3MnKTsKICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWRTdGF0dXNMYWJlbCcpOwogIGNvbnN0IHN0YXR1c1ZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodWRTdGF0dXNWYWx1ZScpOwoKICBpZiAoc3RhdGUuZ2FtZU1vZGUgPT09ICdkZWNrJykgewogICAgcHJvZ0xhYmVsLnRleHRDb250ZW50ID0gJ1NwZWNpbWVuJzsKICAgIHByb2dWYWwudGV4dENvbnRlbnQgPSBgJHtNYXRoLm1pbihzdGF0ZS5jdXJyZW50SW5kZXggKyAxLCBzdGF0ZS5kZWNrLmxlbmd0aCl9LyR7c3RhdGUuZGVjay5sZW5ndGh9YDsKICAgIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ0xpdmVzJzsKICAgIHN0YXR1c1ZhbC50ZXh0Q29udGVudCA9ICfinaQnLnJlcGVhdChNYXRoLm1heCgwLCBzdGF0ZS5saXZlcykpICsgJ+KZoScucmVwZWF0KE1hdGgubWF4KDAsIDMgLSBzdGF0ZS5saXZlcykpOwogIH0gZWxzZSBpZiAoc3RhdGUuZ2FtZU1vZGUgPT09ICdydXNoJykgewogICAgcHJvZ0xhYmVsLnRleHRDb250ZW50ID0gJ1NvcnRlZCc7CiAgICBwcm9nVmFsLnRleHRDb250ZW50ID0gYCR7c3RhdGUudG90YWxBbnN3ZXJlZH1gOwogICAgc3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnQ2xvY2snOwogICAgc3RhdHVzVmFsLnRleHRDb250ZW50ID0gYCR7c3RhdGUucnVzaFNlY29uZHNMZWZ0fXNgOwogIH0gZWxzZSB7CiAgICBwcm9nTGFiZWwudGV4dENvbnRlbnQgPSAnSW5zcGVjdGVkJzsKICAgIHByb2dWYWwudGV4dENvbnRlbnQgPSBgJHtzdGF0ZS50b3RhbEFuc3dlcmVkfWA7CiAgICBzdGF0dXNMYWJlbC50ZXh0Q29udGVudCA9ICdNb2RlJzsKICAgIHN0YXR1c1ZhbC50ZXh0Q29udGVudCA9ICfiiJ4gTGFiJzsKICB9CgogIGNvbnN0IGFjY1BjdCA9IHN0YXRlLnRvdGFsQW5zd2VyZWQgPiAwCiAgICA/IE1hdGgucm91bmQoKHN0YXRlLnRvdGFsQ29ycmVjdCAvIHN0YXRlLnRvdGFsQW5zd2VyZWQpICogMTAwKQogICAgOiAxMDA7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY3VyYWN5VHJhY2tlclRleHQnKS50ZXh0Q29udGVudCA9CiAgICBgU2Vzc2lvbiBBY2N1cmFjeTogJHthY2NQY3R9JSAoJHtzdGF0ZS50b3RhbENvcnJlY3R9LyR7c3RhdGUudG90YWxBbnN3ZXJlZH0pYDsKfQoKZnVuY3Rpb24gc3VibWl0Tm92YUd1ZXNzKGd1ZXNzZWRHcm91cCkgewogIGlmIChzdGF0ZS5hbnN3ZXJlZCB8fCAhc3RhdGUuY3VycmVudFNwZWNpbWVuKSByZXR1cm47CiAgY29uc3QgaXRlbSA9IHN0YXRlLmN1cnJlbnRTcGVjaW1lbjsKICBzdGF0ZS5hbnN3ZXJlZCA9IHRydWU7CiAgc3RhdGUubGFzdEd1ZXNzID0gZ3Vlc3NlZEdyb3VwOwogIHN0YXRlLnRvdGFsQW5zd2VyZWQgKz0gMTsKCiAgY29uc3QgaXNDb3JyZWN0ID0gZ3Vlc3NlZEdyb3VwID09PSBpdGVtLm5vdmE7CiAgaWYgKGlzQ29ycmVjdCkgewogICAgc3RhdGUuc3RyZWFrICs9IDE7CiAgICBzdGF0ZS5iZXN0U3RyZWFrID0gTWF0aC5tYXgoc3RhdGUuYmVzdFN0cmVhaywgc3RhdGUuc3RyZWFrKTsKICAgIHN0YXRlLnRvdGFsQ29ycmVjdCArPSAxOwogICAgY29uc3QgYmFzZVBvaW50cyA9IHN0YXRlLmNsdWVzUmV2ZWFsZWQgPyA3NSA6IDEwMDsKICAgIGNvbnN0IGNsdWVCb251cyA9IHN0YXRlLmNsdWVNb2RlICE9PSAnYm90aCcgPyAyNSA6IDA7CiAgICBjb25zdCBzdHJlYWtCb251cyA9IE1hdGgubWluKDEwMCwgKHN0YXRlLnN0cmVhayAtIDEpICogMjApOwogICAgY29uc3QgcG9pbnRzID0gYmFzZVBvaW50cyArIGNsdWVCb251cyArIHN0cmVha0JvbnVzOwogICAgc3RhdGUubGFzdFBvaW50c0Vhcm5lZCA9IHBvaW50czsKICAgIHN0YXRlLnNjb3JlICs9IHBvaW50czsKICAgIFNvdW5kRlguY29ycmVjdCgpOwogICAgc3Bhd25DYW52YXNQYXJ0aWNsZXMoTk9WQV9HUk9VUF9NRVRBW2l0ZW0ubm92YV0uY29sb3IsIDI4KTsKICB9IGVsc2UgewogICAgc3RhdGUuc3RyZWFrID0gMDsKICAgIHN0YXRlLmxhc3RQb2ludHNFYXJuZWQgPSAwOwogICAgaWYgKHN0YXRlLmdhbWVNb2RlID09PSAnZGVjaycpIHsKICAgICAgc3RhdGUubGl2ZXMgPSBNYXRoLm1heCgwLCBzdGF0ZS5saXZlcyAtIDEpOwogICAgfQogICAgU291bmRGWC53cm9uZygpOwogICAgc3Bhd25DYW52YXNQYXJ0aWNsZXMoJyNlZjQ0NDQnLCAxOCk7CiAgfQoKICBzdGF0ZS5yb3VuZEhpc3RvcnkucHVzaCh7CiAgICBuYW1lOiBpdGVtLm5hbWUsCiAgICBhY3R1YWw6IGl0ZW0ubm92YSwKICAgIGd1ZXNzZWQ6IGd1ZXNzZWRHcm91cCwKICAgIGNvcnJlY3Q6IGlzQ29ycmVjdAogIH0pOwoKICByZW5kZXJDdXJyZW50U3BlY2ltZW5VSSgpOwogIHVwZGF0ZUhVRCgpOwoKICBpZiAoc3RhdGUuZ2FtZU1vZGUgPT09ICdkZWNrJyAmJiBzdGF0ZS5saXZlcyA8PSAwKSB7CiAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgc2hvd1JvdW5kU3VtbWFyeSgnT3V0IG9mIExpdmVzISBJbnNwZWN0b3IgU2hpZnQgRW5kZWQnKTsKICAgIH0sIDE0MDApOwogIH0KfQoKZnVuY3Rpb24gc2hvd1JvdW5kU3VtbWFyeShoZWFkbGluZSkgewogIGlmIChzdGF0ZS5ydXNoVGltZXJJZCkgewogICAgY2xlYXJJbnRlcnZhbChzdGF0ZS5ydXNoVGltZXJJZCk7CiAgICBzdGF0ZS5ydXNoVGltZXJJZCA9IG51bGw7CiAgfQogIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnlNb2RhbCcpOwogIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFRpdGxlJykudGV4dENvbnRlbnQgPSBoZWFkbGluZTsKCiAgY29uc3QgYWNjID0gc3RhdGUudG90YWxBbnN3ZXJlZCA+IDAKICAgID8gTWF0aC5yb3VuZCgoc3RhdGUudG90YWxDb3JyZWN0IC8gc3RhdGUudG90YWxBbnN3ZXJlZCkgKiAxMDApCiAgICA6IDA7CgogIGxldCByYW5rID0gJ0p1bmlvciBMYWJlbCBSZWFkZXInOwogIGlmIChhY2MgPj0gOTAgJiYgc3RhdGUudG90YWxBbnN3ZXJlZCA+PSA1KSByYW5rID0gJ0NoaWVmIE5PVkEgRm9vZCBTY2llbnRpc3QnOwogIGVsc2UgaWYgKGFjYyA+PSA3NSkgcmFuayA9ICdTZW5pb3IgSW5ncmVkaWVudCBEZXRlY3RpdmUnOwogIGVsc2UgaWYgKGFjYyA+PSA1NSkgcmFuayA9ICdDZXJ0aWZpZWQgR3JvY2VyeSBJbnNwZWN0b3InOwoKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxCYWRnZScpLnRleHRDb250ZW50ID0gYFJhbms6ICR7cmFua31gOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFN1YnRpdGxlJykudGV4dENvbnRlbnQgPQogICAgYFlvdSBjb3JyZWN0bHkgY2xhc3NpZmllZCAke3N0YXRlLnRvdGFsQ29ycmVjdH0gb3V0IG9mICR7c3RhdGUudG90YWxBbnN3ZXJlZH0gZm9vZCBzcGVjaW1lbnMgYWNyb3NzIE5PVkEgR3JvdXBzIDHigJM0LmA7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsU2NvcmUnKS50ZXh0Q29udGVudCA9IHN0YXRlLnNjb3JlLnRvTG9jYWxlU3RyaW5nKCk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQWNjdXJhY3knKS50ZXh0Q29udGVudCA9IGAke2FjY30lYDsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxCZXN0U3RyZWFrJykudGV4dENvbnRlbnQgPSBgJHtzdGF0ZS5iZXN0U3RyZWFrfXhgOwoKICBjb25zdCBsaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxIaXN0b3J5TGlzdCcpOwogIGxpc3RFbC5pbm5lckhUTUwgPSAnJzsKICBpZiAoc3RhdGUucm91bmRIaXN0b3J5Lmxlbmd0aCA9PT0gMCkgewogICAgbGlzdEVsLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIHB5LTIgdGV4dC1jZW50ZXIiPk5vIHNwZWNpbWVucyBjbGFzc2lmaWVkIHlldC48L2Rpdj5gOwogIH0gZWxzZSB7CiAgICBzdGF0ZS5yb3VuZEhpc3RvcnkuZm9yRWFjaChlbnRyeSA9PiB7CiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgICByb3cuY2xhc3NOYW1lID0gJ2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0zIHB5LTEuNSByb3VuZGVkLWxnIGJnLXNsYXRlLTkwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCB0ZXh0LXhzJzsKICAgICAgcm93LmlubmVySFRNTCA9IGAKICAgICAgICA8c3BhbiBjbGFzcz0iZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTIwMCB0cnVuY2F0ZSBwci0yIj4ke2VudHJ5LmNvcnJlY3QgPyAn4pyFJyA6ICfinYwnfSAke2VudHJ5Lm5hbWV9PC9zcGFuPgogICAgICAgIDxzcGFuIGNsYXNzPSJtb25vIHNocmluay0wICR7ZW50cnkuY29ycmVjdCA/ICd0ZXh0LWVtZXJhbGQtNDAwJyA6ICd0ZXh0LXJvc2UtNDAwJ30iPgogICAgICAgICAgTk9WQSAke2VudHJ5LmFjdHVhbH0gJHtlbnRyeS5jb3JyZWN0ID8gJycgOiBgKEd1ZXNzZWQgJHtlbnRyeS5ndWVzc2VkfSlgfQogICAgICAgIDwvc3Bhbj4KICAgICAgYDsKICAgICAgbGlzdEVsLmFwcGVuZENoaWxkKHJvdyk7CiAgICB9KTsKICB9Cn0KCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KLy8gSFRNTDUgQ2FudmFzIE9wdGljYWwgU2Nhbm5lciAoRHJhd3MgUmVhbCBGb29kIFBob3RvICsgUGFja2FnaW5nIENhcmQpCi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KbGV0IGNhbnZhcyA9IG51bGw7CmxldCBjdHggPSBudWxsOwoKZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkgewogIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FubmVyQ2FudmFzJyk7CiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc0NvbnRhaW5lcicpOwogIGlmICghY2FudmFzIHx8ICFjb250YWluZXIpIHJldHVybjsKICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsKICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOwogIGNvbnN0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7CiAgY2FudmFzLndpZHRoID0gTWF0aC5tYXgoMjgwLCBNYXRoLmZsb29yKHJlY3Qud2lkdGggKiBkcHIpKTsKICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMTkwLCBNYXRoLmZsb29yKHJlY3QuaGVpZ2h0ICogZHByKSk7CiAgY3R4LnNldFRyYW5zZm9ybShkcHIsIDAsIDAsIGRwciwgMCwgMCk7Cn0KCmZ1bmN0aW9uIHNwYXduQ2FudmFzUGFydGljbGVzKGNvbG9yLCBjb3VudCkgewogIGlmICghY2FudmFzKSByZXR1cm47CiAgY29uc3QgdyA9IGNhbnZhcy5jbGllbnRXaWR0aCB8fCA1MDA7CiAgY29uc3QgaCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgfHwgMjQwOwogIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgewogICAgY29uc3QgYW5nbGUgPSAoTWF0aC5QSSAqIDIgKiBpKSAvIGNvdW50ICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC40OwogICAgY29uc3Qgc3BlZWQgPSAyICsgTWF0aC5yYW5kb20oKSAqIDU7CiAgICBzdGF0ZS5wYXJ0aWNsZXMucHVzaCh7CiAgICAgIHg6IHcgLyAyLAogICAgICB5OiBoIC8gMiwKICAgICAgdng6IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkLAogICAgICB2eTogTWF0aC5zaW4oYW5nbGUpICogc3BlZWQgLSAxLjUsCiAgICAgIHNpemU6IDQgKyBNYXRoLnJhbmRvbSgpICogNSwKICAgICAgY29sb3IsCiAgICAgIGFscGhhOiAxCiAgICB9KTsKICB9Cn0KCmZ1bmN0aW9uIHJvdW5kUmVjdChnLCB4LCB5LCB3LCBoLCByKSB7CiAgZy5iZWdpblBhdGgoKTsKICBnLm1vdmVUbyh4ICsgciwgeSk7CiAgZy5hcmNUbyh4ICsgdywgeSwgeCArIHcsIHkgKyBoLCByKTsKICBnLmFyY1RvKHggKyB3LCB5ICsgaCwgeCwgeSArIGgsIHIpOwogIGcuYXJjVG8oeCwgeSArIGgsIHgsIHksIHIpOwogIGcuYXJjVG8oeCwgeSwgeCArIHcsIHksIHIpOwogIGcuY2xvc2VQYXRoKCk7Cn0KCmZ1bmN0aW9uIGRyYXdQcm9kdWN0SWxsdXN0cmF0aW9uKGcsIGl0ZW0sIGN4LCBjeSwgc2NhbGUgPSAxLCBpc0xvdXBlID0gZmFsc2UpIHsKICBnLnNhdmUoKTsKICBnLnRyYW5zbGF0ZShjeCwgY3kpOwogIGcuc2NhbGUoc2NhbGUsIHNjYWxlKTsKCiAgY29uc3QgcmVkYWN0VmlzdWFsID0gKHN0YXRlLmNsdWVNb2RlID09PSAnaW5ncmVkaWVudHMnICYmICFzdGF0ZS5hbnN3ZXJlZCk7CgogIGlmIChyZWRhY3RWaXN1YWwpIHsKICAgIGcuZmlsbFN0eWxlID0gJyMxZTI5M2InOwogICAgZy5zdHJva2VTdHlsZSA9ICcjZjU5ZTBiJzsKICAgIGcubGluZVdpZHRoID0gMzsKICAgIHJvdW5kUmVjdChnLCAtMTIwLCAtNzgsIDI0MCwgMTU2LCAxNik7CiAgICBnLmZpbGwoKTsKICAgIGcuc3Ryb2tlKCk7CgogICAgZy5maWxsU3R5bGUgPSAnI2Y1OWUwYic7CiAgICByb3VuZFJlY3QoZywgLTEwNiwgLTY2LCAyMTIsIDIyLCA2KTsKICAgIGcuZmlsbCgpOwogICAgZy5maWxsU3R5bGUgPSAnIzBmMTcyYSc7CiAgICBnLmZvbnQgPSAnOTAwIDEwcHggSW50ZXIsIHNhbnMtc2VyaWYnOwogICAgZy50ZXh0QWxpZ24gPSAnY2VudGVyJzsKICAgIGcuZmlsbFRleHQoJ0xBQkVMIERFVEVDVElWRSDigKIgUEhPVE8gUkVEQUNURUQnLCAwLCAtNTEpOwoKICAgIGcuZmlsbFN0eWxlID0gJyNlMmU4ZjAnOwogICAgZy5mb250ID0gJzkwMCAzNnB4IEpldEJyYWlucyBNb25vLCBtb25vc3BhY2UnOwogICAgZy5maWxsVGV4dCgnPycsIDAsIDgpOwoKICAgIGcuZmlsbFN0eWxlID0gJyM5NGEzYjgnOwogICAgZy5mb250ID0gJzYwMCAxMXB4IEludGVyLCBzYW5zLXNlcmlmJzsKICAgIGcuZmlsbFRleHQoJ1JlYWQgSW5ncmVkaWVudHMgb24gUmlnaHQg4oaSJywgMCwgNDIpOwogICAgZy5maWxsVGV4dCgnR3Vlc3MgTk9WQSAx4oCTNCB0byBSZXZlYWwgUGhvdG8nLCAwLCA1OCk7CiAgICBnLnJlc3RvcmUoKTsKICAgIHJldHVybjsKICB9CgogIC8vIENhcmQgQmFja2Ryb3AKICBnLmZpbGxTdHlsZSA9ICcjMGYxNzJhJzsKICBnLnN0cm9rZVN0eWxlID0gaXRlbS5wcmltYXJ5Q29sb3I7CiAgZy5saW5lV2lkdGggPSAzOwogIHJvdW5kUmVjdChnLCAtMTI4LCAtODIsIDI1NiwgMTY0LCAxNik7CiAgZy5maWxsKCk7CiAgZy5zdHJva2UoKTsKCiAgLy8gRHJhdyBBY3R1YWwgTG9hZGVkIFByb2R1Y3QgUGhvdG9ncmFwaCBpbnNpZGUgdGhlIENhbnZhcyBDYXJkIQogIGNvbnN0IGltZ09iaiA9IGxvYWRlZFBob3Rvc1tpdGVtLnBob3RvXTsKICBpZiAoaW1nT2JqICYmIGltZ09iai5jb21wbGV0ZSAmJiBpbWdPYmoubmF0dXJhbFdpZHRoID4gMCkgewogICAgZy5zYXZlKCk7CiAgICByb3VuZFJlY3QoZywgLTEyMCwgLTUwLCAyNDAsIDkyLCAxMCk7CiAgICBnLmNsaXAoKTsKICAgIC8vIENvbXB1dGUgZm9jdXMgb2Zmc2V0IGZyb20gcGhvdG9Gb2N1cyAoIjcyJSA0OCUiKQogICAgY29uc3QgcGFydHMgPSAoaXRlbS5waG90b0ZvY3VzIHx8ICc1MCUgNTAlJykuc3BsaXQoJyAnKTsKICAgIGNvbnN0IGZ4ID0gKHBhcnNlRmxvYXQocGFydHNbMF0pIHx8IDUwKSAvIDEwMDsKICAgIGNvbnN0IGZ5ID0gKHBhcnNlRmxvYXQocGFydHNbMV0pIHx8IDUwKSAvIDEwMDsKICAgIGNvbnN0IHNyY1cgPSBpbWdPYmoubmF0dXJhbFdpZHRoICogMC42NTsKICAgIGNvbnN0IHNyY0ggPSBpbWdPYmoubmF0dXJhbEhlaWdodCAqIDAuNTU7CiAgICBjb25zdCBzeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGltZ09iai5uYXR1cmFsV2lkdGggLSBzcmNXLCBmeCAqIGltZ09iai5uYXR1cmFsV2lkdGggLSBzcmNXIC8gMikpOwogICAgY29uc3Qgc3kgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihpbWdPYmoubmF0dXJhbEhlaWdodCAtIHNyY0gsIGZ5ICogaW1nT2JqLm5hdHVyYWxIZWlnaHQgLSBzcmNIIC8gMikpOwogICAgZy5kcmF3SW1hZ2UoaW1nT2JqLCBzeCwgc3ksIHNyY1csIHNyY0gsIC0xMjAsIC01MCwgMjQwLCA5Mik7CiAgICBnLnJlc3RvcmUoKTsKICB9CgogIC8vIFRvcCBIZWFkZXIgU3RhbXAKICBnLmZpbGxTdHlsZSA9IGl0ZW0ucHJpbWFyeUNvbG9yOwogIHJvdW5kUmVjdChnLCAtMTIwLCAtNzYsIDI0MCwgMjIsIDgpOwogIGcuZmlsbCgpOwogIGcuZmlsbFN0eWxlID0gJyNmZmZmZmYnOwogIGcuZm9udCA9ICc4MDAgOS41cHggSmV0QnJhaW5zIE1vbm8sIG1vbm9zcGFjZSc7CiAgZy50ZXh0QWxpZ24gPSAnY2VudGVyJzsKICBnLmZpbGxUZXh0KGl0ZW0ucGFja2FnZVN0YW1wLCAwLCAtNjEpOwoKICAvLyBCb3R0b20gU3BlY2ltZW4gVGl0bGUgJiBQcm9jZXNzIE1pY3JvLXN0YW1wCiAgZy5maWxsU3R5bGUgPSAnIzAyMDYxNyc7CiAgcm91bmRSZWN0KGcsIC0xMjAsIDQ2LCAyNDAsIDMwLCA4KTsKICBnLmZpbGwoKTsKICBnLmZpbGxTdHlsZSA9ICcjZjhmYWZjJzsKICBnLmZvbnQgPSAnODAwIDExcHggSW50ZXIsIHNhbnMtc2VyaWYnOwogIGcuZmlsbFRleHQoaXRlbS5uYW1lLnNsaWNlKDAsIDMyKSwgMCwgNTkpOwoKICBpZiAoaXNMb3VwZSB8fCBzdGF0ZS5jbHVlc1JldmVhbGVkIHx8IHN0YXRlLmFuc3dlcmVkKSB7CiAgICBnLmZpbGxTdHlsZSA9ICcjMzhiZGY4JzsKICAgIGcuZm9udCA9ICc3MDAgOC41cHggSmV0QnJhaW5zIE1vbm8sIG1vbm9zcGFjZSc7CiAgICBnLmZpbGxUZXh0KGBQUk9DRVNTOiAke2l0ZW0ucHJvY2Vzc01ldGhvZC50b1VwcGVyQ2FzZSgpfWAsIDAsIDcxKTsKICB9IGVsc2UgewogICAgZy5maWxsU3R5bGUgPSAnIzY0NzQ4Yic7CiAgICBnLmZvbnQgPSAnNjAwIDguNXB4IEpldEJyYWlucyBNb25vLCBtb25vc3BhY2UnOwogICAgZy5maWxsVGV4dCgnSE9WRVIgWC1SQVkgTE9VUEUgVE8gWk9PTSBQSE9UTyAmIFNUQU1QJywgMCwgNzEpOwogIH0KCiAgaWYgKHN0YXRlLmFuc3dlcmVkKSB7CiAgICBjb25zdCBiYWRnZUNvbG9yID0gTk9WQV9HUk9VUF9NRVRBW2l0ZW0ubm92YV0uY29sb3I7CiAgICBnLmZpbGxTdHlsZSA9IGJhZGdlQ29sb3I7CiAgICByb3VuZFJlY3QoZywgNTIsIC05MiwgNzgsIDI4LCA5KTsKICAgIGcuZmlsbCgpOwogICAgZy5zdHJva2VTdHlsZSA9ICcjMGYxNzJhJzsKICAgIGcubGluZVdpZHRoID0gMjsKICAgIGcuc3Ryb2tlKCk7CiAgICBnLmZpbGxTdHlsZSA9IGl0ZW0ubm92YSA9PT0gNCA/ICcjZmZmZmZmJyA6ICcjMGYxNzJhJzsKICAgIGcuZm9udCA9ICc5MDAgMTJweCBKZXRCcmFpbnMgTW9ubywgbW9ub3NwYWNlJzsKICAgIGcuZmlsbFRleHQoYE5PVkEgJHtpdGVtLm5vdmF9YCwgOTEsIC03NCk7CiAgfQoKICBnLnJlc3RvcmUoKTsKfQoKZnVuY3Rpb24gcmVuZGVyQ2FudmFzRnJhbWUoKSB7CiAgaWYgKCFjYW52YXMgfHwgIWN0eCkgewogICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckNhbnZhc0ZyYW1lKTsKICAgIHJldHVybjsKICB9CiAgY29uc3QgdyA9IGNhbnZhcy5jbGllbnRXaWR0aCB8fCA1MDA7CiAgY29uc3QgaCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgfHwgMjIwOwogIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7CgogIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDMwLCA0MSwgNTksIDAuNTUpJzsKICBjdHgubGluZVdpZHRoID0gMTsKICBjb25zdCBncmlkU3RlcCA9IDI4OwogIGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCArPSBncmlkU3RlcCkgewogICAgY3R4LmJlZ2luUGF0aCgpOwogICAgY3R4Lm1vdmVUbyh4LCAwKTsKICAgIGN0eC5saW5lVG8oeCwgaCk7CiAgICBjdHguc3Ryb2tlKCk7CiAgfQogIGZvciAobGV0IHkgPSAwOyB5IDwgaDsgeSArPSBncmlkU3RlcCkgewogICAgY3R4LmJlZ2luUGF0aCgpOwogICAgY3R4Lm1vdmVUbygwLCB5KTsKICAgIGN0eC5saW5lVG8odywgeSk7CiAgICBjdHguc3Ryb2tlKCk7CiAgfQoKICBjb25zdCBiZWx0WSA9IGggLSAzNjsKICBjdHguZmlsbFN0eWxlID0gJyMwZjE3MmEnOwogIGN0eC5maWxsUmVjdCgwLCBiZWx0WSwgdywgMzYpOwogIGN0eC5zdHJva2VTdHlsZSA9ICcjMzM0MTU1JzsKICBjdHgubGluZVdpZHRoID0gMjsKICBjdHguYmVnaW5QYXRoKCk7CiAgY3R4Lm1vdmVUbygwLCBiZWx0WSk7CiAgY3R4LmxpbmVUbyh3LCBiZWx0WSk7CiAgY3R4LnN0cm9rZSgpOwoKICBzdGF0ZS5iZWx0T2Zmc2V0ID0gKHN0YXRlLmJlbHRPZmZzZXQgKyAoc3RhdGUuZ2FtZU1vZGUgPT09ICdydXNoJyA/IDEuNiA6IDAuNSkpICUgMzY7CiAgY3R4LnN0cm9rZVN0eWxlID0gJyMxZTI5M2InOwogIGN0eC5saW5lV2lkdGggPSA0OwogIGZvciAobGV0IHggPSAtMzYgKyBzdGF0ZS5iZWx0T2Zmc2V0OyB4IDwgdyArIDM2OyB4ICs9IDM2KSB7CiAgICBjdHguYmVnaW5QYXRoKCk7CiAgICBjdHgubW92ZVRvKHgsIGJlbHRZICsgNSk7CiAgICBjdHgubGluZVRvKHggLSAxMiwgaCAtIDUpOwogICAgY3R4LnN0cm9rZSgpOwogIH0KCiAgc3RhdGUuY2FyZFNsaWRlWCArPSAoc3RhdGUuY2FyZFRhcmdldFggLSBzdGF0ZS5jYXJkU2xpZGVYKSAqIDAuMTY7CiAgY29uc3QgY2VudGVyWCA9IHcgLyAyICsgc3RhdGUuY2FyZFNsaWRlWDsKICBjb25zdCBjZW50ZXJZID0gaCAvIDIgLSAxMDsKCiAgaWYgKHN0YXRlLmN1cnJlbnRTcGVjaW1lbikgewogICAgZHJhd1Byb2R1Y3RJbGx1c3RyYXRpb24oY3R4LCBzdGF0ZS5jdXJyZW50U3BlY2ltZW4sIGNlbnRlclgsIGNlbnRlclksIDAuOTgsIGZhbHNlKTsKICB9CgogIHN0YXRlLnNjYW5MYXNlclkgPSAoc3RhdGUuc2Nhbkxhc2VyWSArIDEuNikgJSBNYXRoLm1heCg0MCwgaCAtIDQwKTsKICBjb25zdCBsYXNlckdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoY2VudGVyWCAtIDEzMCwgMCwgY2VudGVyWCArIDEzMCwgMCk7CiAgbGFzZXJHcmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgxNiwgMTg1LCAxMjksIDApJyk7CiAgbGFzZXJHcmFkLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDE2LCAxODUsIDEyOSwgMC4zNSknKTsKICBsYXNlckdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE2LCAxODUsIDEyOSwgMCknKTsKICBjdHguZmlsbFN0eWxlID0gbGFzZXJHcmFkOwogIGN0eC5maWxsUmVjdChjZW50ZXJYIC0gMTMwLCBzdGF0ZS5zY2FuTGFzZXJZLCAyNjAsIDIpOwoKICBmb3IgKGxldCBpID0gc3RhdGUucGFydGljbGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7CiAgICBjb25zdCBwID0gc3RhdGUucGFydGljbGVzW2ldOwogICAgcC54ICs9IHAudng7CiAgICBwLnkgKz0gcC52eTsKICAgIHAudnkgKz0gMC4xNDsKICAgIHAuYWxwaGEgLT0gMC4wMjI7CiAgICBpZiAocC5hbHBoYSA8PSAwKSB7CiAgICAgIHN0YXRlLnBhcnRpY2xlcy5zcGxpY2UoaSwgMSk7CiAgICAgIGNvbnRpbnVlOwogICAgfQogICAgY3R4LnNhdmUoKTsKICAgIGN0eC5nbG9iYWxBbHBoYSA9IE1hdGgubWF4KDAsIHAuYWxwaGEpOwogICAgY3R4LmZpbGxTdHlsZSA9IHAuY29sb3I7CiAgICBjdHguYmVnaW5QYXRoKCk7CiAgICBjdHguYXJjKHAueCwgcC55LCBwLnNpemUsIDAsIE1hdGguUEkgKiAyKTsKICAgIGN0eC5maWxsKCk7CiAgICBjdHgucmVzdG9yZSgpOwogIH0KCiAgaWYgKHN0YXRlLmxvdXBlRW5hYmxlZCAmJiBzdGF0ZS5wb2ludGVyLmFjdGl2ZSAmJiBzdGF0ZS5jdXJyZW50U3BlY2ltZW4pIHsKICAgIGNvbnN0IGx4ID0gc3RhdGUucG9pbnRlci54OwogICAgY29uc3QgbHkgPSBzdGF0ZS5wb2ludGVyLnk7CiAgICBjb25zdCByYWRpdXMgPSA1NDsKCiAgICBjdHguc2F2ZSgpOwogICAgY3R4LmJlZ2luUGF0aCgpOwogICAgY3R4LmFyYyhseCwgbHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpOwogICAgY3R4LmNsaXAoKTsKCiAgICBjdHguZmlsbFN0eWxlID0gJyMwMjA2MTcnOwogICAgY3R4LmZpbGxSZWN0KGx4IC0gcmFkaXVzLCBseSAtIHJhZGl1cywgcmFkaXVzICogMiwgcmFkaXVzICogMik7CgogICAgY29uc3QgZHggPSBseCAtIGNlbnRlclg7CiAgICBjb25zdCBkeSA9IGx5IC0gY2VudGVyWTsKICAgIGRyYXdQcm9kdWN0SWxsdXN0cmF0aW9uKGN0eCwgc3RhdGUuY3VycmVudFNwZWNpbWVuLCBseCAtIGR4ICogMS41NSwgbHkgLSBkeSAqIDEuNTUsIDEuNTUsIHRydWUpOwoKICAgIGN0eC5yZXN0b3JlKCk7CgogICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzOGJkZjgnOwogICAgY3R4LmxpbmVXaWR0aCA9IDM7CiAgICBjdHguYmVnaW5QYXRoKCk7CiAgICBjdHguYXJjKGx4LCBseSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7CiAgICBjdHguc3Ryb2tlKCk7CiAgfQoKICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyQ2FudmFzRnJhbWUpOwp9CgovLyBQYW50cnkgRGV4IFJlbmRlcmluZyAoV2l0aCBSZWFsIFByb2R1Y3QgUGhvdG9zIG9uIEV2ZXJ5IENhcmQpCmZ1bmN0aW9uIHJlbmRlclBhbnRyeURleCgpIHsKICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV4R3JpZENvbnRhaW5lcicpOwogIGlmICghY29udGFpbmVyKSByZXR1cm47CiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOwoKICBjb25zdCBxdWVyeSA9IHN0YXRlLmRleFF1ZXJ5LnRyaW0oKS50b0xvd2VyQ2FzZSgpOwogIGNvbnN0IGZpbHRlcmVkID0gU1BFQ0lNRU5TLmZpbHRlcihpdGVtID0+IHsKICAgIGNvbnN0IG1hdGNoZXNHcm91cCA9IHN0YXRlLmRleEZpbHRlciA9PT0gJ2FsbCcgfHwgU3RyaW5nKGl0ZW0ubm92YSkgPT09IFN0cmluZyhzdGF0ZS5kZXhGaWx0ZXIpOwogICAgY29uc3QgbWF0Y2hlc1RleHQgPSAhcXVlcnkgfHwKICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpIHx8CiAgICAgIGl0ZW0uY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSkgfHwKICAgICAgaXRlbS5pbmdyZWRpZW50cy5zb21lKGkgPT4gaS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpKTsKICAgIHJldHVybiBtYXRjaGVzR3JvdXAgJiYgbWF0Y2hlc1RleHQ7CiAgfSk7CgogIGZpbHRlcmVkLmZvckVhY2goaXRlbSA9PiB7CiAgICBjb25zdCBtZXRhID0gTk9WQV9HUk9VUF9NRVRBW2l0ZW0ubm92YV07CiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgICBjYXJkLmNsYXNzTmFtZSA9ICdiZy1zbGF0ZS05MDAvOTAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgaG92ZXI6Ym9yZGVyLXNsYXRlLTYwMCByb3VuZGVkLTJ4bCBvdmVyZmxvdy1oaWRkZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gdHJhbnNpdGlvbic7CiAgICBjYXJkLmlubmVySFRNTCA9IGAKICAgICAgPGRpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJyZWxhdGl2ZSBoLTM2IGJnLXNsYXRlLTk1MCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTgwMCI+CiAgICAgICAgICA8aW1nIHNyYz0iJHtpdGVtLnBob3RvfSIgYWx0PSIke2l0ZW0ubmFtZX0iIHN0eWxlPSJvYmplY3QtcG9zaXRpb246ICR7aXRlbS5waG90b0ZvY3VzIHx8ICc1MCUgNTAlJ30iIGNsYXNzPSJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciIgLz4KICAgICAgICAgIDxzcGFuIGNsYXNzPSJhYnNvbHV0ZSB0b3AtMi41IGxlZnQtMi41IHB4LTIuNSBweS0wLjUgcm91bmRlZC1tZCB0ZXh0LXhzIGZvbnQtYmxhY2sgbW9ubyBzaGFkb3cgJHttZXRhLmJhZGdlQ2xhc3N9Ij4KICAgICAgICAgICAgTk9WQSAke2l0ZW0ubm92YX0KICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgIDxzcGFuIGNsYXNzPSJhYnNvbHV0ZSBib3R0b20tMiByaWdodC0yIHB4LTIgcHktMC41IHJvdW5kZWQgYmctc2xhdGUtOTUwLzg1IHRleHQtWzEwcHhdIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS0yMDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDAiPgogICAgICAgICAgICAke2l0ZW0uY2F0ZWdvcnl9CiAgICAgICAgICA8L3NwYW4+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0icC00Ij4KICAgICAgICAgIDxoMyBjbGFzcz0idGV4dC1zbSBmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIj4ke2l0ZW0ubmFtZX08L2gzPgogICAgICAgICAgPHAgY2xhc3M9InRleHQtWzExcHhdIHRleHQtc2xhdGUtMzAwIG10LTEuNSBtb25vIGJnLXNsYXRlLTk1MC84MCBwLTIgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCI+CiAgICAgICAgICAgIDxzdHJvbmc+SW5ncmVkaWVudHM6PC9zdHJvbmc+ICR7aXRlbS5pbmdyZWRpZW50cy5tYXAoaSA9PiBpLm5hbWUpLmpvaW4oJywgJyl9CiAgICAgICAgICA8L3A+CiAgICAgICAgICA8cCBjbGFzcz0idGV4dC14cyB0ZXh0LXNsYXRlLTQwMCBtdC0yIGxlYWRpbmctcmVsYXhlZCI+JHtpdGVtLmV4cGxhbmF0aW9ufTwvcD4KICAgICAgICA8L2Rpdj4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InB4LTQgcGItNCI+CiAgICAgICAgPGJ1dHRvbiB0eXBlPSJidXR0b24iIGNsYXNzPSJ3LWZ1bGwgcHktMiByb3VuZGVkLXhsIGJnLXNsYXRlLTgwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCBob3Zlcjp0ZXh0LXNsYXRlLTk1MCB0ZXh0LXNsYXRlLTIwMCBmb250LWJvbGQgdGV4dC14cyB0cmFuc2l0aW9uIj4KICAgICAgICAgIEluc3BlY3Qgb24gU2Nhbm5lciBXb3JrYmVuY2gg4oaSCiAgICAgICAgPC9idXR0b24+CiAgICAgIDwvZGl2PgogICAgYDsKICAgIGNhcmQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIGxvYWRTcGVjaWZpY1NwZWNpbWVuQnlJZChpdGVtLmlkKTsKICAgIH0pOwogICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpOwogIH0pOwp9CgpmdW5jdGlvbiBzd2l0Y2hUYWIodGFiKSB7CiAgc3RhdGUuYWN0aXZlVGFiID0gdGFiOwogIGNvbnN0IHZpZXdzID0gewogICAgcGxheTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdQbGF5JyksCiAgICBndWlkZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdHdWlkZScpLAogICAgZGV4OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0RleCcpLAogICAgZ2l0aHViOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0dpdGh1YicpCiAgfTsKICBjb25zdCBidG5zID0gewogICAgcGxheTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYlBsYXlCdG4nKSwKICAgIGd1aWRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiR3VpZGVCdG4nKSwKICAgIGRleDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYkRleEJ0bicpLAogICAgZ2l0aHViOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiR2l0aHViQnRuJykKICB9OwoKICBPYmplY3Qua2V5cyh2aWV3cykuZm9yRWFjaChrID0+IHsKICAgIGlmICghdmlld3Nba10gfHwgIWJ0bnNba10pIHJldHVybjsKICAgIGlmIChrID09PSB0YWIpIHsKICAgICAgdmlld3Nba10uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7CiAgICAgIGJ0bnNba10uY2xhc3NOYW1lID0gJ3B4LTIuNSBzbTpweC0zLjUgcHktMS41IHJvdW5kZWQtbGcgdGV4dC14cyBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgYmctZW1lcmFsZC01MDAgdGV4dC1zbGF0ZS05NTAgc2hhZG93JzsKICAgIH0gZWxzZSB7CiAgICAgIHZpZXdzW2tdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOwogICAgICBidG5zW2tdLmNsYXNzTmFtZSA9ICdweC0yLjUgc206cHgtMy41IHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWFsbCB0ZXh0LXNsYXRlLTMwMCBob3Zlcjp0ZXh0LXdoaXRlJzsKICAgIH0KICB9KTsKCiAgaWYgKHRhYiA9PT0gJ3BsYXknKSB7CiAgICByZXNpemVDYW52YXMoKTsKICB9IGVsc2UgaWYgKHRhYiA9PT0gJ2RleCcpIHsKICAgIHJlbmRlclBhbnRyeURleCgpOwogIH0gZWxzZSBpZiAodGFiID09PSAnZ2l0aHViJyAmJiB0eXBlb2YgcmVuZGVyR2l0aHViQ29kZVZpZXdlciA9PT0gJ2Z1bmN0aW9uJykgewogICAgcmVuZGVyR2l0aHViQ29kZVZpZXdlcigpOwogIH0KfQoKZnVuY3Rpb24gc2V0R2FtZU1vZGUobW9kZSkgewogIHN0YXRlLmdhbWVNb2RlID0gbW9kZTsKICBjb25zdCBtYXAgPSB7CiAgICBkZWNrOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kZURlY2tCdG4nKSwKICAgIHJ1c2g6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RlUnVzaEJ0bicpLAogICAgcHJhY3RpY2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RlUHJhY3RpY2VCdG4nKQogIH07CiAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGsgPT4gewogICAgbWFwW2tdLmNsYXNzTmFtZSA9IGsgPT09IG1vZGUKICAgICAgPyAncHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgdHJhbnNpdGlvbicKICAgICAgOiAncHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uJzsKICB9KTsKICBzdGFydE5ld1JvdW5kKCk7Cn0KCmZ1bmN0aW9uIHNldENsdWVNb2RlKGNsdWUpIHsKICBzdGF0ZS5jbHVlTW9kZSA9IGNsdWU7CiAgY29uc3QgbWFwID0gewogICAgYm90aDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsdWVCb3RoQnRuJyksCiAgICBpbWFnZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsdWVJbWFnZUJ0bicpLAogICAgaW5ncmVkaWVudHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbHVlSW5ncmVkaWVudHNCdG4nKQogIH07CiAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGsgPT4gewogICAgbWFwW2tdLmNsYXNzTmFtZSA9IGsgPT09IGNsdWUKICAgICAgPyAncHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBiZy1lbWVyYWxkLTUwMCB0ZXh0LXNsYXRlLTk1MCB0cmFuc2l0aW9uJwogICAgICA6ICdweC0yLjUgcHktMSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24nOwogIH0pOwogIHJlbmRlckN1cnJlbnRTcGVjaW1lblVJKCk7Cn0KCmZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYlBsYXlCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYigncGxheScpKTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiR3VpZGVCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYignZ3VpZGUnKSk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYkRleEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3dpdGNoVGFiKCdkZXgnKSk7CiAgY29uc3QgZ2l0aHViQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYkdpdGh1YkJ0bicpOwogIGlmIChnaXRodWJCdG4pIHsKICAgIGdpdGh1YkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN3aXRjaFRhYignZ2l0aHViJykpOwogIH0KCiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvdW5kVG9nZ2xlQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICBTb3VuZEZYLm11dGVkID0gIVNvdW5kRlgubXV0ZWQ7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291bmRPbkljb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCBTb3VuZEZYLm11dGVkKTsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3VuZE9mZkljb24nKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nLCAhU291bmRGWC5tdXRlZCk7CiAgfSk7CgogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RlRGVja0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0R2FtZU1vZGUoJ2RlY2snKSk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGVSdXNoQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRHYW1lTW9kZSgncnVzaCcpKTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kZVByYWN0aWNlQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRHYW1lTW9kZSgncHJhY3RpY2UnKSk7CgogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbHVlQm90aEJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0Q2x1ZU1vZGUoJ2JvdGgnKSk7CiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsdWVJbWFnZUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0Q2x1ZU1vZGUoJ2ltYWdlJykpOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbHVlSW5ncmVkaWVudHNCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldENsdWVNb2RlKCdpbmdyZWRpZW50cycpKTsKCiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUxvdXBlQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICBzdGF0ZS5sb3VwZUVuYWJsZWQgPSAhc3RhdGUubG91cGVFbmFibGVkOwogICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdXBlU3RhdGVUZXh0Jyk7CiAgICB0eHQudGV4dENvbnRlbnQgPSBzdGF0ZS5sb3VwZUVuYWJsZWQgPyAnT04nIDogJ09GRic7CiAgICB0eHQuY2xhc3NOYW1lID0gc3RhdGUubG91cGVFbmFibGVkID8gJ2ZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtNDAwJyA6ICdmb250LWJvbGQgdGV4dC1zbGF0ZS00MDAnOwogIH0pOwogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0Um91bmRCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHN0YXJ0TmV3Um91bmQoKSk7CgogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FuQ2x1ZXNCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsKICAgIHN0YXRlLmNsdWVzUmV2ZWFsZWQgPSB0cnVlOwogICAgU291bmRGWC5zY2FuKCk7CiAgICByZW5kZXJDdXJyZW50U3BlY2ltZW5VSSgpOwogIH0pOwoKICBbMSwgMiwgMywgNF0uZm9yRWFjaChnID0+IHsKICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBndWVzc05vdmEke2d9QnRuYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzdWJtaXROb3ZhR3Vlc3MoZykpOwogIH0pOwoKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dFNwZWNpbWVuQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICBpZiAoc3RhdGUuYW5zd2VyZWQpIHsKICAgICAgbG9hZFNwZWNpbWVuQXQoc3RhdGUuY3VycmVudEluZGV4ICsgMSk7CiAgICB9CiAgfSk7CgogIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbFBsYXlBZ2FpbkJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc3RhcnROZXdSb3VuZCgpKTsKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxSZXZpZXdHdWlkZUJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gewogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnlNb2RhbCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOwogICAgc3dpdGNoVGFiKCdndWlkZScpOwogIH0pOwoKICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGV4LWZpbHRlci1idG4nKS5mb3JFYWNoKGJ0biA9PiB7CiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7CiAgICAgIHN0YXRlLmRleEZpbHRlciA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGV4LWZpbHRlcicpOwogICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGV4LWZpbHRlci1idG4nKS5mb3JFYWNoKGIgPT4gewogICAgICAgIGIuY2xhc3NOYW1lID0gYiA9PT0gYnRuCiAgICAgICAgICA/ICdkZXgtZmlsdGVyLWJ0biBweC0yLjUgcHktMSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGJnLWVtZXJhbGQtNTAwIHRleHQtc2xhdGUtOTUwJwogICAgICAgICAgOiAnZGV4LWZpbHRlci1idG4gcHgtMi41IHB5LTEgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC13aGl0ZSc7CiAgICAgIH0pOwogICAgICByZW5kZXJQYW50cnlEZXgoKTsKICAgIH0pOwogIH0pOwoKICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV4U2VhcmNoSW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7CiAgICBzdGF0ZS5kZXhRdWVyeSA9IGUudGFyZ2V0LnZhbHVlOwogICAgcmVuZGVyUGFudHJ5RGV4KCk7CiAgfSk7CgogIGNvbnN0IGNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY2FubmVyQ2FudmFzJyk7CiAgaWYgKGNFbCkgewogICAgY29uc3QgdXBkYXRlUG9pbnRlciA9IChjbGllbnRYLCBjbGllbnRZKSA9PiB7CiAgICAgIGNvbnN0IHJlY3QgPSBjRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7CiAgICAgIHN0YXRlLnBvaW50ZXIueCA9IGNsaWVudFggLSByZWN0LmxlZnQ7CiAgICAgIHN0YXRlLnBvaW50ZXIueSA9IGNsaWVudFkgLSByZWN0LnRvcDsKICAgICAgc3RhdGUucG9pbnRlci5hY3RpdmUgPSB0cnVlOwogICAgfTsKICAgIGNFbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHVwZGF0ZVBvaW50ZXIoZS5jbGllbnRYLCBlLmNsaWVudFkpKTsKICAgIGNFbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4geyBzdGF0ZS5wb2ludGVyLmFjdGl2ZSA9IGZhbHNlOyB9KTsKICAgIGNFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZSA9PiB7CiAgICAgIGlmIChlLnRvdWNoZXNbMF0pIHVwZGF0ZVBvaW50ZXIoZS50b3VjaGVzWzBdLmNsaWVudFgsIGUudG91Y2hlc1swXS5jbGllbnRZKTsKICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KTsKICAgIGNFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBlID0+IHsKICAgICAgaWYgKGUudG91Y2hlc1swXSkgdXBkYXRlUG9pbnRlcihlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpOwogICAgfSwgeyBwYXNzaXZlOiB0cnVlIH0pOwogICAgY0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4geyBzdGF0ZS5wb2ludGVyLmFjdGl2ZSA9IGZhbHNlOyB9KTsKICB9CgogIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7CiAgICBpZiAoZS50YXJnZXQgJiYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgZS50YXJnZXQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykpIHJldHVybjsKICAgIGlmIChzdGF0ZS5hY3RpdmVUYWIgIT09ICdwbGF5JykgcmV0dXJuOwoKICAgIGlmIChbJzEnLCAnMicsICczJywgJzQnXS5pbmNsdWRlcyhlLmtleSkpIHsKICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOwogICAgICBzdWJtaXROb3ZhR3Vlc3MoTnVtYmVyKGUua2V5KSk7CiAgICB9IGVsc2UgaWYgKGUua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdoJykgewogICAgICBlLnByZXZlbnREZWZhdWx0KCk7CiAgICAgIHN0YXRlLmNsdWVzUmV2ZWFsZWQgPSB0cnVlOwogICAgICBTb3VuZEZYLnNjYW4oKTsKICAgICAgcmVuZGVyQ3VycmVudFNwZWNpbWVuVUkoKTsKICAgIH0gZWxzZSBpZiAoKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdFbnRlcicpICYmIHN0YXRlLmFuc3dlcmVkKSB7CiAgICAgIGUucHJldmVudERlZmF1bHQoKTsKICAgICAgbG9hZFNwZWNpbWVuQXQoc3RhdGUuY3VycmVudEluZGV4ICsgMSk7CiAgICB9IGVsc2UgaWYgKGUua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdtJykgewogICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291bmRUb2dnbGVCdG4nKS5jbGljaygpOwogICAgfQogIH0pOwoKICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzKTsKfQoKd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsKICBiaW5kRXZlbnRzKCk7CiAgcmVzaXplQ2FudmFzKCk7CiAgc3RhcnROZXdSb3VuZCgpOwogIHJlbmRlclBhbnRyeURleCgpOwogIGluaXRHaXRodWJWaWV3ZXJFdmVudHMoKTsKICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyQ2FudmFzRnJhbWUpOwp9OwoK',
  'README.md': 'IyBTcG90IHRoZSBOT1ZBIEdyb3VwIOKAlCBGb29kIFByb2Nlc3NpbmcgJiBJbmdyZWRpZW50IERldGVjdGl2ZSBHYW1lCgpBbiBpbnRlcmFjdGl2ZSBIVE1MNSwgQ1NTMywgYW5kIEphdmFTY3JpcHQgYnJvd3NlciBnYW1lIHdoZXJlIHBsYXllcnMgaW5zcGVjdCByZWFsIGZvb2QgcGhvdG9ncmFwaHMgYW5kIGJhY2stb2YtcGFjayBpbmdyZWRpZW50IGRlY2xhcmF0aW9ucyB0byBjbGFzc2lmeSBwcm9kdWN0cyBpbnRvIHRoZSA0IG9mZmljaWFsICoqTk9WQSBGb29kIENsYXNzaWZpY2F0aW9uIEdyb3VwcyoqIChbT3BlbiBGb29kIEZhY3RzIE5PVkFdKGh0dHBzOi8vd29ybGQub3BlbmZvb2RmYWN0cy5vcmcvbm92YSkgJiBbRkFPIFVsdHJhLVByb2Nlc3NlZCBGb29kcyBGcmFtZXdvcmtdKGh0dHBzOi8vb3Blbmtub3dsZWRnZS5mYW8ub3JnL3NlcnZlci9hcGkvY29yZS9iaXRzdHJlYW1zLzUyNzdiMzc5LTBhY2ItNGQ5Ny1hNmEzLTYwMjc3NDEwNDYyOS9jb250ZW50KSkuCgojIyBSZXBvc2l0b3J5IFN0cnVjdHVyZQoKYGBgdGV4dArilJzilIDilIAgaW5kZXguaHRtbCAgICAgICMgTWFpbiBnYW1lIGxheW91dCAmIHZpZXdzIChTY2FubmVyIEdhbWUsIE5PVkEgR3VpZGUsIFBhbnRyeSBEZXgpCuKUnOKUgOKUgCBzdHlsZS5jc3MgICAgICAgIyBDb21wbGV0ZSBjdXN0b20gc3R5bGVzLCBhbmltYXRpb25zLCBhbmQgcmVzcG9uc2l2ZSBydWxlcwrilJzilIDilIAgc2NyaXB0LmpzICAgICAgICMgR2FtZSBzdGF0ZSBlbmdpbmUsIDI0IGZvb2Qgc3BlY2ltZW5zLCBDYW52YXMgc2Nhbm5lciAmIFdlYiBBdWRpbyBGWArilJzilIDilIAgaW1hZ2VzLyAgICAgICAgICMgMTAgc3R1ZGlvIGZvb2QgJiBwcm9kdWN0IHBob3RvZ3JhcGhzIG1hcHBlZCBhY3Jvc3MgYWxsIDI0IHNwZWNpbWVucwrilJTilIDilIAgUkVBRE1FLm1kICAgICAgICMgRGVwbG95bWVudCBpbnN0cnVjdGlvbnMgZm9yIEdpdEh1YiBQYWdlcwpgYGAKCiMjIEhvdyB0byBVcGxvYWQgJiBIb3N0IG9uIEdpdEh1YiBQYWdlcwoKMS4gQ3JlYXRlIGEgbmV3IHJlcG9zaXRvcnkgb24gR2l0SHViIChmb3IgZXhhbXBsZSwgYHNwb3QtdGhlLW5vdmEtZ3JvdXBgKS4KMi4gVXBsb2FkIGBpbmRleC5odG1sYCwgYHN0eWxlLmNzc2AsIGBzY3JpcHQuanNgLCBgUkVBRE1FLm1kYCwgYW5kIHRoZSBgaW1hZ2VzL2AgZm9sZGVyIHRvIHRoZSByb290IG9mIHlvdXIgcmVwb3NpdG9yeS4KMy4gSW4geW91ciBHaXRIdWIgcmVwb3NpdG9yeSwgZ28gdG8gKipTZXR0aW5ncyDihpIgUGFnZXMqKi4KNC4gVW5kZXIgKipCdWlsZCBhbmQgZGVwbG95bWVudCoqLCBzZWxlY3QgKipEZXBsb3kgZnJvbSBhIGJyYW5jaCoqLCBjaG9vc2UgYG1haW5gIChhbmQgYC8gKHJvb3QpYCksIGFuZCBjbGljayAqKlNhdmUqKi4KNS4gWW91ciBsaXZlIGdhbWUgd2lsbCBiZSBwdWJsaXNoZWQgYXQgYGh0dHBzOi8vPHlvdXItdXNlcm5hbWU+LmdpdGh1Yi5pby9zcG90LXRoZS1ub3ZhLWdyb3VwL2AuCgojIyBDb250cm9scyAmIE1vZGVzCgotICoqQ2hhbGxlbmdlIENsdWUgRmlsdGVycyoqOgogIC0gKipJbWFnZSArIEluZ3JlZGllbnRzKio6IEluc3BlY3QgYm90aCB0aGUgc3R1ZGlvIGZvb2QgcGhvdG9ncmFwaC9zY2FubmVyIGFuZCB0aGUgZGVjbGFyZWQgaW5ncmVkaWVudCBsaXN0LgogIC0gKipJbWFnZSBPbmx5Kio6IFNwb3QgdGhlIE5PVkEgY2xhc3NpZmljYXRpb24gc3RyaWN0bHkgZnJvbSB0aGUgcHJvZHVjdCBwaG90b2dyYXBoIGFuZCBvcHRpY2FsIHNjYW5uZXIuCiAgLSAqKkluZ3JlZGllbnRzIE9ubHkgKExhYmVsIERldGVjdGl2ZSkqKjogVGhlIHByb2R1Y3QgcGhvdG9ncmFwaCBpcyBzZWFsZWQgdW50aWwgeW91IGNsYXNzaWZ5IHRoZSBmb29kIHN0cmljdGx5IGZyb20gaXRzIGluZ3JlZGllbnQgbGlzdC4KLSAqKktleWJvYXJkIFNob3J0Y3V0cyoqOgogIC0gYDFgLCBgMmAsIGAzYCwgYDRgOiBHdWVzcyBOT1ZBIEdyb3VwIDEsIDIsIDMsIG9yIDQKICAtIGBIYDogSGlnaGxpZ2h0IGN1bGluYXJ5IChHcm91cCAyKSB2cy4gaW5kdXN0cmlhbCB1bHRyYS1wcm9jZXNzZWQgKEdyb3VwIDQpIGluZ3JlZGllbnQgY2x1ZXMKICAtIGBTcGFjZWAgb3IgYEVudGVyYDogQWR2YW5jZSB0byB0aGUgbmV4dCBmb29kIHNwZWNpbWVuCiAgLSBgTWA6IE11dGUvdW5tdXRlIHN5bnRoZXNpemVkIFdlYiBBdWRpbyBzb3VuZCBlZmZlY3RzCg=='
};

function decodeRepoFile(fname) {
  const encoded = GITHUB_REPO_FILES_B64[fname] || '';
  try {
    return decodeURIComponent(Array.prototype.map.call(atob(encoded), function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  } catch (e) {
    return '';
  }
}

function renderGithubCodeViewer() {
  const pre = document.getElementById('githubCodePre');
  if (!pre) return;
  const fname = state.activeCodeFile || 'index.html';
  pre.textContent = decodeRepoFile(fname);
  document.querySelectorAll('.code-file-tab').forEach(btn => {
    const f = btn.getAttribute('data-code-file');
    btn.className = f === fname
      ? 'code-file-tab px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-500 text-white mono'
      : 'code-file-tab px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950 text-slate-300 hover:text-white border border-slate-800 mono';
  });
}

function initGithubViewerEvents() {
  document.querySelectorAll('.code-file-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCodeFile = btn.getAttribute('data-code-file');
      renderGithubCodeViewer();
    });
  });
  const copyBtn = document.getElementById('copySourceBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const fname = state.activeCodeFile || 'index.html';
      const content = decodeRepoFile(fname);
      const ta = document.createElement('textarea');
      ta.value = content;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      copyBtn.textContent = '✓ Copied ' + fname + '!';
      setTimeout(() => { copyBtn.textContent = '📋 Copy Current File'; }, 1800);
    });
  }
  const dlBtn = document.getElementById('downloadSourceBtn');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      const fname = state.activeCodeFile || 'index.html';
      const content = decodeRepoFile(fname);
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fname;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }
  renderGithubCodeViewer();
}
