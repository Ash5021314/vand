import { HOMEPAGE_DATA, UPDATE_ABOUT_IMG } from "./types";
import axios from "axios";

const domain = "http://localhost:4000";

export const getHomePage = () => {
  return async dispatch => {
    let data = await axios.get(`${domain}/layout/homepage`);
    dispatch({ type: HOMEPAGE_DATA, payload: data.data });
  };
};

export const updateAboutImage = (img) => {
  return async dispatch => {
    let data = await axios.post(`${domain}/layout/about_img`, img, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(data.data);
    if (data.data.success) {
      dispatch({ type: UPDATE_ABOUT_IMG, payload: data.data });
    }
  };
};
