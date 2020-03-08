import { HOMEPAGE_DATA, UPDATE_ABOUT_IMG,UPDATE_SLIDER, ADD_SLIDE, DELETE_SLIDE } from "../actions/types";

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
      case UPDATE_SLIDER:
        return {
          ...state,
          slider: action.payload.data.slider
        }
    case DELETE_SLIDE:
      return {
        ...state,
        slider: action.payload.data.slider
      }
    default:
      return state;
  }
}
