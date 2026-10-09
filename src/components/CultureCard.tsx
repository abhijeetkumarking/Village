import React from 'react';
import type { CultureItem } from '../types';
import { StatusBadge } from './StatusBadge';
import { PlaceholderImage } from './PlaceholderImage';

interface CultureCardProps {
  item: CultureItem;
}

export const CultureCard: React.FC<CultureCardProps> = ({ item }) => {
  return (
    <article className="editorial-card" aria-labelledby={`culture-title-${item.id}`}>
      <div style={{ marginBottom: '1rem' }}>
        <PlaceholderImage
          src={item.imageSrc}
          alt={item.title}
          aspectRatio="landscape"
          label={item.title}
          subLabel="Cultural Archive Placeholder"
        />
      </div>

      <div className="editorial-card__top">
        <div>
          <span className="editorial-card__subtitle">{item.subtitle}</span>
          <h3 id={`culture-title-${item.id}`} className="editorial-card__title">
            {item.title}
          </h3>
        </div>
        <StatusBadge status={item.status} />
      </div>

      <p className="editorial-card__desc">{item.description}</p>

      <div className="editorial-card__footer">
        <span style={{ fontStyle: 'italic', color: 'var(--color-earth)' }}>
          {item.culturalNote}
        </span>
      </div>
    </article>
  );
};
