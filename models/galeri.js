const mongoose = require("mongoose")
const Schema = mongoose.Schema

const galeriSchema = new Schema({
    url:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Galeri",galeriSchema)