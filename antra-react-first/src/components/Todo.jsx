
import todosData from "../model/Data.jsx";
import { useState } from "react";

const ToDo = () => {
    const [input, setInput] = useState("");
   

    const handleAddToDo = () => {
       const newtodo = {
        id: todosData.length + 1,
        todo: input,
       
       }
         todosData.push(newtodo);
            setInput("");
    };

       

   return (
    <div>
        <h1>ToDo List</h1>
        <input type="text" 
        placeholder="Enter ToDo" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={handleAddToDo}>
            Add ToDo
        </button>
        
        <ul>
            {todosData.map((todo) => {
                return <li key={todo.id}>
                    {todo.todo}
                </li>
            })}
        </ul>


        </div>
     );
    };
export default ToDo;