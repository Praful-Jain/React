// Import the custom action creators and dispatch then inside our async action creator
const fetchUsersRequest = require("./FetchUsersRequest");
const fetchUsersSuccess = require("./FetchUsersSuccess");
const fetchUsersFailure = require("./FetchUsersFailure");
const { default: axios } = require("axios");

// Action creator: return an action
// redux-thunk middleware give the action-creator the ability to return a function instead of an action object
// This function:
//     - receives a dispatch method as its argument
//     - can have async api calls
//     - can perform dispatch actions

// Asynchronous action creator
const fetchUsers = (url) => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get(url)
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
};

module.exports = fetchUsers;
