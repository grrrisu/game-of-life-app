

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

const initialState = {
  size: 10,
  matrix: resizeMatrix(10)
}

module.exports = (state = initialState, action) => {

  switch (action.type) {
    case "SIZE_CHANGED":
      const newSize = action.payload;
      const newArray = resizeMatrix(newSize);
      return( {size: newSize, matrix: newArray } );
    default:
      return state;
  }

}
