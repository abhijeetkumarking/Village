import React, { useState, useMemo } from 'react';
import { galleryItems } from '../data/gallery';
import type { GalleryCategory, GalleryItem } from '../types';
import { SectionHeading } from './SectionHeading';
import { LightboxModal } from './LightboxModal';
import { PlaceholderImage } from './PlaceholderImage';
import { StatusBadge } from './StatusBadge';

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Landscapes',
  'People',
  'Festivals',
  'Old Photographs',
  'Traditional Houses',
  'Agriculture',
  'Daily Life',
  'Events',
];

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="section section-alt" aria-labelledby="gallery-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Visual Record"
          title="Village Gallery"
          subtitle="A photographic collection of landscapes, traditional homes, celebrations, and faces of Aluara."
          centered
        />

        {/* Filter Pills */}
        <div className="gallery__filters" role="tablist" aria-label="Filter gallery by category">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`gallery__filter-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="gallery__grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              aria-label={`View image details: ${item.title}`}
            >
              <PlaceholderImage
                src={item.src}
                alt={item.title}
                aspectRatio={item.aspectRatio || 'landscape'}
                label={item.title}
                subLabel={`${item.category} archive slot`}
              />

              <div className="gallery-card__caption-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-earth)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.category}
                  </span>
                  <StatusBadge status={item.status} />
                </div>
                <h3 className="gallery-card__title">{item.title}</h3>
                <p className="gallery-card__caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Lightbox Modal */}
        <LightboxModal
          item={selectedItem}
          items={filteredItems}
          onClose={() => setSelectedItem(null)}
          onSelect={(item) => setSelectedItem(item)}
        />
      </div>
    </section>
  );
};
