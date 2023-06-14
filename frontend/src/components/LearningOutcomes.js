import React from 'react';
import './LearningOutcomes.css';

const LearningOutcomes = ({ outcomes }) => {
  return (
    <>
    <div className='vocabulary-title'>Learning Outcomes</div>
    <div className="learning-outcomes-container">
      <div className="learning-outcomes-column" id="knowledge">{outcomes.knowledge}</div>
      <div className="learning-outcomes-column" id="skills">{outcomes.skills}</div>
      <div className="learning-outcomes-column" id="understandings">{outcomes.understandings}</div>
    </div>
    </>
    
  );
}

export default LearningOutcomes;
