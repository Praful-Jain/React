const store = require("./Store/Store");
const fetchUsers = require("./Store/Actions/FetchUsers");

url = "https://jsonplaceholder.typicode.com/users";

// subscribe to the store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatching the asynchronous action creator -- redux-thunk asslows us to do so
store.dispatch(fetchUsers(url));
