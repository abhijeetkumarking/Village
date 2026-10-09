import React, { useEffect, useRef } from 'react';
import type { StoryItem } from '../types';
import { StatusBadge } from './StatusBadge';

interface StoryModalProps {
  story: StoryItem | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!story) return;

    // Focus close button on mount
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [story, onClose]);

  if (!story) return null;

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
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-modal-title"
        ref={dialogRef}
      >
        <button
          ref={closeBtnRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close story dialog"
        >
          ✕
        </button>

        <div style={{ marginBottom: '1.25rem' }}>
          <StatusBadge status={story.status} />
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--color-earth)', marginBottom: '0.5rem' }}>
          <span>{story.storyteller}</span> · <em>{story.period}</em>
        </div>

        <h3 id="story-modal-title" style={{ marginBottom: '1rem', color: 'var(--color-forest-dark)' }}>
          {story.topic}
        </h3>

        <div
          style={{
            fontStyle: 'italic',
            fontSize: '1.1rem',
            padding: '1rem',
            backgroundColor: 'var(--color-parchment)',
            borderLeft: '3px solid var(--color-gold)',
            marginBottom: '1.5rem',
            borderRadius: 'var(--radius-xs)',
          }}
        >
          &ldquo;{story.excerpt}&rdquo;
        </div>

        <p style={{ lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--color-ink)' }}>
          {story.fullNote}
        </p>

        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--color-cream-warm)',
            border: '1px solid var(--color-parchment-border)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.875rem',
          }}
        >
          <strong style={{ color: 'var(--color-forest-dark)' }}>Preserve this memory:</strong>
          <p style={{ margin: '0.35rem 0 0', color: 'var(--color-ink-muted)' }}>
            Do you have memories, genealogies, or recordings relating to this topic? Use our{' '}
            <a href="#contribute" onClick={onClose} style={{ fontWeight: 600 }}>
              contributions form
            </a>{' '}
            to help document Aluara&apos;s history.
          </p>
        </div>
      </div>
    </div>
  );
};
