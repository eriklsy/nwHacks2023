import React from "react";

//turn this into a div, add image tag with image uploaded based on the label - ask erik
const Checkbox = ({ label, ipath, isSelected, onCheckboxChange }) => (
  
  <div className="form-check">
    <img 
            width="100px"
            src= {ipath} alt={ipath}></img>
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;