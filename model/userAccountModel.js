const mongoose = require('mongoose')

const userAccountSchema = mongoose.Schema({
    account_name: {
        type: String,
        required: [true, 'Account name is required']
    },
    account_type: {
        type: String,
        required: [true, 'Account type is require']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('userAccounts', userAccountSchema);