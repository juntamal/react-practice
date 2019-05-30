import React, { Component } from 'react';
import axios from 'axios';

export default class Ajax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foxes: [],
    };
  }

  getJson = () => {
    const url = "https://api.myjson.com/bins/128z7z";

    axios.get(url).then(res => {
      this.setState(res.data);
    });
  };

  render() {
    const { foxes } = this.state;
    const list = foxes.map((fox, index) => {
      return <li key={index}>name: {fox.name}, color: {fox.color}</li>;
    });

    return (
      <div>
        <button onClick={this.getJson}>get json</button>
        <ul>
          {list}
        </ul>
      </div>
    );
  }

}
