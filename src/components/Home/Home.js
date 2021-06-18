import React, { Component } from "react";

import Tile from "../../components/Tile/Tile";

import "./Home.css";

class Home extends Component {

  render() {
    return (
          <div className="middletiles">
          <Tile title="Bills Summary" type='bills' />
          <Tile title="Debt Summary" type='debt'/>
          <Tile 
            title="Savings Summary" 
            savingsList={this.props.savingsList}
            type='savings'
          />
          <Tile title="Expenses Summary" type='expenses' />
          </div>
      );
  }
}

export default Home;
