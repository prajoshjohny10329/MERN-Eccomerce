const { imageUploadUtils } = require("../../config/cloudinary");

module.exports ={
    handleImageUpload : async (req, res) => {
        try {
            const b64 = Buffer.from(req.file.buffer).toString('base64')
            const url = "data:" + req.file.mimetype + ";base64" + b64;
            const result = await imageUploadUtils(b64)
            res.status(201).json({
                success: true,
                result
            })
            
        } catch (error) {
            console.log(error, 'error in handleImageUpload');
            res.status(500).json({
                success: false,
                message:'Error Occur'
            })
        }
    }
}