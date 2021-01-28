const async = require("async")
const Galeri = require("../../models/galeri")

exports.index = async(req,res,next)=>{
    let galeri = await Galeri.find({})
    res.render("front/index",{
        galeri:galeri
    })
}

exports.login = async(req,res,next)=>{
    res.render("front/login")
}

exports.hakkimizda = async(req,res,next)=>{
    res.render("front/hakkimizda")
}

exports.galeri = async(req,res,next)=>{
    let galeri = await Galeri.find({})
    res.render("front/galeri",{
        galeri:galeri
    })
}

exports.video = async(req,res,next)=>{
    res.render("front/video")
}

exports.iletisim = async(req,res,next)=>{
    res.render("front/iletisim")
}

exports.bagis = async(req,res,next)=>{
    res.render("front/bagis")
}

exports.profil = async(req,res,next)=>{
    res.render("front/profil")
}