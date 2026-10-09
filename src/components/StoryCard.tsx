import React from 'react';
import type { StoryItem } from '../types';
import { StatusBadge } from './StatusBadge';

interface StoryCardProps {
  story: StoryItem;
  onRead: (story: StoryItem) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onRead }) => {
  return (
    <article className="story-card" aria-labelledby={`story-topic-${story.id}`}>
      <div className="story-card__quote-mark" aria-hidden="true">
        &ldquo;
      </div>

      <div className="story-card__meta">
        <div>
          <span style={{ fontWeight: 600, color: 'var(--color-forest-dark)', display: 'block' }}>
            {story.storyteller}
          </span>
          <span style={{ fontStyle: 'italic' }}>{story.period}</span>
        </div>
        <StatusBadge status={story.status} />
      </div>

      <h3 id={`story-topic-${story.id}`} className="story-card__topic">
        {story.topic}
      </h3>

      <p className="story-card__excerpt">&ldquo;{story.excerpt}&rdquo;</p>

      <button
        type="button"
        className="story-card__btn"
        onClick={() => onRead(story)}
        aria-label={`Read story entry: ${story.topic}`}
      >
        <span>Read Story Narrative</span>
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
};
