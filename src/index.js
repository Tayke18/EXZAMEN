import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvaider } from "./ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvaider>
      <App />
      </ThemeProvaider>
  </React.StrictMode>,
  document.getElementById("root")
);
