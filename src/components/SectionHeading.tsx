import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <header className={`section-heading ${centered ? 'section-heading--centered' : ''} ${className}`}>
      {eyebrow && (
        <div className="section-heading__eyebrow">
          <span aria-hidden="true">✦</span>
          <span>{eyebrow}</span>
          <span aria-hidden="true">✦</span>
        </div>
      )}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      <div className="section-heading__rule" aria-hidden="true">
        <span>❖</span>
      </div>
    </header>
  );
};
