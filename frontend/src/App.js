import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const [getMessage, setGetMessage] = useState({})
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/querygpt', { query: inputValue })
      .then(response => {
        console.log("SUCCESS", response)
        setGetMessage(response)
      }).catch(error => {
        console.log(error)
      });
  };

  useEffect(() => {
    axios.get('http://localhost:5000/querygpt').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>Lesson plan generator</p>
        <input type='text' value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Generate plan</button>
        <div>{getMessage.status === 200 && getMessage.data ?
          <h3>{getMessage.data.response}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}
export default App;
