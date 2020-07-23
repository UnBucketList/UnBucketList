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
    fetch(`http://localhost:3000/event/${username}`, {
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

export const editEvent = (event,username,creator) => {
  console.log(event, 'WHAT IS THE EVENT')
  // console.log('event should be everything from editted message', event.name,username)
  const body = JSON.stringify({
    name: event.name,
    username,
    creator,
    description: event.description,
    location: event.location,
    date: event.date,
    guests: event.guests,
    
  })
  console.log('what does body look like', body)
  return (dispatch) => {
    fetch(`http://localhost:3000/event/${username}/${event.event_id}`,{
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
  .then((res) => res.json())
    .then((data) => {
        console.log('data from editevent fetch', data);
    dispatch({
      type: types.EDIT_EVENT,
      payload: data.events,
    });
  });
}

};

export const deleteEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: types.DELETE_EVENT,
      payload: event,
    });
  };
};
