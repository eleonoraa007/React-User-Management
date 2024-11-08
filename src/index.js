import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PropProvider } from "./context/PropContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PropProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PropProvider>
  </React.StrictMode>
);
