import React from 'react';

module.exports = ({size, onChangeSize}) => {
  return(
    <div>
      <form>
        <input type="text" value={size} onChange={onChangeSize}/>
      </form>
    </div>
  );
}