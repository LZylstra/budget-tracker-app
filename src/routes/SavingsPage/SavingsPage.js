import React, { Component } from "react";
import SavingsRow from "../../components/SavingsRow/SavingsRow"
import "./SavingsPage.css";


class SavingsPage extends Component {
  renderSavingsList(allsavings){
    // Has all savings from all budgets so need to map through all of them
   
    return allsavings.map((savings, ind) => (

      savings.map((savingitem, index) => (
      //  console.log(savingitem)
      <SavingsRow
        id={savingitem.savings_id}
        name={savingitem.savings_name}
        amount={savingitem.savings_amount}
        goal_date={savingitem.goal_date}
        goal={savingitem.goal_amount}
        monthly_auto={savingitem.monthly_auto}
        key={index}
      />
       ))
      )); 
     
// return test;
  }
  
  render() {
    console.log(this.props.savingsList)
    let list = this.props.savingsList;
    return (
      <div className="savings_page">
        <h2 className="page_title">Savings page</h2>
        <div className="inner_savings_page">
        {this.renderSavingsList(list)}
        </div>
        

      </div>
    );
  }
}

export default SavingsPage;
