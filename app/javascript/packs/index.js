import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/src/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import adventure from '../react/src/reducers/adventure'

let store = createStore(adventure)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app'));
})
