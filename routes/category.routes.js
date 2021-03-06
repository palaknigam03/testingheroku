const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const categoryController = require('../controller/category.controller');
const {body,valedaterResult} = require('express-validator');
const multer = require('multer');
var storage = multer.diskStorage(
  {
      destination: 'public/images/category',
      filename: function (req, file, cb) {
          cb(null, Date.now() + "-" + file.originalname);
      }
  }
);
var upload = multer({ storage: storage });
router.post("/add-category",upload.single('categoryImage'),
  body('categoryName').not().isEmpty(),
  categoryController.add
);

router.delete("/delete/:id", categoryController.deleteCategory);

router.post("/update", upload.array('categoryImage'),
    body('productName').not().isEmpty(),
    body("categoryId").not().isEmpty()
    , categoryController.update
);

router.get("/view",categoryController.getCategory);

module.exports = router;