import type { FactItem } from '../types';

/**
 * Verified administrative and geographic facts regarding Aluara.
 * Verified facts have status: 'verified'.
 * New facts can be easily appended here as they are authenticated.
 */
export const factItems: FactItem[] = [
  {
    id: 'fact-village',
    label: 'Village Name',
    value: 'Aluara',
    description: 'The ancestral village and focal community of this archive.',
    status: 'verified',
  },
  {
    id: 'fact-district',
    label: 'District',
    value: 'Bokaro',
    description: 'Located in the Bokaro district of Jharkhand.',
    status: 'verified',
  },
  {
    id: 'fact-state',
    label: 'State',
    value: 'Jharkhand',
    description: 'Part of the eastern Indian state of Jharkhand, known for forest heritage.',
    status: 'verified',
  },
  {
    id: 'fact-country',
    label: 'Country',
    value: 'India',
    description: 'A traditional Indian rural community.',
    status: 'verified',
  },
  {
    id: 'fact-status',
    label: 'Archive Status',
    value: 'Growing',
    description: 'Actively compiling oral memories, photographs, and historical facts.',
    status: 'verified',
  },
];
