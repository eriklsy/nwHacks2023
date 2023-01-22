import React, { Component } from "react";
import { TagContext } from "./TagContext";

class DisplayTags extends Component{
    render() {
        return (
          <TagContext.Consumer>
            {(context) => (
                <React.Fragment>
                    <p> Tags: {context.formData}</p>
                </React.Fragment>
            )}
          </TagContext.Consumer>
        );
      }
}

export default DisplayTags;