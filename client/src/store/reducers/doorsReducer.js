import { GET_INTERIOR, GET_IRON, GET_ALL } from "../actions/types";

const initialState = {
  interior: [],
  iron: [],
  all: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INTERIOR:
      return {
        ...state,
        interior: action.payload.data
      };
    case GET_IRON:
      return {
        ...state,
        iron: action.payload.data
      };
    case GET_ALL:
      return {
        ...state,
        all: action.payload.data
      };
    default:
      return state;
  }
}
