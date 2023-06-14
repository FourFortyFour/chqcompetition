import React, { useState } from 'react';
import './LearningOutcomes.css';

const LearningOutcomes = ({ outcomes }) => {
  const [knowledge, setKnowledge] = useState(outcomes.knowledge);
  const [skills, setSkills] = useState(outcomes.skills);
  const [understandings, setUnderstandings] = useState(outcomes.understandings);

  return (
    <>
      <div className='vocabulary-title'>Learning Outcomes</div>
      <div className="learning-outcomes-container">
        <input
          type="text"
          className="learning-outcomes-column"
          id="knowledge"
          value={knowledge}
          placeholder="Enter knowledge..."
          onChange={(e) => setKnowledge(e.target.value)}
        />
        <input
          type="text"
          className="learning-outcomes-column"
          id="skills"
          value={skills}
          placeholder="Enter skills..."
          onChange={(e) => setSkills(e.target.value)}
        />
        <input
          type="text"
          className="learning-outcomes-column"
          id="understandings"
          value={understandings}
          placeholder="Enter understandings..."
          onChange={(e) => setUnderstandings(e.target.value)}
        />
      </div>
    </>
  );
}

export default LearningOutcomes;
