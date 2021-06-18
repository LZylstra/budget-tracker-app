import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Middle from "../../components/Middle/Middle"
import "./UserHome.css";
import BudgetApiService from "../../services/budget-api-service";
import SavingsApiService from "../../services/savings-api-service";
import BillsApiService from "../../services/bills-api-service";
import DebtApiService from "../../services/debt-api-service";
import UserBar from "../../components/UserBar/UserBar"
import currency from "currency.js";

class UserHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageShown: 'home',
      budgetList: [],
      totalIncome: 0, // The users total income from all budgets (monthly pay and additional)
      savingsList: [],
      billsList: [],
      debtList: []
    };

    this.handleButtonChoice = this.handleButtonChoice.bind(this);
    this.updateIncome = this.updateIncome.bind(this);
  }

  handleButtonChoice(newPage){
    this.setState({pageShown: newPage})
  }
  
  updateIncome(newIncome){
    this.setState({totalIncome: newIncome})
  }


  componentDidMount(){
    BudgetApiService.getBudgets()
      .then((budgets) => {
        this.setState({ budgetList: budgets });
       
        // Get and save all user savings from all of their budgets
        for (let i = 0; i < budgets.length; i++){
          SavingsApiService.getAllSavings(budgets[i].budget_id)
          .then((savings) => {
            if(savings.length !== 0){ 
              this.setState(prevState => ({ savingsList: [...prevState.savingsList, savings] }))
            }
          })
        }

        // Get and save all user bills from all of their budgets
        for (let i = 0; i < budgets.length; i++){
          BillsApiService.getAllBills(budgets[i].budget_id)
            .then((bills)=> {
              if(bills.length !== 0){
                this.setState(prevState => ({ billsList: [...prevState.billsList, bills] }))
              } 
            } )
        }

        // Get and save all user debt from all of their budgets
        for (let i = 0; i < budgets.length; i++){
          DebtApiService.getAllDebt(budgets[i].budget_id)
            .then((debt)=> {
              if(debt.length !== 0){
                this.setState(prevState => ({ debtList: [...prevState.debtList, debt] }))
              } 
            } )
        }


      })
    .catch((error) => {
      console.error({ error });
    });

  }

  render() {
    const budgetList = this.state.budgetList;
    const savingsList = this.state.savingsList;
    const billsList = this.state.billsList;
    const debtList = this.state.debtList;

   // console.log("home total " + currency(this.state.totalIncome).format())
   console.log(debtList)

    return (
      <div className="user_home">
        <Sidebar handleButtonChoice={this.handleButtonChoice}/>
        <UserBar budgetList={budgetList} updateIncome={this.updateIncome}/>
        <Middle 
          pageShown={this.state.pageShown}
          savingsList={this.state.savingsList}
          billsList={this.state.billsList}
          debtList={this.state.debtList}
        />

      </div>
    );
  }
}

export default withRouter(UserHome);
