import logo from './logo.svg';
import './App.css';
import React, { createContext, useState, useEffect } from 'react';
import Person from './components/Test';
import Nest from './components/Nest';
import { MyContext } from './components/Context';

function App() {

  let [name, setName] = useState("erik");

  useEffect(() => {
    <MyContext.Provider value={{name}}>
    <Nest/>
    </MyContext.Provider>
  }, [name])
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <button onClick={function() {setName(
          {name} = "bob"
          )}}>Click me</button>
          
        <MyContext.Provider value={{name}}>
        <Nest/>
        </MyContext.Provider>


          
        <p>
          Edit <code>src/App.js</code> and save to reload. test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
