import React from 'react';
import { cultureItems } from '../data/culture';
import { CultureCard } from './CultureCard';
import { SectionHeading } from './SectionHeading';

export const CultureSection: React.FC = () => {
  return (
    <section id="culture" className="section section-alt" aria-labelledby="culture-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Living Heritage"
          title="Culture &amp; Traditions"
          subtitle="Documenting sacred rites, agricultural festivals, culinary wisdom, and indigenous crafts of Aluara."
          centered
        />

        <div className="grid-4">
          {cultureItems.map((item) => (
            <CultureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
