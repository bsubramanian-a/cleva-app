import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';

const middlewares:any = [
  /* other middlewares */
];

// if (__DEV__) {
//   const createDebugger = require("redux-flipper").default;
//   middlewares.push(createDebugger());
// }

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
 }).concat(middlewares),
});

export default store;
