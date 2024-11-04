// const User = require('../../models/User')

const { OAuth2Client } = require('google-auth-library');
const User = require('../../models/User');
const { authTokenCreator } = require('../../helper/auth/auth-helper');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


//Controller for Google User  login and signup
const googleAuthController = async (req, res) =>{

    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const {email, name, picture } = payload

    const currentUser = await User.findOne({ email });

    if(!currentUser){
        const newUser = await User ({
            userName: name,
            email,
            picture: picture || "null",
            userFrom: 'Google'
        })
        await newUser.save()
        currentUser = newUser
    }


    //auth token function
    const authToken = authTokenCreator(currentUser);

    console.log("authToken created");
    console.log(authToken);
    

//   return payload;  // Contains user info like email, name, etc.


    
    


    
    
}

module.exports = {googleAuthController};