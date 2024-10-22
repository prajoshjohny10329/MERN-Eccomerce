const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    password : {
        type : String,
        required: true,
    },
    phone : {
        type : String,
        required: true,
        unique: true
    },
    role : {
        type : String,
        default: 'user'
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date,
        default: Date.now 
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User;