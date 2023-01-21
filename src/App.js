
import './App.css';
import React from 'react';
import NavButton from './components/NavButton';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="navbar">
          <div class="firstnav">
            <image src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg"/>

          </div>
          <NavButton
            text="About Us"
            link=""
          />



        </div>



      </div>
    </div>
  );
}

export default App;
