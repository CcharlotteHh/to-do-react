import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e){
    e.preventDefault();
    if(todo.task.trim()){
      addTodo({...todo, id:uuidv4()})
      setTodo({...todo, task:""});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
      name="task"
      type= "text"
      value={todo.task}
      onChange={handleTaskInputChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
