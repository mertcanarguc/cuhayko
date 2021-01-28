const async = require("async")
const Galeri = require("../../models/galeri")

exports.list = async(req,res,next)=>{
    let galeri = await Galeri.find({ })
    res.render("back/galeri",{
        galeri:galeri
    })
}

exports.insert = async(req,res,next)=>{
    const fotos = req.body.fotos
    fotos.forEach(element => {
        new Galeri({
            url:element
        }).save((err,data)=>{
            if (err) {
                console.log(err)
            } else {
                console.log("Başarılı")
            }
        })
    });
    res.redirect("/admin/galeri")

}
