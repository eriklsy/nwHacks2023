import './App.css';
import React from 'react';
import Setup from './components/Setup';
import P1 from './components/P1';
import { useState, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import logo from './assets/Time.png';

function App() {
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
      </div>
    </div>
  );
}


export default App;

