import './App.css';
import React from 'react';
import Setup from './components/Setup';

import FoodSelection from './components/FoodSelection';
import { useState, useEffect } from 'react';
import logo from './assets/Time.png';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
       console.log (isShown);
        setIsShown(current => !current);
    }

    
  return (
    <div className="App">
      
      <img id="backgroundImg" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="background-img"/>
      
      <div class="container">
        
        <div class="navbar">
          <div class="firstnav">
            <a href=""><img src={logo} alt="logo" /></a>
          </div>
          
          
          <div class="nav-btns">
            <div class="nav-button">
              <h4 id="first-nav">Let's Eat!</h4>
            </div>
            <div class="nav-button">
              <h4 id="second-nav">About Us</h4>
            </div>
          </div>
        </div>
        
        <div class="title">
          It's Time to Eat!
        </div>
        
        <Setup/>
        
        <IconButton onClick={function() {handleClick()}} class="finalBtn"
                            colorScheme='blue'
                            aria-label='Search database'
                            size='lg'
                            icon={<ArrowRightIcon/>}/>

        
        
        
      </div>
      {isShown && <FoodSelection/>}
    </div>
  );
}


export default App;

