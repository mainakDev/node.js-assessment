const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    dob: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema);