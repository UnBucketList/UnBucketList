import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

const middlewares = [thunk];

// Pass in our reducer file to createStore function
// Exporting a store to be used in Provider wrapping our App

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
