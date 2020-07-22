//import axios from 'axios';
import * as types from '../types/actionsTypes.js';

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
