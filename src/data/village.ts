import type { VillageMetadata, AboutSectionData } from '../types';

export const villageMetadata: VillageMetadata = {
  villageName: 'Aluara',
  district: 'Bokaro',
  state: 'Jharkhand',
  country: 'India',
  archiveStatus: 'Growing',
  tagline: 'Where our roots become our story.',
  mission:
    'A growing digital archive of the people, places, memories, traditions and stories of Aluara, Bokaro, Jharkhand.',
};

export const aboutSectionData: AboutSectionData = {
  overview: {
    title: 'Village Overview',
    description:
      'Aluara is located in Bokaro district, Jharkhand, India. This community archive is an evolving repository created to document, safeguard, and celebrate the local heritage, roots, and lived memories of the village across generations.',
    status: 'verified',
  },
  history: {
    title: 'Our History',
    description: 'Information coming soon.',
    note: 'Historical narratives and settlement origins are to be documented in consultation with village elders.',
    status: 'placeholder',
  },
  people: {
    title: 'Our People',
    description: 'Information coming soon.',
    note: 'Generational lineages, community kinship, and ancestral records are awaiting local documentation.',
    status: 'placeholder',
  },
  land: {
    title: 'Our Land',
    description: 'Village archive under development.',
    status: 'placeholder',
    aspects: [
      {
        id: 'land-geography',
        title: 'Geography & Terrain',
        description: 'Information coming soon.',
        detail: 'To be documented from local knowledge.',
        status: 'placeholder',
      },
      {
        id: 'land-fields',
        title: 'Agricultural Fields',
        description: 'Information coming soon.',
        detail: 'To be documented from village elders.',
        status: 'placeholder',
      },
      {
        id: 'land-water',
        title: 'Water Sources & Streams',
        description: 'Information coming soon.',
        detail: 'To be documented from local knowledge.',
        status: 'placeholder',
      },
      {
        id: 'land-forests',
        title: 'Forests & Surrounding Flora',
        description: 'Information coming soon.',
        detail: 'To be documented from village elders.',
        status: 'placeholder',
      },
      {
        id: 'land-roads',
        title: 'Paths, Roads & Surroundings',
        description: 'Information coming soon.',
        detail: 'To be documented from local knowledge.',
        status: 'placeholder',
      },
    ],
  },
};
