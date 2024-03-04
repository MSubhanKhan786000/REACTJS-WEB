import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  const info = "This is prop drilling";
  return (
    <div className="App">
      <Header />
      <TaskList info={info} />
    </div>
  );
}

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
