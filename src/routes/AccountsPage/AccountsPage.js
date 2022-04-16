import React, { Component } from "react";
import AccountRow from "../../components/AccountRow/AccountRow"
import "./AccountsPage.css";


class AccountsPage extends Component {
  renderAccountsList(allaccounts){
    // Has all accounts from all budgets so need to map through all of them
   
    return allaccounts.map((accounts, ind) => (

      accounts.map((accountitem, index) => (
      //  console.log(accountitem)
        <AccountRow
          id={accountitem.account_id}
          name={accountitem.account_name}
          amount={accountitem.account_amount}
          goal_date={accountitem.goal_date}
          goal={accountitem.goal_amount}
          monthly_auto={accountitem.monthly_auto}
          key={index}
        />
       ))
      )); 
     
// return test;
  }
  
  render() {
    console.log(this.props.accountsList)
    let list = this.props.accountsList;
    return (
      <div className="accounts_page">
        <h2 className="page_title">Account Page</h2>
        <div className="inner_accounts_page">
        {this.renderAccountsList(list)}
        </div>
        

      </div>
    );
  }
}

export default AccountsPage;
