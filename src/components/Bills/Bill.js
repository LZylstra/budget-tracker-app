import React from "react";
import "./bill.css";

function Bill(props) {
  return (
    <div className="bill">
      <div className="bill-details">
        <h3>{props.name}</h3>
        <p>$ {props.cost}</p>
        <p>Due {props.due}</p>
        <p className="unpaid-bill">Status</p>
      </div>
    </div>
  );
}

export default Bill;
