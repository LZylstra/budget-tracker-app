import React, { Component } from "react";
import "./UserBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import currency from "currency.js";


class UserBar extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          totalPay: 0,
          additionalTotal: 0,
          totalIncome: 0   
        };
    }

    updateTotalPay(newPay){
        this.setState({totalPay: newPay})
    }
    updateAdditionalIncome(newIncome){
        this.setState({additionalIncome: newIncome})
    }
    updateTotalIncome(newIncome){
        this.setState({totalIncome: newIncome})
    }

    calculateTotalPay(){
        let total=0, i, budgets=this.props.budgetList ;

        for(i = 0; i < budgets.length; i++){
            total = currency(total).add(currency(budgets[i].monthly_pay));
        }

        return total;   
    }
    calculateTotalAdditional(){
        let total=0, i, budgets=this.props.budgetList ;

        for(i = 0; i < budgets.length; i++){
            total = currency(total).add(currency(budgets[i].additional_income));
        }

        return total;   
    }

    getTotalIncome(inc, add){
       let total = currency(inc).add(currency(add))
        //console.log(currency(total).format())
        return total;
    }

    componentDidUpdate(){
        let total = this.getTotalIncome(this.calculateTotalPay(), this.calculateTotalAdditional())
      //  console.log("total " + currency(total).format())
        let update, previous = currency(this.state.totalIncome).format();
        let trimPrev = previous.trim()
        let trimTotal = currency(total).format().trim()
       // console.log("trimPrev " + trimPrev)
       // console.log("trimTotal " + trimTotal)
        
        if (trimPrev != trimTotal){
            //console.log("they don't match")
            update = currency(total).format()
            this.updateTotalIncome(total)
            this.props.updateIncome(total)
        }
       
    }

    onClickBudgetEdit=(e)=>{
        console.log("click edit on budget bar")
    }
    render(){
        let totalPay = this.calculateTotalPay()
        let totalPayFormatted = currency(totalPay).format()

        let totalAdditional = this.calculateTotalAdditional()
        let totalAdditionalFormatted = currency(totalAdditional).format()

        
        
        return (
            <div className="user_bar">
            <div className="budget_summary_details">
                <h3>Total monthly pay: {totalPayFormatted} </h3>
                <p>Additional income total: {totalAdditionalFormatted}</p>
                <FontAwesomeIcon className="budgetedit-icon" icon={faEdit} onClick={this.onClickBudgetEdit} />
            </div>
            </div>
        );
    }
}

export default UserBar;
