const mongoose = require("mongoose");
const Layout = require("../src/models/Layout");
const Door = require("../src/models/Door");
// const layouts = require("./Layout.json");
// const doors = require("./Doors.json");
let db = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vandoor';

(async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        let layoutData = await Layout.find();
        let doorData = await Door.find();
        if (layoutData.length !== 0 || doorData.length !== 0)
            return process.exit();
        // layoutData = await Layout.insertMany(layouts);
        // doorData = await Door.insertMany(doors);
        return process.exit();
    } catch (e) {
        console.log("error: " + e);
        return "Cannot access to db";
    }
})();