const express = require('express');
const { upload } = require('../../config/cloudinary');
const { handleImageUpload } = require('../../controllers/admin/product-controller');
const router = express.Router()



router.post("/product-image-upload", upload.single("image_file"), handleImageUpload);

module.exports = router