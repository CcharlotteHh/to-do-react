import React from "react";

function Todo({ todo, toggleComplete, removeTodo}) {
  function handleCheckboxClick(){
    toggleComplete(todo.id)
  }
 
function handleRemoveClick(){
  removeTodo(todo.id);
}  
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick}></input>
      <li style={{
        color:"white",
        textDecoration: todo.completed ? "line-through" : null,
        listStyle: "none"
      }}
      >{todo.task}</li>
      <button onClick={handleRemoveClick}>x</button>
    </div>
  );
}
export default Todo;
