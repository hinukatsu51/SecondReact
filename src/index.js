import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Todo from "./Components/todo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Todo />
  </StrictMode>,
  rootElement
);
