import React from 'react';
import './spoiler.css';

const SpoilerComponent = ({ children }) => {
  return (
    <details className="spoiler-container">
      <summary className="spoiler-summary">SPOILER</summary>
      <div className="spoiler-content">{children}</div>
    </details>
  );
};

export default SpoilerComponent;
