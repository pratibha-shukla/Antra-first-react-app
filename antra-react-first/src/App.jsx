import { useState } from 'react'
import ToDo from "./components/Todo.jsx";

import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <ToDo></ToDo>
    </div>
  )
}
export default App;
