import {
  HOMEPAGE_DATA,
  UPDATE_ABOUT_IMG,
  ADD_SLIDE,
  UPDATE_SLIDER,
  DELETE_SLIDE,
  UPDATE_BREND,
  DELETE_BREND,
  ADD_BREND,
} from './types'
import axios from 'axios'

const domain = 'http://localhost:4000'

export const getHomePage = () => {
  return async dispatch => {
    let data = await axios.get(`${domain}/layout/homepage`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    dispatch({type: HOMEPAGE_DATA, payload: data.data})
  }
}

export const updateAboutImage = (img) => {
  return async dispatch => {
    let data = await axios.post(`${domain}/layout/about_img`, img, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log(data.data)
    if (data.data.success) {
      dispatch({type: UPDATE_ABOUT_IMG, payload: data.data})
    }
  }
}


export const updateSlider = (id, img) => {
  return async dispatch => {
    let data = await axios.patch(`${domain}/layout/slider/${id}`, img, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log(data.data)
    if (data.data.success) {
      dispatch({type: UPDATE_SLIDER, payload: data.data})
    }
  }
}


export const addSlide = (img) => {
  return async dispatch => {
    let data = await axios.post(`${domain}/layout/slider`, img, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log(data.data)
    if (data.data.success) {
      dispatch({type: ADD_SLIDE, payload: data.data})
    }
  }
}

export const deleteSlide = (id) => {
  return async dispatch => {
    let data = await axios.delete(`${domain}/layout/slider/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (data.data.success) {
      dispatch({type: DELETE_SLIDE, payload: data.data})
    }
  }
}


export const updateBrend = (id, img) => {
  return async dispatch => {
    let data = await axios.patch(`${domain}/layout/brend/${id}`, img, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (data.data.success) {
      dispatch({type: UPDATE_BREND, payload: data.data})
    }
  }
}


export const addBrend = (img) => {
  return async dispatch => {
    let data = await axios.post(`${domain}/layout/brend`, img, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    if (data.data.success) {
      dispatch({type: ADD_BREND, payload: data.data})
    }
  }
}

export const deleteBrend = (id) => {
  return async dispatch => {
    let data = await axios.delete(`${domain}/layout/brend/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (data.data.success) {
      dispatch({type: DELETE_BREND, payload: data.data})
    }
  }
}



