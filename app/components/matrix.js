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
      { matrix.map((row) => {
          return <Row row={row} />
        })
      }
    </div>
  );
}

module.exports = connect(mapStateToProps)(matrixComponent)
