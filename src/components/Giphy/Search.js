import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { params: "" };
  }

  handleChange = (e) => {
    const params = e.target.value;
    this.setState({ params: params });
  };

  handleSubmit = (e) => {
    const { params } = this.state;
    e.preventDefault();
    this.props.getGif(params);
    this.setState({ params: '' });
  };

  render() {
    const { params } = this.state;

    return(
      <div>
        <h2>Gif Search</h2>
        <form onSubmit = {this.handleSubmit}>
          <input type="text" value={params} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
