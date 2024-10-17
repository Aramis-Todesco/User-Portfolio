const express = require("express");
const {
  sendEmailController,
} = require("../controllers/sendEmailController.js");

//router object

const router = express.Router();

//routes

router.post("/sendEmail", sendEmailController);

//
module.exports = router;
