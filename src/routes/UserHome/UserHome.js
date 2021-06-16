import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BillList from "../../components/Bills/BillList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tile from "../../components/Tile/Tile";
import Middle from "../../components/Middle/Middle"
import "./UserHome.css";

class UserHome extends Component {

  render() {
    return (
      <div className="user_home">
        <Sidebar />
        <Middle />

        {/* <BillList /> */}
      </div>
    );
  }
}

export default withRouter(UserHome);
