import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import MatrixForm from './components/matrix-form';
import reducer from './state/reducer'

const store = createStore(reducer);

const onChangeSize = (event) => {
  const newValue = event.currentTarget.value;
  store.dispatch( {type: "SIZE_CHANGED", payload: newValue } )
  render();
}

const render = () => {
  ReactDOM.render(
    <div>
    <h1>Game of Life</h1>
    <MatrixForm size={store.getState().size} onChangeSize={onChangeSize}/>
    </div>,
    document.getElementById('app')
  );
}

render();
