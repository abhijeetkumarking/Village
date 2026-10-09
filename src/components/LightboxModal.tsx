import React, { useEffect, useRef, useCallback } from 'react';
import type { GalleryItem } from '../types';
import { StatusBadge } from './StatusBadge';
import { PlaceholderImage } from './PlaceholderImage';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < items.length - 1;

  const handlePrev = useCallback(() => {
    if (hasPrev) onSelect(items[currentIndex - 1]);
  }, [hasPrev, onSelect, items, currentIndex]);

  const handleNext = useCallback(() => {
    if (hasNext) onSelect(items[currentIndex + 1]);
  }, [hasNext, onSelect, items, currentIndex]);

  useEffect(() => {
    if (!item) return;

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && hasPrev) {
        handlePrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        handleNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, hasPrev, hasNext, handlePrev, handleNext, onClose]);

  if (!item) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        className="lightbox-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
      >
        <button
          ref={closeBtnRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close image lightbox"
        >
          ✕
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-gold-warm)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {item.category}
          </span>
          <StatusBadge status={item.status} />
        </div>

        <h3 id="lightbox-title" style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          {item.title}
        </h3>

        <div className="lightbox__preview">
          <PlaceholderImage
            src={item.src}
            alt={item.title}
            aspectRatio={item.aspectRatio || 'landscape'}
            label={item.title}
            subLabel={`${item.category} archive slot`}
            style={{ width: '100%', maxHeight: '480px' } as React.CSSProperties}
          />
        </div>

        <p style={{ color: '#dce5de', fontSize: '0.95rem', fontStyle: 'italic', margin: '0.5rem 0' }}>
          {item.caption}
        </p>

        <footer className="lightbox__footer">
          <button
            onClick={handlePrev}
            disabled={!hasPrev}
            className="btn-secondary"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.85rem',
              opacity: hasPrev ? 1 : 0.4,
              cursor: hasPrev ? 'pointer' : 'not-allowed',
            }}
          >
            ← Previous
          </button>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-light)' }}>
            {currentIndex + 1} of {items.length}
          </span>
          <button
            onClick={handleNext}
            disabled={!hasNext}
            className="btn-secondary"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.85rem',
              opacity: hasNext ? 1 : 0.4,
              cursor: hasNext ? 'pointer' : 'not-allowed',
            }}
          >
            Next →
          </button>
        </footer>
      </div>
    </div>
  );
};
