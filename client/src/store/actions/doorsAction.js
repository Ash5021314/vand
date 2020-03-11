import { GET_INTERIOR, GET_IRON, GET_ALL, UPDATE_DOOR, DELETE_DOOR } from './types'
import axios from 'axios'

export const domain = 'http://localhost:4000'

export const createDoor = data => {
  return async () => {
    let response = await sendDoorData(data)
    if (response.success) {
      return { success: true }
    }
  }
}

export const updateDoor = (doorId, data) => {
  return async () => {
    let response = await sendDoorDataToUpdate(doorId, data)
    if (response.success) {
      return { success: true }
    }
  }
}

const smallImageSame = async (doorId, data) => {
  try {
    const response = await axios.post(`${domain}/doors/${doorId}/other-color`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    return response.data.data
  } catch (e) {
    return
  }
}
const moreImageSame = async (doorId, data) => {
  try {
    const response = await axios.post(`${domain}/doors/${doorId}/more-image`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    return response.data.data
  } catch (e) {
    return
  }
}

export const createDoorOtherColor = (doorId, data) => {
  return async dispatch => {
    const formData = new FormData()
    for (const key in data) {
      if ('image' === key) {
        formData.append('img', data[key])
      } else {
        formData.append(key, data[key])
      }
    }

    let response = await smallImageSame(doorId, formData)
    if (response.success) {
      dispatch({ type: UPDATE_DOOR, payload: response.data })
    }
  }

// return async dispatch => {
//   let response = await sendDoorData(img)
//   if (response.success) {
//     return {success: true}
//   }
// }
}
export const createDoorMore = (doorId, data) => {
  return async dispatch => {
    const formData = new FormData()
    for (const key in data) {
      if ('image' === key) {
        formData.append('img', data[key])
      } else {
        formData.append(key, data[key])
      }
    }

    let response = await moreImageSame(doorId, formData)
    if (response.success) {
      dispatch({ type: UPDATE_DOOR, payload: response.data })
    }
  }

// return async dispatch => {
//   let response = await sendDoorData(img)
//   if (response.success) {
//     return {success: true}
//   }
// }
}

export const deleteItem = (id) => {
  return async dispatch => {
    let data = await axios.delete(`${domain}/doors/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (data.data.success) {
      dispatch({ type: DELETE_DOOR, payload: { id } })
    }
  }
}

const sendDoorData = async data => {
  let response = await axios.post(`${domain}/doors/`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}
const sendDoorDataToUpdate = async (doorId, data) => {
  let response = await axios.put(`${domain}/doors/${doorId}`, data, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
  return response.data
}

export const getInteriorDoors = (skip = 0, limit = 12) => {
  return async dispatch => {
    let response = await axios.get(`${domain}/doors?type=interior&skip=${skip}&limit=${limit}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.data.success) {
      dispatch({ type: GET_INTERIOR, payload: response.data })
    }
  }
}

export const getIronDoors = (skip = 0, limit = 12) => {
  return async dispatch => {
    let response = await axios.get(`${domain}/doors?type=iron&skip=${skip}&limit=${limit}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.data.success) {
      dispatch({ type: GET_IRON, payload: response.data })
    }
  }
}

export const getDoors = () => {
  return async dispatch => {
    let response = await axios.get(`${domain}/doors`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (response.data.success) {
      dispatch({ type: GET_ALL, payload: response.data })
    }
  }
}