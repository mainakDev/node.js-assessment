const mongoose = require('mongoose')

const agentSchema = mongoose.Schema({
    agent: {
        type: String,
        unique: true
    }
}, 
{
    unique: true
},
{
    timestamps: true
})

module.exports = mongoose.model('agents', agentSchema);