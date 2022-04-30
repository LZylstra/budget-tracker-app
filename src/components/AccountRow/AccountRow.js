import currency from "currency.js";
import { Input } from "../../utils/utils";
import moneyZoom from "../../img/magnifying-glass-dollar-solid.svg"
import transferMoney from "../../img/money-bill-transfer-solid.svg"
import TransferForm from "../TransferForm/TransferForm"

import moment from 'moment'
import React from "react";
import { Component } from "react";
import "./AccountRow.css";

class AccountRow extends Component {
  constructor(props) {
    super(props);
  this.state = {
    extraHidden : true,
    remaining: null,
    transferForm: false,
    goalOpen: false
  }
}


  updateExtraHidden = () =>{
   //console.log(this.state.extraHidden)
    this.setState({
      extraHidden: this.state.extraHidden = !this.state.extraHidden
    })
  }
  toggleGoalOpen = () =>{
    //console.log(this.state.extraHidden)
     this.setState({
       goalOpen: this.state.goalOpen = !this.state.goalOpen
     })
   }
   

  // toggleTransfer = ()=>{
  //   this.setState({transferForm: this.state.transferForm = !this.state.transferForm})
  // }

  handleClickTransfer = () =>{
   // console.log(this.state.transferForm)
    this.props.toggleTransfer()
    
  }

  checkRate = (remainingGoal) =>{
    var given = moment(this.props.goal_date, "YYYY-MM-DD");
    var current = moment().startOf('day');
    let days, rate, months;
  
    
    //Difference in number of days
    days= moment.duration(given.diff(current)).asDays();
    months= days/12;

    // console.log(moment().to(this.props.goal_date))
    // console.log("days "+days)
    // console.log("months "+days/12)

    if (months !==0){
      rate = remainingGoal / months;
      // console.log(remainingGoal)
      return rate.toFixed(2);
    }else return "Out of time"
    
  }

  renderForm(){
    // return <TransferForm 
    //   name={this.props.name}
    //   amount={this.props.amount}
    //   id={this.props.id}
    // />
  }

  renderSavingsGoal(){
    let remaining = currency(this.props.goal).subtract(currency(this.props.amount))
    return(
    <div className="goal_box">
    <h4 className="goal_title">Goal</h4>
      <img src={moneyZoom} className="magnifying_money account_icon" onClick={this.updateExtraHidden} />
      <p className={this.state.extraHidden ? "current_amount hidden_account_info" : "current_amount"}>{this.props.amount} /&nbsp; </p>
      <p className="account_goal">{this.props.goal}</p>

      <p className={this.state.extraHidden ?"account_remaining hidden_account_info": "account_remaining"}>Remaining {remaining.format()}</p>

      <div className="account_date">
        {moment(this.props.goal_date).format('MMMM Do YYYY')} 
        ({moment().to(this.props.goal_date)})
      </div>

      <p className={this.state.extraHidden ?"new_rate hidden_account_info": "new_rate"}>${this.checkRate(remaining.value)} / month to meet goal</p>
      <p className="monthly_auto_account">{this.props.monthly_auto} / month</p>
      {/* <div className="extra_amount_box">
        <label htmlFor="CategoryForm__amount">Extra</label>
        <Input type="number" min="0" name="extra_amount" className="Form__account"></Input>
      </div> */}
  </div>)
  }

  renderChecking(){

  }

  render(){

    //let showForm = this.state.transferForm;

    //console.log(this.props.type)
    
    return (
        <div>
          <div className="account_box" onClick={this.toggleGoalOpen}>
              <h4 className="account_name">{this.props.name}</h4>
              <p className="account_amount">{this.props.amount}</p>
            <img src={transferMoney} className="transfer_money account_icon" onClick={this.handleClickTransfer} />
          </div> 

          {this.props.type==="Savings" && this.state.goalOpen===true ? this.renderSavingsGoal() : <></>}

          {/* {showForm ? this.renderForm() : <></>} */}
        </div>
      )
  }

}

export default AccountRow;
