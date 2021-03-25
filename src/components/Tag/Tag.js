import React from "react";
import "./Tag.css";

function Tag(props) {
  return (
    <div className="tag">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Tag;
