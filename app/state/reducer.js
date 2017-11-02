const initialState = {
  size: 10
}

module.exports = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SIZE_CHANGED":
      return( {size: action.payload } );
    default:
      return state;
  }
}
