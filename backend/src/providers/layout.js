const Layout = require("../models/Layout");
const {
  DOOR_GET_DATA,
  DOOR_CANNOT_GET_DATA,
  DOOR_CREATED,
  DOOR_CANNOT_CREATE,
  DOOR_EXIST,
  DOOR_CANNOT_UPDATE,
  DOOR_NOT_FOUND,
  DOOR_UPDATED,
  DOOR_DELETED,
  INVALID_CRED
} = require("../utils/response_constants");

Layout.updateAboutImg = async img => {
  try {
    let data = await Layout.findOneAndUpdate(
      { label: "Layout_template" },
      { about_img: img },
      { new: true }
    );
    DOOR_UPDATED.data = data;
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND;
  } catch (e) {
    return DOOR_CANNOT_UPDATE;
  }
};

module.exports = Layout;
