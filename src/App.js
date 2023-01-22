import logo from './logo.svg';
import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import SubUserComp from './components/subUserForm';
import { TagContext } from './components/TagContext';
import DisplayTags from './components/DisplayTags';

function App() {
  
  let [tags, addTags] = useState([]);

  useEffect(() => {
    <TagContext.Provider value={{tags}}>
    <DisplayTags/>
    </TagContext.Provider>
    
  }, [tags])

  return (
    <div className="App">
      <header className="App-header">
       <p>{tags}</p>

       <button onClick={function() {addTags(
          tags.push("bob"),
          console.log(tags)
          )}}>Click me</button>

        <p>
          <TagContext.Provider value={{tags}}>
          <DisplayTags/>
          </TagContext.Provider>
  
          <SubUserComp/>
        </p>
      
      </header>
    </div>
  );
}


export default App;
