import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyGrid from './components/BasicInfo';
import VocabularyList from './components/VocabularyList';
import LearningOutcomes from './components/LearningOutcomes';
import Differentiation from './components/Differentiation';
import EducatorSection from './components/EducatorSection';
import LearningExperiences from './components/LearningExperiences';

function App() {
  const [fields, setFields] = useState({});
  const [success, setSuccess] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:5000/querygpt", { query: inputValue })
      .then((response) => {
        setFields(response.data.response);
        setSuccess(true);
        setInputValue("");
      })
      .catch((error) => {
        setSuccess(false);
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: success ? "10vh" : "100vh", }}>
        <p
          style={{
            fontFamily: "DM Sans",
            fontSize: "70px",
            marginBottom: "1px",
          }}
        >
          Lesson Planner
        </p>
        <p
          style={{
            fontFamily: "Ubuntu",
            fontSize: "16px",
            marginTop: "2px",
            marginBottom: "40px",
          }}
        >
          Create customized lessons easily with our AI powered generator
        </p>
        {!success ? (
          <form
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="css-input"
              value={inputValue}
              onChange={handleInputChange}
              style={{ marginBottom: '20px' }}
              placeholder="Enter Lesson Title"
            />
            <div className="button-container">
              <button onClick={handleSubmit} style={{ "--clr": "#abecee" }}>
                <span>Generate Plan</span>
                <i></i>
              </button>
            </div>
          </form>
        ) : null}
        <div>
          {success ? <h3>{fields["lesson-title"]}</h3> : <h3>LOADING</h3>}
        </div>
      </header>

      {success ? (
        <div className="main-content">
          <div className="side-panel"></div>
          <div className="center-panel">
            <MyGrid data={fields}></MyGrid>
            <VocabularyList
              words={fields["key-vocabulary"].split(",")}
            ></VocabularyList>
            <VocabularyList
              words={fields["supporting-materials"]}
            ></VocabularyList>
            <LearningOutcomes outcomes={fields}></LearningOutcomes>
            <Differentiation differentiation={fields}></Differentiation>
            <LearningExperiences
              learningExperiences={{
                prepare: fields.prepare,
                plan: fields.plan,
                investigate: fields.investigate,
                apply: fields.apply,
                connect: fields.connect,
                evaluate: fields.evaluate,
              }}
            ></LearningExperiences>
            <EducatorSection data={fields}></EducatorSection>
          </div>
          <div className="side-panel"></div>
        </div>
      ) : null}
    </div>
  );
}

export default App;