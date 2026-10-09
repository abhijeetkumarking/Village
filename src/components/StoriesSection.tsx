import React, { useState } from 'react';
import { storyItems } from '../data/stories';
import type { StoryItem } from '../types';
import { SectionHeading } from './SectionHeading';
import { StoryCard } from './StoryCard';
import { StoryModal } from './StoryModal';

export const StoriesSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  return (
    <section id="stories" className="section" aria-labelledby="stories-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Oral Traditions"
          title="Stories from Elders"
          subtitle="Preserving authentic memories, spoken recollections, and generational wisdom before they fade."
          centered
        />

        <div className="grid-2">
          {storyItems.map((story) => (
            <StoryCard key={story.id} story={story} onRead={setSelectedStory} />
          ))}
        </div>

        {/* Modal for oral narrative details */}
        <StoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      </div>
    </section>
  );
};
