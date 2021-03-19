import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../routes/LandingPage/LandingPage";
import UserHome from "../../routes/UserHome/UserHome";
import PageNotFound from "../../routes/PageNotFound/PageNotFound";
import PrivateRoute from "../../utils/PrivateRoute";
import PublicOnlyRoute from "../../utils/PublicOnlyRoute";
import Header from "../Header/Header";
import Login from "../../routes/Login/Login";
import Registration from "../../routes/Registration/Registration";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isLoggedIn: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  updateLogin = (loggedIn) => {
    this.setState({
      isLoggedIn: loggedIn,
    });
  };

  render() {
    return (
      <main className="App">
        <header className="App_header">
          <Header
            updateLogin={this.updateLogin}
            LoggedIn={this.state.isLoggedIn}
          />
        </header>
        <div className="main-content">
          {this.state.hasError && <p className="red">There was an error!</p>}
          <Switch>
            <Route exact path={"/"} component={LandingPage} />
            <PublicOnlyRoute
              exact
              path={"/login"}
              component={Login}
              updateLogin={this.updateLogin}
            />
            <PublicOnlyRoute
              exact
              path={"/register"}
              component={Registration}
            />
            <PrivateRoute exact path={"/home"} component={UserHome} />
            
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
