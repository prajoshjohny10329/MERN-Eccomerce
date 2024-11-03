// const User = require('../../models/User')
// const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);


//Controller for new User register
const googleAuthController = async (req, res) =>{
    console.log("google auth controller called");
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });

    console.log("ticket");
    console.log(ticket);
  
  const payload = ticket.getPayload();
  console.log("payload");
  console.log(payload);
//   return payload;  // Contains user info like email, name, etc.

    
    
}

module.exports = {googleAuthController};