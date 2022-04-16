import React from "react";
import Tag from "../Tag/Tag";
import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Component } from "react";


class Sidebar extends Component {
  onClickHome=(e)=>{
    this.props.handleButtonChoice('home')
  }
  render(){
    return (
      <div className="sidebar">
        <Tag title="Bills" value="bills" handleButtonChoice={this.props.handleButtonChoice} />
        <Tag title="Debt" value="debt" handleButtonChoice={this.props.handleButtonChoice}/>
        <Tag title="Savings" value="savings" handleButtonChoice={this.props.handleButtonChoice} />
        <Tag title="Expenses" value="expenses" handleButtonChoice={this.props.handleButtonChoice}/>
        <FontAwesomeIcon className="home-icon" icon={faHome} onClick={this.onClickHome} />
      </div>
    );
  }
}

export default Sidebar;
