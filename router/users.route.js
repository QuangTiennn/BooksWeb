const express = require("express");
const controller = require("../controller/users.controller");
const multer = require('multer');

const router = express.Router();
const validate = require("../middlewares/validate");

const upload = multer({dest: './public/uploads/'});

router.get("/", controller.index);

router.get("/create", controller.createUser);
router.post("/create",upload.single("image"),controller.postCreateUser);

module.exports = router;