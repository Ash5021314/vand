const Layout = require('../models/Layout')
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
const fs = require('fs')
const path = require('path')

let domain = process.env.DOMAIN || 'http://localhost:5000'

Layout.getHomePage = async () => {
  try {
    let data = await Layout.findOne({ label: 'Layout_template' })
    return data
  } catch (e) {
    return DOOR_CANNOT_GET_DATA
  }
}

Layout.updateAboutImg = async img => {
  try {
    let data = await Layout.findOneAndUpdate(
      { label: 'Layout_template' },
      { about_img: img },
      { new: true },
    )
    DOOR_UPDATED.data = data
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND
  } catch (e) {
    return DOOR_CANNOT_UPDATE
  }
}

// Layout.addSliderImg = async (img, name) => {
//   try {
//     let obj = { name, url: img }
//     let data = await Layout.findOneAndUpdate(
//       { label: 'Layout_template' },
//       {
//         $push: {
//           'slider': {
//             name: name, url: img,
//           },
//         },
//       },
//       { new: true },
//     )
//     DOOR_UPDATED.data = data
//     return data ? DOOR_UPDATED : DOOR_NOT_FOUND
//   } catch (e) {
//     return DOOR_CANNOT_UPDATE
//   }
// }

Layout.addSliderImg = async (img, name) => {
  try {
    const slide = new Layout(img, name)
    const data = await slide.save()
    DOOR_CREATED.data = data
    return DOOR_CREATED
  } catch (e) {
    console.log(e)
    if (e.name === 'ValidationError') return INVALID_CRED
    else if (e.name === 'MongoError' && e.code === 11000) return DOOR_EXIST
    return DOOR_CANNOT_CREATE
  }
}

Layout.updateSlider = async (id, img, name) => {
  try {
    let url = await Layout.findOne({ label: 'Layout_template' })
    url = url.slider.filter(item => item._id == id)
    url = url[0].url

    let imgPath = url.replace(`${domain}`, path.join(__dirname, '/../public'))

    let data = await Layout.findOneAndUpdate({ label: 'Layout_template' }, {
      $set: { 'slider.$[elem].name': name, 'slider.$[elem].url': img },
    }, {
      new: true,
      arrayFilters: [ { 'elem._id': id } ],
    })
    if (data) {
      fs.unlink(imgPath, (err) => err ? err : 'ok')
    }
    DOOR_UPDATED.data = data
    return DOOR_UPDATED
  } catch (e) {
    return DOOR_CANNOT_UPDATE
  }
}

Layout.deleteSlide = async (id) => {
  try {
    let url = await Layout.findOne({ label: 'Layout_template' })
    url = url.slider.filter(item => item._id == id)
    url = url[0].url

    let imgPath = url.replace(`${domain}`, path.join(__dirname, '/../public'))

    let data = await Layout.findOneAndUpdate({ label: 'Layout_template' }, {
      $pull: { 'slider': { _id: id } },
    }, { new: true })
    if (data) {
      fs.unlink(imgPath, (err) => err ? err : 'ok')
    }
    DOOR_DELETED.data = data
    return DOOR_DELETED
  } catch (e) {
    return DOOR_CANNOT_UPDATE
  }
}

Layout.addBrendImg = async (img, name) => {
  try {
    let data = await Layout.findOneAndUpdate(
      { label: 'Layout_template' },
      {
        $push: {
          'brend': {
            name: name, url: img,
          },
        },
      },
      { new: true },
    )
    DOOR_UPDATED.data = data
    return data ? DOOR_UPDATED : DOOR_NOT_FOUND
  } catch (e) {
    console.log(e)
    return DOOR_CANNOT_UPDATE
  }
}

Layout.updateBrend = async (id, img, name) => {
  try {
    let url = await Layout.findOne({ label: 'Layout_template' })
    url = url.brend.filter(item => item._id == id)
    url = url[0].url

    let imgPath = url.replace(`${domain}`, path.join(__dirname, '/../public'))

    let data = await Layout.findOneAndUpdate({ label: 'Layout_template' }, {
      $set: { 'brend.$[elem].name': name, 'brend.$[elem].url': img },
    }, {
      new: true,
      arrayFilters: [ { 'elem._id': id } ],
    })
    if (data) {
      fs.unlink(imgPath, (err) => err ? err : 'ok')
    }
    DOOR_UPDATED.data = data
    return DOOR_UPDATED
  } catch (e) {
    return DOOR_CANNOT_UPDATE
  }
}

Layout.deleteBrend = async (id) => {
  try {
    let url = await Layout.findOne({ label: 'Layout_template' })
    url = url.brend.filter(item => item._id == id)
    url = url[0].url

    let imgPath = url.replace(`${domain}`, path.join(__dirname, '/../public'))

    let data = await Layout.findOneAndUpdate({ label: 'Layout_template' }, {
      $pull: { 'brend': { _id: id } },
    }, { new: true })
    if (data) {
      fs.unlink(imgPath, (err) => err ? err : 'ok')
    }
    DOOR_DELETED.data = data
    return DOOR_DELETED
  } catch (e) {
    return DOOR_CANNOT_UPDATE
  }
}

module.exports = Layout
