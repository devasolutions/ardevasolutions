const mongoose = require('../database/mongodb');

const Solution = new mongoose.Schema({
    name: {type: String, default: "", required: true},
    technologies: [{type: mongoose.Types.ObjectId, default: null , required: false, ref: 'Technology'}]
})

module.exports = mongoose.model('solution', Solution);
