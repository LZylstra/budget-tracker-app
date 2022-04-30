import React, { Component } from "react";
import DebtBox from "../../components/DebtBox/DebtBox";
import "./DebtPage.css";


class DebtPage extends Component {
  renderDebtList(alldebt){
    // Has all accounts from all budgets so need to map through all of them
   console.log(this.props.debtList)
    return alldebt.map((debt, ind) => (

      debt.map((debtitem, index) => (
      //  console.log(accountitem)
        // <AccountRow
        //   id={debtitem.account_id}
        //   name={debtitem.account_name}
        //   amount={debtitem.account_amount}
        //   goal_date={debtitem.goal_date}
        //   goal={debtitem.goal_amount}
        //   monthly_auto={debtitem.monthly_auto}
        //   type={debtitem.account_type}
        //   key={index}
        // />
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
            <p>{this.renderDebtList(list)}</p>
        </div>

      </div>
    );
  }
}

export default DebtPage;

