import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BillList from "../../components/Bills/BillList"
import "./UserHome.css";


class UserHome extends Component {


  render() {
    return (
      <div>
            <h1>This is the user home page...</h1>
            <BillList />

      </div>
    );
  }
}

export default withRouter(UserHome);
