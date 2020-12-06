import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// React-router-dom
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// function AppTwo() {
//   return <h1>This is the Second App</h1>;
// }

// const checklist = ["boots", "tent", "headlamp"];
// console.log(checklist[1]);

// const [mostImportantItem] = ["boots", "tent", "headlamp"];
// console.log(mostImportantItem);

// assign items in array
// const [, , light] = ["boots", "tent", "headlamp"];
// console.log(light);

// ReactDOM.render(
//   //   <div></div>
//   //     <App />
//   //     <AppTwo />
//   //   </div>,

//   //   <React.Fragment>
//   //     <App />
//   //     <App Two />
//   //   </React.Fragment>,

//   //   <>
//   //     <App />
//   //     <App Two />
//   //   </>,

//   // <App authorized={false} />,

//   <App login="huijillain" />,
//   document.getElementById("root")
// );
