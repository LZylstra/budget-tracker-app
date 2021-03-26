import React, { Component } from "react";
import coverImg from "../../img/landingpage2.jpg"
import "./LandingPage.css";


class LandingPage extends Component {
  render() {
    return (
      <div className="landing_page">
        <p className="app_description">
         Budget Tracker is the all in one place to track your finances
        </p>
        <img id="landing-img" src={coverImg} alt="coins and plant" />

      </div>
    );
  }
}

export default LandingPage;
