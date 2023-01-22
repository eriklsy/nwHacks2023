import logo from './logo.svg';
import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import SubUserComp from './components/subUserForm';
import { TagContext } from './components/TagContext';


function App() {
  
  let [tags, addTags] = useState([]);

  useEffect(() => {
    <TagContext.useEffect>
      
    </TagContext.useEffect>
    
  }, [tags])

  return (
    <div className="App">
      <header className="App-header">
       <p>Tags Collected: {tags}</p>
        <p>
          
          <SubUserComp/>
        </p>
      
      </header>
    </div>
  );
}


export default App;
