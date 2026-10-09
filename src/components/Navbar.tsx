import React, { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#culture', label: 'Culture' },
  { href: '#stories', label: 'Stories' },
  { href: '#places', label: 'Places' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contribute', label: 'Contribute' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Monitor section scroll positions to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sectionIds = ['home', 'about', 'culture', 'stories', 'places', 'gallery', 'timeline', 'contribute'];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo / Village Emblem */}
          <a href="#home" className="navbar__brand" onClick={closeMobileMenu}>
            <div className="navbar__emblem" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 4.8l6.2 12.2H5.8L12 6.8z" opacity="0.3" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z" />
              </svg>
            </div>
            <div className="navbar__brand-text">
              <span className="navbar__brand-name">ALUARA</span>
              <span className="navbar__brand-sub">Village Archive · Bokaro</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar__links" role="menubar">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`navbar__link ${isActive ? 'is-active' : ''}`}
                  role="menuitem"
                  aria-current={isActive ? 'location' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Desktop Right Action & Mobile Toggle */}
          <div className="navbar__actions">
            <a href="#contribute" className="btn-story-nav">
              <span aria-hidden="true">✎</span>
              <span>Share a Story</span>
            </a>

            <button
              ref={toggleBtnRef}
              className="navbar__toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="mobile-nav-drawer"
          ref={drawerRef}
          role="menu"
          aria-label="Mobile Navigation Menu"
        >
          <ul className="mobile-nav-drawer__list">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href} role="none">
                  <a
                    href={link.href}
                    className={`mobile-nav-drawer__link ${isActive ? 'is-active' : ''}`}
                    role="menuitem"
                    onClick={closeMobileMenu}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mobile-nav-drawer__action">
            <a
              href="#contribute"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMobileMenu}
            >
              ✎ Share a Story or Memory
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
