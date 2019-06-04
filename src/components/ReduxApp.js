import React from 'react';

const ReduxApp = ({ number, plus, minus }) => {
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={() => {plus(10);}}>+10</button>
      <button onClick={() => {minus(10);}}>-10</button>
    </div>
  );
}

export default ReduxApp;
