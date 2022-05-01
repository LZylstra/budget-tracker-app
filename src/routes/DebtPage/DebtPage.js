import React, { Component } from "react";
import DebtBox from "../../components/DebtBox/DebtBox";
import "./DebtPage.css";


class DebtPage extends Component {
  renderDebtList(alldebt){
    // Has all accounts from all budgets so need to map through all of them
   console.log(this.props.debtList)
    return alldebt.map((debt, ind) => (

      debt.map((debtitem, index) => (
        <DebtBox 
            key={index}
            name={debtitem.debt_name} 
            balance={debtitem.debt_balance}
            due= {debtitem.debt_due_date} 
            status={debtitem.current_status}
            rate={debtitem.interest_rate}
            min_payment={debtitem.min_payment}
        />
       ))
      )); 
  }
  render() {
    let list = this.props.debtList;
    return (
      <div className="debt_page">
        <h2 className="page_title">Debt Page</h2>
        <div className="inner_accounts_page">
            <div>{this.renderDebtList(list)}</div>
        </div>

      </div>
    );
  }
}

export default DebtPage;

