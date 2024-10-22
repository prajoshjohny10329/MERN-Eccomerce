const bcrypt = require('bcryptjs');
const User = require('../../models/User')

const register =  async (req,res) =>{
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

module.exports = { register };