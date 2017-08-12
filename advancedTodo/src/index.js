import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

import TodoAppContainer from './redux/todoAppComplete/todoAppContainer';
import todosReducer from './redux/todoAppComplete/todoReducer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(todosReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('root')
);