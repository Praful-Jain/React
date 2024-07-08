const { FETCH_USERS_REQUEST } = require("./ActionTypes");

// Action creator
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

module.exports = fetchUsersRequest;
