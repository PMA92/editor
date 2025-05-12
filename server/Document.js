const mongoose = require('mongoose')

const DocumentSchema = new mongoose.Schema({
    _id: String,
    data: {
        type: Object, // Using Object to store JSON
        default: { ops: [{ insert: '\n' }] }
    }
})

module.exports = mongoose.model('Document', DocumentSchema)
