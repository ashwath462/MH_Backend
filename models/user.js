const mongoose = require('mongoose')
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Enter your name"],
        trim: true
    },
    // number: {
    //     type: Number,
    //     unique: true,
    //     required: [true,"Please enter a valid number"],
    //     minlength:[10,'Number must be 10 digits'],
    //     maxlength:[10,'Number must be 10 digits']
    // },
    email: {
        type: String,
        required: [true,"please enter a email"],
        // unique: false,
        // validate: [isEmail,"Please enter a valid mail"]
    },
    subject: {
        type: String,
        required: [true, "Please enter a valid password"],
    },
    comments:{
        type: String,
        trim: true
    },
    date: {
        type:  Date
    }
});

// userSchema.post('save', function(doc, next){
//     console.log(`new user was created & saved`, doc)
//     next();
// });

const User = mongoose.model('user', userSchema);
module.exports = User;