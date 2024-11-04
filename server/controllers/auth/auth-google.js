// const User = require('../../models/User')

const { OAuth2Client } = require('google-auth-library');
const User = require('../../models/User');
const { authTokenCreator, responseLoginSuccess } = require('../../helper/auth/auth-helper');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


//Controller for Google User  login and signup
const googleAuthController = async (req, res) =>{

    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });

    const {email, name, picture } = ticket.getPayload();
    let userData = await User.findOne({ email });

    if(!userData){
        const newUser = await User ({
            userName: name,
            email,
            picture: picture || "null",
            userFrom: 'Google'
        })
        await newUser.save()
        userData = newUser
    }

    //auth token function
    const authToken = authTokenCreator(userData);
    console.log('before response');
    
    responseLoginSuccess(res, authToken, userData)
    // res.cookie('authToken', authToken, {httpOnly: true, secure: false}).json({
    //     success: true,
    //     message: 'Logged in successfully !',
    //     user:{
    //         id: userData._id,
    //         email: userData.email,
    //         name: userData.userName,
    //         role: userData.role
    //     }
    // })
    

//   return payload;  // Contains user info like email, name, etc.


    
    


    
    
}

module.exports = {googleAuthController};