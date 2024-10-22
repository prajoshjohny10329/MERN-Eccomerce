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
        const checkEmail = await User.find({ email });
        const userData = checkEmail;
        if(!checkEmail){
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

        //Add jwt Token
        const token = jwt.sign({ id: userData._id , email: userData.email , name: userData.userName} , "SECRET_KEY", {expiresIn:'60mins'})


    } catch (error) {
        
    }
}

module.exports = { userRegister , userLogin };