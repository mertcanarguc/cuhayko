const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    name:{
        type:String,
        default:""
    },
    surname:{
        type:String,
        default:""
    },
    mail:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    cardnumber:{
        type:String,
        default:""
    },
    state:{
        type:Boolean,
        default:false
    },
    username: String,
    password: String
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);