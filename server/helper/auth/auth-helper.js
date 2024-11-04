const jwt = require('jsonwebtoken');

module.exports ={

    //create auth token
    authTokenCreator : (user) =>{
        return AuthToken = jwt.sign({ 
            id: user._id , email: user.email , name: user.userName, role: user.role },
            "SECRET_KEY",
            { expiresIn:'2h' })
    },

    //create new user from google auth
    responseLoginSuccess: (res, authToken, userData) =>{
        res.status(201).cookie('authToken', authToken, {httpOnly: true, secure: false}).json({
            success: true,
            message: 'Logged in successfully !',
            user:{
                id: userData._id,
                email: userData.email,
                name: userData.userName,
                role: userData.role
            }
        })
    }

}