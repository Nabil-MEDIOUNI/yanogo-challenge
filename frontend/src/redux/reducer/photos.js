const {
  GET_PHOTOS,
  ADD_PHOTO,
  SUCCESS_PHOTOS,
  FAIL_PHOTOS,
} = require('../constants/photos');

// initialstate
const initialState = {
  photos: [],
  photoId: '',
  errors: '',
  success: '',
  isLoad: false,
};

const photosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PHOTOS:
      return { ...state, photos: payload, isLoad: false };
    case ADD_PHOTO:
      return {
        ...state,
        photoId: payload.id,
        photos: [...state.photos, payload.photo],
        isLoad: false,
      };
    case FAIL_PHOTOS:
      return { ...state, errors: payload, isLoad: false };
    case SUCCESS_PHOTOS:
      return { ...state, success: payload, isLoad: false };
    default:
      return state;
  }
};

export default photosReducer;
