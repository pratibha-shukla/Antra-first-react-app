
import todosData from "../model/Data.jsx";
import { useState } from "react";
import "./Todo.css";

const ToDo = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(todosData);
   
// Function to add a new ToDo item
    const handleAddToDo = () => {
        if(input.trim() === "") return; // Prevent adding empty todos
        const newToDo = {
           id: Date.now(), // Unique ID based on timestamp
           todo: input,
           completed: false
        };
        setTodos([...todos, newToDo]);
        setInput("");
    };
// Function to delete a ToDo item
    const deleteToDo = (todoId) => {
        const handleDeleteToDo = todos.filter((todo => todo.id !==todoId));
        setTodos(handleDeleteToDo);
    }


      // Step A: When you click Edit, it puts the text in the input box
    const loadToInput = (todo) => {
        setInput(todo.todo); 
    };

// Function to edit a ToDo item
  const editToDos = (todoId) => {
    if(input.trim() === "") return; // Prevent editing to empty todos
    const updatedToDos = todos.map((item => item.id === todoId ? {...item, todo: input} : item));
    setTodos(updatedToDos);
    setInput(""); // Clear input after editing
  }
       
           
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

   return (
    <div>
        <input type="text" 
        placeholder="type here to add or edit todo.." 
        value={input} 
        onChange={handleInputChange}></input>
        <button onClick={handleAddToDo}> Add ToDo</button>
        
        <ul>
            {todos.map((todo) => {
                return <li key={todo.id}  className="todo-item" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                     {todo.completed ? 'Completed' : 'Not Completed'} | {todo.todo}
                      <button className="delete-btn" onClick={() => deleteToDo(todo.id)}>Delete</button>
                        <button className="load-btn" onClick={() => loadToInput(todo)}>Load</button>   {/* First click loads text into box */}
                      <button className="edit-btn" onClick={() => editToDos(todo.id)}>Save</button>
                </li>
            })}
        </ul>
           
        </div>
     );
    };
export default ToDo;