import React, { Component } from "react";
import { TagContext } from "./TagContext";

class DisplayTags extends Component{
    render() {
        return (
            console.log("hi"),
          <TagContext.Consumer>
            {(context) => (
                <React.Fragment>
                    <p> Tags: {context.formData}</p>
                </React.Fragment>,
                console.log(context.tags)
            )}
            
          </TagContext.Consumer>
        );
      }
}

export default DisplayTags;