import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ExpensesPage from "../../routes/ExpensesPage/ExpensesPage"
import BillPage from "../../routes/BillPage/BillPage"
import SavingsPage from "../../routes/SavingsPage/SavingsPage"
import DebtPage from "../../routes/DebtPage/DebtPage";
import Home from "../Home/Home"
import "./Middle.css";


class Middle extends Component {
render() {
    let page = this.props.pageShown;

    return (

      <div className="middlesection">
          {page==='expenses'? <ExpensesPage 
                                  expenseList={this.props.expenseList}
                                  categoryList={this.props.categoryList}
                              /> : 
            page === 'savings' ? <SavingsPage savingsList={this.props.savingsList}/> :
              page=== 'debt' ? <DebtPage debtList={this.props.debtList}/> : 
                page === 'bills' ? <BillPage billsList={this.props.billsList}/> : 
                <Home 
                  savingsList={this.props.savingsList}
                  billsList={this.props.billsList}
                  debtList={this.props.debtList}
                  categoryList={this.props.categoryList}
                  expenseList={this.props.expenseList}
                  budgetList={this.props.budgetList}
                  updateIncome={this.props.updateIncome}
                />
          }

      </div>

      );
  }
}

export default withRouter(Middle);
