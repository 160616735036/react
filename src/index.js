import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Header } from "./Components/Header";
import { slidebar } from "./Components/slidebar";
import { footer } from "./Components/footer";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
