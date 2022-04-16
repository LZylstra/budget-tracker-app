import currency from "currency.js";
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
            <p className="savings_goal">Goal: {this.props.goal}</p>
             <p className="savings_date">{moment(this.props.goal_date).format('MMMM Do YYYY')}</p>
        </div>
        </div>
      )
  }

}

export default SavingsRow;
