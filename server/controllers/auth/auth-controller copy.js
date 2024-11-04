const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const {
  authTokenCreator,
  responseLoginSuccess,
} = require("../../helper/auth/auth-helper");

//Controller for new User register
const userRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User({
      userName: name,
      email,
      phone,
      password: hashPassword,
    });
    await newUser.save();

    console.log(newUser);

    res.status(201).json({
      success: true,
      message: "Registration Success Full",
      user: newUser,
    });
  } catch (error) {
    console.log("signup Error");

    if (error.code == 11000) {
      if (error.keyPattern.email == 1) {
        return res
          .status(200)
          .json({ success: false, message: "Email  Exist" });
      }

      if (error.keyPattern.phone == 1) {
        return res
          .status(200)
          .json({ success: false, message: "Phone Number  Exist" });
      }
    }

    res.status(200).json({ success: false, message: "Error In Registration" });
  }
};

//Controller for Existing User Login
const userLogin = async (req, res) => {
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
      return res.status(401).json({
        success: false,
        message: "Invalid Password! please check password",
      });
    }

    //Add jwt Token
    const authToken = authTokenCreator(userData);

    //if Success send data with cookie
    responseLoginSuccess(res, authToken, userData);
  } catch (error) {
    res.status(201).json({
      success: false,
      message: "Something Wrong Try Again",
    });
  }
};

//Controller for Existing User Logout
const userLogout = async (req, res) => {
  res.status(201).clearCookie("AuthToken").json({
    success: true,
    message: "Logged Out SuccessFully",
  });
};


module.exports = { userRegister, userLogin, userLogout, };
