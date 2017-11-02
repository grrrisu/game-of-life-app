import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    size: state.size
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    onChangeSize: (event) => {
      const newValue = event.currentTarget.value;
      dispatch( {type: "SIZE_CHANGED", payload: newValue } );
    }
  }
}

const formComponent = ({size, onChangeSize}) => {
  return(
    <div>
      <form>
        <input type="text" value={size} onChange={onChangeSize}/>
        <h1>{size}</h1>
      </form>
    </div>
  );
}

module.exports = connect(mapStateToProps, mapDipatchToProps)(formComponent)
