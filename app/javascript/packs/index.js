import React from 'react';
import ReactDOM from 'react-dom';
import App from '../react/src/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../react/src/reducers/reducers'

let store = createStore(todoApp)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app'));
})
