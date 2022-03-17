const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const { body } = require('express-validator');
const multer = require('multer');
var storage = multer.diskStorage(
    {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    }
);
var upload = multer({ storage: storage });

router.post("/add", upload.array('productImage'),
    body('productName').not().isEmpty(),
    body('productImage'),
    body('productVedio'),
    body('productAudio'),
    body('productQty').not().isEmpty(),
    body('productPrice').not().isEmpty(),
    productController.add
);
//router.get("/product-list", productController.get);


router.delete("/delete/:id", productController.deleteProduct);

router.post("/update", upload.array('productImage'),
    body('productName').not().isEmpty(),
    body("categoryId").not().isEmpty()
    , productController.update
);
module.exports = router;




