import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

export default class Login extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    history.push(destination);
    this.props.history.go(0);
  };

  render() {
    return (
      <div className="LoginPage">
        <h2>Login</h2>
        <LoginForm
          setUserName={this.setUserName}
          onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    );
  }
}
