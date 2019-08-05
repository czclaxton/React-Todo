import React from "react";

const Todo = props => {
  return (
    <div
      className={`item${props.todo.finished ? " finished" : ""}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
