import React from 'react';
import './VocabularyList.css';

const VocabularyList = ({ words }) => {
  return (
    <div className="vocabulary-container">
      <div className="vocabulary-title">Vocabulary</div>
      <ul className="vocabulary-list" id="key-vocabulary">
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default VocabularyList;
