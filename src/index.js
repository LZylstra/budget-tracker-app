import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./assets/fonts.css";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
