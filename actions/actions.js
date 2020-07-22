import * as types from '../types/actionsTypes.js';

export const login = (username, creator) => {
  return {
    type: types.LOGIN,
    payload: { username, creator },
  };
};

export const setEvents = (events) => {
  return {
    type: types.SET_EVENTS,
    payload: events,
  };
};

export const addEvent = (event, username, creator) => {
  console.log(
    'In actions addevent event and username are',
    event,
    username,
    creator
  );
  const body = JSON.stringify({
    name: event.event_name,
    username,
    creator,
    description: event.description,
    location: event.location,
    date: event.date,
    guests: event.guests,
  });
  return (dispatch) => {
    fetch(`https://unbucketlist.herokuapp.com/event/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from addevent fetch', data);
        dispatch({
          type: types.ADD_EVENT,
          payload: data.addedEvent,
        });
      });
  };
};

export const editEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: types.EDIT_EVENT,
      payload: event,
    });
  };
};

export const deleteEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_EVENT,
      payload: event,
    });
  };
};
