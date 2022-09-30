import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [count2, setCount2] = useState(0);
  let [inc, setInc] = useState(false);

  /* const increment2 = () => { 
    setInc(true);
    setCount2((count2) =>count2 + 1);
  };
 */
  useEffect(() => {
    const interval = setInterval(() => {
      setCount2((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const decrement = () => {
    if (count2 <= 0) {
      setCount2(65);
    } else if (inc === true) {
      setCount2(65);
    }
    setCount2((count2) => count2 - 5);
    setInc(false);
  };

  return (
    <div className="App">
      <h1>React Counter</h1>
      <div>
        <h1 className="hoo">{count2}</h1>
        <button  className="btn">
          Increment Counter
        </button>
        <button onClick={decrement} className="btn">
          Decrement Counter
        </button>
      </div>
    </div>
  );
}

export default App;
