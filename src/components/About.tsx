import React from 'react';
import { aboutSectionData } from '../data/village';
import { SectionHeading } from './SectionHeading';
import { StatusBadge } from './StatusBadge';
import { PlaceholderImage } from './PlaceholderImage';

export const About: React.FC = () => {
  const { overview, history, people, land } = aboutSectionData;

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          eyebrow="The Archive"
          title="About Aluara"
          subtitle="Documenting our origins, community roots, and rural surroundings in Bokaro, Jharkhand."
          centered
        />

        {/* Overview & Key Pillars Grid */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '3.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span className="font-accent" style={{ fontSize: '1.25rem' }}>Location Overview</span>
              <StatusBadge status={overview.status} />
            </div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-forest-dark)' }}>
              {overview.title}
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-ink)' }}>
              {overview.description}
            </p>
            <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.95rem' }}>
              Every generation holds stories of settlement, seasonal migration, kinship ties, and
              changing village ways. This archive exists to ensure those memories remain vivid and
              accessible for tomorrow.
            </p>
          </div>

          <div>
            <PlaceholderImage
              aspectRatio="landscape"
              label="Aluara Landscape & Village Panorama"
              subLabel="Archive Photo Placeholder · Bokaro, Jharkhand"
            />
          </div>
        </div>

        {/* History and People side-by-side */}
        <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
          {/* History Card */}
          <div className="editorial-card">
            <div className="editorial-card__top">
              <span className="editorial-card__subtitle">Origins & Heritage</span>
              <StatusBadge status={history.status} />
            </div>
            <h3 className="editorial-card__title">{history.title}</h3>
            <p className="editorial-card__desc">{history.description}</p>
            <p className="editorial-card__footer">{history.note}</p>
          </div>

          {/* People Card */}
          <div className="editorial-card">
            <div className="editorial-card__top">
              <span className="editorial-card__subtitle">Community & Lineage</span>
              <StatusBadge status={people.status} />
            </div>
            <h3 className="editorial-card__title">{people.title}</h3>
            <p className="editorial-card__desc">{people.description}</p>
            <p className="editorial-card__footer">{people.note}</p>
          </div>
        </div>

        {/* Our Land Detailed Section */}
        <div
          style={{
            backgroundColor: 'var(--color-offwhite)',
            border: '1px solid var(--color-parchment-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span className="font-accent" style={{ fontSize: '1.15rem' }}>Topography & Surroundings</span>
              <h3 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>{land.title}</h3>
            </div>
            <StatusBadge status={land.status} />
          </div>

          <p style={{ marginBottom: '2rem', color: 'var(--color-ink-muted)' }}>
            {land.description} The physical topography of Aluara—its cultivation tracts, streams,
            tree cover, and traditional pathways—is being charted through local oral testimonies.
          </p>

          <div className="grid-3">
            {land.aspects.map((aspect) => (
              <div
                key={aspect.id}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid var(--color-parchment-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--color-forest-dark)' }}>{aspect.title}</h4>
                  <StatusBadge status={aspect.status} />
                </div>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--color-ink-muted)' }}>
                  {aspect.description}
                </p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-earth)', fontStyle: 'italic' }}>
                  {aspect.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
