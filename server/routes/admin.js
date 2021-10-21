const {Router} = require('express');
const Technology = require('../models/Technology');

const router = Router();

router.get('/', (req, res) => {
    res.render('admin', null);
});

router.post('/addTechnology', (req, res) => {
    Technology.create(req.body, (err, technology) => {
        if(err){
            res.send(err);
            return;
        }

        res.send(technology);
    })
});

module.exports = router;