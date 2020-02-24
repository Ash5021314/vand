const mongoose = require('mongoose');
const dbpath = process.env.MONGODB_URI;
let options = {
    useNewUrlParser:true,
    useUnifiedTopology: true 
}
mongoose.connect(dbpath,options,(err)=>{
    if(err) throw err;
    console.log(`DB connected..`);
});