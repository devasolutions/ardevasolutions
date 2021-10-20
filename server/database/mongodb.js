const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const dataBaseString = "mongodb+srv://admin:" + process.env.MONGODB_PASS + "@devasolutionsweb.zn3pl.mongodb.net/DevaSolutions?retryWrites=true&w=majority";
if(mongoose.connection.readyState === 0){
    
    mongoose.connect(dataBaseString, mongoOptions);
}

module.exports = mongoose;