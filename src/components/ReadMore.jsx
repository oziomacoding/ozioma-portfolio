import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReadMore = ({ summary, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>
        {summary}
        {isExpanded && (
          <span>{' '}{details}</span>
        )}
      </p>
      <Button variant="link" onClick={toggleExpand}style={{ textDecoration: 'none', color: 'inherit' }}>
        {isExpanded ? 'Read Less' : 'Read More'}
        <i className="fa-solid fa-arrow-up-right-from-square text-light px-2"></i></Button>
    </div>
  );
};

export default ReadMore;
