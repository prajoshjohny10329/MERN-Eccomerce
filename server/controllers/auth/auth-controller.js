const bcrypt = require('bcryptjs');
const User = require('../../models/User')
const jwt = require('jsonwebtoken')


//Controller for new User register
const userRegister =  async (req,res) =>{
    try {
        const { name, email, phone, password} = req.body
        const hashPassword = await bcrypt.hash(password, 12)
        
        const newUser = await User ({
            userName: name,
            email,
            phone,
            password: hashPassword
        })
        await newUser.save()

        console.log(newUser);
        
        res.status(201).json({ success: true, message: 'Registration Success Full', user: newUser })

    } catch (error) {
        console.log('signup Error');


        if(error.code == 11000){
            
            if(error.keyPattern.email == 1 ){
                return res.status(200).json({ success: false, message: 'Email  Exist' });
            }
            
            if(error.keyPattern.phone == 1 ){
                return res.status(200).json({ success: false, message: 'Phone Number  Exist'});
            }
        }
        
        res.status(200).json({success: false, message: 'Error In Registration'})
    }
}

//Controller for Existing User Login
const userLogin = async (req,res) =>{
    try {

        const { email, password } = req.body;

        //check email is exist on database
        const checkEmail = await User.findOne({ email });
        const userData = checkEmail;
        if(!checkEmail){
            console.log('email not valid');
            
            return res.status(201).json({
                success: false,
                message: 'user is not exists! please check Email'
            })
        }

        //check password is exist on database
        const hashPassword = await bcrypt.compare(password, checkEmail.password)
        if(!hashPassword){
            return res.status(201).json({
                success: false,
                message: 'Invalid Password! please check password'
            })
        }

        console.log('user is exist');


        //Add jwt Token
        const AuthToken = jwt.sign({ 
            id: userData._id , email: userData.email , name: userData.userName },
            "SECRET_KEY",
            { expiresIn:'2h' })
        
        //if Success send data with cookie
        res.cookie('AuthToken', AuthToken, {httpOnly: true, secure: false}).json({
            success: true,
            message: 'Logged in successfully !',
            user:{
                id: userData._id,
                email: userData.email,
                name: userData.userName,
                role: userData.role
            }
        })


    } catch (error) {
        console.log('error in catch login api');
        res.status(201).json({
            success: false,
            message: 'Something Wrong Try Again'
        })
        
    }
}

//Controller for Existing User Logout
const userLogout = async (req, res) =>{
    res.clearCookie('AuthToken').json({
        success: true,
        message: "Logged Out SuccessFully"
    })

    console.log('finished');
}

//Controller for User is Authenticated Middleware
const userAuthMiddleware = (req,res,next) =>{
    console.log('check auth middleware called');
    
    const authToken = req.cookies.AuthToken;

    //not token
    if(!authToken) {
        console.log('auth token is not');
        return res.status(401).json({
            success: false, 
            message: "User is not Login"
        })
    }

    //token valid
    try {
        const tokenDecode = jwt.verify(authToken,"SECRET_KEY")
        req.user = tokenDecode
        console.log(tokenDecode);
        next()

        
    } catch (error) {
        console.log(error);
        
        console.log('error in token decode');
        return res.status(401).json({
            success: false,
            message: "User is not Login"
        })
        
    }
}

module.exports = { userRegister, userLogin, userLogout, userAuthMiddleware };