const {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} = require("../Actions/ActionTypes");

const initialState = {
  loading: true,
  users: [],
  error: "",
};

function fetchFromAPI(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: payload,
      };
    default:
      return state;
  }
}

module.exports = fetchFromAPI;
