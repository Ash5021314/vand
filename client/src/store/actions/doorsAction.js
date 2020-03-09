import { CREATE_DOOR, GET_INTERIOR, GET_IRON, GET_ALL } from "./types";
import axios from "axios";

const domain = "http://localhost:4000";

export const createDoor = img => {
  return async dispatch => {
    let response = await sendDoorData(img);
    if (response.success) {
      return { success: true };
    }
  };
};

const sendDoorData = async img => {
  let response = await axios.post(`${domain}/doors/`, img, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};

export const getInteriorDoors = (skip = 0, limit = 12) => {
  return async dispatch => {
    let response = await axios.get(`${domain}/doors?type=interior&skip=${skip}&limit=${limit}`, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if (response.data.success) {
      dispatch({ type: GET_INTERIOR, payload: response.data })
    }
  };
};

export const getIronDoors = (skip = 0, limit = 12) => {
  return async dispatch => {
    let response = await axios.get(`${domain}/doors?type=iron&skip=${skip}&limit=${limit}`, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if (response.data.success) {
      dispatch({ type: GET_IRON, payload: response.data })
    }
  };
};

export const getDoors = () => {
  return async dispatch => {
    let response = await axios.get(`${domain}/doors`, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    if (response.data.success) {
      dispatch({ type: GET_ALL, payload: response.data })
    }
  };
}