import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CultureSection } from './components/CultureSection';
import { StoriesSection } from './components/StoriesSection';
import { VillageLifeSection } from './components/VillageLifeSection';
import { PlacesSection } from './components/PlacesSection';
import { Gallery } from './components/Gallery';
import { Timeline } from './components/Timeline';
import { FactsSection } from './components/FactsSection';
import { ContributionForm } from './components/ContributionForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Set up subtle scroll-driven fade-up animations for sections
  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const animatedElements = document.querySelectorAll('.section, .hero__content');
    animatedElements.forEach((el) => {
      el.classList.add('fade-up-element');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="site-wrapper">
      {/* Accessible skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 1. Sticky Responsive Navbar */}
      <Navbar />

      {/* Main Landmark */}
      <main id="main-content">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Culture & Traditions */}
        <CultureSection />

        {/* 5. Stories from Elders */}
        <StoriesSection />

        {/* 6. Village Life */}
        <VillageLifeSection />

        {/* 7. Important Places */}
        <PlacesSection />

        {/* 8. Gallery */}
        <Gallery />

        {/* 9. Timeline */}
        <Timeline />

        {/* 10. Interesting Facts */}
        <FactsSection />

        {/* 11. Contribute */}
        <ContributionForm />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
};

export default App;
