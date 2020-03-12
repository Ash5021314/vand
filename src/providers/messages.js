const Message = require('../models/Message')
const validate = require('validator')
const {
  MESSAGE_CANNOT_GET_DATA,
  MESSAGE_GET_DATA,
  MESSAGE_SENT,
  MESSAGE_CANNOT_SEND,
  MESSAGE_UPDATED,
  MESSAGE_CANNOT_UPDATE,
  INVALID_CRED,
  MESSAGE_DELETED,
  MESSAGE_NOT_FOUND,
} = require('../utils/response_constants')

Message.get = async () => {
  try {
    MESSAGE_GET_DATA.data = await Message.find()
    return MESSAGE_GET_DATA
  } catch (e) {
    return MESSAGE_CANNOT_GET_DATA
  }
}

Message.send = async ({ name, phone }) => {
  try {
    const message = new Message({
      name,
      phone,
    })
    // let isPhone = validate.isMobilePhone(message.phone);
    // console.log(isPhone);
    const data = await message.save()
    return MESSAGE_SENT
  } catch (e) {
    if (e.name === 'ValidationError') return INVALID_CRED
    return MESSAGE_CANNOT_SEND
  }
}

Message.seen = async id => {
  try {
    let data = await Message.findByIdAndUpdate(
      { _id: id },
      { seen: true },
      { new: true, runValidators: true },
    )
    MESSAGE_UPDATED.data = data
    return MESSAGE_UPDATED
  } catch (e) {
    console.log(e)
    return MESSAGE_CANNOT_UPDATE
  }
}

Message.delete = async id => {
  try {
    let message = await Message.findOneAndDelete({ _id: id })
    if (!message) return MESSAGE_NOT_FOUND
    return MESSAGE_DELETED
  } catch (e) {
    return MESSAGE_NOT_FOUND
  }
}

module.exports = Message
