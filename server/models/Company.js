const mongoose = require('../database/mongodb');

const Company = new mongoose.Schema({
    name: {type: String, default: "", required: true},
    responsible: {
        first: {type: String, default: "", required: true},
        last: {type: String, default: "", required: true}
    }
})

module.exports = mongoose.model('company', Company);