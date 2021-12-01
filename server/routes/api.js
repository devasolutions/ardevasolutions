const {Router} = require('express');
const router = Router();
const Developer = require('../models/Developer');
const Costumer = require('../models/Costumer');
const Solution = require('../models/Solution');
const Technology = require('../models/Technology');

/*** RUTAS API DEVELOPER ***/

//GET
router.get('/developer', (req,res) => {
    Developer.find({}, (err, developers) => {
        if(err){
            res.send({err});
            return;
        }

        res.send(developers);
    })
})

//POST
router.post('/developer', (req,res) => {
    Developer.create(req.body, (err, developer) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + developer);

    })
});

//DELETE
router.delete('/developer/:id', (req, res) => {
    Developer.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.send({err});
        }

        else res.send("Successfully deleted: " + req.params.id);
    })
});

/*** RUTAS API COSTUMER ***/

//GET
router.get('/costumer', (req,res) => {
    Costumer.find({}, (err, costumers) => {
        if(err){
            res.send({err});
            return;
        }

        res.send(costumers);
    });
})


//POST
router.post('/costumer', (req,res) => {
    Costumer.create(req.body, (err, costumer) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + costumer);

    });
});

//DELETE
router.delete('/costumer/:id', (req, res) => {
    Costumer.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.send({err});
        }

        else res.send("Successfully deleted: " + req.params.id);
    })
});

/*** ROUTAS API SOLUTION ***/

//GET
router.get('/solution', (req,res) => {
    Solution.find({}, (err, solutions) => {
        if(err){
            res.send({err});
            return;
        }

        res.send(solutions);
    })
});

//POST
router.post('/solution', (req,res) => {
    Solution.create(req.body, (err, solution) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + solution);

    });
});

//DELETE
router.delete('/solution/:id', (req, res) => {
    Solution.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.send({err});
        }

        else res.send("Successfully deleted: " + req.params.id);
    })
});

/*** RUTAS API TECHNOLOGY ***/

//GET
router.get('/technology', (req,res) => {
    Technology.find({}, (err, technologies) => {
        if(err){
            res.send({err});
            return;
        }
        
        res.send(technologies);
    })
})

//POST
router.post('/technology', (req,res) => {
    Technology.create(req.body, (err, technology) => {
        if(err){
            res.send({err});
            return;
        }

        res.status(200).send("Succesfully created:" + technology);

    });
});

//DELETE
router.delete('/technology/:id', (req, res) => {
    Technology.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            res.send({err});
        }

        else res.send("Successfully deleted: " + req.params.id);
    })
});

module.exports = router;