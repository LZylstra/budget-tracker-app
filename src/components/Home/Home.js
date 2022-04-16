import React, { Component } from "react";
import UserBar from "../../components/UserBar/UserBar";
import Tile from "../../components/Tile/Tile";

import "./Home.css";

class Home extends Component {

  render() {
    return (
      <>
      <UserBar budgetList={this.props.budgetList} updateIncome={this.props.updateIncome}/>
          <div className="middletiles">
          <Tile 
            title="Accounts Summary" 
            accountsList={this.props.accountsList}
            type='accounts'
          />
          <Tile 
            title="Bills Summary" 
            type='bills' 
            billsList={this.props.billsList} 
          />
          <Tile 
            title="Debt Summary" 
            type='debt'
            debtList={this.props.debtList}
          />

          <Tile 
            title="Expenses Summary" 
            type='expenses' 
            categoryList={this.props.categoryList}
            expenseList={this.props.expenseList}
          />
          </div>
          </>
      );
  }
}

export default Home;
