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
        // required: true,
        required: function(){
            return this.userFrom === 'app';
       }
    },
    phone : {
        type : String,
        required: function(){
             return this.userFrom === 'app';
        },
        // required: true,
        unique: true
    },
    role : {
        type : String,
        default: 'user'
    },
    picture : {
        type : String
    },
    userFrom : {
        type : String,
        default: 'app'
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