import React from 'react';
import "./EducatorSection.css"

const EducatorSection = ({ data }) => {
  return (
    <div className="educator-section">
      <div className="column">
        <h3>Assessment</h3>
        <p>{data.assessment}</p>
      </div>
      <div className="column">
        <h3>Reflect</h3>
        <p>{data.reflect}</p>
      </div>
    </div>
  );
};

export default EducatorSection;
