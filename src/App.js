import React from "react";
import "./styles.css";
import { Header } from "./Components/Header";
import { slidebar } from "./Components/slidebar";
import { footer } from "./Components/footer";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Header />
      <h2>Start editing to see some magic happen!</h2>
      <slidebar />
      <h2>Start editing to see some magic happen!</h2>
      <footer />
    </div>
  );
}
