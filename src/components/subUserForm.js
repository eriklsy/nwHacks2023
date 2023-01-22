

/* This is the outermost layer that defines a subuser form. 
Component Creates a form of checkboxes
 Each form will contain a catalogue which will individually connect 
*/

import React, { Component, useState } from "react";
import Checkbox from "./Checkbox";
import { TagContext } from "./TagContext";
import DisplayTags from "./DisplayTags";

const OPTIONS = ["Korean", "Chinese"];
const imgpath = "./images/"



class SubUserComp extends Component {
  
  
  state = {
    formData: [],
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    
    //! this is where the form data gets outputted
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      
  

      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
        // add into array
        
      },
     //return this
     
      console.log(this.state.checkboxes),
      this.state.formData = this.state.checkboxes,
     // {formData} = this.state.checkboxes
      <TagContext.Provider value={this.state.formData}>
        <DisplayTags/>
      </TagContext.Provider>,
      console.log("after")

      );
      this.value=null;
      //console.log({ formData })
      
  };
 
  createCheckbox = option => (
    
    <Checkbox
      label={option}
      ipath = {require(imgpath + option + ".png")} 
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default SubUserComp;