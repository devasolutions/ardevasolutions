const {Router} = require('express');
const router = Router();
const Developer = require('../models/Developer');

router.get('/', (req,res) => {
    Developer.find({}, (err, developers) => {
        if(err){
            res.send({err});
            return;
        }

        res.render("developers", {developers});
    })
})

module.exports = router;