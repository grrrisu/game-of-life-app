import React from 'react';

import Cell from './cell';

module.exports = ({row}) => {
  return(
    <div className="matrix-row" style={{width: row.length * 52 + 'px'}}>
    { row.map((cell, i) => {
        return <Cell cell={cell} key={i.toString()}/>
      })
    }
    </div>
  );
}
