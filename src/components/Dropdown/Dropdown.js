import React from "react";
import "./Dropdown.css"

const Dropdown = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value.account_name} onChange={onChange} className="dropdown_box">
          {options.map((option, index) => (
            <option key={index} value={option.account_id}>{option.account_name}</option>
          ))}
        </select>
      </label>
    );
  };
  
  export default Dropdown;