const Door = require("../models/Door");
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

Door.get = async () => {
  try {
    const data = await Door.find();
    DOOR_GET_DATA.data = data;
    return DOOR_GET_DATA;
  } catch (e) {
    return DOOR_CANNOT_GET_DATA;
  }
};

Door.create = async doc => {
  try {
    const door = new Door(doc);
    const data = await door.save();
    DOOR_CREATED.data = data;
    return DOOR_CREATED;
  } catch (e) {
    if (e.name === "ValidationError") return INVALID_CRED;
    else if (e.name === "MongoError" && e.code === 11000) return DOOR_EXIST;
    return DOOR_CANNOT_CREATE;
  }
};

Door.updateDoc = async (id, doc) => {
  const updates = Object.keys(doc);
  const allowedUpdates = ["title", "price"];
  const isValidOperation = updates.every(item => allowedUpdates.includes(item));
  if (!isValidOperation) return INVALID_CRED;
  try {
    const data = await Door.findByIdAndUpdate({ _id: id }, doc, {
      new: true,
      runValidators: true
    });
    DOOR_UPDATED.data = data;
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND;
  } catch (e) {
    return e.path === "_id" ? DOOR_NOT_FOUND : DOOR_CANNOT_UPDATE;
  }
};

Door.delete = async id => {
  try {
    let door = await Door.findOneAndDelete({ _id: id });
    if (!door) return DOOR_NOT_FOUND;
    return DOOR_DELETED;
  } catch (e) {
    return DOOR_NOT_FOUND;
  }
};

module.exports = Door;
