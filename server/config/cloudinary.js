const cloudinary = require('cloudinary');
const multer = require('multer')

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new multer.memoryStorage();

const imageUploadUtils = async (file) =>{
    try {
        const uploadResult = await cloudinary.uploader.upload(file, { resource_type: 'auto' })
        return uploadResult
    } catch (error) {
        console.log(error, 'error in uploadImage');
    }
}

const upload = multer({multer})
module.exports = {upload, imageUploadUtils}
