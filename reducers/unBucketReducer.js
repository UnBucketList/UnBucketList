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
      const { _id, name, description, location, date, guests } = action.payload;
      const newEvent = {
        event_id: _id,
        event_name: name,
        description,
        location,
        date,
        guests,
      };
      events.push(newEvent);
      console.log(newEvent, 'new evetn')
      return {
        ...state,
        events,
      };

    case types.EDIT_EVENT:
      events = action.payload
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
