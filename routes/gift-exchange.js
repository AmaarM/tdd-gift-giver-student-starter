const express = require('express');
const router = express.Router();
const GiftExchange = require('../models/gift-exchange')
const errors = require('../utils/errors')

router.route("/pairs").post((req,res, next) => {
    try{
        if(Array.isArray(req.body.names)){
            console.log(req.body);
            const pairs = GiftExchange.pairs(req.body.names);
            return (res.status(200).json(pairs));
        }
        else{
            throw new errors.BadRequestError();
        }
    }
    catch(err) {
        next(err);
    }
})

router.route("/traditional").post((req,res, next) => {
    try{
        if(Array.isArray(req.body.names)){
            const pairs = GiftExchange.traditional(req.body.names);
            return (res.status(200).json(pairs));
        }
        else{
            throw new errors.BadRequestError();
        }
    }
    catch(err) {
        next(err);
    }
})


module.exports = router;