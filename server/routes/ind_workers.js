const {Router} = require('express');
const Ind_Worker = require('../models/Ind_Worker');
const router = Router();

const testWorker = {
    name:{
        first: "Test 1",
        last: "Test 2"
    }
    
}

router.get('/testWorker', (req,res) => {
    Ind_Worker.create(testWorker, (err,ind_worker) => {
        if(err){
            res.send(err);
        }

        res.send(testWorker);
    })
})

module.exports = router;
