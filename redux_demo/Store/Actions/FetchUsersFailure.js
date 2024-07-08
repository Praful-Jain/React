const { FETCH_USERS_FAILURE } = require("./ActionTypes");

// Action creator
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

module.exports = fetchUsersFailure;
