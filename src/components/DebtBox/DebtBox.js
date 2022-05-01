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
          <div className="debt_box">
              <h4 className="debt_name">{this.props.name}</h4>
              <p className="debt_amount">{this.props.balance}</p>
              
          </div> 


      )
  }

}

export default DebtBox;
