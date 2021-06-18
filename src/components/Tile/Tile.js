import React from "react";
import { Component } from "react";
import "./Tile.css";

class Tile extends Component {
  mapSavingsList(list){
     let newlist;

      console.log(list)
       newlist = list.map((allSavings, index) => (
        //  <h3>Budget {allSavings[0].budget_id}</h3>
           allSavings.map((saving, ind)=> (
           <p>{saving.savings_name}:  {saving.savings_amount}</p>
         )) //end savingArray map
        
      ));   
    return newlist
  }

  renderSavings(){
    return (
      <div className="innertile">
        {this.mapSavingsList(this.props.savingsList)}
      </div> 
    ) 
  }

  renderDebt(){
    return (
      <div className="innertile">
        <p>Debt</p>
      </div> 
    ) 
  }

  renderExpenses(){
    return (
      <div className="innertile">
        <p>Expenses</p>
      </div> 
    ) 
  }

  renderBills(){
    return (
      <div className="innertile">
        <p>Bills</p>
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
