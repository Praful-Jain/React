// Redux store:
// Holds application state
// Provides a method called getState() which allows our application to access the state store holds
// Provides a method called dispatch(action)  to allow any updates to the application state
// Allows to register listeners via subscribe(listener) method

const buyIcecream = require("./Store/Actions/Icecream");
const buyCake = require("./Store/Actions/Cake");
const store = require("./Store/Store");

console.log("Initial state", store.getState());

// Any time the state updates ew log the state to the console
const unsubscribe = store.subscribe(() => {
  // console.log("Updated state", store.getState())
});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();

// const redux = require("redux");
// const { configureStore } = require("@reduxjs/toolkit");
// // const createStore = redux.createStore;  deprecated

// const BUY_CAKE = "BUY_CAKE"; // actiontypes
// const BUY_ICECREAM = "BUT_ICECREAM";

// // state of our appliation
// const initialState = {
//   numOfCakes: 10,
//   numOfIcecreams: 20,
// };

// // actions
// function buyCake() {
//   return {
//     type: BUY_CAKE,
//     info: "First redux action",
//   };
// }
// function buyIcecream() {
//   return {
//     type: BUY_ICECREAM,
//     info: "Second redux action",
//   };
// }

// // reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIcecreams: state.numOfIcecreams - 1,
//       };
//     default:
//       return state;
//   }
// };

// // redux store holding the application state
// // will that the reducer function as the parameter
// const store = configureStore({
//   reducer: reducer,
// });

// console.log("Initial state", store.getState());

// // Any time the state updates ew log the state to the console
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated state", store.getState())
// );

// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// unsubscribe();
