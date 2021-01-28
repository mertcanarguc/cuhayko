const async = require("async")
const User = require("../../models/user")

exports.list = async(req,res,next)=>{
    res.render("back/index",{})
}

exports.kart = async(req,res,next)=>{
    let kart = await User.find({ })
    let adet = await User.find({"state":false}).count()
    res.render("back/kart",{
        kart:kart,
        adet:adet
    })
}