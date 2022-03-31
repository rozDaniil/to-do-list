import React from "react";
import * as ReactDOMClient from "react-dom/client";
// import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(<App />);
