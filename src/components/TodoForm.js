import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  return (
    <form>
      <input
        type="text"
        placeholder="Add a todo"
        value="text"
        className="todo-input"
      />
      <button classname='todo-button'>Adicionar tarefa</button>
    </form>
  );
}

export default TodoForm;
