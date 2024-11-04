const jwt = require("jsonwebtoken");

module.exports = {

    //check is user authenticated by auth token from cookies
    userAuthMiddleware : (req, res, next) => {
        try {
            
          const authToken = req.cookies.authToken;
          if (!authToken) {
            return res
              .status(201)
              .json({ success: false, message: "User is not Login" });
          }
      
          req.user = jwt.verify(authToken, "SECRET_KEY");
          next();

        } catch (error) {
          return res.status(401).json({
            success: false,
            message: "User is not Login",
          });
        }
      }
};

