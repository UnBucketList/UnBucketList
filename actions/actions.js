import * as types from '../types/actionsTypes.js';

export const login = (userId) => {
  return {
    type: types.LOGIN,
    payload: userId,
  };
};

export const setEvents = (events) => {
  return {
    type: types.SET_EVENTS,
    payload: events,
  };
};

export const addEvent = (event) => {
  return {
    type: types.ADD_EVENT,
    payload: event,
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
