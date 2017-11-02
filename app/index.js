import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import MatrixForm from './components/matrix-form';
import reducer from './state/reducer'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <MatrixForm/>
  </Provider>,
  document.getElementById('app')
);
