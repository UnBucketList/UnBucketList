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
        console.log('Data from addEvent fetch', data);
        dispatch({
          type: types.ADD_EVENT,
          payload: data.addedEvent,
        });
      })
      .catch((err) => console.log('Error in addEvent fetch:', err));
  };
};

export const editEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: types.EDIT_EVENT,
      payload: data,
    });
  };
};

export const deleteEvent = (username, eventId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/event/${username}/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Data from delete fetch is', data);
        if (Array.isArray(data.events)) {
          dispatch({
            type: types.DELETE_EVENT,
            payload: data.events,
          });
        } else {
          return data.err;
        }
      })
      .catch((err) => console.log('Error deleteEvent fetch:', err));
  };
};
