// * function based components
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  function handleAdd() {
    // suppose we want to add the count+3 we can achieve this be adding the function not by repeating the state like below
    setCount(count => count + 1);
    setCount(count => count + 1);
    setCount(count => count + 1);
    // In short, state value will be constant unless we try to update it using function
  }
  function handleSub() {
    setCount(count - 1);
    console.log(count);
  }
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">
          Add
        </button>
        <button onClick={handleSub} className="sub">
          Sub
        </button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;

// insert javascript before the return

//Rule:1 whenever we return something wither it is single, or wrap inside the jsx tag
//Rule:2 Close all the tags
//Rule:3 camelCase naming convention should be followed means most of the things should be in camelCase

//! Other way of using the default App
// const App = () =>{
//     return(
//         <h1>This is oter Example fo App.js</h1>
//     )
// }
// export default App
