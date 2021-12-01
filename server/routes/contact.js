const {Router} = require('express');
const mongoose = require('../database/mongodb');
const gmail_send = require('gmail-send');
const router = Router();
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

router.get('/', (req,res) => {
    res.render('contact', {});
})

router.post('/send-mail-pyme', (req,res) => {
    let send = gmail_send({
        user: 'devasolutionsdotnet@gmail.com',
        pass: process.env.GMAIL_PASS,
        to: 'devasolutionsdotnet@gmail.com',
        subject: 'Solicitud de ' + req.body.nombre,
        from: req.body.email
    });

    send({
        text: req.body.description,
    }, (error, reault, fullResult) => {
        if (error){
            console.log(error);
        }
        console.log(result);
    });

    res.render('home', {});
})

module.exports = router;