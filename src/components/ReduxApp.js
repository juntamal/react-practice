import React from 'react';

const ReduxApp = ({ number, day, title, plus, minus, asyncMinus, getJson }) => {
  return (
    <div>
      <h2>{number}</h2>
      <h2>{day}</h2>
      <h2>{title}</h2>
      <button onClick={() => {plus(10);}}>+10</button>
      <button onClick={() => {minus(10);}}>-10</button>
      <button onClick={() => {asyncMinus(10);}}>-10</button>
      <button onClick={() => {getJson();}}>getJson</button>
    </div>
  );
}

export default ReduxApp;
