const mongoose = require('../database/mongodb');



const Developer = new mongoose.Schema({
    name: {
        first: {type: String, default: "", required: true},
        last: {type: String, default:"", required: true}
    },
    skills: {type: [String], default: [], required: false},
    email: {type: String, default: "", required: true},
    costumers: [{type: mongoose.Types.ObjectId, default: null, required: false, ref: 'Costumer'}],
    description: {type: String, default: "", required: false}
})

module.exports = mongoose.model('developer', Developer);