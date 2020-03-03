import { MESSAGE_SEND } from "../actions/types";

const initialState = {
  messages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SEND:
      return {
        ...state
        // slider: action.payload.slider,
        // about_image:action.payload.about_image
      };
    default:
      return state;
  }
}
