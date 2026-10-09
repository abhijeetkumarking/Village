import React from 'react';
import type { FactItem } from '../types';
import { StatusBadge } from './StatusBadge';

interface FactCardProps {
  fact: FactItem;
}

export const FactCard: React.FC<FactCardProps> = ({ fact }) => {
  return (
    <article className="fact-card" aria-labelledby={`fact-label-${fact.id}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <span id={`fact-label-${fact.id}`} className="fact-card__label">
          {fact.label}
        </span>
        <StatusBadge status={fact.status} />
      </div>

      <div className="fact-card__value">{fact.value}</div>
      <p className="fact-card__desc">{fact.description}</p>
    </article>
  );
};
