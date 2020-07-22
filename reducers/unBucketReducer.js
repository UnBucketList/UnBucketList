import * as types from '../types/actionsTypes.js';

// Set initial state
const initialState = {
  isLoggedIn: false,
  events: [],
};

const unBucketReducer = (state = initialState, action) => {
  let events = state.events.slice();
  switch (action.type) {
    case types.ADD_EVENT:
      console.log('payload in reducer', action.payload);
      events.push(action.payload);
      return {
        ...state,
        events,
      };
    default:
      return state;
  }
};

export default unBucketReducer;
