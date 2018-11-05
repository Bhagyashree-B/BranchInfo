var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  companies : [{boothName : String,boothMoNumber:String,boothNumber:String}],
  sadasya : [{sadasyaName:String,sadasyaMoNumber:String}],
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
