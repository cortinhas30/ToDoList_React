import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <h1>qual seu plano pra hoje meu nobre?</h1>
        <TodoForm />
    </div>
  )
}

export default TodoList