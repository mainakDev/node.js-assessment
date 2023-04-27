const mongoose = require('mongoose')

const policySchema = mongoose.Schema({
    policy_mode: {
        type: String,
        required: [true, 'Policy mode is required']
    },
    policy_number: {
        type: String,
        required: [true, 'Policy Number is require']
    },
    policy_type: {
        type: String,
        required: [true, 'Policy Type is require']
    },
    policy_start_date: {
        type: String,
        required: [true, 'Policy Start Date is require']
    },
    policy_end_date: {
        type: String,
        required: [true, 'Policy End data type is require']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('policies', policySchema);