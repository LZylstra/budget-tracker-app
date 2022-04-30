import currency from "currency.js";
import { Input } from "../../utils/utils";
import moneyZoom from "../../img/magnifying-glass-dollar-solid.svg"

import moment from 'moment'
import React from "react";
import { Component } from "react";
import "./DebtBox.css";

class DebtBox extends Component {

  render(){

    
    return (
        <div>
          <div className="debt_box">
              <h4 className="debt_name">{this.props.name}</h4>
              <p className="debt_amount">{this.props.amount}</p>
              
            {/* <img src={transferMoney} className="transfer_money account_icon" onClick={this.handleClickTransfer} /> */}
          </div> 
          {/* <div className="goal_box">
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

          </div> */}
          {/* {showForm ? this.renderForm() : <></>} */}
        </div>
      )
  }

}

export default DebtBox;
