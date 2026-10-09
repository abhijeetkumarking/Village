import React from 'react';
import { villageLifeItems } from '../data/life';
import { SectionHeading } from './SectionHeading';
import { StatusBadge } from './StatusBadge';

export const VillageLifeSection: React.FC = () => {
  return (
    <section id="life" className="section section-alt" aria-labelledby="life-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Everyday Experience"
          title="Village Life"
          subtitle="Documenting daily rhythms, agricultural cycles, community kinship, and transforming times in Aluara."
          centered
        />

        <div className="grid-4">
          {villageLifeItems.map((item) => (
            <article key={item.id} className="life-card" aria-labelledby={`life-title-${item.id}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <h3 id={`life-title-${item.id}`} style={{ fontSize: '1.25rem', color: 'var(--color-forest-dark)' }}>
                  {item.title}
                </h3>
                <StatusBadge status={item.status} />
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginBottom: 'auto' }}>
                {item.description}
              </p>

              {item.aspects && item.aspects.length > 0 && (
                <div className="life-card__aspects">
                  <div className="life-card__aspect-list">
                    {item.aspects.map((aspect, idx) => (
                      <span key={idx} className="life-card__aspect-item">
                        {aspect}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
