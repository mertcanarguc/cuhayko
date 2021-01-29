const express = require('express');
const router = express.Router();
const adminController = require("../controllers/back/mainController")
const mainController = require("../controllers/front/mainController")
const galeriController = require("../controllers/back/galeriController")


//ADMİN
router.get("/admin",adminController.list)
router.get("/admin/kart",adminController.kart)

router.get("/admin/galeri",galeriController.list)
router.post("/admin/galeriekle",galeriController.insert)

/* GET home page. */
router.get('/',mainController.index);
router.get('/hakkimizda',mainController.hakkimizda);
router.get('/galeri',mainController.galeri);
router.get('/video',mainController.video);
router.get('/bizimle',mainController.bizimle);
router.get('/birlikte',mainController.birlikte);
router.get('/iletisim',mainController.iletisim);
router.get('/bagis',mainController.bagis);
router.get('/login',mainController.login);

//PROFİL
router.get("/profil",mainController.profil)



module.exports = router;
