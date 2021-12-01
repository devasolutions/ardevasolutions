/**********************************************************************
 * DEVASOLUTIONS/SERVER: server.js:
 * Description:
 * 
 * Server developed for the Devasolutions Websites made by 4tydev.
 * This server is used with following technologies and libraries:
 * 
 * Node.js, MongoDB, Mongoose, Express, Hogan.js (More to be included).
 * 
 **********************************************************************/

//Inclusion of necessary libraries
const express = require('express'); //ExpressJS used for necessary routing
const path = require('path'); //Path required to point to distinct directories
const cors = require('cors');

//Importing Routes
const home = require("./routes/home");
const developers = require("./routes/developers");
const solutions = require("./routes/solutions");
const contact = require("./routes/contact");
const admin = require("./routes/admin");
const ind_workers = require("./routes/ind_workers");
const api = require('./routes/api');

const app = express(); //Declaration of app to execute routing

//Including distinctive settings
app.use(cors());
app.use(express.json()); //Parse JSON files
app.use(express.urlencoded({extended: false})); //Only include JSON Files
app.use(express.static(path.join(__dirname, '../client/public'))) //Set the path for static files

//Include the view engine inside the express app for successful templating
app.set('views', path.join(__dirname, "../client/views"));
app.set('view engine', 'hjs');
app.set('trust proxy', '167.172.158.50');

//Routes
app.use('/', home);
app.use('/developers', developers);
app.use('/solutions', solutions);
app.use('/contact', contact);
app.use('/admin', admin);
app.use('/ind_workers',ind_workers);
app.use('/api', api);


//Run server on Cloud Server
app.listen(80, '167.172.158.50', () => {console.log("Listening on 167.172.158.50:80")});

