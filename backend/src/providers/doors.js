const Door = require('../models/Door')
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
  INVALID_CRED,
} = require('../utils/response_constants')

Door.get = async (type, limit = 12, skip = 0) => {
  try {
    limit = parseInt(limit)
    skip = parseInt(skip)
    const data = await Door.find({ category: type }).sort({ 'createdAt': -1 }).limit(limit).skip(limit * skip)
    DOOR_GET_DATA.data = data
    return DOOR_GET_DATA
  } catch (e) {
    return DOOR_CANNOT_GET_DATA
  }
}

Door.getAll = async () => {
  try {
    const data = await Door.find()
    DOOR_GET_DATA.data = data
    return DOOR_GET_DATA
  } catch (e) {
    return DOOR_CANNOT_GET_DATA
  }
}

Door.create = async doc => {
  try {
    const door = new Door(doc)
    const data = await door.save()
    DOOR_CREATED.data = data
    return DOOR_CREATED
  } catch (e) {
    console.log(e)
    if (e.name === 'ValidationError') return INVALID_CRED
    else if (e.name === 'MongoError' && e.code === 11000) return DOOR_EXIST
    return DOOR_CANNOT_CREATE
  }
}

Door.updateDoc = async (id, doc) => {
  const updates = Object.keys(doc)
  const allowedUpdates = [ 'title', 'price' ]
  const isValidOperation = updates.every(item => allowedUpdates.includes(item))
  if (!isValidOperation) return INVALID_CRED
  try {
    const data = await Door.findByIdAndUpdate({ _id: id }, doc, {
      new: true,
      runValidators: true,
    })
    DOOR_UPDATED.data = data
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND
  } catch (e) {
    return e.path === '_id' ? DOOR_NOT_FOUND : DOOR_CANNOT_UPDATE
  }
}

Door.updateDocCustom = async (id, doc) => {
  try {
    const door = await Door.findById(id)
    for (const key in doc) {
      if (![ 'created_at', 'updated_at', '__v', '_id' ].includes(key)) {
        door[key] = doc[key]
      }
    }
    const data = await door.save()
    DOOR_UPDATED.data = data
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND
  } catch (e) {
    return e.path === '_id' ? DOOR_NOT_FOUND : DOOR_CANNOT_UPDATE
  }
}

Door.updateDocOtherColor = async (id, doc) => {
  try {
    const door = await Door.findById(id)
    door.otherColor.push(doc)
    const data = await door.save()
    DOOR_UPDATED.data = data
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND
  } catch (e) {
    return e.path === '_id' ? DOOR_NOT_FOUND : DOOR_CANNOT_UPDATE
  }
}
Door.updateDocMoreImage = async (id, doc) => {
  try {
    const door = await Door.findById(id)
    door.moreImage.push(doc)
    const data = await door.save()
    DOOR_UPDATED.data = data
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND
  } catch (e) {
    return e.path === '_id' ? DOOR_NOT_FOUND : DOOR_CANNOT_UPDATE
  }
}

Door.delete = async id => {
  try {
    let door = await Door.findOneAndDelete({ _id: id })
    if (!door) return DOOR_NOT_FOUND
    return DOOR_DELETED
  } catch (e) {
    return DOOR_NOT_FOUND
  }
}

Door.deleteOtherColor = async (doorId, id) => {
  try {
    let door = await Door.findById({ _id: doorId })
    if (!door) return DOOR_NOT_FOUND
    door.otherColor = door.otherColor.filter(({ _id }) => _id != id)
    const data = await door.save()
    if (!data) {
      return DOOR_CANNOT_UPDATE
    }
    return DOOR_UPDATED
  } catch (e) {
    return DOOR_NOT_FOUND
  }
}
Door.deleteMoreImage = async (doorId, id) => {
  try {
    let door = await Door.findById({ _id: doorId })
    if (!door) return DOOR_NOT_FOUND
    door.moreImage = door.moreImage.filter(({ _id }) => _id != id)
    const data = await door.save()
    if (!data) {
      return DOOR_CANNOT_UPDATE
    }
    return DOOR_UPDATED
  } catch (e) {
    return DOOR_NOT_FOUND
  }
}

module.exports = Door
