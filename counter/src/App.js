import React, { useState, useEffect } from "react";
//import "./App.css";
import Signup from "./pages/Signup";
//import Login from "./pages/Login";

function App() {
 /*  let [count2, setCount2] = useState(0);
  let [inc, setInc] = useState(false);
 */
  /* const increment2 = () => { 
    setInc(true);
    setCount2((count2) =>count2 + 1);
  };
 */
 /*  useEffect(() => {
    let interval = setInterval(() => {
      setCount2((count2) => {
        if (count2 === 60) {
          clearInterval(interval);
          return count2;
        }
        return count2 + .5;
      });
    }, 1000);
  },[]); */

  /* const decrement = () => {
    if (count2 <= 0) {
      setCount2(65);
    } else if (inc === true) {
      setCount2(65);
    }
    setCount2((count2) => count2 - 5);
    setInc(false);
  }; */

  return (
    <div >
     <Signup />

     {/*  <h1>React Counter</h1>
      <div>
        <h1 className="hoo">{count2}</h1>
       
        <button onClick={decrement} className="btn">
          Decrement Counter
        </button>
      </div> */}
    </div>
  );
}

export default App();
