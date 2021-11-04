const {Router} = require('express');
const Technology = require('../models/Technology');

const router = Router();

router.get('/', (req,res) => {
    Technology.find(null, (err,technologies) => {
        if(err){
            res.send(err);
        }
        let split_tec = new Array();
        let aux = [];
        for(let i = 0; i < technologies.length; i++){
	    aux.push(technologies[i]);
            if((i + 1) % 3 === 0){
                split_tec.push(aux);
                aux = [];
            }
        }
	if(aux.length !== 0){
	   
	    split_tec.push(aux);
	}
        res.render('solutions', {split_tec});
        //res.send({split_tec});
    })
});

module.exports = router;
