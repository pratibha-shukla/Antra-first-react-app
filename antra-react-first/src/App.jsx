
// import ToDo from "./components/Todo.jsx";
import Timer from "./components/Timer.jsx";


import './App.css'
import ToDoReducerApp from "./components/ToDoReducerApp.jsx";

const App = () => {
 

  return (
    <div className="App">
        <Timer></Timer>
        <ToDoReducerApp></ToDoReducerApp>
      {/* <ToDo></ToDo> */}
    
    </div>
  )
}
export default App;
