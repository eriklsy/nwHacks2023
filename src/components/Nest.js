import React, { Component } from "react";
import { MyContext } from './Context';

class Nest extends Component{
    render() {
        return (
          <MyContext.Consumer>
            {(context) => (
                <React.Fragment>
                    <p> Name: {context.name}</p>
                </React.Fragment>
            )}
          </MyContext.Consumer>
        );
      }
}

export default Nest;