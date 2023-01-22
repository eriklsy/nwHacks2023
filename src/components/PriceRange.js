import React, { Component } from 'react';
import './Setup.css';

class PriceRange extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }
  
    render() {
      return (
        <div className="eaters">
          <input type="number" min="1" pattern="[0-9]*" />
        </div>
      );
    }
  }
  
  export default NumEaters;