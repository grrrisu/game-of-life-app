import React from 'react';

module.exports = ({cell}) => {
  let color = cell ?  'red' : '#87CEFA';
  return(
    <div className="matrix-cell" style={{backgroundColor: color}}></div>
  );
}
