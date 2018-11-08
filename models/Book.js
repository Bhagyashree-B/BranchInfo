var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  shakhaKramank: String,
  shakhaGaw: String,
  shakhaPramukhNaw: String,
  shakhaPramukhMobile: String,
  shakhaUpPramukhNaw: String,
  shakhaUpPramukhMobile: String,
  boothDetails : [{boothName : String,boothMoNumber:String,boothNumber:String}],
  sadasyaDetails : [{sadasyaName:String,sadasyaMoNumber:String}],
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
