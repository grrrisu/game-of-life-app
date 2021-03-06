import React from 'react';
import { connect } from 'react-redux';

import Row from './row';

const mapStateToProps = (state) => {
  return {
    matrix: state.matrix
  }
}

const matrixComponent = ({matrix}) => {
  return(
    <div id="matrix">
      { matrix.map((row, i) => {
          return <Row row={row} key={i.toString()} />
        })
      }
    </div>
  );
}

module.exports = connect(mapStateToProps)(matrixComponent)
