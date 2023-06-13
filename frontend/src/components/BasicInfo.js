import React from 'react';

const MyGrid = () => {
  return (
    <div className="grid-container">
      <div id="lesson-title" className="grid-item">Lesson Title</div>
      <div id="subject" className="grid-item">Subject</div>
      <div id="teacher" className="grid-item">Teacher</div>
      <div id="date" className="grid-item">Date</div>
      <div id="grade" className="grid-item">Grade</div>
      <div id="duration" className="grid-item">Duration</div>
    </div>
  );
}

export default MyGrid;
