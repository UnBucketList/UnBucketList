import * as types from '../types/actionsTypes.js';

// Set initial state
const initialState = {
  isLoggedIn: false,
  username: '',
  events: [],
};

const unBucketReducer = (state = initialState, action) => {
  let events = state.events.slice();

  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };

    case types.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case types.ADD_EVENT:
      const { name, description, location, date, guests } = action.payload;
      const newEvent = {
        eventId: lastEventId,
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
      events.forEach((elem) => {
        if (elem.eventId === action.payload.eventId) {
          event = action.payload;
        }
      });
      return {
        ...state,
        events,
      };

    case types.DELETE_EVENT:
      events.forEach((elem, index) => {
        if (elem.eventId === action.payload.eventId) {
          events.splice(index, 1);
        }
      });
      return {
        ...state,
        events,
      };

    default:
      return state;
  }
};

export default unBucketReducer;
