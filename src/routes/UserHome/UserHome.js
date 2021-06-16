import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BillList from "../../components/Bills/BillList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tile from "../../components/Tile/Tile";
import Middle from "../../components/Middle/Middle"
import "./UserHome.css";

class UserHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageShown: 'home'
    };

    this.handleButtonChoice = this.handleButtonChoice.bind(this);
  }

  handleButtonChoice(newPage){
    this.setState({pageShown: newPage})
  }
  render() {
    return (
      <div className="user_home">
        <Sidebar handleButtonChoice={this.handleButtonChoice}/>
        <Middle pageShown={this.state.pageShown}/>

        {/* <BillList /> */}
      </div>
    );
  }
}

export default withRouter(UserHome);
