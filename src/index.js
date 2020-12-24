import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from "redux";
import {reducer} from "./store/reducers";
import Todo from './Todo/index';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Todo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
