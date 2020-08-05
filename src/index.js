import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'; // creating the store, which stores state and js action creators
import { Provider } from 'react-redux'; // Redux injection to react component

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* Handles state and actions only! to redux store */
import reducer from './store/reducer.js'; // redux -> holds data

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
