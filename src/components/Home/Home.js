import React, { Component } from "react";

import Tile from "../../components/Tile/Tile";

import "./Home.css";

class Home extends Component {

  render() {
    return (
          <div className="middletiles">
          <Tile title="Bills Summary" />
          <Tile title="Debt Summary" />
          <Tile title="Savings Summary" />
          <Tile title="Expenses Summary" />
          </div>
      );
  }
}

export default Home;
