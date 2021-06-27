import currency from "currency.js";
import React from "react";
import { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  mapSavingsList(list){
     let newlist;
       newlist = list.map((allSavings, index) => (
           allSavings.map((saving, ind)=> (
           <p key={ind}>{saving.savings_name}:  {saving.savings_amount}</p>
         )) 
        
      ));   
    return newlist
  }

  mapBillsList(list){
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


mapExpenseList(catlist, explist){
  let currentYear = new Date().getFullYear().toString();
  let catSummary = [];

  for (let allBudCat = 0; allBudCat < catlist.length; allBudCat++){ //loop through array of categories for each budget
    let categories = catlist[allBudCat]
    
    for (let category = 0; category < catlist[allBudCat].length; category++){ //loop through all categories from one budget
      let catObj = {}
      let expenseAmt = 0;
      if (categories[category].category_year === currentYear){
        catObj.name = categories[category].category_name
        
        
        
        for(let allExp = 0; allExp < explist.length; allExp++){ //loop through all categories expenses
          let expenses = explist[allExp];
          
 
          for(let exp = 0; exp < expenses.length; exp++ ){ // loop through one categories expenses
            
            if (expenses[exp].category_id === categories[category].category_id){
             expenseAmt = currency(expenseAmt).add(currency(expenses[exp].expense_amount))
           }
            
          }
          catObj.totalSpent = currency(expenseAmt).format();
           
        }
        
      }
    
      catSummary[category] = catObj;
  }

  return catSummary.map((summary, index) => (
    <p key={index}>{summary.name}: {summary.totalSpent}</p>
  ))
  }

}//end of map expense list

  renderSavings(){
    return (
      <div className="innertilesavings">
        {this.mapSavingsList(this.props.savingsList)}
      </div> 
    ) 
  }

  renderDebt(){
    return (
      <div className="innertiledebt">
        {this.mapDebtList(this.props.debtList)}
      </div> 
    ) 
  }

  renderExpenses(){
    return (
      <div className="innertileexpenses">
        {this.mapExpenseList(this.props.categoryList, this.props.expenseList)}
      </div> 
    ) 
  }

  renderBills(){
    return (
      <div className="innertilebills">
        {this.mapBillsList(this.props.billsList)}
      </div> 
    ) 
  }


  render(){
    return (
      <div className="tile">
        <h2>{this.props.title}</h2>
        {this.props.type==='savings' ? this.renderSavings() : 
          this.props.type==='debt' ? this.renderDebt() :
            this.props.type==='bills' ? this.renderBills():
              this.renderExpenses()  
        }
      </div>
      )
  }

}

export default Tile;
