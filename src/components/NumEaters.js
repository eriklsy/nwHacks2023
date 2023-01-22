import React, { Component } from 'react';

class NumEaters extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      <input type="number" min="1" pattern="[0-9]*" />
      </div>
    );
  }
}

export default NumEaters;
