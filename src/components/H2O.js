import React, { Component } from 'react';

export default class H2O extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 15,
    };

    this.onPlusClick = this.onPlusClick.bind(this);
    this.onMinusClick = this.onMinusClick.bind(this);
    this.onPlus10Click = this.onPlus10Click.bind(this);
    this.onMinus10Click = this.onMinus10Click.bind(this);
    this.H2OState = this.H2OState.bind(this);
  }

  onPlusClick() {
    const { temp } = this.state;

    this.setState({
      temp: temp + 1,
    });
  }

  onMinusClick() {
    const { temp } = this.state;

    this.setState({
      temp: temp - 1,
    });
  }

  onPlus10Click() {
    const { temp } = this.state;

    this.setState({
      temp: temp + 10,
    });
  }

  onMinus10Click() {
    const { temp } = this.state;

    this.setState({
      temp: temp - 10,
    });
  }

  H2OState(temp) {
    if (temp <= 0) {
      return 'ice';
    }

    if (temp >= 100) {
      return 'steam';
    }

    return 'water';
  }

  render() {
    const { temp } = this.state;

    return (
      <div className={this.H2OState(temp)}>
        <h2>phase: {this.H2OState(temp)}, {temp} ℃</h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }
}
