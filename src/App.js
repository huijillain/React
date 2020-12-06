//import logo from "./logo.svg";
// import React from "react";
// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
// import React, { useReducer } from "react";
import "./App.css";
// import "./index.css";
// import restaurant from "./restaurant.jpg";

// Incorporating useReducer
// https://api.github.com/users/huijillain
function App({ login }) {
  const [data, setData] = useState(null);
  // add loading 1 below
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // add loading 2 below
    if (!login) return;
    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]); // anytime login value changes, we call it here.

  // handle loading
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>; // 2 is to format JSON so we can read it.
  if (!data) return null;

  // if (data) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>
  );
}
// return <div>No User Available.</div>;
// }

// function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setChecked((checked) => !checked)}
//       />
//       <p>{checked ? "checked" : "not checked"}</p>
//     </>
//   );
// }

// function App() {
//   // Pass an initial state into useState funtion
//   const emotion = useState("happy");
//   console.log(emotion);
//   return (
//     <>
//       <h1>Current emotion is {emotion}.</h1>
//     </>
//   );
// }

// function App() {
//   // Pass an initial state into useState funtion
//   const [emotion, setEmotion] = useState("happy");
//   const [secondary, setSecondary] = useState("tired");

//   useEffect(() => {
//     console.log(`It's ${emotion} around here!`);
//   }, [emotion]);

//   useEffect(() => {
//     console.log(`It's ${secondary} around here!`);
//   }, [secondary]);

//   return (
//     <>
//       {/* <h1>Current emotion is {emotion}.</h1> */}
//       <h1>
//         Current emotion is {emotion} and {secondary}.
//       </h1>
//       <button onClick={() => setEmotion("excited")}>Excited</button>
//       <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
//       <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
//       <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
//     </>
//   );
// }

//Destructuring arrays & objects
// function SecretComponent() {
//   return <h1>Secret information for authorized users only</h1>;
// }

// function RegularComponent() {
//   return <h1>Everyone can see this component.</h1>;
// }

// function App() {
//   return <div className="App">Components here eventually</div>;
// }

// function App(props) {
//   if (props.authorized) {
//     return <SecretComponent />;
//   } else {
//     return <RegularComponent />;
//   }
// }

// function App(props) {
//   return <>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>;
// }

// function App({ authorized }) {
//   return <>{authorized ? <SecretComponent /> : <RegularComponent />}</>;
// }

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

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   );
// }
// // function Header() {
// //   return (
// //     <header>
// //       <h1>Sky's Kitchen</h1>
// //     </header>
// //   );
// // }

// function Main(props) {
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around.</p>
//       {/* <img src="https://github.com/huijillain.png" height={200} /> */}
//       <img
//         src={restaurant}
//         height={200}
//         alt="napkin and silverware at a restaurant table"
//       />
//       {/* <img src={restaurant} /> */}
//       {/* <ul>
//         {props.dishes.map((dish) => (
//           <li>{dish}</li>
//         ))}
//       </ul> */}
//       {/*But dots were at far left side, so changes as showing below by adding style. Be careful about textAlign JS style, not CSS text-align style.*/}
//       <ul style={{ textAlign: "left" }}>
//         {props.dishes.map((dish) => (
//           <li key={dish.id}>{dish.title}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }
// // function Main() {
// //   return (
// //     <section>
// //       <p>We serve the most delicious food around.</p>
// //     </section>
// //   );
// // }

// function Footer(props) {
//   return (
//     <rooter>
//       <p>Copyright {props.year}</p>
//     </rooter>
//   );
// }
// // function Footer() {
// //   return (
// //     <rooter>
// //       <p>It's true.</p>
// //     </rooter>
// //   );
// // }

// const dishes = [
//   "Mcaroni and Cheese",
//   "Salmon Sushi",
//   "Eggplants Hot Pot",
//   "Rice with Blackbean",
// ];

// const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));
// console.log(dishObjects);
// // dishes.map((dish) => console.log(dish));

// // Add one function, then add inside App below.
// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Header</h1> */}
//       <Header name="Cindy" />
//       {/* <h2>Main</h2> */}
//       <Main adjective="amazing" dishes={dishObjects} />
//       {/* <h3>Footer</h3> */}
//       <Footer year={new Date().getFullYear()} />
//     </div>
//   );
// }
// // function App() {
// //   return (
// //     <div className="App">
// //       {/* <h1>Header</h1> */}
// //       <Header name="Cindy" />
// //       {/* <h2>Main</h2> */}
// //       <Main adjective="amazing" dishes={dishObjects} />
// //       {/* <h3>Footer</h3> */}
// //       <Footer year={new Date().getFullYear()} />
// //     </div>
// //   );
// // }

export default App;
