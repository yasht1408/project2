const mongoose = require('mongoose')
const validator = require('validator')

const Student = mongoose.model('Student',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        trim: true,
        required: true,
        validate(value){
            if(value < 0){
                throw new Error('Age Cannot be less than 0')
            }
        }
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Please enter a valid Email')
            }
        }
    },
    task: {
        type: String,
        required: true,
        lowercase: true,
        minlength : 6
    }
})

module.exports = Student 