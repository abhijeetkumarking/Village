import React from 'react';
import type { ContentStatus } from '../types';

interface StatusBadgeProps {
  status: ContentStatus;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const labelMap: Record<ContentStatus, string> = {
    verified: 'Verified Record',
    draft: 'Draft Entry',
    placeholder: 'Awaiting Documentation',
  };

  return (
    <span
      className={`status-badge status-badge--${status} ${className}`}
      title={`Archival status: ${labelMap[status]}`}
    >
      {labelMap[status]}
    </span>
  );
};
