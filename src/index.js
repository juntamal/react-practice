import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import ReduxApp from './container/ReduxApp';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <ReduxApp />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
