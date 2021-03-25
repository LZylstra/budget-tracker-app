import React from "react";
import "./Tile.css";

function Tile(props) {
  return (
    <div className="tile">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Tile;
