module.exports = {
  DOOR_GET_DATA: { success: true, statusCode: 200, data: [] },
  DOOR_CANNOT_GET_DATA: {
    success: false,
    statusCode: 400,
    msg: "Cannot Get Doors"
  },
  DOOR_CREATED: {
    success: true,
    statusCode: 201,
    msg: "Door Created Successfully!"
  },
  DOOR_CANNOT_CREATE: {
    success: false,
    statusCode: 400,
    msg: "Cannot Create Door"
  },
  DOOR_EXIST: { success: false, statusCode: 422, msg: "Door Exist" },
  DOOR_NOT_FOUND: { success: false, statusCode: 404, msg: "Door Not Found!" },
  DOOR_CANNOT_UPDATE: {
    success: false,
    statusCode: 400,
    msg: "Cannot Update Door"
  },
  DOOR_UPDATED: {
    success: true,
    statusCode: 200,
    msg: "Door Updated!",
    data: {}
  },
  DOOR_DELETED: {
    success: true,
    statusCode: 200,
    msg: "Door Deleted Successfully!"
  },
  MESSAGE_CANNOT_GET_DATA: {
    success: false,
    statusCode: 400,
    msg: "Cannot Get Messages"
  },
  MESSAGE_GET_DATA: { success: true, statusCode: 200, data: [] },
  MESSAGE_SENT: {
    success: true,
    statusCode: 200,
    msg: "Message sent successfully!"
  },
  MESSAGE_CANNOT_SEND: {
    success: false,
    statusCode: 400,
    msg: "Cannot send message!"
  },
  MESSAGE_UPDATED: {
    success: true,
    statusCode: 200,
    msg: "Message Updated!"
  },
  MESSAGE_CANNOT_UPDATE: {
    success: false,
    statusCode: 400,
    msg: "Cannot Update Message"
  },
  MESSAGE_NOT_FOUND: {
    success: false,
    statusCode: 404,
    msg: "Message Not Found!"
  },
  MESSAGE_DELETED: {
    success: true,
    statusCode: 200,
    msg: "Message Deleted Successfully!"
  },
  LOGGED_IN: {
    success: true,
    statusCode: 200,
    token: null
  },
  UNAUTHIORIZED: {
    success: false,
    statusCode: 401,
    msg: "Unauthorized"
  },
  INVALID_CRED: { success: false, statusCode: 400, msg: "Invalid Credentials" },
  SERVER_ERROR: {
    success: false,
    statusCode: 500,
    msg: "Something Went Wrong!"
  }
};
