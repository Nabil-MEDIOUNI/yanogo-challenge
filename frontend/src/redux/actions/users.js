import axios from 'axios';
import {
  GET_USERS,
  GET_SIGNLE_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_USER,
  SUCCESS_USERS,
  FAIL_USERS,
  CLEAR_ERRORS,
} from '../constants/users';

import { API_URL } from '../../config';

export const addUser = (payload) => async (dispatch) => {
  try {
    await axios.post(`${API_URL}/api/users/add`, payload);
    dispatch({ type: ADD_USER, payload });
    dispatch({
      type: SUCCESS_USERS,
      payload: 'You added a user successfully!',
    });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response.data });
  }
};

export const editUser = (payload) => async (dispatch) => {
  try {
    await axios.put(`${API_URL}/api/users/${payload._id}`, payload);
    dispatch({ type: EDIT_USER, payload });
    dispatch({
      type: SUCCESS_USERS,
      payload: 'User is edited successfully!',
    });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response.data });
  }
};

export const deleteUser = (payload) => async (dispatch) => {
  try {
    const result = await axios.delete(`${API_URL}/api/users/${payload}`);
    dispatch({ type: DELETE_USER, payload });
    dispatch({
      type: SUCCESS_USERS,
      payload: 'You deleted a user successfully!',
    });

    return result;
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response.data });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/api/users`);
    dispatch({ type: GET_USERS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response.data });
  }
};

export const getUser = (payload) => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/api/users/${payload}`);
    dispatch({ type: GET_SIGNLE_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
