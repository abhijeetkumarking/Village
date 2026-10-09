import React from 'react';
import type { PlaceItem } from '../types';
import { StatusBadge } from './StatusBadge';
import { PlaceholderImage } from './PlaceholderImage';

interface PlaceCardProps {
  place: PlaceItem;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <article className="editorial-card" aria-labelledby={`place-title-${place.id}`}>
      <div style={{ marginBottom: '1rem' }}>
        <PlaceholderImage
          src={place.imageSrc}
          alt={place.title}
          aspectRatio="landscape"
          label={place.title}
          subLabel="Place Archive Slot"
        />
      </div>

      <div className="editorial-card__top">
        <div>
          <span className="editorial-card__subtitle">{place.category}</span>
          <h3 id={`place-title-${place.id}`} className="editorial-card__title">
            {place.title}
          </h3>
        </div>
        <StatusBadge status={place.status} />
      </div>

      <p className="editorial-card__desc">{place.description}</p>

      <div className="editorial-card__footer">
        <span style={{ fontStyle: 'italic', color: 'var(--color-earth)' }}>
          {place.note}
        </span>
      </div>
    </article>
  );
};
