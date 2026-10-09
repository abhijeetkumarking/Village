import React from 'react';
import { placeItems } from '../data/places';
import { PlaceCard } from './PlaceCard';
import { SectionHeading } from './SectionHeading';

export const PlacesSection: React.FC = () => {
  return (
    <section id="places" className="section" aria-labelledby="places-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Geography &amp; Landmarks"
          title="Important Places"
          subtitle="Mapping sacred spaces, water bodies, community choupals, and routes across Aluara."
          centered
        />

        <div className="grid-3">
          {placeItems.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </div>
    </section>
  );
};
