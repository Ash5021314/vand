const mongoose = require('mongoose')

// const doorSchema = new mongoose.Schema(
//   {
//     category: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     hero_image: {
//       type: String,
//       required: true
//     },
//     colorfrontDoor: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     sideDoor: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     picDoor: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     manufacture: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     doorName: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     blockSize: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     seria: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     tolPol: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     tolList: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     classStrong: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     valEks: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     classProchnost: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     petli: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     protivosyom: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     regulirovka: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     box: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     vilet: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     kreplenie: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     utiplitel: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     usilenieWinter: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     nightMove: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     termorazriv: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     cinkogrunt: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     doorHeight: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     price: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     fullPrice: {
//       type: String,
//       required: true,
//       trim: true
//     }
//   },
//   {
//     timestamps: true
//   }
// );

const doorSchema = new mongoose.Schema([{

    title: {type: String, required: true},
    price: {type: String, default: null},
    priceFront: {type: String, default: null},
    fullPrice: {type: String, default: null},
    frontImage: {type: String, default: null},
    backImage: {type: String, default: null},
    frontColor: {type: String, default: null},
    side: {type: String, default: null},
    picture: {type: String, default: null},
    otherColor: [
      {
        price: {type: String, default: null},
        color: {type: String, default: null},
        image: {type: String, default: null},
        side: {type: String, default: null},
        picture: {type: String, default: null},
      },
    ],
    manufacturer: {type: String, default: null},
    doorBlockSize: {type: String, default: null},
    series: {type: String, default: null},
    thickness: {type: String, default: null},
    metalSheetThickness: {type: String, default: null},
    strengthClass: {type: String, default: null},
    performanceValue: {type: String, default: null},
    burglarResistanceClass: {type: String, default: null},
    numberOfLoops: {type: String, default: null},
    antiSeize: {type: String, default: null},
    clipAdjustment: {type: String, default: null},
    box: {type: String, default: null},
    platbandDepartureFromTheBox: {type: String, default: null},
    mount: {type: String, default: null},
    insulation: {type: String, default: null},
    castleStrengthening: {type: String, default: null},
    nightValve: {type: String, default: null},
    thermalBreak: {type: String, default: null},
    zinkogrunt: {type: String, default: null},
    doorWeight: {type: String, default: null},
    inside: {type: String, default: null},
    coating: {type: String, default: null},
    glazing: {type: String, default: null},
    moreImage: [
      {
        image: {type: String, default: null},
      },
    ],
    category: {type: String, required: true},
  }],
  {
    timestamps: true,
  })

const Door = mongoose.model('Door', doorSchema, 'Doors')

module.exports = Door
