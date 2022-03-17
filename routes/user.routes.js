const express =require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const userController =require('../controller/user.controller');
const{body,valdiationResult} = require('express-validator');

router.post("/signup",
  body('email').isEmail(),
  body('password','password is wrong').isLength(5),
  userController.signup
);

router.post("/signin",
  body('email').isEmail(),
  body('password','Oops! something wents wrong..'),
  userController.signin
)

module.exports = router;