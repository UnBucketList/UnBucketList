import * as types from '../types/actionsTypes.js';

// Set initial state
const initialState = {
  isLoggedIn: false,
  username: '',
  creator: '',
  events: [],
};

const unBucketReducer = (state = initialState, action) => {
  let events = state.events.slice();

  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload.username,
        creator: action.payload.creator,
      };

    case types.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case types.ADD_EVENT:
      console.log('action payload', action.payload);
      const {
        _id,
        creator,
        name,
        description,
        location,
        date,
        guests,
      } = action.payload;
      const newEvent = {
        creator,
        event_id: _id,
        name,
        description,
        location,
        date,
        guests,
      };
      events.push(newEvent);
      return {
        ...state,
        events,
      };

    case types.EDIT_EVENT:
<<<<<<< HEAD
      events = action.payload
=======
<<<<<<< HEAD
      events.forEach((elem) => {
        console.log('is element the entire event obj?', elem)
        if (elem.eventId === action.payload.eventId) {
          event = action.payload;
        }
      });
=======
>>>>>>> d0cba972734857aada4c5e6555b4f183b2894838
>>>>>>> master
      return {
        ...state,
        events: action.payload,
      };

    case types.DELETE_EVENT:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
};

export default unBucketReducer;
