const express  = require('express');
const { userRegister, userLogin, userLogout, userAuthMiddleware } = require('../../controllers/auth/auth-controller');
const { googleAuthController } = require('../../controllers/auth/auth-google');
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
router.get( '/check-auth' ,userAuthMiddleware, (req,res)=>{
    console.log('check-auth called');
    
    const user = req.user
    console.log(user);
    
    res.status(201).json({
        success: true,
        message: "User is Authenticated",
        user: user
    })
    console.log('retrun');
    
})

module.exports = router;