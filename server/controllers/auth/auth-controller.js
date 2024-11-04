const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const {
    authTokenCreator,
    responseLoginSuccess,
} = require("../../helper/auth/auth-helper");

module.exports = {

    //Controller for new User register
    userRegister: async (req, res) => {
        try {
            const { name, email, phone, password } = req.body;
            const isEmail = await User.findOne({ email });
            const isPhone = await User.findOne({ phone });

            //check duplication user or phone
            if (isEmail || isPhone) {
                return res.status(200).json({
                    success: false,
                    message: isEmail ? "Email Exist" : "Phone Number Exist"
                });
            }
            //create to new user
            const hashPassword = await bcrypt.hash(password, 12);
            const userData = await User.create({
                userName: name,
                email,
                phone,
                password: hashPassword,
            });
            const authToken = authTokenCreator(userData);
            //if Success send data with cookie
            responseLoginSuccess(res, authToken, userData);

        } catch (error) {
            res.status(500).json({ success: false, message: "Error In Registration" });
        }
    },

    //Controller for Existing User Login
    userLogin: async (req, res) => {
        try {
            const { email, password } = req.body;
            const userData = await User.findOne({ email });
            if (!userData) {
                return res.status(201).json({
                    success: false,
                    message: "user is not exists! please check Email",
                });
            }
            
            //check password is exist on database
            const hashPassword = await bcrypt.compare(password, userData.password);
            if (!hashPassword) {
                return res.status(201).json({
                    success: false,
                    message: "Invalid Password! please check password",
                });
            }
            //Add jwt Token
            const authToken = authTokenCreator(userData);
            //if Success send data with cookie
            responseLoginSuccess(res, authToken, userData);

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Something Wrong Try Again",
            });
        }
    },

    //Controller for Existing User Logout
    userLogout: async (req, res) => {
        res.status(200).clearCookie("AuthToken").json({
            success: true,
            message: "Logged Out SuccessFully",
        });
    },

    //After Auth Middleware
    checkAuth: (req, res) => {
        console.log('auth controller');
        
        try {
            res.status(200).json({
                success: true,
                message: "User is Authenticated",
                user: req.user
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Something wrong checkAuth",
            })
        }
    }
}


