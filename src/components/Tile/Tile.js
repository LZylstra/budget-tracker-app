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
        <p>Debt</p>
      </div> 
    ) 
  }

  renderExpenses(){
    return (
      <div className="innertileexpenses">
        <p>Expenses</p>
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
