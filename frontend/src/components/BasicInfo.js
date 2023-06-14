import React from 'react';
import './BasicInfo.css'

const MyGrid = ({ data }) => {
  return (
    <div className="grid-container">
      <div id="lesson-title" className="grid-item">Lesson Title : {data["lesson-title"]}</div>
      <div id="subject" className="grid-item">Subject : {data["subject"]}</div>
      <div id="teacher" className="grid-item">Teacher : {data["teacher-name"]}</div>
      <div id="date" className="grid-item">Date : {data["date"]}</div>
      <div id="grade" className="grid-item">Grade : {data["grade"]}</div>
      <div id="duration" className="grid-item">Duration : {data["duration"]}</div>
    </div>
  );
}

export default MyGrid;
