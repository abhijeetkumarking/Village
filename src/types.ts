/**
 * Verification status for all archival content.
 * Every entry in the archive belongs to one of these states.
 */
export type ContentStatus = 'placeholder' | 'draft' | 'verified';

/**
 * Base archival entry shape.
 */
export interface ArchiveItemBase {
  id: string;
  status: ContentStatus;
}

/**
 * Known geographic & administrative facts about Aluara.
 */
export interface VillageMetadata {
  villageName: string;
  district: string;
  state: string;
  country: string;
  archiveStatus: string;
  tagline: string;
  mission: string;
}

/**
 * About section data structures.
 */
export interface AboutAspect extends ArchiveItemBase {
  title: string;
  description: string;
  detail: string;
}

export interface AboutSectionData {
  overview: {
    title: string;
    description: string;
    status: ContentStatus;
  };
  history: {
    title: string;
    description: string;
    note: string;
    status: ContentStatus;
  };
  people: {
    title: string;
    description: string;
    note: string;
    status: ContentStatus;
  };
  land: {
    title: string;
    description: string;
    status: ContentStatus;
    aspects: AboutAspect[];
  };
}

/**
 * Culture & Traditions category item.
 */
export interface CultureItem extends ArchiveItemBase {
  title: string;
  subtitle: string;
  description: string;
  culturalNote: string;
  imageSrc?: string;
}

/**
 * Oral history and story recording from elders.
 */
export interface StoryItem extends ArchiveItemBase {
  storyteller: string;
  period: string;
  topic: string;
  excerpt: string;
  fullNote: string;
  imageSrc?: string;
}

/**
 * Village Life domain item.
 */
export interface VillageLifeItem extends ArchiveItemBase {
  title: string;
  description: string;
  aspects: string[];
}

/**
 * Important place category item.
 */
export interface PlaceItem extends ArchiveItemBase {
  category: string;
  title: string;
  description: string;
  note: string;
  imageSrc?: string;
}

/**
 * Category filters for the visual gallery.
 */
export type GalleryCategory =
  | 'All'
  | 'Landscapes'
  | 'People'
  | 'Festivals'
  | 'Old Photographs'
  | 'Traditional Houses'
  | 'Agriculture'
  | 'Daily Life'
  | 'Events';

/**
 * Gallery item with optional real image path and fallback placeholder.
 */
export interface GalleryItem extends ArchiveItemBase {
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  caption: string;
  src?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

/**
 * Timeline archive entry.
 */
export interface TimelineItem extends ArchiveItemBase {
  periodLabel: string;
  title: string;
  description: string;
  preservationNote: string;
}

/**
 * Known facts card item.
 */
export interface FactItem extends ArchiveItemBase {
  label: string;
  value: string;
  description: string;
}

/**
 * Contribution submission categories and payload.
 */
export type ContributionType = 'story' | 'photo' | 'information';

export interface ContributionFormData {
  contributorName: string;
  contact: string;
  type: ContributionType;
  title: string;
  details: string;
  relationshipToVillage: string;
}
