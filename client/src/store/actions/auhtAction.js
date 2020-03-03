import { ADMIN_LOGIN, ADMIN_LOGOUT } from "./types";
import axios from "axios";

const domain = "http://localhost:4000";

export const login = doc => {
  return dispatch => {
    axios({
      method: "POST",
      url: `${domain}/admin/login`,
      headers: {
        "Content-Type": "application/json"
      },
      data: doc
    })
      .then(data => {
        dispatch(setAuthToken(data.data.token));
      })
      .catch(e => console.log("Not Allowed"));
  };
};

const setAuthToken = token => {
  return dispatch => {
    if (token && token !== "") {
      localStorage.setItem("a_a_key", token);
      dispatch({ type: ADMIN_LOGIN, payload: token });
    } else {
      console.log("Unauthorized");
    }
  };
};

export const Init = () => {
  return async dispatch => {
    const token = localStorage.getItem("a_a_key");
      let verifyToken = await checkToken(token);
      if (verifyToken) {
        dispatch(setAuthToken(token));
      } else {
        dispatch(logout());
      }
  };
};

const checkToken = token => {
  axios({
    method: "GET",
    url: `${domain}/admin/jwt_check`,
    headers: {
      "Content-Type": "application/json",
      "Authorization":`${token}`
    }
  }).then(doc => {
    const { data } = doc;
    if (data.success) {
      return true;
    } else {
      return false;
    }
  });
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('a_a_key');
    dispatch({ type: ADMIN_LOGOUT });
  };
};
