const eachCell = (matrix, callback) => {
  return matrix.map((row, y) => {
    return row.map((cell, x) => {
      return callback(cell, x, y);
    });
  });
}

const lookAround = (matrix, x, y) => {
  let sum = 0;
  for (var y = -1; y < 2; y++) {
    if(matrix[y]) {
      for (var x = -1; x < 2; x++) {
        if(matrix[y][x]) { sum++ }
      }
    }
  }
  return sum;
}

const populateMatrix = (matrix) => {
  return eachCell(matrix, (cell, x, y) => {
    return Math.floor(Math.random() * 10) > 3;
  });
}

const resizeMatrix = (size) => {
  var newArray = [];
  for (var i = 0; i < size; i++) {
    newArray[i] = [];
    for(var y = 0; y < size; y++) {
      newArray[i][y] = false;
    }
  }
  return populateMatrix(newArray);
}

const updateMatrix = (matrix) => {
  return eachCell(matrix, (cell, x, y) => {
    let sum = lookAround(matrix, x, y);
    if(cell) { sum-- }

    if(cell && sum < 2){
      return false;
    } else if(cell && sum < 4){
      return true;
    } else if(cell && sum > 3){
      return false;
    } else if(!cell && sum == 3){
      return true;
    } else {
      return false;
    }

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
      newArray = updateMatrix(state.matrix);
      return( {size: state.size, matrix: newArray } );
    default:
      return state;
  }

}
