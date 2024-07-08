const redux = require("redux");

const logger = require("redux-logger").createLogger();
const { thunk } = require("redux-thunk");

const { configureStore, combineReducers } = require("@reduxjs/toolkit");

const icecreamReducer = require("./Reducers/Icecream");
const cakeReducer = require("./Reducers/Cake");
const fetchFromAPIReducer = require("./Reducers/FetchFromAPI");

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  fetchFromAPI: fetchFromAPIReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // adding a middleware to the default middlewares list
  // middleware: () => [thunk],   // thunk middleware is already present in the defaultmiddlewares
});

module.exports = store;

// getDefaultMiddleware already includes some middleware that are added in development builds of your app only to provide runtime checks
// const middleware = [
//   actionCreatorInvariant,
//   immutableStateInvariant,
//   thunk,
//   serializableStateInvariant,
// ]

// When you dispatch an action using `store.dispatch(action)`, the action is processed by all the reducers present in the store. Each reducer has the opportunity to handle the action based on its `action.type`. The `switch` statement or other logic within each reducer checks the action type to determine whether it should respond to that specific action.

// Here's a basic overview of how the process works:

// 1. **Action Dispatch:**
//    - You dispatch an action using `store.dispatch(action)`.

// 2. **Reduction Process:**
//    - The dispatched action is passed to each reducer in the store.

// 3. **Reducer Logic:**
//    - Each reducer has a `switch` statement or other logic to check the `action.type`.
//    - If the reducer recognizes the action type, it performs the necessary updates to its portion of the state.
//    - If the reducer doesn't recognize the action type, it returns the current state unchanged.

// 4. **State Update:**
//    - The state updates from each reducer are combined into a new state.

// 5. **New State:**
//    - The combined new state is the result of processing the dispatched action across all reducers.

// This process allows different parts of the state managed by different reducers to respond to specific actions independently.
//  Each reducer is responsible for managing a specific slice of the state, and the combination of all these slices forms the complete state of your application.

// It's crucial to note that actions are not selectively dispatched to specific reducers based on their action types. Instead,
// each reducer is given the opportunity to respond to every action, and it's up to the reducer's logic to decide how to handle the action. This approach is a fundamental principle of Redux, known as "reducer composition."
