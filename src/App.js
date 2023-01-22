import logo from './logo.svg';
import './App.css';
import React, { createContext } from 'react';
import ApproximateButton from './components/ApproximateButton';
import LocationButton from './components/LocationButton';
import { isContentEditable } from '@testing-library/user-event/dist/utils';


function App() {


  return (
    <div className="main">
        <ApproximateButton/>
        <h1>or</h1>
        <LocationButton/>

    </div>
  );
}


export default App;
