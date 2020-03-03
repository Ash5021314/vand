import { HOMEPAGE_DATA } from "./types";
import axios from "axios";

const domain = "http://localhost:4000";

export const getHomePage = () => {
  return async dispatch => {
    let data = await axios.get(`${domain}/layout/homepage`);
    dispatch({ type: HOMEPAGE_DATA, payload: data.data });
  };
};
