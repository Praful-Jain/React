const { BUY_ICECREAM } = require("../Actions/ActionTypes");

const initialState = {
  numOfIcecreams: 20,
};

// reducer  - shopkeeper
const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

module.exports = icecreamReducer;
