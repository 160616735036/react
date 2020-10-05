import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Header } from "./Components/Header";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
