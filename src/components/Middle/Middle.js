import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Tile from "../../components/Tile/Tile";
import "./Middle.css";

class UserHome extends Component {
  
  render() {
    return (


        <div className="middlesection">
            <div className="middletiles">
            <Tile title="Bills Summary" />
            <Tile title="Debt Summary" />
            <Tile title="Savings Summary" />
            <Tile title="Expenses Summary" />
            </div>

        </div>

    );
  }
}

export default withRouter(UserHome);
