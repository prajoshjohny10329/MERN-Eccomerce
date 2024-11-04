
module.exports = {
    
    userAuthMiddleware : (req, res, next) => {
        try {
          const authToken = req.cookies.authToken;
      
          //not get auth token or jwt token
          if (!authToken) {
            return res
              .status(401)
              .json({ success: false, message: "User is not Login" });
          }
      
          //check and assign decoded auth token to user
          req.user = jwt.verify(authToken, "SECRET_KEY");
          next();
      
        } catch (error) {
          return res.status(401).json({
            success: false,
            message: "User is not Login",
          });
        }
      }
}

