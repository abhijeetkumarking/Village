import React, { useState } from 'react';

interface PlaceholderImageProps {
  src?: string;
  alt?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  label?: string;
  subLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  src,
  alt = 'Archival photograph placeholder',
  aspectRatio = 'landscape',
  label = 'Photograph to be archived',
  subLabel = 'Photo slot · Aluara archive',
  className = '',
  style,
}) => {
  const [imageError, setImageError] = useState(false);

  // If a valid src is given and has not errored, show the image
  if (src && !imageError) {
    return (
      <div
        className={`placeholder-photo-frame placeholder-photo-frame--${aspectRatio} ${className}`}
        style={{ padding: 0, ...style }}
      >
        <img
          src={src}
          alt={alt}
          className="real-image-frame"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
    );
  }

  // Otherwise, render handcrafted editorial archive placeholder
  return (
    <div
      className={`placeholder-photo-frame placeholder-photo-frame--${aspectRatio} ${className}`}
      style={style}
      aria-label={`${label} (${subLabel})`}
      role="img"
    >
      {/* Decorative SVG background representing fields & contour lines */}
      <svg
        className="hero__backdrop"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 250 C 100 230, 200 280, 400 240 L 400 300 L 0 300 Z"
          fill="rgba(92, 64, 51, 0.04)"
        />
        <path
          d="M0 220 C 120 190, 240 230, 400 210 L 400 300 L 0 300 Z"
          fill="rgba(29, 58, 36, 0.03)"
        />
        {/* Field rows pattern */}
        <line x1="20" y1="280" x2="380" y2="280" stroke="rgba(92, 64, 51, 0.08)" strokeDasharray="4 4" />
        <line x1="40" y1="260" x2="360" y2="260" stroke="rgba(92, 64, 51, 0.08)" strokeDasharray="4 4" />
      </svg>

      {/* Center camera & archival icon */}
      <div className="placeholder-photo-frame__icon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      </div>

      <span className="placeholder-photo-frame__label">{label}</span>
      <span className="placeholder-photo-frame__hint">{subLabel}</span>
    </div>
  );
};
