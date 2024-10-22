const express  = require('express');
const { userRegister, userLogin } = require('../../controllers/auth/auth-controller');
const router = express.Router();


router.post( '/signup', userRegister)
router.post( '/login', userLogin)

module.exports = router;