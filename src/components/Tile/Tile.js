import currency from "currency.js";
import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faMoneyBillWave,
  faCreditCardFront,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Tile.css";

class Tile extends Component {

  mapAccountsList(list){
     let newlist;
       newlist = list.map((allAccounts, index) => (
           allAccounts.map((account, ind)=> (
            <>
            {/* <FontAwesomeIcon className="home_icon fa-lg" icon={faMoneyCheckAlt} /> */}
           <p key={ind}>{account.account_name}:  {account.account_amount}</p>
           </>
         )) 
        
      ));   
    return newlist;
  }

  mapBillsList(list) {
    let newlist;
      newlist = list.map((allBills, index) => (
          allBills.map((bill, ind)=> (
          <p key={ind}>{bill.bill_name} : {bill.current_status}</p>
        )) 
       
     ));   
   return newlist
 }

 mapDebtList(list){
  let newlist;
    newlist = list.map((allDebt, index) => (
        allDebt.map((debt, ind)=> (
        <p key={ind}>{debt.debt_name} : {debt.current_status}</p>
      )) 
     
   ));   
 return newlist
}

  mapExpenseList(list) {
    let newlist;
    let currentYear = new Date().getFullYear().toString();
    let count = 0;
    
    newlist = list.map((allCategories, index) => {
      allCategories.map((category, ind) => {
        if (category.category_year === currentYear) {
         // console.log("if");
        }
      //  console.log(category.category_year === currentYear);
        <p key={ind}>{category.category_name} </p>;
      }); //end accountArray map
    });
    return newlist;
  }


  renderAccounts() {
    return (
      <div className="innertileaccounts">
        {this.mapAccountsList(this.props.accountsList)}
      </div>
    );
  }

  renderDebt() {
    return (
      <div className="innertiledebt">
        {this.mapDebtList(this.props.debtList)}
      </div>
    );
  }

  renderExpenses() {
    return (
      <div className="innertileexpenses">
        {this.mapExpenseList(this.props.categoryList)}
      </div>
    );

  }

  renderBills() {
    return (
      <div className="innertilebills">
        {this.mapBillsList(this.props.billsList)}
      </div>
    );
  }

  render() {

    return (
      <div className="tile">
        <h2>{this.props.title}</h2>
        {this.props.type === "accounts"
          ? this.renderAccounts()
          : this.props.type === "debt"
          ? this.renderDebt()
          : this.props.type === "bills"
          ? this.renderBills()
          : this.renderExpenses()}
      </div>

    );
  }

}

export default Tile;
