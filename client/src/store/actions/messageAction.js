import {
  MESSAGE_SEND,
  GET_MESSAGES,
  GET_SEEN_MESSAGES,
  DELETE_MESSAGE,
  MARK_AS_SEEN,
} from './types'
import axios from 'axios'

const domain = 'http://localhost:4000'

export const sendMessage = doc => {
  return async dispatch => {
    let data = await axios({
      method: 'POST',
      url: `${domain}/messages`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: doc,
    })
    dispatch({ type: MESSAGE_SEND })
  }
}

export const getMessages = () => {
  return async dispatch => {
    let data = await axios({
      method: 'GET',
      url: `${domain}/messages`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({ type: GET_MESSAGES, payload: data.data })
  }
}

export const getSeenMessages = () => {
  return async dispatch => {
    let data = await axios({
      method: 'GET',
      url: `${domain}/messages?seen=false`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({ type: GET_SEEN_MESSAGES, payload: data.data })
  }
}

export const deleteMessage = id => {
  return async dispatch => {
    let data = await axios({
      method: 'DELETE',
      url: `${domain}/messages/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({ type: DELETE_MESSAGE })
    if (data.data.success) {
      return { success: true }
    }
  }
}

export const markAsSeen = id => {
  return async dispatch => {
    let data = await axios({
      method: 'PATCH',
      url: `${domain}/messages/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({ type: MARK_AS_SEEN, payload: data.data })
  }
}
