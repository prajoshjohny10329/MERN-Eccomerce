const express  = require('express');
const { userRegister, userLogin, userLogout, userAuthMiddleware } = require('../../controllers/auth/auth-controller');
const router = express.Router();

//Route for create new user
router.post( '/signup', userRegister)

//Route for login user
router.post( '/login', userLogin)

//Route for logout user
router.post( '/logout', userLogout)

module.exports = router;