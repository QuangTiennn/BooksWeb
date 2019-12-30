const express = require("express");
const controller = require("../controller/controller");

const multer = require('multer');

const router = express.Router();
const validate = require("../middlewares/validate");

const upload = multer({dest: './public/uploads/'});

router.get("/" ,controller.index);

// router.get("/search", controller.search);

router.get('/viewproduct/:id' ,controller.viewProduct);

router.get('/updateproduct/:id' ,controller.getUpdateProduct);

router.post('/updateproduct', controller.updateProduct);

router.get('/delete/:id' ,controller.deleteProduct);

router.get("/createproduct", controller.createProduct);

router.post("/createproduct", upload.single('image'), validate.postCreateProduct, controller.postCreateProduct);

module.exports = router;