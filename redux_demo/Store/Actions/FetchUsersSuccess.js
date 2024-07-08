const { FETCH_USERS_SUCCESS } = require("./ActionTypes");

// Action creator
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

module.exports = fetchUsersSuccess;
