import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleChange = (e) => {
    const title = e.target.value;
    this.setState({ title: title });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return(
      <div>
        <form action="" onSubmit = {this.handleSubmit}>
          <input type="text" value={title} onChange={this.handleChange} />
          <input type="submit" value="Add to todo list" />
        </form>
      </div>
    );
  }
}
