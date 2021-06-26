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
import Loader from "../../components/Loader/Loader"
import ExpenseApiService from "../../services/expenses-api-service";

class UserHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageShown: 'home',
      loading: true,
      budgetList: [],
      totalIncome: 0, // The users total income from all budgets (monthly pay and additional)
      savingsList: [],
      billsList: [],
      debtList: [],
      categoryList:[],
      expenseList:[],
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
              this.setState(prevState => ({ 
                savingsList: [...prevState.savingsList, savings]

              }))
            }
          })
        }

        // Get and save all user bills from all of their budgets
        for (let i = 0; i < budgets.length; i++){
          BillsApiService.getAllBills(budgets[i].budget_id)
            .then((bills)=> {
              if(bills.length !== 0){
                this.setState(prevState => ({ 
                  billsList: [...prevState.billsList, bills] 

                }))
              } 
            } )
        }

        // Get and save all user debt from all of their budgets
        for (let i = 0; i < budgets.length; i++){
          DebtApiService.getAllDebt(budgets[i].budget_id)
            .then((debt)=> {
              if(debt.length !== 0){
                this.setState(prevState => ({ 
                  debtList: [...prevState.debtList, debt] 

                }))
              } 
            } )
        }

        // Get and save all user expense categories from all of their budgets
        for (let i = 0; i < budgets.length; i++){
          CategoryApiService.getAllCategories(budgets[i].budget_id)
            .then((category)=> {
              if(category.length !== 0){
               // console.log(category)
                               
                for(let c = 0; c < category.length; c++){
                  ExpenseApiService.getAllExpenses(category[c].category_id)
                    .then((expenses)=> {
                      //category[c].expenseList = expenses
                      if (expenses.length !== 0){
                        this.setState(prevState => ({ expenseList: [...prevState.expenseList, expenses]}))
                      }
                     
                    }) //end api
                  } //end for c
                  
                  this.setState(prevState => ({ categoryList: [...prevState.categoryList, category]}))
                } //end if
              }) // end then
        }//end for
          
      })
       .then(this.setState({ loading: false }))
    .catch((error) => {
      console.error({ error });
      this.wait();
    });

  }
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 200) => {
    await this.sleep(milliseconds);
    this.setState({
     pageShown: 'home',
     loading: false,
     loadingCat: false,
     budgetList: [],
     totalIncome: 0, 
     savingsList: [],
     billsList: [],
     debtList: [],
     categoryList:[]

    })
  }

  render() {
    const { budgetList, savingsList, billsList, debtList, categoryList, pageShown, expenseList }= this.state;

   if (this.state.loading){
     return <Loader/>
   }
   else{
    return (
      <div className="user_home">
        <Sidebar handleButtonChoice={this.handleButtonChoice}/>
        <UserBar budgetList={budgetList} updateIncome={this.updateIncome}/>
        
         <Middle 
            pageShown={pageShown}
            savingsList={savingsList}
            billsList={billsList}
            debtList={debtList}
            categoryList={categoryList}
            expenseList={expenseList}
          />
      </div>
    );
      }
  }
}

export default withRouter(UserHome);
