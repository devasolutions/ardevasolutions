const mongoose = require('../database/mongodb');

const Technology = new mongoose.Schema({
    name: {type: String, default: "", required: true},
    developer: {type: String, default: "", required: true},
    version: {type: String, default: "V0.0.0", required: true},
    link: {type: String, default: "", required: true},
    description: {type: String, default: "", required: true}
})

module.exports = mongoose.model("technology",Technology);