const { BUY_CAKE } = require("../Actions/ActionTypes");

const initialState = {
  numOfCakes: 10,
};

// reducer
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

module.exports = cakeReducer;
