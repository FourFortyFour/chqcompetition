import React from 'react';
import './Differentiation.css';

const Differentiation = ({ differentiation }) => {
  return (
    <div className="differentiation-container">
      <div className="differentiation-column" id="differentiation">{differentiation.differentiation}</div>
      <div className="differentiation-column" id="additional-fields">{differentiation.additionalFields}</div>
    </div>
  );
}

export default Differentiation;
