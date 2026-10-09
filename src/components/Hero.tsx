import React from 'react';
import { villageMetadata } from '../data/village';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero" aria-label="Introduction to Aluara Archive">
      {/* Background SVG Contours representing Jharkhand hills & field rows */}
      <svg
        className="hero__landscape-silhouette"
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Layer 1: Distant rolling plateau hills */}
        <path
          d="M0 160 C 240 90, 480 200, 720 120 C 960 40, 1200 160, 1440 100 L 1440 280 L 0 280 Z"
          fill="#173020"
          opacity="0.65"
        />
        {/* Layer 2: Midground forest ridge */}
        <path
          d="M0 190 C 280 140, 520 220, 840 160 C 1120 110, 1320 210, 1440 180 L 1440 280 L 0 280 Z"
          fill="#13271a"
          opacity="0.85"
        />
        {/* Layer 3: Foreground agricultural land terrace */}
        <path
          d="M0 240 C 360 210, 720 250, 1080 220 C 1260 205, 1380 235, 1440 230 L 1440 280 L 0 280 Z"
          fill="#0c1810"
        />
        {/* Terrace Field Lines */}
        <path
          d="M60 250 Q 400 240 800 255 T 1400 245"
          stroke="rgba(212, 175, 55, 0.2)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
      </svg>

      <div className="container">
        <div className="hero__content">
          {/* Eyebrow badge */}
          <div className="hero__pill">
            <span aria-hidden="true">✦</span>
            <span>Bokaro · Jharkhand · India · Archive Status: {villageMetadata.archiveStatus}</span>
            <span aria-hidden="true">✦</span>
          </div>

          {/* Primary Main H1 Heading */}
          <h1 className="hero__title">{villageMetadata.villageName.toUpperCase()}</h1>

          {/* Editorial Tagline */}
          <p className="hero__tagline">&ldquo;{villageMetadata.tagline}&rdquo;</p>

          {/* Supporting Text */}
          <p className="hero__desc">{villageMetadata.mission}</p>

          {/* Action CTAs */}
          <div className="hero__cta-group">
            <a href="#about" className="btn-primary">
              <span>Explore Aluara</span>
              <span aria-hidden="true">↓</span>
            </a>
            <a href="#contribute" className="btn-secondary">
              <span aria-hidden="true">✎</span>
              <span>Share a Story</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
