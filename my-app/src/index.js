import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//! for default export we don't use the {} braces
// import  App  from "./App";

//import the index.css globally
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode is only for the development mode only not for the production mode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
