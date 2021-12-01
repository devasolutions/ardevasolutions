const mongoose = require('../database/mongodb');

const Ind_Worker = new mongoose.Schema({
    name: {
        first: {type: String, default: "", required: true},
        last: {type: String, default: "", required: true}
    }
});

module.exports = mongoose.model('ind_worker', Ind_Worker);