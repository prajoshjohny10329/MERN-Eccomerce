const jwt = require('jsonwebtoken');

module.exports ={

    //create auth token
    authTokenCreator : (user) =>{
        return AuthToken = jwt.sign({ 
            id: user._id , email: user.email , name: user.userName, role: user.role },
            "SECRET_KEY",
            { expiresIn:'2h' })
    }
}