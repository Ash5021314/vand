import { HOMEPAGE_DATA } from "../actions/types";

const initialState = {
  slider:[],
  about_image:'',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case HOMEPAGE_DATA:
      return {
        ...state,
        slider: action.payload.slider,
        about_image:action.payload.about_image
      };
    // case ADMIN_LOGOUT:
    //   return {
    //     ...state,
    //     token: null,
    //     isAuthenticated: false
    //   };
    default:
      return state;
  }
}
