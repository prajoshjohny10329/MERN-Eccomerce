const { OAuth2Client } = require('google-auth-library');
const User = require('../../models/User');
const { authTokenCreator, responseLoginSuccess } = require('../../helper/auth/auth-helper');


//Controller for Google User  login and signup
const googleAuthController = async (req, res) =>{
    try {
        //google verifyIdToken 
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const {email, name, picture } = ticket.getPayload();
        let userData = await User.findOne({ email });
    
        //for new user or user is not existing on database
        userData = userData || await User.create({
            userName: name,
            email,
            picture: picture || "null",
            userFrom: 'Google'
        });
        
        //auth token function
        const authToken = authTokenCreator(userData);
        //function for response login success
        responseLoginSuccess(res, authToken, userData)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Something Wrong Try Again'
        })
    }
    
}

module.exports = {googleAuthController};