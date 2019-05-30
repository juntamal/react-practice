import React, { Component } from 'react';
import AddTodo from './Todo/AddTodo';
import List from './Todo/List';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0,
    }
  }

  addTodo = (title) => {
    const { todos, nextId } = this.state;

    this.setState({
      todos: [...todos, { id: nextId + 1, title: title }],
      nextId: nextId + 1,
    });
  };

  deleteTodo = (id) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h2>Todo App</h2>
        <AddTodo addTodo={this.addTodo} />
        <List deleteTodo={this.deleteTodo} todos = {todos} />
      </div>
    );
  }
}
