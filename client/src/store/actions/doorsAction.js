import { CREATE_DOOR } from "./types";
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
