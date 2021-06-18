import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Middle from "../../components/Middle/Middle"
import "./UserHome.css";
import BudgetApiService from "../../services/budget-api-service";
import SavingsApiService from "../../services/savings-api-service";
import BillsApiService from "../../services/bills-api-service";
import DebtApiService from "../../services/debt-api-service";
import CategoryApiService from "../../services/category-api-service";
import UserBar from "../../components/UserBar/UserBar"
import currency from "currency.js";
import ExpenseApiService from "../../services/expenses-api-service";

class UserHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageShown: 'home',
      budgetList: [],
      totalIncome: 0, // The users total income from all budgets (monthly pay and additional)
      savingsList: [],
      billsList: [],
      debtList: [],
      categoryList:[],
      expensesList:[]
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

        // Get and save all user expense categories from all of their budgets
        for (let i = 0; i < budgets.length; i++){
          CategoryApiService.getAllCategories(budgets[i].budget_id)
            .then((category)=> {
              if(category.length !== 0){
               // console.log(category)
                this.setState(prevState => ({ categoryList: [...prevState.categoryList, category] }))
                
                for(let c = 0; c < category.length; c++){
                  ExpenseApiService.getAllExpenses(category[c].category_id)
                    .then((expenses)=> {
                      category[c].expenseList = expenses
                    }) //end api
                  } //end for c
                  
                } //end if
              }) // end then
        }//end for
            
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
    const categoryList = this.state.categoryList;

   // console.log("home total " + currency(this.state.totalIncome).format())
   console.log(categoryList) 

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
