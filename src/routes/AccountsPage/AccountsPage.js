import React, { Component } from "react";
import AccountRow from "../../components/AccountRow/AccountRow"
import TransferForm from "../../components/TransferForm/TransferForm";
import "./AccountsPage.css";


class AccountsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transferForm: false,
    }
    this.toggleTransfer = this.toggleTransfer.bind(this);
  }
 

  toggleTransfer = ()=>{
    this.setState({transferForm: this.state.transferForm = !this.state.transferForm})
  }

  sortAccounts(unsorted){
    let inner, innerArray=[];
    for(let i = 0; i < unsorted.length; i++){
      inner = unsorted[i];
     // console.log(unsorted[i])
      for(let a =0; a < inner.length; a++){
       // console.log(inner[a])
        innerArray.push(inner[a])
      }
    }
    innerArray.sort(function(x,y){
      if (x.account_type === 'Checking'){
        return -1
      }else {
        return 1
      }
    })
   // console.log(innerArray)
    return innerArray;
  }

  renderForm(list){
    return <TransferForm 
      options={list}
    />
  }

  renderAccountsList(allaccounts){
    // Has all accounts from all budgets so need to map through all of them
   // return allaccounts.map((accounts, ind) => (
       return allaccounts.map((accountitem, index) => (
      //  console.log(accountitem)
        <AccountRow
          id={accountitem.account_id}
          name={accountitem.account_name}
          amount={accountitem.account_amount}
          goal_date={accountitem.goal_date}
          goal={accountitem.goal_amount}
          monthly_auto={accountitem.monthly_auto}
          type={accountitem.account_type}
          toggleTransfer={this.toggleTransfer}
          key={index}
        />
       ))
     // )); 
      // }
     
// return test;
  }
  
  render() {
    let showForm = this.state.transferForm;
   // console.log(this.props.accountsList)
    let list = this.sortAccounts(this.props.accountsList);
    return (
      <div className="accounts_page">
        <h2 className="page_title">Accounts Page</h2>
        <div className="inner_accounts_page">
        {this.renderAccountsList(list)}
        </div>
        
        {showForm ? this.renderForm(list) : <></>}
      </div>
    );
  }
}

export default AccountsPage;
