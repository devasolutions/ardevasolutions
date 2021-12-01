const mongoose = require('../database/mongodb');

const Costumer = new mongoose.Schema({
    name: {type: String, default: "", required: true},
    email: {type: String, default: "", required: true},
    solutions: [{type: mongoose.Types.ObjectId, default: null, required: false, ref: "Solution"}],
    work_area: {type: String, default: "", required: true},
    id_ind_worker: {type: mongoose.Types.ObjectId, default: null, required: false, ref: "Ind_worker"},
    id_company: {type: mongoose.Types.ObjectId, default: null, required: false, ref: "Company"}
})

module.exports = mongoose.model("costumer", Costumer);