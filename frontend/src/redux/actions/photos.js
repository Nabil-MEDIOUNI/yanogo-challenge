import axios from 'axios';
import {
  GET_PHOTOS,
  GET_SIGNLE_PHOTO,
  ADD_PHOTO,
  EDIT_PHOTO,
  DELETE_PHOTO,
  SUCCESS_PHOTOS,
  FAIL_PHOTOS,
} from '../constants/photos';

import { API_URL } from '../../config';
import { CLEAR_ERRORS } from '../constants/users';

export const addPhoto = (photo) => async (dispatch) => {
  try {
    const result = await axios.post(`${API_URL}/api/photos/add`, photo);
    dispatch({ type: ADD_PHOTO, payload: result.data });
    dispatch({
      type: SUCCESS_PHOTOS,
      payload: 'You added a photo successfully!',
    });

    return result;
  } catch (error) {
    dispatch({ type: FAIL_PHOTOS, payload: error.response.data });
  }

  return true;
};

export const deletePhoto = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(`${API_URL}/api/photos/${id}`);
    dispatch({ type: DELETE_PHOTO, payload: id });
    dispatch({
      type: SUCCESS_PHOTOS,
      payload: 'You deleted a user successfully!',
    });

    return result;
  } catch (error) {
    dispatch({ type: FAIL_PHOTOS, payload: error.response.data });
  }
};

export const getPhoto = (payload) => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/api/photos/${payload}`);
    dispatch({ type: GET_SIGNLE_PHOTO, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PHOTOS, payload: error.response.data });
  }
};

export const editPhoto = (payload) => async (dispatch) => {
  try {
    await axios.put(`${API_URL}/api/photos/${payload._id}`, payload);
    dispatch({ type: EDIT_PHOTO, payload });
    dispatch({
      type: SUCCESS_PHOTOS,
      payload: 'User is edited successfully!',
    });
  } catch (error) {
    dispatch({ type: FAIL_PHOTOS, payload: error.response.data });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getAllPhotos = () => async (dispatch) => {
  try {
    const result = await axios.get(`${API_URL}/api/photos`);
    dispatch({ type: GET_PHOTOS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PHOTOS, payload: error.response.data });
  }
};
