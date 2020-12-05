import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function AppTwo() {
  return <h1>This is the Second App</h1>;
}

ReactDOM.render(
  //   <div></div>
  //     <App />
  //     <AppTwo />
  //   </div>,

  //   <React.Fragment>
  //     <App />
  //     <App Two />
  //   </React.Fragment>,

  <>
    <App />
    <App Two />
  </>,
  document.getElementById("root")
);
