import React from "react";
// import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

// LEGACY ROOT API (React 17)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// NEW ROOT API (React 18)
const container = document.querySelector("#root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React 18 pretty recent (at the very earliest Mar 30 2022)

// More on createRoot: https://github.com/reactwg/react-18/discussions/5
// 1. don't need to continue to pass container into render
//    (since it never changes)
// 2. something about hydrate method and removing render callback.
//    partial hydration???
