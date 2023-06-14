import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MyGrid from './components/BasicInfo';
import VocabularyList from './components/VocabularyList';
function App() {
  const [fields, setFields] = useState({})
  const [success, setSuccess] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const gridData = {
    'lesson-title': 'Sample Lesson',
    'subject': 'Science',
    'teacher': 'John Doe',
    'date': '2023-06-12',
    'grade': '5th Grade',
    'duration': '1 hour'
  };

  const handleInputChange = (onQuerySend) => {
    setInputValue(onQuerySend.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/querygpt', { query: inputValue })
      .then(response => {
        // console.log("SUCCESS", response)
        console.log(response)
        setFields(response.data.response)
        setSuccess(true)
        setInputValue("")
      }).catch(error => {
        setSuccess(false)
        console.log(error)
      });
  };

  // useEffect(() => {
  //   axios.get('http://localhost:5000/querygpt').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })

  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Lesson plan generator</p>
        {!success ? <form onSubmit={handleSubmit}>
          <input type='text' value={inputValue} onChange={handleInputChange} />
          <button type='submit'>Generate lesson plan</button>
        </form> : null}
        <div>{success ?
          <h3>{fields["key-vocabulary"]}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
      <MyGrid data={fields}></MyGrid>
      <VocabularyList words={fields["key-vocabulary"].split(",")}></VocabularyList>
      <VocabularyList words={fields["supporting-materials"]}></VocabularyList>
    </div>
  );
}
export default App;
