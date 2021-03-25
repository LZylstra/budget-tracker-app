import React from "react";
import Tag from "../Tag/Tag";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <Tag title="Bills" />
      <Tag title="Debt" />
      <Tag title="Savings" />
      <Tag title="Expenses" />
    </div>
  );
}

export default Sidebar;
