import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, deleteTodo } = this.props;
    const lists = todos.map(list => {

      return (
        <li key={list.id}>
          {list.id} {list.title}
          <button
            type="button"
            onClick={() => {
              deleteTodo(list.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });

    return(
      <div>
        <ul>
          {lists}
        </ul>
      </div>
    );
  }
}
