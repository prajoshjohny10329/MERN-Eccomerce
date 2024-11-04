const express  = require('express');
const { userRegister, userLogin, userLogout, checkAuth } = require('../../controllers/auth/auth-controller');
const { googleAuthController } = require('../../controllers/auth/auth-google');
const { userAuthMiddleware } = require('../../middleware/auth-middleware');
const router = express.Router();

//Route for create new user
router.post( '/signup', userRegister)

//Route for login user
router.post( '/login', userLogin)

//Route for logout user
router.post( '/logout', userLogout)

//Route for logout user
router.post( '/google-auth', googleAuthController)

//Route for user AuthMiddleware
router.get( '/check-auth' ,userAuthMiddleware, checkAuth)

module.exports = router;