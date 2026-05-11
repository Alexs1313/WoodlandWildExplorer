import {ImageSourcePropType} from 'react-native';

export type ThewlddsexpllorerLocation = {
  id: string;
  title: string;
  cityCountry: string;
  coords: {lat: number; lon: number};
  tags: string[];
  description: string;
  image: ImageSourcePropType;
};

export const thewlddsexpllorerLocations: ThewlddsexpllorerLocation[] = [
  {
    id: 'donana',
    title: 'Doñana Biological Reserve',
    cityCountry: 'Almonte / Seville area, Spain',
    coords: {lat: 37.0, lon: -6.43},
    tags: ['Wetlands', 'Bird Migration', 'Iberian Lynx'],
    description:
      'Doñana is one of Europe’s most important wetland and dune ecosystems, combining marshes, Mediterranean scrubland, pine forests, mobile dunes, lagoons, and coastal habitats. Scientific work in the area is strongly connected with the Doñana Biological Station, which coordinates long-term ecological research in the protected landscape. Research focuses on bird migration, wetland dynamics, predator-prey relationships, endangered species recovery, amphibians, reptiles, aquatic systems, and the effects of climate, water availability, agriculture, and human pressure on fragile habitats. The area is especially known for studies involving migratory birds, waterbirds, the Iberian lynx, imperial eagle, and the ecological balance between wetlands and dry Mediterranean environments.',
    image: require('../../assets/imgs/wodllandwllilok1.png'),
  },
  {
    id: 'bialowieza',
    title: 'Białowieża Forest',
    cityCountry: 'Białowieża, Poland / Belarus border region',
    coords: {lat: 52.7, lon: 23.87},
    tags: ['Primeval Forest', 'European Bison', 'Old-Growth Ecology'],
    description:
      'Białowieża Forest is one of the last large remnants of lowland primeval forest in Europe. It contains ancient stands of oak, hornbeam, spruce, lime, ash, and other broad-leaved forest communities, with large amounts of deadwood that support fungi, insects, birds, and mammals. Research in this forest often focuses on old-growth forest processes, natural regeneration, deadwood biodiversity, forest structure, predator ecology, ungulates, and the European bison population. The site is especially significant for studying how large mammals interact with ancient forest habitats and how protected forests respond to climate change, bark beetle outbreaks, and different conservation strategies.',
    image: require('../../assets/imgs/wodllandwllilok2.png'),
  },
  {
    id: 'swiss-national-park',
    title: 'Swiss National Park',
    cityCountry: 'Zernez, Switzerland',
    coords: {lat: 46.67, lon: 10.17},
    tags: ['Alpine Ecology', 'Long-Term Monitoring', 'Wilderness'],
    description:
      'Swiss National Park is one of the oldest national parks in Europe and a strict alpine nature reserve in the Lower Engadine. The park protects mountain forests, alpine meadows, scree slopes, valleys, rivers, and high-elevation habitats. Research here is centered on long-term natural processes, including vegetation change, ungulate grazing, alpine plant communities, forest succession, geomorphology, climate effects, snow cover, spatial ecology, and human-nature relationships around protected areas. Monitoring uses geoinformation, mapped field data, and repeated surveys to document ecological change over long time periods.',
    image: require('../../assets/imgs/wodllandwllilok3.png'),
  },
  {
    id: 'danube-delta',
    title: 'Danube Delta Biosphere Reserve',
    cityCountry: 'Tulcea, Romania',
    coords: {lat: 45.2, lon: 29.34},
    tags: ['Delta Wetlands', 'Fish Ecology', 'Reed Habitats'],
    description:
      'The Danube Delta Biosphere Reserve is a vast wetland system of channels, reedbeds, lakes, sandbanks, floodplain forests, and coastal lagoons where the Danube River reaches the Black Sea. Research in the reserve covers fish populations, aquatic ecology, reedbed mapping, water chemistry, pollution, bird colonies, wetland vegetation, habitat zoning, hydrological change, and the relationship between river dynamics and biodiversity.',
    image: require('../../assets/imgs/wodllandwllilok4.png'),
  },
  {
    id: 'bavarian-forest',
    title: 'Bavarian Forest National Park',
    cityCountry: 'Grafenau / Neuschönau, Germany',
    coords: {lat: 49.06, lon: 13.2},
    tags: ['Forest Dynamics', 'Lynx Monitoring', 'Mountain Forests'],
    description:
      'Bavarian Forest National Park lies along the German-Czech border and forms part of a larger mountain forest ecosystem together with Šumava National Park. The landscape includes spruce forests, mixed mountain forests, peatlands, streams, deadwood-rich stands, and natural regeneration zones. Research in the park focuses on forest succession after bark beetle disturbance, deadwood ecology, freshwater invertebrates, mountain forest structure, remote sensing, wildlife corridors, lynx monitoring, bird habitats, and long-term genetic monitoring of aquatic insects.',
    image: require('../../assets/imgs/wodllandwllilok5.png'),
  },
  {
    id: 'cairngorms',
    title: 'Cairngorms National Park',
    cityCountry: 'Aviemore / Grantown-on-Spey, Scotland, United Kingdom',
    coords: {lat: 57.1, lon: -3.82},
    tags: ['Mountain Habitats', 'Wildcats', 'Moorland'],
    description:
      'Cairngorms National Park contains high mountain plateaus, ancient pinewoods, rivers, moorlands, wetlands, and glacial landscapes. Scientific monitoring includes upland ecology, alpine vegetation, snowbed habitats, moorland systems, freshwater environments, bird populations, woodland restoration, and reintroduction ecology. The region has been central to Scottish wildcat conservation work.',
    image: require('../../assets/imgs/wodllandwllilok6.png'),
  },
  {
    id: 'oulanka',
    title: 'Oulanka Research Station',
    cityCountry: 'Kuusamo, Finland',
    coords: {lat: 66.37, lon: 29.32},
    tags: ['Boreal Forest', 'Arctic Edge', 'Field Research'],
    description:
      'Oulanka Research Station is located in the Oulanka River valley inside Oulanka National Park, close to the Arctic Circle and the Russian border. The surrounding landscape includes boreal forests, river valleys, mires, cliffs, meadows, and cold-climate freshwater ecosystems. Research activity covers boreal biodiversity, northern plant communities, insects, freshwater systems, long-term environmental monitoring, snow and climate effects, phenology, forest ecology, and subarctic field studies.',
    image: require('../../assets/imgs/wodllandwllilok7.png'),
  },
  {
    id: 'hortobagy',
    title: 'Hortobágy National Park — Pentezug Reserve',
    cityCountry: 'Hortobágy, Hungary',
    coords: {lat: 47.57, lon: 21.26},
    tags: ['Steppe Ecology', 'Wild Horses', 'Grassland Birds'],
    description:
      'Hortobágy National Park protects one of Europe’s largest semi-natural grassland landscapes, known as the Puszta. Its habitats include alkaline grasslands, marshes, fishponds, salt lakes, reedbeds, and open steppe. The Pentezug Reserve is especially important for studies of Przewalski’s horses and cattle, including genetic monitoring and social behaviour.',
    image: require('../../assets/imgs/wodllandwllilok8.png'),
  },
  {
    id: 'triglav',
    title: 'Triglav National Park',
    cityCountry: 'Bled / Bohinj / Kranjska Gora region, Slovenia',
    coords: {lat: 46.33, lon: 13.77},
    tags: ['Alpine Biodiversity', 'Invasive Species', 'Glacier Valleys'],
    description:
      'Triglav National Park covers much of the Julian Alps and includes high mountain ridges, glacier valleys, alpine lakes, forests, meadows, rocky slopes, and river systems. Research includes alpine biodiversity, landscape history, protected area zoning, and tourism impacts.',
    image: require('../../assets/imgs/wodllandwllilok9.png'),
  },
  {
    id: 'oostvaardersplassen',
    title: 'Oostvaardersplassen',
    cityCountry: 'Lelystad / Almere, Netherlands',
    coords: {lat: 52.45, lon: 5.34},
    tags: ['Rewilding', 'Wetland Birds', 'Large Herbivores'],
    description:
      'Oostvaardersplassen is a Dutch wetland and grassland reserve created on reclaimed land and known for rewilding debates and ecological experimentation. Research focuses on natural grazing, large herbivore impacts, bird communities, wetland succession, and vegetation structure.',
    image: require('../../assets/imgs/wodllandwllilok10.png'),
  },
  {
    id: 'soomaa',
    title: 'Soomaa National Park',
    cityCountry: 'Viljandi / Pärnu region, Estonia',
    coords: {lat: 58.43, lon: 25.0},
    tags: ['Bogs', 'Floodplain Forests', 'Wetland Ecology'],
    description:
      'Soomaa National Park is famous for seasonal flooding known as the “fifth season.” Research focuses on peatland ecology, hydrology, flood dynamics, wetland vegetation, bird habitats, and amphibians.',
    image: require('../../assets/imgs/wodllandwllilok11.png'),
  },
  {
    id: 'zobelboden',
    title: 'Zöbelboden LTER Site — Kalkalpen National Park',
    cityCountry: 'Reichraming, Austria',
    coords: {lat: 47.84, lon: 14.44},
    tags: ['Forest Monitoring', 'Karst Mountains', 'Climate Research'],
    description:
      'Zöbelboden is a long-term ecosystem research site located inside Kalkalpen National Park in Upper Austria. Research focuses on forest ecosystems, air pollution effects, climate change interactions, soil processes, water chemistry, vegetation change, and material flows through unmanaged natural habitats.',
    image: require('../../assets/imgs/wodllandwllilok12.png'),
  },
  {
    id: 'abisko',
    title: 'Abisko Scientific Research Station',
    cityCountry: 'Abisko, Sweden',
    coords: {lat: 68.35, lon: 18.82},
    tags: ['Arctic Ecology', 'Climate Change', 'Mountain Habitats'],
    description:
      'Abisko Scientific Research Station is located in northern Sweden near Abisko National Park and Lake Torneträsk. Research focuses on Arctic and subarctic ecology, climate change, snow cover, permafrost-related processes, plant communities, aquatic systems, and long-term environmental change.',
    image: require('../../assets/imgs/wodllandwllilok13.png'),
  },
  {
    id: 'gran-paradiso',
    title: 'Gran Paradiso National Park',
    cityCountry: 'Cogne / Aosta Valley, Italy',
    coords: {lat: 45.52, lon: 7.27},
    tags: ['Alpine Ibex', 'Mountain Ecology', 'Wildlife Tracking'],
    description:
      'Gran Paradiso National Park is Italy’s oldest national park and one of the most important alpine wildlife research areas in Europe. Long-term monitoring includes marking animals and studying behavior, survival, reproduction, movement patterns, and population dynamics.',
    image: require('../../assets/imgs/wodllandwllilok14.png'),
  },
  {
    id: 'camargue',
    title: 'Camargue Biosphere Reserve',
    cityCountry: 'Arles, France',
    coords: {lat: 43.54, lon: 4.65},
    tags: ['Wetlands', 'Flamingos', 'Delta Ecology'],
    description:
      'The Camargue Biosphere Reserve lies in the Rhône Delta in southern France. Research focuses on wetland ecology, bird populations, water and salt dynamics, fish nurseries, coastal restoration, and agricultural pressure.',
    image: require('../../assets/imgs/wodllandwllilok15.png'),
  },
  {
    id: 'wadden-sea',
    title: 'Wadden Sea National Park',
    cityCountry: 'Wilhelmshaven / Schleswig-Holstein / Lower Saxony, Germany',
    coords: {lat: 53.7, lon: 7.9},
    tags: ['Migratory Birds', 'Tidal Flats', 'Seals'],
    description:
      'The Wadden Sea is a vast tidal wetland system stretching along the coasts of the Netherlands, Germany, and Denmark. Research focuses on migratory birds, breeding birds, seal populations, benthic organisms, tidal dynamics, and sea-level rise.',
    image: require('../../assets/imgs/wodllandwllilok16.png'),
  },
  {
    id: 'vanoise',
    title: 'Vanoise National Park',
    cityCountry: 'Pralognan-la-Vanoise, France',
    coords: {lat: 45.38, lon: 6.82},
    tags: ['Alpine Wildlife', 'Ibex Monitoring', 'High Mountains'],
    description:
      'Vanoise National Park is a high mountain protected area in the French Alps. Research and monitoring focus on Alpine ibex, chamois, marmots, birds of prey, mountain vegetation, and climate-sensitive habitats.',
    image: require('../../assets/imgs/wodllandwllilok17.png'),
  },
  {
    id: 'peneda-geres',
    title: 'Peneda-Gerês National Park',
    cityCountry: 'Gerês / Braga region, Portugal',
    coords: {lat: 41.87, lon: -8.13},
    tags: ['Iberian Wolf', 'Amphibians', 'Mountain Forests'],
    description:
      'Peneda-Gerês National Park is Portugal’s only national park. Research has focused on mammals, reptiles, amphibians, fish, habitat diversity, and mountain ecosystems. Important species include the Iberian wolf and European otter.',
    image: require('../../assets/imgs/wodllandwllilok18.png'),
  },
  {
    id: 'guadarrama',
    title: 'Sierra de Guadarrama National Park',
    cityCountry: 'Madrid / Segovia region, Spain',
    coords: {lat: 40.83, lon: -3.96},
    tags: ['Mountain Biodiversity', 'Pine Forests', 'High-Elevation Habitats'],
    description:
      'Sierra de Guadarrama National Park protects a mountain range in central Spain. Research covers mountain biodiversity, forest structure, vegetation patterns, recreational pressure, conservation management, and species living in rocky habitats.',
    image: require('../../assets/imgs/wodllandwllilok19.png'),
  },
  {
    id: 'plitvice',
    title: 'Plitvice Lakes National Park',
    cityCountry: 'Plitvička Jezera, Croatia',
    coords: {lat: 44.87, lon: 15.58},
    tags: ['Karst Lakes', 'Forest Ecosystems', 'Freshwater Ecology'],
    description:
      'Plitvice Lakes National Park is a karst landscape known for its chain of lakes, waterfalls, and travertine barriers. Research focuses on freshwater ecology, lake chemistry, travertine formation, aquatic organisms, water quality, and hydrology.',
    image: require('../../assets/imgs/wodllandwllilok20.png'),
  },
  {
    id: 'mercantour',
    title: 'Mercantour National Park',
    cityCountry: 'Saint-Martin-Vésubie / Nice region, France',
    coords: {lat: 44.14, lon: 7.11},
    tags: ['Wolves', 'Alpine Plants', 'Mountain Valleys'],
    description:
      'Mercantour National Park lies in the south-eastern French Alps. Research focuses on alpine biodiversity, wolves, ungulates, rare plants, pollinators, climate effects, and ecological gradients between Alpine and Mediterranean environments.',
    image: require('../../assets/imgs/wodllandwllilok21.png'),
  },
  {
    id: 'risnjak',
    title: 'Risnjak National Park',
    cityCountry: 'Crni Lug, Croatia',
    coords: {lat: 45.43, lon: 14.74},
    tags: ['Lynx Habitat', 'Dinaric Forests', 'Large Carnivores'],
    description:
      'Risnjak National Park protects a mountainous forest landscape in the Dinaric Alps. Research is closely connected with large carnivores and habitat connectivity.',
    image: require('../../assets/imgs/wodllandwllilok22.png'),
  },
  {
    id: 'muritz',
    title: 'Müritz National Park',
    cityCountry: 'Waren, Germany',
    coords: {lat: 53.43, lon: 12.78},
    tags: ['Lakes', 'Cranes', 'Wetland Forests'],
    description:
      'Müritz National Park is a lake-rich protected area in north-eastern Germany. Research and monitoring focus on wetland restoration, forest development, water quality, bird migration, and aquatic habitats.',
    image: require('../../assets/imgs/wodllandwllilok23.png'),
  },
];
