const mongoose = require("mongoose");

const kiteSchema = mongoose.Schema({
  kite_color:  {type:String , required: true, minLength:[1,'color']},
  kite_quality: { type:String , required: true, maxLength:[8] },
  kite_cost: {type: Number, required: true,min: 0, max: 600}, 
});

module.exports = mongoose.model("kite", kiteSchema);