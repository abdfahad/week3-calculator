const express = require('express');
const calculate = require('../calculator').calculator;

const calculator = express.Router();

calculator.route('/')
    .get((req,res)=>{
        let result;
        try{
            result = calculate(req.body);
            if(result){
                res.send(`Result: ${result}`);
            }else{
                throw new Error("Something went wrong. Check the input string and try again");
            }
        }catch(err){
            res.send(`ERROR: ${err.message}`);
        }
    })


module.exports = { calculator }