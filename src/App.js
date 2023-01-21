import './App.css';
import React from 'react';
import Setup from './components/Setup';
import { useState, useEffect } from 'react';
import { PhoneIcon } from '@chakra-ui/icons';

function App() {
  return (
    <div className="App">
      <PhoneIcon/>
       <img id="backgroundImg" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"/>
      <div class="container">
        <div class="navbar">
          <div class="firstnav">
            <img src="./assets/Time.png" alt="Logo"/>
          </div>
          <div class="nav-btns">
            <div class="nav-button">
              <h4 id="nav-text">Let's Eat!</h4>
            </div>
            <div class="nav-button">
              <h4 id="nav-text">About Us</h4>
            </div>
          </div>
        </div>
        <Setup/>
      </div>
     
    </div>
  );
}


export default App;

