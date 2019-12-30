const express = require('express');
const controller = require("../controller/auth.controller");
const router = express.Router();
const multer = require('multer');

const validate = require("../middlewares/validate");

const upload = multer({dest: './public/uploads/'});

router.get('/login', controller.login);
router.post('/login', controller.postLogin);

router.get('/registration', controller.registration);
router.post('/registration', upload.single('image') ,controller.postRegistration);
module.exports = router;  