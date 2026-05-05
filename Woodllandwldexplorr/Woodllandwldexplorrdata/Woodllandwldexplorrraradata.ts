import type {ImageSourcePropType} from 'react-native';

export type WoodllandwldexplorrRaraType =
  | 'animal'
  | 'bird'
  | 'amphibian'
  | 'plant';

export type WoodllandwldexplorrRaraItem = {
  id: string;
  title: string;
  scientificName: string;
  status: string;
  type: WoodllandwldexplorrRaraType;
  habitat: string;
  population: string;
  threats: string;
  about: string;
  facts: string[];
  image?: ImageSourcePropType;
};

export const wodllandwldexplorrRaraItems: WoodllandwldexplorrRaraItem[] = [
  {
    id: 'eurasian-lynx',
    title: 'Eurasian Lynx',
    scientificName: 'Lynx lynx',
    image: require('../../assets/imgs/wodllandwllimaan1.png'),
    status: 'Near Threatened',
    type: 'animal',
    habitat: 'Boreal forests, mountain forests, mixed woodlands',
    population: '~70,000 in Europe and Asia',
    threats:
      'Habitat fragmentation, illegal hunting, road accidents, loss of prey',
    about:
      'The Eurasian lynx is one of the most secretive forest predators in Europe. It has a short tail, long legs, large paws, and black ear tufts that make it easy to recognize. This animal prefers quiet forest territories with enough cover for hunting and resting. It usually avoids humans and is most active during twilight and night.\n\nThe lynx plays an important role in forest ecosystems because it helps control populations of deer, hares, and other medium-sized animals. It does not usually chase prey for long distances; instead, it relies on patience, camouflage, and a sudden powerful jump. In many European countries, the Eurasian lynx is protected because its populations disappeared from large areas in the past.',
    facts: [
      'Lynx paws act like natural snowshoes in winter.',
      'A lynx can detect prey by sound even when it is hidden.',
      'Each lynx usually lives alone in a large territory.',
      'The black ear tufts may help improve hearing and communication.',
      'Young lynxes stay with their mother for almost a year.',
    ],
  },
  {
    id: 'european-bison',
    title: 'European Bison',
    scientificName: 'Bison bonasus',
    image: require('../../assets/imgs/wodllandwllimaan2.png'),
    status: 'Near Threatened',
    type: 'animal',
    habitat: 'Ancient forests, forest edges, meadows, woodland clearings',
    population: '~9,000–10,000',
    threats: 'Limited genetic diversity, habitat loss, disease, human conflict',
    about:
      'The European bison, also called the wisent, is the heaviest wild land animal in Europe. It once disappeared from the wild, but careful breeding and reintroduction programs brought it back to forests and reserves. This animal is strongly connected with old woodland landscapes, where it moves between forest shade and open meadows.\n\nEuropean bison are grazers and browsers, feeding on grass, leaves, bark, shoots, and herbs. Their movement helps shape the forest floor, open small clearings, spread seeds, and create habitat diversity for insects and plants. Because all modern European bison descend from a small number of individuals, conservation programs closely monitor their health and genetics.',
    facts: [
      'European bison can weigh more than 800 kg.',
      'They were once extinct in the wild.',
      'Their grazing can help maintain open forest clearings.',
      'Calves are able to follow the herd soon after birth.',
      'Despite their size, they can move surprisingly quietly through woodland.',
    ],
  },
  {
    id: 'gray-wolf',
    title: 'Gray Wolf',
    scientificName: 'Canis lupus',
    image: require('../../assets/imgs/wodllandwllimaan3.png'),
    status: 'Vulnerable',
    type: 'animal',
    habitat: 'Forests, tundra, mountains, grasslands',
    population: '~200,000 globally',
    threats:
      'Persecution, habitat loss, road mortality, conflict with livestock',
    about:
      'The gray wolf is a highly intelligent social predator that lives in family groups called packs. In forest ecosystems, wolves usually hunt deer, wild boar, elk, and other ungulates. They are adaptable animals and can survive in different habitats, but they need large territories and enough prey to maintain stable populations.\n\nWolves are important apex predators because they influence the behavior and movement of herbivores. This can affect vegetation growth, forest regeneration, and the balance of many smaller species. Although wolves are often feared, they usually avoid people and rely on teamwork, communication, scent marking, and endurance during hunting.',
    facts: [
      'Wolves communicate through howls, scent, body posture, and facial expressions.',
      'A wolf pack is usually a family group, not a random group of animals.',
      'Wolves can travel more than 50 km in one day.',
      'Their howls can be heard from several kilometers away.',
    ],
  },
  {
    id: 'brown-bear',
    title: 'Brown Bear',
    scientificName: 'Ursus arctos',
    image: require('../../assets/imgs/wodllandwllimaan4.png'),
    status: 'Least Concern',
    type: 'animal',
    habitat: 'Mountain forests, taiga, mixed woodland, remote valleys',
    population: '~200,000 globally',
    threats: 'Habitat fragmentation, illegal killing, human conflict, roads',
    about:
      'The brown bear is one of the largest mammals living in European forests. It is powerful, cautious, and usually avoids humans. Brown bears are omnivores, meaning they eat both plant and animal food. Their diet may include berries, roots, nuts, insects, fish, carrion, small mammals, and sometimes larger prey.\n\nIn forest ecosystems, brown bears help spread seeds through their droppings and disturb soil while digging for roots or insects. These activities can create small changes in the forest floor that benefit plants and invertebrates. In colder regions, brown bears spend winter in dens and lower their activity to survive months when food is scarce.',
    facts: [
      'Brown bears can remember rich feeding areas for many years.',
      'They have an excellent sense of smell.',
      'Cubs stay with their mother for up to two or three years.',
      'A bear’s winter den can be hidden under roots, rocks, or snow.',
      'Brown bears may eat thousands of berries in a single day.',
      'They can run faster than many people expect.',
    ],
  },
  {
    id: 'european-wildcat',
    title: 'European Wildcat',
    scientificName: 'Felis silvestris',
    image: require('../../assets/imgs/wodllandwllimaan5.png'),
    status: 'Protected',
    type: 'animal',
    habitat: 'Deciduous forests, mixed woodland, forest edges, scrubland',
    population: 'Unknown, fragmented',
    threats: 'Hybridization, habitat loss, road accidents, disease',
    about:
      'The European wildcat is a shy forest cat that looks similar to a domestic tabby, but it has a thicker tail, stronger body, broader head, and more distinct wild features. It prefers dense forests, quiet valleys, and areas with enough cover for hunting and resting. Wildcat activity is mostly nocturnal, making it difficult to observe.\n\nThis species mainly hunts small mammals, especially mice and voles, but it may also catch birds, reptiles, and insects. One of its biggest conservation problems is hybridization with domestic cats, which can weaken the genetic identity of wild populations. Because of this, researchers often use camera traps, genetic samples, and field surveys to study wildcat distribution.',
    facts: [
      'The European wildcat is not the ancestor of most domestic cats.',
      'Its thick ringed tail has a blunt black tip.',
      'It is extremely secretive and rarely seen in daylight.',
      'Wildcats use scent marks to defend their territory.',
      'Camera traps are one of the best ways to monitor them.',
    ],
  },
  {
    id: 'capercaillie',
    title: 'Capercaillie',
    scientificName: 'Tetrao urogallus',
    image: require('../../assets/imgs/wodllandwllimaan6.png'),
    status: 'Declining',
    type: 'bird',
    habitat: 'Old coniferous forests, mountain forests, berry-rich woodland',
    population: 'Declining in parts of Europe',
    threats:
      'Forest disturbance, habitat fragmentation, climate change, collisions',
    about:
      'The capercaillie is a large forest grouse known for its impressive courtship display. Males gather at display grounds called leks, where they sing, fan their tails, and compete for attention. This bird needs quiet, mature forests with a rich understory, especially areas with bilberries and enough cover for nesting.\n\nCapercaillies are sensitive to disturbance because they rely on stable forest habitats and specific seasonal food sources. Chicks feed heavily on insects during their early life, while adults consume needles, buds, berries, leaves, and shoots. Conservation efforts often focus on protecting old forests and reducing disturbance near lekking sites.',
    facts: [
      'Male capercaillies are much larger than females.',
      'During display season, males produce clicking and popping sounds.',
      'In winter, they can survive by eating pine needles.',
      'Chicks need insect-rich areas to grow successfully.',
    ],
  },
  {
    id: 'black-stork',
    title: 'Black Stork',
    scientificName: 'Ciconia nigra',
    image: require('../../assets/imgs/wodllandwllimaan7.png'),
    status: 'Protected',
    type: 'bird',
    habitat: 'Old forests near rivers, wetlands, quiet woodland valleys',
    population: '~24,000–44,000 mature individuals globally',
    threats:
      'Forest disturbance, wetland loss, pollution, power line collisions',
    about:
      'The black stork is a shy and elegant bird that prefers remote forests near clean streams, rivers, marshes, and wetlands. Unlike the white stork, which often nests near villages, the black stork usually avoids human settlements and chooses tall old trees or cliffs for nesting.\n\nThis species feeds mostly on fish, amphibians, insects, and small aquatic animals. Its presence often indicates a relatively undisturbed forest-water ecosystem. Conservation work includes protecting nesting zones, monitoring breeding success, and preserving wetlands and forest streams.',
    facts: [
      'Black storks are much more secretive than white storks.',
      'They often return to the same nesting area for years.',
      'Their metallic dark feathers can shine green or purple in sunlight.',
      'They hunt slowly in shallow water.',
      'Young black storks leave the nest after about two months.',
    ],
  },
  {
    id: 'red-squirrel',
    title: 'Red Squirrel',
    scientificName: 'Sciurus vulgaris',
    image: require('../../assets/imgs/wodllandwllimaan8.png'),
    status: 'Least Concern',
    type: 'animal',
    habitat: 'Coniferous forests, mixed woodland, parks, old tree stands',
    population: 'Widespread but locally declining',
    threats: 'Invasive grey squirrels, disease, habitat fragmentation',
    about:
      'The red squirrel is a small tree-dwelling mammal with a bushy tail, sharp claws, and excellent climbing ability. It lives in forests where it feeds on seeds, nuts, cones, buds, fungi, berries, and sometimes bird eggs. Red squirrels build nests called dreys high in trees.\n\nIn some parts of Europe, red squirrels have declined because of competition with introduced grey squirrels and the spread of squirrelpox virus. Forest structure is also important because connected tree canopies allow squirrels to move safely above the ground.',
    facts: [
      'Red squirrels can leap between branches with impressive accuracy.',
      'They sometimes forget buried food, helping trees spread.',
      'Their ear tufts are usually more visible in winter.',
      'Their tail helps with balance and warmth.',
    ],
  },
  {
    id: 'hazel-dormouse',
    title: 'Hazel Dormouse',
    scientificName: 'Muscardinus avellanarius',
    image: require('../../assets/imgs/wodllandwllimaan9.png'),
    status: 'Vulnerable',
    type: 'animal',
    habitat: 'Deciduous woodland, hedgerows, forest edges, dense shrubs',
    population: 'Declining in parts of Europe',
    threats:
      'Loss of hedgerows, fragmentation, poor management, climate shifts',
    about:
      'The hazel dormouse is a tiny nocturnal mammal with golden-brown fur and large dark eyes. It lives in dense vegetation where it can climb through shrubs and branches without coming to the ground. Dormice spend much of the year hidden in nests and enter long hibernation during colder months.\n\nTheir survival depends on seasonal food availability—flowers in spring, insects in summer, and nuts or berries in autumn. Conservation monitoring often uses nest boxes and habitat surveys to understand where dormice still live.',
    facts: [
      'Hazel dormice can hibernate for several months.',
      'They rarely travel across open ground.',
      'Their large eyes help them move at night.',
      'They build round woven nests in shrubs or nest boxes.',
      'A connected hedgerow can act like a wildlife highway.',
    ],
  },
  {
    id: 'great-grey-owl',
    title: 'Great Grey Owl',
    scientificName: 'Strix nebulosa',
    image: require('../../assets/imgs/wodllandwllimaan10.png'),
    status: 'Least Concern',
    type: 'bird',
    habitat: 'Boreal forests, old coniferous woodland, forest bogs',
    population: 'Stable globally, scattered in Europe',
    threats: 'Forest loss, nest disturbance, prey availability shifts',
    about:
      'The great grey owl is one of the largest owls by length, although much of its size comes from fluffy feathers rather than body weight. It hunts small mammals such as voles and mice, and its large facial disc helps direct sound toward its ears.\n\nThis owl often nests in old nests built by other large birds or on broken tree tops. It depends on mature forest structures and open hunting areas such as bog edges and clearings.',
    facts: [
      'It can hear prey moving under snow.',
      'It has one of the largest facial discs among owls.',
      'Despite its size, it is lighter than many smaller-looking owls.',
      'It often uses abandoned nests of hawks or ravens.',
      'Its flight is almost silent.',
    ],
  },
  {
    id: 'european-pine-marten',
    title: 'European Pine Marten',
    scientificName: 'Martes martes',
    image: require('../../assets/imgs/wodllandwllimaan11.png'),
    status: 'Protected',
    type: 'animal',
    habitat: 'Old forests, mixed woodland, rocky forest slopes',
    population: 'Recovering in some areas',
    threats: 'Habitat loss, persecution, road mortality, poor connectivity',
    about:
      'The European pine marten is a slender forest predator with a long tail, sharp claws, and a creamy-yellow throat patch. It is an agile climber and can move through trees with confidence.\n\nIts diet includes small mammals, birds, insects, berries, carrion, and sometimes eggs. Pine martens need connected woodland because isolated forest patches make movement and breeding more difficult.',
    facts: [
      'Pine martens can climb trees almost as easily as squirrels.',
      'Their throat patch has a unique shape.',
      'They are mostly active at night and twilight.',
      'They eat both animal prey and forest berries.',
    ],
  },
  {
    id: 'lesser-spotted-eagle',
    title: 'Lesser Spotted Eagle',
    scientificName: 'Clanga pomarina',
    image: require('../../assets/imgs/wodllandwllimaan12.png'),
    status: 'Vulnerable',
    type: 'bird',
    habitat: 'Forest edges, wetlands, meadows, old woodland near open areas',
    population: 'Declining in parts of its range',
    threats:
      'Habitat loss, wetland drainage, nest disturbance, migration hazards',
    about:
      'The lesser spotted eagle is a medium-sized bird of prey that breeds in forested landscapes near meadows, wetlands, and open fields. It nests in trees and hunts in surrounding open habitats.\n\nThis eagle depends on a combination of mature forest for nesting and prey-rich areas for hunting. Because it migrates long distances, it is also affected by dangers along migration routes.',
    facts: [
      'They migrate from Europe to Africa.',
      'They often hunt by walking or standing in open fields.',
      'A pair may return to the same nesting territory for years.',
      'Young eagles begin migration without their parents.',
    ],
  },
  {
    id: 'forest-reindeer',
    title: 'Forest Reindeer',
    scientificName: 'Rangifer tarandus fennicus',
    image: require('../../assets/imgs/wodllandwllimaan13.png'),
    status: 'Near Threatened',
    type: 'animal',
    habitat: 'Boreal forests, mires, taiga woodland, remote wetlands',
    population: 'A few thousand in Europe',
    threats: 'Fragmentation, roads, predation pressure, disturbance',
    about:
      'The forest reindeer is a subspecies adapted to life in boreal forests and mires. It requires large, connected habitats because seasonal movements help it find food and reach calving areas.\n\nConservation work focuses on monitoring herds, protecting migration corridors, reducing fragmentation, and supporting natural reproduction.',
    facts: [
      'Forest reindeer have longer legs than many tundra reindeer.',
      'Both males and females can grow antlers.',
      'They are excellent swimmers.',
      'Calves can stand and move soon after birth.',
    ],
  },
  {
    id: 'fire-salamander',
    title: 'Fire Salamander',
    scientificName: 'Salamandra salamandra',
    image: require('../../assets/imgs/wodllandwllimaan14.png'),
    status: 'Protected',
    type: 'amphibian',
    habitat: 'Moist deciduous forests, mountain streams, shaded woodland',
    population: 'Declining in some areas',
    threats: 'Fungal disease, habitat loss, water pollution, road mortality',
    about:
      'The fire salamander is a striking amphibian with black skin and bright yellow or orange markings. It lives in cool, moist forests, usually near streams and damp leaf litter. Its bright colors warn predators that it can release toxic skin secretions.\n\nIt is mostly active at night or after rain. This species is sensitive to pollution, drought, forest drying, and disease, making it an important indicator of woodland moisture and freshwater quality.',
    facts: [
      'Every fire salamander has a unique pattern of yellow markings.',
      'It is most often seen after rain.',
      'Its bright colors are a warning signal to predators.',
      'Larvae develop in clean, cool water.',
      'They can live for many years in stable habitats.',
    ],
  },
  {
    id: 'european-hedgehog',
    title: 'European Hedgehog',
    scientificName: 'Erinaceus europaeus',
    image: require('../../assets/imgs/wodllandwllimaan15.png'),
    status: 'Declining',
    type: 'animal',
    habitat: 'Woodland edges, hedgerows, gardens, grasslands, scrub',
    population: 'Widespread but decreasing locally',
    threats: 'Road traffic, pesticides, fragmentation, loss of insects',
    about:
      'The European hedgehog is a small nocturnal mammal covered with sharp spines. It lives in woodland edges, hedgerows, gardens, meadows, and scrubby landscapes where it can find insects and shelter. When threatened, it rolls into a tight ball.\n\nThey need connected green spaces because walls, roads, and fences can block their movement. In colder seasons, hedgehogs hibernate in nests made of leaves and dry plant material.',
    facts: [
      'A hedgehog can have thousands of spines.',
      'It can travel long distances during one night.',
      'Hedgehogs are useful insect hunters.',
      'They hibernate when food becomes scarce.',
      'Baby hedgehogs are called hoglets.',
    ],
  },
  {
    id: 'ladys-slipper-orchid',
    title: 'Lady’s Slipper Orchid',
    scientificName: 'Cypripedium calceolus',
    image: require('../../assets/imgs/wodllandwllilsplnt1.png'),
    status: 'Protected / Rare',
    type: 'plant',
    habitat: 'Light woodlands, limestone forests, forest edges, shaded slopes',
    population: 'Fragmented and declining in many areas',
    threats: 'Habitat loss, illegal picking, forest overgrowth, trampling',
    about:
      'The lady’s slipper orchid is one of the most recognizable wild orchids in Europe. It has a large yellow pouch-shaped flower and darker reddish-brown petals. This plant usually grows in semi-shaded forest habitats, especially on limestone-rich soils.\n\nThe species is very sensitive to habitat changes because it depends on specific soil conditions and underground fungal partners that help young plants develop. It can take many years before a young lady’s slipper orchid produces its first flower. Because of its beauty, it has often suffered from illegal picking and digging.',
    facts: [
      'Its flower shape resembles a tiny slipper.',
      'Young plants may need several years before blooming.',
      'It depends on fungi in the soil during early growth.',
      'Some populations contain only a few flowering plants.',
      'It is one of Europe’s most famous protected orchids.',
    ],
  },
  {
    id: 'ghost-orchid',
    title: 'Ghost Orchid',
    scientificName: 'Epipogium aphyllum',
    image: require('../../assets/imgs/wodllandwllilsplnt2.png'),
    status: 'Rare / Protected',
    type: 'plant',
    habitat: 'Old beech forests, shaded woodland, humus-rich forest soil',
    population: 'Very scattered and unpredictable',
    threats:
      'Forest disturbance, soil damage, habitat drying, loss of old woodland',
    about:
      'The ghost orchid is one of Europe’s most mysterious forest plants. It has no green leaves and does not rely on ordinary photosynthesis in the same way as most plants. Instead, it lives hidden underground for much of its life and receives nutrients through relationships with fungi in the forest soil.\n\nThis orchid can remain unseen for many years, appearing above ground only when conditions are suitable. Its pale flowers give it a ghost-like appearance, and its unpredictable flowering makes it difficult to monitor.',
    facts: [
      'It has no normal green leaves.',
      'It may disappear from view for many years.',
      'The plant depends heavily on underground fungi.',
      'Its pale flowers inspired the name “ghost orchid.”',
      'It is one of the hardest European orchids to find.',
    ],
  },
  {
    id: 'snowdrop',
    title: 'Snowdrop',
    scientificName: 'Galanthus nivalis',
    image: require('../../assets/imgs/wodllandwllilsplnt3.png'),
    status: 'Protected in some regions',
    type: 'plant',
    habitat: 'Deciduous forests, woodland edges, river valleys, shaded meadows',
    population: 'Locally common but threatened by overcollection in some areas',
    threats:
      'Illegal harvesting, habitat destruction, trampling, land-use change',
    about:
      'The snowdrop is an early spring plant known for its small white hanging flowers. It often appears when snow is still melting. It grows from a bulb and usually forms groups in moist, shaded places such as deciduous forests, old parks, and river valleys.\n\nWild populations are vulnerable when bulbs are dug up or flowers are collected in large numbers. In many regions, wild snowdrops are protected to prevent uncontrolled harvesting and habitat loss.',
    facts: [
      'Snowdrops can bloom while snow is still on the ground.',
      'The plant grows from a small underground bulb.',
      'Ants can help spread its seeds.',
      'Its white flowers hang downward like tiny bells.',
      'Large wild colonies may take many years to develop.',
    ],
  },
  {
    id: 'carpathian-bellflower',
    title: 'Carpathian Bellflower',
    scientificName: 'Campanula carpatica',
    image: require('../../assets/imgs/wodllandwllilsplnt4.png'),
    status: 'Regionally protected',
    type: 'plant',
    habitat: 'Rocky slopes, mountain meadows, forest edges, limestone areas',
    population: 'Localized in mountain regions',
    threats: 'Habitat disturbance, trampling, climate change, collection',
    about:
      'The Carpathian bellflower is a mountain plant with open bell-shaped blue to violet flowers. It naturally grows in rocky and grassy habitats, especially in the Carpathian region and similar mountain environments.\n\nWild populations can be damaged by picking, trampling, and changes in mountain habitats. Since many mountain plants live in narrow ecological zones, shifts in temperature and vegetation patterns can affect where they are able to survive.',
    facts: [
      'Its flowers look like small open bells.',
      'It is strongly associated with mountain habitats.',
      'The plant prefers well-drained rocky soils.',
      'It can grow in cracks and shallow soil pockets.',
      'Its natural range is more limited than many common meadow flowers.',
    ],
  },
  {
    id: 'european-yew',
    title: 'European Yew',
    scientificName: 'Taxus baccata',
    image: require('../../assets/imgs/wodllandwllilsplnt5.png'),
    status: 'Protected in some regions',
    type: 'plant',
    habitat:
      'Ancient woodlands, shaded forests, rocky slopes, churchyard groves',
    population: 'Widespread but old natural stands are limited',
    threats: 'Overcutting, habitat loss, slow regeneration, browsing',
    about:
      'The European yew is a slow-growing evergreen tree that can live for many centuries. In natural forests, yews often grow in shaded places, limestone soils, ravines, and old woodland habitats.\n\nNatural populations can be slow to recover because the species grows slowly and young trees may be eaten by deer. Most parts of the tree are poisonous, except the fleshy red aril around the seed.',
    facts: [
      'Some yew trees can live for more than a thousand years.',
      'Most parts of the tree are toxic.',
      'Birds eat the red arils and spread the seeds.',
      'Yew wood was historically used for longbows.',
      'It can grow in deep shade better than many trees.',
    ],
  },
  {
    id: 'dwarf-birch',
    title: 'Dwarf Birch',
    scientificName: 'Betula nana',
    image: require('../../assets/imgs/wodllandwllilsplnt6.png'),
    status: 'Rare / Regionally threatened',
    type: 'plant',
    habitat: 'Bogs, tundra, peatlands, cold mountain wetlands',
    population: 'Scattered in cold northern and mountain habitats',
    threats: 'Climate warming, peatland drainage, habitat drying, overgrowth',
    about:
      'The dwarf birch is a small shrub adapted to cold, wet, and open habitats. It usually grows close to the ground, forming low woody patches in bogs and mountain wetlands.\n\nThis plant is considered a relic of colder periods in some regions, surviving in isolated pockets where suitable cold and wet conditions still exist.',
    facts: [
      'It is a birch, but usually grows as a low shrub.',
      'Its leaves are small and rounded.',
      'It survives in cold, wet habitats.',
      'Some isolated populations are relics from colder climatic periods.',
      'It can form dense patches close to the ground.',
    ],
  },
  {
    id: 'european-silver-fir',
    title: 'European Silver Fir',
    scientificName: 'Abies alba',
    image: require('../../assets/imgs/wodllandwllilsplnt7.png'),
    status: 'Locally threatened in some regions',
    type: 'plant',
    habitat: 'Mountain forests, mixed beech-fir forests, cool humid valleys',
    population: 'Widespread in Europe, declining in some local areas',
    threats:
      'Climate stress, drought, air pollution, browsing, unsuitable forestry',
    about:
      'The European silver fir is a tall coniferous tree found in cool mountain forests and mixed woodland. It has flat needles, upright cones, and smooth grey bark when young.\n\nSilver fir is sensitive to drought and environmental stress, especially in areas where climate conditions are becoming warmer and drier. Mature silver fir forests create shaded, moist woodland conditions.',
    facts: [
      'Its cones grow upright on branches.',
      'The needles usually have pale lines underneath.',
      'It can become one of the tallest trees in European forests.',
      'Mature trees provide nesting and feeding places for wildlife.',
      'It often grows in mixed forests with beech.',
    ],
  },
  {
    id: 'martagon-lily',
    title: 'Martagon Lily',
    scientificName: 'Lilium martagon',
    image: require('../../assets/imgs/wodllandwllilsplnt8.png'),
    status: 'Protected in many regions',
    type: 'plant',
    habitat: 'Light forests, clearings, mountain meadows, forest edges',
    population: 'Locally scattered',
    threats: 'Picking, habitat loss, forest overgrowth, grazing pressure',
    about:
      'The martagon lily is a graceful wild lily with downward-facing purple to pink flowers and strongly curved petals. It grows in open woodland, mountain meadows, forest edges, and clearings.\n\nIt grows from a bulb and can be damaged if flowers are picked or bulbs are removed. It needs stable habitats and can disappear when woodland becomes too dense.',
    facts: [
      'Its petals curl backward like a small turban.',
      'It grows from an underground bulb.',
      'The flowers often have dark spots.',
      'It can reach more than one meter in height.',
      'Wild populations are easily damaged by picking.',
    ],
  },
  {
    id: 'bog-rosemary',
    title: 'Bog Rosemary',
    scientificName: 'Andromeda polifolia',
    image: require('../../assets/imgs/wodllandwllilsplnt9.png'),
    status: 'Regionally rare / Protected',
    type: 'plant',
    habitat: 'Raised bogs, peatlands, wet acidic soils, open mires',
    population: 'Scattered in suitable peatland habitats',
    threats:
      'Peatland drainage, habitat drying, peat extraction, climate change',
    about:
      'Bog rosemary is a small evergreen shrub that grows in wet acidic peatlands and bogs. It has narrow leathery leaves and delicate pink bell-shaped flowers.\n\nPeatlands are fragile ecosystems, and bog rosemary depends on stable water levels and acidic conditions. When bogs are drained or damaged, the plant can disappear.',
    facts: [
      'It is not related to the rosemary used in cooking.',
      'It grows in acidic, waterlogged peat.',
      'Its flowers look like tiny pink bells.',
      'It is adapted to nutrient-poor habitats.',
      'Healthy bogs can store large amounts of carbon.',
    ],
  },
  {
    id: 'twinflower',
    title: 'Twinflower',
    scientificName: 'Linnaea borealis',
    image: require('../../assets/imgs/wodllandwllilsplnt10.png'),
    status: 'Rare / Declining',
    type: 'plant',
    habitat: 'Boreal forests, old pine woods, mossy woodland floors',
    population: 'Scattered and declining in southern parts of its range',
    threats: 'Loss of old forests, habitat fragmentation, structure changes',
    about:
      'The twinflower is a delicate creeping plant of cool northern forests. It has small rounded leaves and pairs of pale pink bell-shaped flowers.\n\nIt prefers stable forest microclimates, moss layers, and relatively undisturbed soil conditions, and may decline when old forest structure disappears.',
    facts: [
      'The flowers usually grow in pairs.',
      'It was one of Carl Linnaeus’s favorite plants.',
      'It creeps low across the forest floor.',
      'It prefers cool, mossy woodland.',
      'It can decline when old forest structure disappears.',
    ],
  },
  {
    id: 'european-holly',
    title: 'European Holly',
    scientificName: 'Ilex aquifolium',
    image: require('../../assets/imgs/wodllandwllilsplnt11.png'),
    status: 'Locally protected in some regions',
    type: 'plant',
    habitat:
      'Shaded forests, woodland edges, old hedgerows, Atlantic woodlands',
    population: 'Widespread but locally sensitive',
    threats: 'Overcutting, habitat loss, severe frost, browsing',
    about:
      'European holly is an evergreen tree or shrub with glossy spiny leaves and bright red berries. It grows in shaded forests, old hedgerows, and humid Atlantic-influenced habitats.\n\nHolly berries are eaten by birds, and its evergreen foliage offers cover in winter. Only female plants produce berries after pollination.',
    facts: [
      'Only female holly plants produce berries.',
      'Its leaves are often spiny on lower branches.',
      'Birds help spread its seeds.',
      'It stays green throughout winter.',
      'Dense holly bushes provide excellent shelter for wildlife.',
    ],
  },
  {
    id: 'pasque-flower',
    title: 'Pasque Flower',
    scientificName: 'Pulsatilla vulgaris',
    image: require('../../assets/imgs/wodllandwllilsplnt12.png'),
    status: 'Vulnerable / Protected',
    type: 'plant',
    habitat: 'Dry grasslands, open woodland edges, limestone slopes',
    population: 'Declining and fragmented',
    threats: 'Grassland loss, habitat overgrowth, ploughing, picking',
    about:
      'The pasque flower is a spring-flowering plant with silky hairs and purple petals. It grows on dry limestone grasslands and open woodland edges.\n\nIt has declined because traditional open habitats have been lost, ploughed, fertilized, or allowed to become overgrown. Pasque flowers need open conditions and do not compete well with tall dense vegetation.',
    facts: [
      'Its flower buds are covered in soft silky hairs.',
      'It blooms early in spring.',
      'The seed heads look feathery after flowering.',
      'It prefers dry, open limestone habitats.',
      'Many populations are small and isolated.',
    ],
  },
];
