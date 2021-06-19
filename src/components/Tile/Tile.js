import React from "react";
import { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  mapSavingsList(list){
     let newlist;
       newlist = list.map((allSavings, index) => (
           allSavings.map((saving, ind)=> (
           <p key={ind}>{saving.savings_name}:  {saving.savings_amount}</p>
         )) //end savingArray map
        
      ));   
    return newlist
  }

  mapBillsList(list){
    let newlist;
      newlist = list.map((allBills, index) => (
          allBills.map((bill, ind)=> (
          <p key={ind}>{bill.bill_name} : {bill.current_status}</p>
        )) //end savingArray map
       
     ));   
   return newlist
 }

 mapDebtList(list){
  let newlist;
    newlist = list.map((allDebt, index) => (
        allDebt.map((debt, ind)=> (
        <p key={ind}>{debt.debt_name} : {debt.current_status}</p>
      )) //end savingArray map
     
   ));   
 return newlist
}


mapExpenseList(list){
  let newlist;
  let currentYear = new Date().getFullYear().toString();
  let count = 0;
  
  console.log(currentYear)
    newlist = list.map((allCategories, index) => (
      allCategories.map((category, ind)=> {
        if (category.category_year === currentYear){
          return <p key={ind}>{category.category_name} </p>
        }
        console.log(category.category_year === currentYear)
        //<p key={ind}>{category.category_name} </p>
      }) //end savingArray map
     
   ));   
 return newlist
}

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
        {this.mapExpenseList(this.props.categoryList)}
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
