var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String
});


const Item = mongoose.model("Item",itemSchema,"Items");

module.exports = Item;