import React from 'react';
import { factItems } from '../data/facts';
import { FactCard } from './FactCard';
import { SectionHeading } from './SectionHeading';

export const FactsSection: React.FC = () => {
  return (
    <section id="facts" className="section section-alt" aria-labelledby="facts-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Verified Registry"
          title="Essential Facts"
          subtitle="Documented administrative and geographic facts regarding Aluara. As further details are authenticated, they will be catalogued here."
          centered
        />

        <div className="grid-3" style={{ justifyContent: 'center' }}>
          {factItems.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
          ))}
        </div>
      </div>
    </section>
  );
};
