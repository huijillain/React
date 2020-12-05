//import logo from "./logo.svg";
import React from "react";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// A component is a function that returns UI.
// We can find "Header" in Components already if we right click mouse then click inspect.
// Pass props into this function. The props object is going to hold all of different properties for the component.
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
// function Header() {
//   return (
//     <header>
//       <h1>Sky's Kitchen</h1>
//     </header>
//   );
// }

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
    </section>
  );
}
// function Main() {
//   return (
//     <section>
//       <p>We serve the most delicious food around.</p>
//     </section>
//   );
// }

function Footer(props) {
  return (
    <rooter>
      <p>Copyright {props.year}</p>
    </rooter>
  );
}
// function Footer() {
//   return (
//     <rooter>
//       <p>It's true.</p>
//     </rooter>
//   );
// }

// Add one function, then add inside App below.
function App() {
  return (
    <div className="App">
      {/* <h1>Header</h1> */}
      <Header name="Cindy" />
      {/* <h2>Main</h2> */}
      <Main adjective="amazing" />
      {/* <h3>Footer</h3> */}
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
