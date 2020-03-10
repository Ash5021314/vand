import {GET_INTERIOR, GET_IRON, GET_ALL, UPDATE_DOOR} from '../actions/types'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    // case GET_INTERIOR:
    //   return {
    //     ...state,
    //     interior: action.payload.data,
    //   }
    // case GET_IRON:
    //   return {
    //     ...state,
    //     iron: action.payload.data,
    //   }
    case GET_ALL:
      return action.payload.data
    default:
      return state
  }
}
