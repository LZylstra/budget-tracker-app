import React from "react";
import Bill from "./Bill";

function BillList() {
  return (
    <div className="bills-list">
      <Bill name="Comcast" cost="61.19" due="31st" />
      <Bill name="Credit Card" cost="300.00" due="23rd" />
      <Bill name="Rent" cost="2,100.34" due="1st" />
    </div>
  );
}

export default BillList;
