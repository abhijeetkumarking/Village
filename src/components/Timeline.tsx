import React from 'react';
import { timelineItems } from '../data/timeline';
import { SectionHeading } from './SectionHeading';
import { StatusBadge } from './StatusBadge';

export const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="section" aria-labelledby="timeline-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Chronicle"
          title="Historical Timeline"
          subtitle="A draft chronology of Aluara from earliest oral accounts through settlement and modern times."
          centered
        />

        <div className="timeline">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}
              >
                <div className="timeline-item__node" aria-hidden="true" />
                <div className="timeline-item__card">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: isLeft ? 'flex-end' : 'flex-start',
                      gap: '0.75rem',
                      marginBottom: '0.5rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span className="timeline-item__period">{item.periodLabel}</span>
                    <StatusBadge status={item.status} />
                  </div>
                  <h3 className="timeline-item__title">{item.title}</h3>
                  <p className="timeline-item__desc">{item.description}</p>
                  <p className="timeline-item__note">✦ {item.preservationNote}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification notice banner */}
        <div className="timeline__banner">
          <strong>Archival Notice:</strong> This timeline represents a draft conceptual structure.
          All historical accounts, era definitions, and chronological milestones are awaiting
          corroboration through oral history workshops with Aluara elders and verified district records.
        </div>
      </div>
    </section>
  );
};
