const mongoose = require("mongoose")
const Schema = mongoose.Schema

const videoSchema =  new Schema({
    url:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Video",videoSchema)