const mongoose = require('mongoose')

/*
let friendSchema = new mongoose.Schema({
    name: String,
    age: Number,
    country: String  
})
*/

let friendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [25, 'Too young'],
        max: 50
    },
    country: {
        type: String,
        enum: ['Spain', 'Slovenia']
    }  
})

let Friend = mongoose.model('friend', friendSchema)

module.exports = Friend



