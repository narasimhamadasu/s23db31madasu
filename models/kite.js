const mongoose = require("mongoose")
const kiteSchema = mongoose.Schema({
kite_color: String,
kite_quality: String,
kite_cost: Number
})
module.exports = mongoose.model("kite",
kiteSchema)