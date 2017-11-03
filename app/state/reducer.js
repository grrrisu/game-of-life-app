

const resizeMatrix = (size) => {
  var newArray = [];
  for (var i = 0; i < size; i++) {
    newArray[i] = [];
    for(var y = 0; y < size; y++) {
      newArray[i][y] = false;
    }
  }
  return newArray;
}

const calculateArray = (matrix) => {
  return matrix.map((row) => {
    return row.map((cell) => {
      return Math.floor(Math.random() * 10) > 3;
    });
  });
}

const initialState = {
  size: 10,
  matrix: resizeMatrix(10)
}

module.exports = (state = initialState, action) => {
  let newArray;
  switch (action.type) {
    case "SIZE_CHANGED":
      const newSize = action.payload;
      newArray = resizeMatrix(newSize);
      return( {size: newSize, matrix: newArray } );
    case "TICK":
      console.log("tick");
      newArray = calculateArray(state.matrix);
      return( {size: state.size, matrix: newArray } );
    default:
      return state;
  }

}
