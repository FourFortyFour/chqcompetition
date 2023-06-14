import React from 'react';
import './Differentiation.css';

const Differentiation = ({ differentiation }) => {
  return (
    <>
      <div className='vocabulary-title'>Differentiation</div>
      <div className="differentiation-container">
        <div className="differentiation-column" id="differentiation">
          <ul>
            {differentiation.differentiation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="differentiation-column" id="additional-fields">
          <ul>
            {differentiation.additional.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>

  );
}

export default Differentiation;
