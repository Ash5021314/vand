import { HOMEPAGE_DATA, UPDATE_ABOUT_IMG, ADD_SLIDE } from "../actions/types";

const initialState = {
  slider: [],
  about_image: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HOMEPAGE_DATA:
      return {
        ...state,
        slider: action.payload.slider,
        about_image: action.payload.about_image
      };
    case UPDATE_ABOUT_IMG:
      return {
        ...state,
        about_image: action.payload.data.about_img
      }
    case ADD_SLIDE:
      return {
        ...state,
        slider: action.payload.data.slider
      }
    default:
      return state;
  }
}
