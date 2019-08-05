import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.css";

const TodoData = [
  {
    task: "Mow the lawn",
    id: 123,
    completed: false
  },
  {
    task: "Get a haircut",
    id: 124,
    completed: false
  },
  {
    task: "Do the dishes",
    id: 125,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: "Connor",
      todos: TodoData
    };
  }

  toggleTodo = id => {
    console.log(id);

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            finished: !todo.finished
          };
        } else {
          return todo;
        }
      })
    });
  };

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearFinished = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.finished)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          clearFinished={this.clearFinished}
        />
      </div>
    );
  }
}

export default App;
