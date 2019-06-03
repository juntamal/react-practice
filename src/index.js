// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
// import Giphy from './components/Giphy';
import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<Giphy />, document.getElementById('root'));

import reducer from './reducer';
import { createStore } from 'redux';


const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'PLUS', payload: { num: 1 } });
store.dispatch({ type: 'PLUS', payload: { num: 10 } });
store.dispatch({ type: 'MINUS', payload: { num: 1 } });
store.dispatch({ type: 'MINUS', payload: { num: 10 } });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
