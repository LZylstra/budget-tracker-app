import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BillList from "../../components/Bills/BillList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tile from "../../components/Tile/Tile";
import "./UserHome.css";

class UserHome extends Component {
  render() {
    return (
      <div className="user_home">
        <Sidebar />
        <div className="middlesection">
          <Tile title="Bills Summary" />
          <Tile title="Debt Summary" />
          <Tile title="Savings Summary" />
          <Tile title="Expenses Summary" />
        </div>

        {/* <BillList /> */}
      </div>
    );
  }
}

export default withRouter(UserHome);
