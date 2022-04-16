import currency from "currency.js";
import { Input } from "../../utils/utils";
import moment from 'moment'
import React from "react";
import { Component } from "react";
import "./SavingsRow.css";

class SavingsRow extends Component {

  render(){

    console.log(this.props)
    return (
        <div>
          <div className="savings_box">
              <h4 className="savings_name">{this.props.name}</h4>
              <p className="savings_amount">{this.props.amount}</p>

          </div> 
          <div className="goal_box">
            <h4 className="goal_title">Goal</h4>
              <p className="savings_goal">{this.props.goal}</p>
              <div className="savings_date">
                {moment(this.props.goal_date).format('MMMM Do YYYY')} 
                ({moment().to(this.props.goal_date)})
              </div>
              
              <p className="monthly_auto_savings">{this.props.monthly_auto} /month</p>
              {/* <div className="extra_amount_box">
                <label htmlFor="CategoryForm__amount">Extra</label>
                <Input type="number" min="0" name="extra_amount" className="Form__savings"></Input>
              </div> */}
          </div>
        </div>
      )
  }

}

export default SavingsRow;
