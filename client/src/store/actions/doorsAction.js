import { CREATE_DOOR } from "./types";
import axios from "axios";

const domain = "http://localhost:4000";

export const createDoor = (img, doc) => {
  return async dispatch => {
    let response2 = await sendDoorData(doc);
    let response1 = await uploadSingleImg(img);
    // console.log(response1);
    // console.log("Response 2: " + response2);
    // axios({
    //   method: "POST",
    //   url: `${domain}/admin/login`,
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   data: doc
    // })
    //   .then(data => {
    //     // dispatch(setAuthToken(data.data.token));
    //   })
    //   .catch(e => console.log("Not Allowed"));
    if (response1.success && response2.success) {
      return { success: true };
    }
  };
};

const uploadSingleImg = async img => {
  let response = await axios.post(`${domain}/doors/upload_single`, img, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};

const sendDoorData = async data => {
  //   console.log(data);
  let response = await axios.post(`${domain}/doors/`, {
    headers: {
      "Content-Type": "application/json"
    },
    data
  });
  return response.data;
};
