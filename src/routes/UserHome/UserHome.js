import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BillList from "../../components/Bills/BillList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tile from "../../components/Tile/Tile";
import Middle from "../../components/Middle/Middle"
import "./UserHome.css";
import BudgetApiService from "../../services/budget-api-service";
import UserBar from "../../components/UserBar/UserBar"
import currency from "currency.js";

class UserHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageShown: 'home',
      budgetList: [],
      totalIncome: 0, // The users total income from all budgets (monthly pay and additional)

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
      })
    .catch((error) => {
      console.error({ error });
    });
  }

  render() {
    const budgetList = this.state.budgetList;
   // console.log("home total " + currency(this.state.totalIncome).format())

    return (
      <div className="user_home">
        <Sidebar handleButtonChoice={this.handleButtonChoice}/>
        <UserBar budgetList={budgetList} updateIncome={this.updateIncome}/>
        <Middle pageShown={this.state.pageShown}/>

      </div>
    );
  }
}

export default withRouter(UserHome);
