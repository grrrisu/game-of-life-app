import React from 'react';
import ReactDOM from 'react-dom';

import MatrixForm from './components/matrix-form'

ReactDOM.render(
  <div>
    <h1>Game of Life</h1>
    <MatrixForm size="5"/>
  </div>,
  document.getElementById('app')
);
