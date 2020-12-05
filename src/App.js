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
function Header() {
  return (
    <header>
      <h1>Eve's Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  );
}

function Footer() {
  return (
    <rooter>
      <p>It's true.</p>
    </rooter>
  );
}

// Add one function, then add inside App below.
function App() {
  return (
    <div className="App">
      {/* <h1>Header</h1> */}
      <Header />
      {/* <h2>Main</h2> */}
      <Main />
      {/* <h3>Footer</h3> */}
      <Footer />
    </div>
  );
}

export default App;
