import React, { Component } from 'react';
import Nest from './Nest.js';
import { MyContext } from './Context.js';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Erikk'
    };
  }
  
  render() {
    return (
        
      <MyContext.Provider value={{outer: this.state}}>
        <div>
        <Nest/>
        </div>
      </MyContext.Provider>
    );
  }

}

export default Person;