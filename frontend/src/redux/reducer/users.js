const {
  FAIL_USERS,
  LOAD_USERS,
  CLEAR_ERRORS,
  SUCCESS_USERS,
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  GET_SIGNLE_USER,
} = require('../constants/users');

// initialstate
const initialState = {
  users: [],
  user: {},
  errors: '',
  success: '',
  isLoad: false,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USERS:
      return { ...state, isLoad: true };
    case GET_USERS:
      return { ...state, users: payload, isLoad: false };
    case GET_SIGNLE_USER:
      return { ...state, user: payload };
    case ADD_USER:
      return { ...state, users: [...state.users, payload], isLoad: false };
    case DELETE_USER:
      const newUsers = state.users.filter((user) => user.id !== payload);
      return { ...state, users: newUsers, isLoad: false };
    case FAIL_USERS:
      return { ...state, errors: payload, isLoad: false };
    case SUCCESS_USERS:
      return { ...state, success: payload, isLoad: false };
    case CLEAR_ERRORS:
      return { ...state, success: '', errors: '' };
    default:
      return state;
  }
};

export default usersReducer;
