import { useState, useReducer } from "react";
import todosData from "../model/Data.jsx";

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), todo: action.payload, completed: false }];
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        case "EDIT_TODO":
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, todo: action.payload.todo } : todo
            );
        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

export default function ToDoReducerApp() {
    const [todos, dispatch] = useReducer(todoReducer, todosData);
    const [input, setInput] = useState("");
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const startEditing = (item) => {
        setEditId(item.id);
        setEditText(item.todo);
    };

    const saveEdit = (id) => {
        dispatch({ type: "EDIT_TODO", payload: { id, todo: editText } });
        setEditId(null);
    };

    const handleAddTodo = () => {
        if (input.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: input });
        setInput("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{color:"green"}}>Todo List With Reducer</h2>

            <input
                type="text"
                placeholder="Add a new task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add ToDo</button>

            <ul>
                {todos.map((item) => (
                    <li key={item.id} style={{ margin: "10px 0",color:"blue"}}>
                        
                        {editId === item.id ? (
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                autoFocus
                            />
                        ) : (
                            <span style={{ textDecoration: item.completed ? 'line-through' : 'none', marginRight: "10px" }}>
                                {item.todo}
                            </span>
                        )}

                        <button style={{ backgroundColor: 'lightcoral', marginRight: "5px" }}
                            onClick={() => dispatch({ type: "DELETE_TODO", payload: item.id })}>Delete</button>
                        
                        <button style={{ backgroundColor: 'lightblue', marginRight: "5px" }}
                            onClick={() => dispatch({ type: "TOGGLE_TODO", payload: item.id })}>Toggle</button>

                        {editId === item.id ? (
                            <button onClick={() => saveEdit(item.id)}
                                style={{ backgroundColor: 'lightgreen' }}>Save</button>
                        ) : (
                            <button onClick={() => startEditing(item)}
                                style={{ backgroundColor: 'lightyellow' }}>Edit</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
