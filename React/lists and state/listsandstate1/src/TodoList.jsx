import { useState } from "react";
export function TodoList({list}) {
  const [todos, setTodos] = useState(list);

  function handleSubmit(e) {
    e.preventDefault();
    
    let value = e.target[0].value;
    setTodos([...todos, value]);
    e.target[0].value= "";
  }
  return (
    <>
      <h2>list</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Premi</button>
      </form>
    </>
  );
}
