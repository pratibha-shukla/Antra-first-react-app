
import ToDo from "./components/Todo.jsx";
import Timer from "./components/Timer.jsx";


import './App.css'
import ToDoReducerApp from "./components/ToDoReducerApp.jsx";

const App = () => {
 

  return (
    <div className="App">
        <Timer></Timer>
        <ToDoReducerApp></ToDoReducerApp>

        <h1 style={{color:"green"}}>todo list</h1>
      <ToDo></ToDo>
    
    </div>
  )
}
export default App;
