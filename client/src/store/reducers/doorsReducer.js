import {} from "../actions/types";

const initialState = {
  interior: [],
  iron: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case ADMIN_LOGIN:
    //   return {
    //     ...state,
    //     token: action.payload,
    //     isAuthenticated: true
    //   };
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
