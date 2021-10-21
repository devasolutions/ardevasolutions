const {Router} = require('express');
const router = Router();
const Developer = require('../models/Developer');
const Costumer = require('../models/Costumer');
const Solution = require('../models/Solution');
const Technology = require('../models/Technology');

router.get('/developer', (req,res) => {
    Developer.find({}, (err, developers) => {
        if(err){
            res.send({err});
            return;
        }

        res.send(developers);
    })
})

router.post('/developer', (req,res) => {
    Developer.create(req.body, (err, developer) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + developer);

    })
});

router.get('/costumer', (req,res) => {
    Costumer.find({}, (err, costumers) => {
        if(err){
            res.send({err});
            return;
        }

        res.send(costumers);
    });
})

router.post('/costumer', (req,res) => {
    Costumer.create(req.body, (err, costumer) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + costumer);

    });
});

router.get('/solution', (req,res) => {
    Solution.find({}, (err, solutions) => {
        if(err){
            res.send({err});
            return;
        }

        res.send(solutions);
    })
});

router.post('/solution', (req,res) => {
    Solution.create(req.body, (err, solution) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + solution);

    });
});

router.get('/technology', (req,res) => {
    Technology.find({}, (err, technologies) => {
        if(err){
            res.send({err});
            return;
        }
        
        res.send(technologies);
    })
})

router.post('/technology', (req,res) => {
    Technology.create(req.body, (err, technology) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + technology);

    });
});

module.exports = router;