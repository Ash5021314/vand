import { MESSAGE_SEND } from "./types";
import axios from "axios";

const domain = "http://localhost:4000";

export const sendMessage = doc => {
  return async dispatch => {
    let data = await axios({
      method: "POST",
      url: `${domain}/messages`,
      headers: {
        "Content-Type": "application/json"
      },
      data: doc
    });
    dispatch({ type: MESSAGE_SEND });
  };
};
