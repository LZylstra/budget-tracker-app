import React, { Component } from "react";
import currency from "currency.js";
import moment from "moment"
import "./ExpensesPage.css";
import CategoryForm from "../../components/CategoryForm/CategoryForm";


class ExpensesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "All",
    };
  }
  mapExpenseList(){
    console.log(this.props.expenseList)
    let expenses = this.props.expenseList.map((expenses, index) => {
      // if (expense[0].category_id === this.state.currentCategory){

      // }
        return expenses.map((expense, ind) => {
          let d = moment(expense.expense_date).format("L")
          return <li key= {ind}>{d} &emsp; {expense.expense_type} &emsp; {expense.expense_amount} &emsp; {expense.expense_desc}</li>
        })
    })
    return expenses 
  }

  mapCategoryDetails(categorylist, explist){
    let currentYear = new Date().getFullYear().toString();
    let catSummary = [];

  for (let allBudCat = 0; allBudCat < categorylist.length; allBudCat++){ //loop through array of categories for each budget
    let categories = categorylist[allBudCat]
    
    for (let category = 0; category < categorylist[allBudCat].length; category++){ //loop through all categories from one budget
      let catObj = {}
      let expenseAmt = 0;
      if (categories[category].category_year === currentYear){
        catObj.name = categories[category].category_name
 
        for(let allExp = 0; allExp < explist.length; allExp++){ //loop through all categories expenses
          let expenses = explist[allExp];
          
 
          for(let exp = 0; exp < expenses.length; exp++ ){ // loop through one categories expenses
            
            if (expenses[exp].category_id === categories[category].category_id){
             expenseAmt = currency(expenseAmt).add(currency(expenses[exp].expense_amount))
           }}
          catObj.totalSpent = currency(expenseAmt).format();  
        }}
      catSummary[category] = catObj;
  }

    return catSummary.map((summary, index) => (
      <p key={index}>{summary.name}: {summary.totalSpent}</p>
    ))
    }
  }
  mapCategoryButtons(categorylist){
    let currentYear = new Date().getFullYear().toString();
    let catSummary = [];

    for (let allBudCat = 0; allBudCat < categorylist.length; allBudCat++){ //loop through array of categories for each budget
      let categories = categorylist[allBudCat]
      
      // for (let category = 0; category < categorylist[allBudCat].length; category++){
        catSummary = categories.map((category, ind) => {
          if (category.category_year === currentYear){
            return <div key={ind} className="catButton">{category.category_name}</div>
          }
        })

      // }
    }

    return catSummary;
  }

  renderAddExpense(){
    return(
      <div className="expense-form">
        
      </div>
    )
  }

  render() {
    return (
      <div className="expenses_page">
        <h2 className="exp_header">Expenses</h2>
        <div>
          {this.mapCategoryButtons(this.props.categoryList)}
          <div className="catButton">All</div>
        </div>

        <div className="categoryDetails">
          {this.mapCategoryDetails(this.props.categoryList, this.props.expenseList)}
        </div>

        <div className="catForm">
        <CategoryForm  />
        </div>
        
        <ul className="expense_list">
          <li>Date &emsp; Type &emsp; Amount &emsp; Description </li>
          {this.mapExpenseList()}
        </ul>
        

      </div>
    );
  }
}

export default ExpensesPage;
