import * as React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./components/App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
