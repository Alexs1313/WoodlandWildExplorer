export type WoodllandwldexplorrFactCard = {
  id: string;
  emoji: string;
  title: string;
  body: string;
};

export type WoodllandwldexplorrMatchQuestion = {
  id: string;
  statements: string[];
  options: string[];
  correctByStatementIndex: Record<number, string>;
};

export const wodllandwldexplorrFactCards: WoodllandwldexplorrFactCard[] = [
  {
    id: 'tree-network',
    emoji: '🌳',
    title: 'Ancient Tree Networks',
    body:
      'Trees in a forest communicate through underground fungal networks, sharing nutrients and even warning signals. Scientists call this the "Wood Wide Web."',
  },
  {
    id: 'monarch',
    emoji: '🦋',
    title: 'Monarch Migration',
    body:
      'Monarch butterflies can migrate up to 4,800 km from Canada to Mexico — and remarkably, the same individual butterfly makes the entire journey without ever having traveled the route before.',
  },
  {
    id: 'owl',
    emoji: '🦉',
    title: "Owl's Silent Flight",
    body:
      'Owls have specially adapted feathers with edges that reduce flight noise. This allows them to approach prey almost silently, especially at night.',
  },
  {
    id: 'fungi',
    emoji: '🍄',
    title: 'Fungi Recyclers',
    body:
      'Fungi break down dead wood, fallen leaves, and old plant material. They return nutrients to the soil and keep the forest cycle alive.',
  },
  {
    id: 'wolf-trails',
    emoji: '🐺',
    title: 'Wolf Trails',
    body:
      'Wolves can travel dozens of kilometers in a single day while searching for food, checking territory, or following prey. Their endurance makes them one of the most successful forest predators.',
  },
  {
    id: 'forest-internet',
    emoji: '🌳',
    title: 'Forest Internet',
    body:
      'Trees can exchange signals and nutrients through underground fungal networks. This hidden system helps some forests respond to stress, damage, and seasonal change.',
  },
  {
    id: 'silent-wings',
    emoji: '🦉',
    title: 'Silent Wings',
    body:
      'Owls have specially shaped feathers that reduce flight noise. This allows them to approach prey almost silently, especially at night.',
  },
  {
    id: 'tiny-pollinators',
    emoji: '🐝',
    title: 'Tiny Pollinators',
    body:
      'Many wild plants depend on bees, butterflies, beetles, flies, and moths for pollination. Without these small insects, many forest flowers and fruits would disappear.',
  },
  {
    id: 'deer-highways',
    emoji: '🦌',
    title: 'Deer Highways',
    body:
      'Deer often use the same paths through forests for years. These natural trails can also be followed by smaller animals looking for safe routes.',
  },
  {
    id: 'forgotten-seeds',
    emoji: '🐿️',
    title: 'Forgotten Seeds',
    body:
      'Squirrels bury nuts and seeds for later, but they do not always find them again. Some forgotten seeds grow into new trees.',
  },
  {
    id: 'berry-spreaders',
    emoji: '🐻',
    title: 'Berry Spreaders',
    body:
      'Bears eat large amounts of berries and later spread the seeds through their droppings. This helps many forest plants reach new places.',
  },
  {
    id: 'night-hunters',
    emoji: '🦇',
    title: 'Night Hunters',
    body:
      'Bats can eat hundreds of insects in one night. Their hunting helps control mosquito, moth, and beetle populations.',
  },
  {
    id: 'ant-engineers',
    emoji: '🐜',
    title: 'Ant Engineers',
    body:
      'Ants move soil, spread seeds, clean dead insects, and build complex underground nests. Their small actions can strongly affect forest structure.',
  },
  {
    id: 'clever-foxes',
    emoji: '🦊',
    title: 'Clever Foxes',
    body:
      'Foxes can adapt to forests, fields, mountains, and even cities. Their flexible diet and sharp senses help them survive in many environments.',
  },
  {
    id: 'rain-signals',
    emoji: '🐸',
    title: 'Rain Signals',
    body:
      'Frogs and toads often become more active after rain because wet conditions protect their skin and make it easier to move safely.',
  },
  {
    id: 'web-traps',
    emoji: '🕷️',
    title: 'Web Traps',
    body:
      'Spider webs are not just sticky traps. Some webs can sense vibrations, helping spiders know where prey has landed.',
  },
  {
    id: 'wing-patterns',
    emoji: '🦋',
    title: 'Wing Patterns',
    body:
      'Butterfly wing colors can help with camouflage, warning signals, attracting mates, or confusing predators during escape.',
  },
  {
    id: 'forest-ploughs',
    emoji: '🐗',
    title: 'Forest Ploughs',
    body:
      'Wild boars dig through soil while searching for roots, insects, and fungi. This behavior changes the forest floor and can help some seeds germinate.',
  },
  {
    id: 'plant-warnings',
    emoji: '🌿',
    title: 'Plant Warnings',
    body:
      'Some plants release chemical signals when damaged by insects. Nearby plants may respond by strengthening their own defenses.',
  },
  {
    id: 'hidden-tracks',
    emoji: '🐾',
    title: 'Hidden Tracks',
    body:
      'Animal tracks can reveal direction, speed, size, and behavior. A single footprint can tell a careful observer what happened before the animal disappeared.',
  },
  {
    id: 'feather-clues',
    emoji: '🪶',
    title: 'Feather Clues',
    body:
      'Bird feathers are designed for flight, warmth, display, and protection. Their shape and color can reveal a lot about the bird’s lifestyle.',
  },
  {
    id: 'sun-power',
    emoji: '🐍',
    title: 'Sun Power',
    body:
      'Reptiles rely on outside heat to regulate body temperature. That is why snakes and lizards often bask in sunny places before becoming active.',
  },
  {
    id: 'nocturnal-world',
    emoji: '🌙',
    title: 'Nocturnal World',
    body:
      'Many forest animals are active at night to avoid predators, escape heat, or hunt when their prey is easier to find.',
  },
  {
    id: 'caterpillar-appetite',
    emoji: '🐛',
    title: 'Caterpillar Appetite',
    body:
      'Caterpillars can eat huge amounts of leaves compared with their body size. This energy helps them transform into butterflies or moths.',
  },
  {
    id: 'sharp-vision',
    emoji: '🦅',
    title: 'Sharp Vision',
    body:
      'Many birds of prey can spot movement from far away. Their eyesight helps them detect prey across forests, fields, and mountain slopes.',
  },
  {
    id: 'wetland-filters',
    emoji: '💧',
    title: 'Wetland Filters',
    body:
      'Wetlands can trap sediments, absorb nutrients, and support many species. They act like living filters in natural landscapes.',
  },
  {
    id: 'old-tree-homes',
    emoji: '🌲',
    title: 'Old Tree Homes',
    body:
      'Ancient trees with hollows, cracks, and dead branches provide homes for owls, bats, insects, fungi, and small mammals.',
  },
  {
    id: 'spiny-defense',
    emoji: '🦔',
    title: 'Spiny Defense',
    body:
      'Hedgehogs roll into a tight ball when threatened. Their spines create a protective shield against many predators.',
  },
  {
    id: 'river-travelers',
    emoji: '🐟',
    title: 'River Travelers',
    body:
      'Some fish migrate long distances between rivers, lakes, and seas. Their journeys connect different ecosystems.',
  },
  {
    id: 'color-warnings',
    emoji: '🐞',
    title: 'Color Warnings',
    body:
      'Bright colors in insects often warn predators that the animal may taste bad or be toxic. Ladybirds are a classic example.',
  },
  {
    id: 'nest-architects',
    emoji: '🐦',
    title: 'Nest Architects',
    body:
      'Bird nests can be made from grass, twigs, mud, moss, feathers, spider silk, or even animal hair. Each species builds in its own clever way.',
  },
  {
    id: 'underground-homes',
    emoji: '🦡',
    title: 'Underground Homes',
    body:
      'Badgers live in tunnel systems called setts. Some setts can be used by generations of badgers for many decades.',
  },
  {
    id: 'forest-comeback',
    emoji: '🌱',
    title: 'Forest Comeback',
    body:
      'After fire, storms, or fallen trees, forests often begin a slow recovery. New light reaches the ground, allowing young plants to grow.',
  },
  {
    id: 'nature-builders',
    emoji: '🦫',
    title: 'Nature Builders',
    body:
      'Beavers create dams that slow water flow and form ponds. These wetlands can support fish, frogs, insects, birds, and many water-loving plants.',
  },
  {
    id: 'slow-but-strong',
    emoji: '🐌',
    title: 'Slow but Strong',
    body:
      'Snails may look fragile, but their shells protect them from many dangers. Some species can seal themselves inside during dry periods to survive.',
  },
  {
    id: 'morning-chorus',
    emoji: '🐦',
    title: 'Morning Chorus',
    body:
      'Birds often sing most actively at dawn because sound travels well in cool, calm air. Their songs help defend territory and attract mates.',
  },
  {
    id: 'warning-signals',
    emoji: '🦨',
    title: 'Warning Signals',
    body:
      'Many animals give warning signs before defending themselves. They may raise fur, hiss, stamp, flash bright colors, or make loud sounds.',
  },
  {
    id: 'oak-generations',
    emoji: '🌰',
    title: 'Oak Generations',
    body:
      'A single oak tree can produce thousands of acorns in one season. Only a small number survive long enough to become mature trees.',
  },
  {
    id: 'hidden-nests',
    emoji: '🐇',
    title: 'Hidden Nests',
    body:
      'Some young animals, like leverets, stay still and hidden instead of running away. Their camouflage helps protect them from predators.',
  },
  {
    id: 'soil-workers',
    emoji: '🪱',
    title: 'Soil Workers',
    body:
      'Earthworms mix soil, break down dead leaves, and improve air and water movement underground. Healthy forests often depend on active soil life.',
  },
  {
    id: 'wetland-nurseries',
    emoji: '🦢',
    title: 'Wetland Nurseries',
    body:
      'Many birds use wetlands as safe breeding and feeding areas. Shallow water, reeds, and mudflats provide shelter and plenty of food.',
  },
  {
    id: 'seed-carriers',
    emoji: '🐜',
    title: 'Seed Carriers',
    body:
      'Some ants carry seeds to their nests because the seeds have nutritious parts attached. The seeds may later sprout in new places.',
  },
  {
    id: 'thermal-riders',
    emoji: '🦅',
    title: 'Thermal Riders',
    body:
      'Large birds often use rising warm air currents to glide with little effort. This helps them travel long distances while saving energy.',
  },
  {
    id: 'head-turners',
    emoji: '🦉',
    title: 'Head Turners',
    body:
      'Owls can rotate their heads far because their eyes are fixed in place. This helps them scan their surroundings without moving their whole body.',
  },
  {
    id: 'scent-messages',
    emoji: '🐾',
    title: 'Scent Messages',
    body:
      'Many mammals leave scent marks on trees, rocks, or paths. These marks can show territory, identity, breeding condition, or travel routes.',
  },
  {
    id: 'flower-timing',
    emoji: '🐝',
    title: 'Flower Timing',
    body:
      'Some flowers open at specific times of day to match their pollinators. Day flowers may attract bees, while night flowers may attract moths.',
  },
  {
    id: 'antler-cycle',
    emoji: '🦌',
    title: 'Antler Cycle',
    body:
      'Deer grow and shed antlers every year. New antlers are covered in soft velvet while they are growing.',
  },
  {
    id: 'leaf-blanket',
    emoji: '🍂',
    title: 'Leaf Blanket',
    body:
      'Fallen leaves protect soil from cold and erosion. As they decompose, they return nutrients to the forest floor.',
  },
  {
    id: 'tongue-testing',
    emoji: '🐍',
    title: 'Tongue Testing',
    body:
      'Snakes flick their tongues to collect scent particles from the air and ground. This helps them track prey, predators, and mates.',
  },
  {
    id: 'living-skin',
    emoji: '🐸',
    title: 'Living Skin',
    body:
      'Amphibians can absorb water through their skin. That is why many frogs, toads, and salamanders need moist habitats.',
  },
  {
    id: 'dew-webs',
    emoji: '🕸️',
    title: 'Dew Webs',
    body:
      'Spider webs become easier to see when morning dew collects on the silk. The droplets reveal patterns that are usually almost invisible.',
  },
  {
    id: 'winter-listening',
    emoji: '🦊',
    title: 'Winter Listening',
    body:
      'Foxes can hear small animals moving under snow or grass. They often leap high and dive nose-first to catch hidden prey.',
  },
  {
    id: 'clean-water-clues',
    emoji: '🐟',
    title: 'Clean Water Clues',
    body:
      'Some aquatic insects live only in clean streams. Their presence can show that a freshwater habitat is healthy.',
  },
  {
    id: 'tree-rings',
    emoji: '🌲',
    title: 'Tree Rings',
    body:
      'Tree rings can reveal age, growth speed, drought years, fire events, and climate patterns. Each ring is a small record of the tree’s past.',
  },
  {
    id: 'migration-wings',
    emoji: '🦋',
    title: 'Migration Wings',
    body:
      'Some butterflies migrate over huge distances. Their journeys can connect forests, meadows, mountains, and coastlines across countries.',
  },
  {
    id: 'mud-baths',
    emoji: '🐗',
    title: 'Mud Baths',
    body:
      'Wild boars and deer may roll in mud to cool down, remove parasites, or protect skin from insects.',
  },
  {
    id: 'upside-down-rest',
    emoji: '🦇',
    title: 'Upside-Down Rest',
    body:
      'Bats hang upside down because their feet lock naturally around branches or cave surfaces. This position lets them drop quickly into flight.',
  },
  {
    id: 'grassland-secrets',
    emoji: '🌾',
    title: 'Grassland Secrets',
    body:
      'Many wildflowers need open grasslands with low competition. When grasslands are abandoned, shrubs and trees can slowly replace them.',
  },
  {
    id: 'ancient-survivors',
    emoji: '🐢',
    title: 'Ancient Survivors',
    body:
      'Turtles and tortoises have changed slowly over millions of years. Their protective shells are one reason they survived through many environmental changes.',
  },
  {
    id: 'hidden-body',
    emoji: '🍄',
    title: 'Hidden Body',
    body:
      'The mushroom you see is only the fruiting part of a fungus. Most of the organism lives underground or inside wood as fine threads called mycelium.',
  },
  {
    id: 'feather-care',
    emoji: '🐦',
    title: 'Feather Care',
    body:
      'Birds clean and arrange their feathers through preening. This keeps feathers waterproof, warm, and ready for flight.',
  },
  {
    id: 'night-walker',
    emoji: '🦔',
    title: 'Night Walker',
    body:
      'A hedgehog can travel surprisingly far during one night while searching for beetles, worms, and other small creatures.',
  },
  {
    id: 'rain-forest-smell',
    emoji: '🌧️',
    title: 'Rain Forest Smell',
    body:
      'The earthy smell after rain often comes from natural compounds released by soil bacteria. This smell is called petrichor.',
  },
];

export const wodllandwldexplorrMatchQuestions: WoodllandwldexplorrMatchQuestion[] =
  [
    {
      id: 'q1',
      statements: [
        'The maximum distance a monarch butterfly can migrate.',
        'Trees communicate through underground fungal networks called...',
        'Wolves were reintroduced to Yellowstone in...',
      ],
      options: ['4,800 km', 'Wood Wide Web', '1995', '1,200 km', 'Forest Network', '1978'],
      correctByStatementIndex: {
        0: '4,800 km',
        1: 'Wood Wide Web',
        2: '1995',
      },
    },
    {
      id: 'q2',
      statements: [
        'The scientific name of the gray wolf.',
        'The European bison was once...',
        'The Eurasian lynx is recognized by its...',
      ],
      options: [
        'Canis lupus',
        'Extinct in the wild',
        'Black ear tufts',
        'Ursus arctos',
        'Blue wing feathers',
        'Desert horns',
      ],
      correctByStatementIndex: {
        0: 'Canis lupus',
        1: 'Extinct in the wild',
        2: 'Black ear tufts',
      },
    },
    {
      id: 'q3',
      statements: [
        'The European wildcat is mainly threatened by...',
        'The black stork usually nests in...',
        'The capercaillie is famous for its...',
      ],
      options: [
        'Hybridization with domestic cats',
        'Tall old trees',
        'Courtship display',
        'Ocean migration',
        'Underground burrows',
        'Color-changing skin',
      ],
      correctByStatementIndex: {
        0: 'Hybridization with domestic cats',
        1: 'Tall old trees',
        2: 'Courtship display',
      },
    },
    {
      id: 'q4',
      statements: [
        'The lady’s slipper orchid is known for its...',
        'The ghost orchid spends much of its life...',
        'The European yew is famous for being...',
      ],
      options: [
        'Pouch-shaped flower',
        'Hidden underground',
        'Very long-lived',
        'Floating leaves',
        'Bright blue bark',
        'Fast annual growth',
      ],
      correctByStatementIndex: {
        0: 'Pouch-shaped flower',
        1: 'Hidden underground',
        2: 'Very long-lived',
      },
    },
    {
      id: 'q5',
      statements: [
        'Fire salamanders are usually easier to see...',
        'Hazel dormice spend cold months in...',
        'Red squirrels help forests by...',
      ],
      options: [
        'After rain',
        'Hibernation',
        'Burying seeds',
        'Singing at sunrise',
        'Building stone dams',
        'Eating tree bark only',
      ],
      correctByStatementIndex: {
        0: 'After rain',
        1: 'Hibernation',
        2: 'Burying seeds',
      },
    },
    {
      id: 'q6',
      statements: [
        'The brown bear often lives in...',
        'The great grey owl is linked with...',
        'The forest reindeer is adapted to...',
      ],
      options: [
        'Mountain forests',
        'Boreal forests',
        'Taiga woodland',
        'Coral reefs',
        'Open ocean',
        'Tropical beaches',
      ],
      correctByStatementIndex: {
        0: 'Mountain forests',
        1: 'Boreal forests',
        2: 'Taiga woodland',
      },
    },
    {
      id: 'q7',
      statements: [
        'Fungi break down dead wood and return...',
        'Tree rings can reveal...',
        'Wetlands can act like natural...',
      ],
      options: [
        'Nutrients to soil',
        'Past climate patterns',
        'Water filters',
        'Solar mirrors',
        'Stone makers',
        'Wind engines',
      ],
      correctByStatementIndex: {
        0: 'Nutrients to soil',
        1: 'Past climate patterns',
        2: 'Water filters',
      },
    },
    {
      id: 'q8',
      statements: [
        'Wolves usually live in social groups called...',
        'Lynx usually hunt by using...',
        'Owls can fly quietly because of...',
      ],
      options: [
        'Packs',
        'Silent ambush',
        'Special feather edges',
        'Colonies',
        'Loud wing beats',
        'Long fishing nets',
      ],
      correctByStatementIndex: {
        0: 'Packs',
        1: 'Silent ambush',
        2: 'Special feather edges',
      },
    },
    {
      id: 'q9',
      statements: [
        'Snowdrops grow from underground...',
        'Bog rosemary grows mainly in...',
        'Twinflower usually grows on...',
      ],
      options: [
        'Bulbs',
        'Acidic peatlands',
        'Mossy forest floors',
        'Dry deserts',
        'Saltwater cliffs',
        'Bare sand dunes',
      ],
      correctByStatementIndex: {
        0: 'Bulbs',
        1: 'Acidic peatlands',
        2: 'Mossy forest floors',
      },
    },
    {
      id: 'q10',
      statements: [
        'The lesser spotted eagle migrates from Europe to...',
        'The black stork prefers forests near...',
        'Capercaillie males gather at display grounds called...',
      ],
      options: [
        'Africa',
        'Clean water',
        'Leks',
        'Australia',
        'Volcano vents',
        'Dens',
      ],
      correctByStatementIndex: {
        0: 'Africa',
        1: 'Clean water',
        2: 'Leks',
      },
    },
    {
      id: 'q11',
      statements: [
        'Hedgehogs defend themselves by...',
        'Snakes collect scent particles by...',
        'Bats rest by hanging...',
      ],
      options: [
        'Rolling into a ball',
        'Flicking their tongues',
        'Upside down',
        'Changing feathers',
        'Building leaf towers',
        'Diving under snow',
      ],
      correctByStatementIndex: {
        0: 'Rolling into a ball',
        1: 'Flicking their tongues',
        2: 'Upside down',
      },
    },
    {
      id: 'q12',
      statements: [
        'The underground body of many fungi is called...',
        'Ants can help plants by carrying...',
        'Earthworms improve soil by mixing...',
      ],
      options: [
        'Mycelium',
        'Seeds',
        'Organic matter',
        'Moon dust',
        'Shell fragments',
        'Feathers',
      ],
      correctByStatementIndex: {
        0: 'Mycelium',
        1: 'Seeds',
        2: 'Organic matter',
      },
    },
    {
      id: 'q13',
      statements: [
        'The European bison is also called the...',
        'The Iberian lynx mainly depends on...',
        'The European mink is threatened by...',
      ],
      options: [
        'Wisent',
        'Rabbits',
        'Habitat loss',
        'Snow coral',
        'Palm fruit',
        'Mountain lava',
      ],
      correctByStatementIndex: {
        0: 'Wisent',
        1: 'Rabbits',
        2: 'Habitat loss',
      },
    },
    {
      id: 'q14',
      statements: [
        'Deer often use the same forest paths for...',
        'Foxes can hear prey moving under...',
        'Beavers change landscapes by building...',
      ],
      options: [
        'Many years',
        'Snow',
        'Dams',
        'Clouds',
        'Caves of ice',
        'Flower nests',
      ],
      correctByStatementIndex: {
        0: 'Many years',
        1: 'Snow',
        2: 'Dams',
      },
    },
    {
      id: 'q15',
      statements: [
        'Martagon lily flowers usually face...',
        'Pasque flowers are covered in soft...',
        'European holly berries are usually produced by...',
      ],
      options: [
        'Downward',
        'Silky hairs',
        'Female plants',
        'Male stones',
        'Underwater roots',
        'Invisible leaves',
      ],
      correctByStatementIndex: {
        0: 'Downward',
        1: 'Silky hairs',
        2: 'Female plants',
      },
    },
    {
      id: 'q16',
      statements: [
        'Animal footprints can show direction and...',
        'Scent marks can show territory and...',
        'Camera traps are often used to monitor...',
      ],
      options: [
        'Movement speed',
        'Identity',
        'Secretive animals',
        'Ocean depth',
        'Cloud color',
        'Tree age only',
      ],
      correctByStatementIndex: {
        0: 'Movement speed',
        1: 'Identity',
        2: 'Secretive animals',
      },
    },
    {
      id: 'q17',
      statements: [
        'Pelicans are strongly linked with large...',
        'Frogs need moisture because they absorb water through...',
        'Dragonflies begin life as aquatic...',
      ],
      options: [
        'Wetlands',
        'Skin',
        'Nymphs',
        'Dry caves',
        'Feathers',
        'Cones',
      ],
      correctByStatementIndex: {
        0: 'Wetlands',
        1: 'Skin',
        2: 'Nymphs',
      },
    },
    {
      id: 'q18',
      statements: [
        'Alpine ibex are adapted to steep...',
        'Chamois are known for strong mountain...',
        'Golden eagles hunt across open mountain...',
      ],
      options: [
        'Rocky slopes',
        'Agility',
        'Valleys',
        'Deep oceans',
        'Reed tunnels',
        'Tropical reefs',
      ],
      correctByStatementIndex: {
        0: 'Rocky slopes',
        1: 'Agility',
        2: 'Valleys',
      },
    },
    {
      id: 'q19',
      statements: [
        'Apex predators help regulate populations of...',
        'Deadwood provides habitat for insects and...',
        'Berries are eaten and spread by birds and...',
      ],
      options: [
        'Herbivores',
        'Fungi',
        'Mammals',
        'Minerals only',
        'Ocean waves',
        'Lightning',
      ],
      correctByStatementIndex: {
        0: 'Herbivores',
        1: 'Fungi',
        2: 'Mammals',
      },
    },
    {
      id: 'q20',
      statements: [
        'Old trees with hollows can shelter owls and...',
        'Fallen leaves protect and enrich the...',
        'Wild boars dig the forest floor while searching for...',
      ],
      options: [
        'Bats',
        'Soil',
        'Roots and insects',
        'Sea shells',
        'Cloud nests',
        'Ice crystals',
      ],
      correctByStatementIndex: {
        0: 'Bats',
        1: 'Soil',
        2: 'Roots and insects',
      },
    },
  ];

