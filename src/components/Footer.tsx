import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Aluara Village Archive Footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand & Purpose */}
          <div>
            <h2 className="footer__brand-title">ALUARA</h2>
            <p className="footer__tagline">
              Preserving memories. Documenting stories. Connecting generations.
            </p>
            <p className="footer__location">
              <span aria-hidden="true">📍</span>
              <span>Aluara · Bokaro · Jharkhand · India</span>
            </p>
            <p style={{ fontSize: '0.85rem', color: '#a2aea4', maxWidth: '420px', lineHeight: 1.6 }}>
              A community heritage initiative dedicated to recording the lived experiences,
              traditional agricultural wisdom, oral histories, and cultural identity of Aluara village.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__col-title">Archive Sections</h3>
            <ul className="footer__links">
              <li>
                <a href="#about" className="footer__link">
                  About the Village
                </a>
              </li>
              <li>
                <a href="#culture" className="footer__link">
                  Culture &amp; Traditions
                </a>
              </li>
              <li>
                <a href="#stories" className="footer__link">
                  Stories from Elders
                </a>
              </li>
              <li>
                <a href="#life" className="footer__link">
                  Village Life
                </a>
              </li>
              <li>
                <a href="#places" className="footer__link">
                  Important Places
                </a>
              </li>
              <li>
                <a href="#gallery" className="footer__link">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#timeline" className="footer__link">
                  Historical Timeline
                </a>
              </li>
              <li>
                <a href="#facts" className="footer__link">
                  Essential Facts
                </a>
              </li>
            </ul>
          </div>

          {/* Participatory Contribution */}
          <div>
            <h3 className="footer__col-title">Preservation</h3>
            <p style={{ fontSize: '0.85rem', color: '#a2aea4', lineHeight: 1.6, marginBottom: '1rem' }}>
              Are you a native or descendant of Aluara? Help document our family genealogies, oral
              folklore, and vintage photographs.
            </p>
            <a href="#contribute" className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.55rem 1.25rem' }}>
              <span>Share Knowledge</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer__bottom">
          <p>© {CURRENT_YEAR} Aluara Village Archive. Built as a community archive.</p>
          <p>
            Respecting oral tradition and cultural sovereignty.
          </p>
        </div>
      </div>
    </footer>
  );
};
