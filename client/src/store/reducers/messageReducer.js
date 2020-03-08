import {
  MESSAGE_SEND,
  GET_MESSAGES,
  GET_SEEN_MESSAGES,
  DELETE_MESSAGE,
  MARK_AS_SEEN,
} from '../actions/types'

const initialState = {
  messages: [],
  seenMessages: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SEND:
      return {
        ...state,
      }
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload.data,
      }
    case GET_SEEN_MESSAGES:
      return {
        ...state,
        seenMessages: action.payload.data,
      }
    case MARK_AS_SEEN:
      return {
        ...state,
        seenMessages: state.seenMessages.filter(
          msg => msg._id !== action.payload.data._id,
        ),
        messages: [
          ...state.messages,
          action.payload.data,
        ],
      }
    // case DELETE_MESSAGE:
    //   return{

    //   }
    default:
      return state
  }
}
