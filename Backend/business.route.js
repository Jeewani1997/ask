const mongoose = require('mongoose');
const express = require('express');
const app = express();
const businessRoutes = express.Router();

let Business = require('./business.model');

//store data
businessRoutes.route('/add').post(function(req,res){
    
    let business = new Business(req.body);
    business.save()
    .then(business=>{
        res.status(200).json("Bussiness is added succefully");
    }) 
    .catch(err=>{
        res.status(400).send("Unable to save to database");
    })
})

//get data
businessRoutes.route('/').get(function(req,res){
    
    Business.find(function(err,business){
        if(err)
         console.log(err);
        else{
            res.json(business);
        }
    });
});

//edit
businessRoutes.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    Business.findById(id,function(err,business){
        res.json(business);
    })
});

//update
businessRoutes.route('/update/:id').post(function(req,res){
    Business.findById(req.params.id,function(err,business){
        if(!business)
         res.status(404).send("data is insetered");
        else{
            business.person_name = req.body.person_name;
            business.business_name = req.body.business_name;
            business.nic_no = req.body.nic_no;

            business.save().then(business=>{
                res.json("Update Completed");
            })
            .catch(err=>{
                res.status(400).send("unable to update database");
            });
        }
    });
});

//delete
businessRoutes.route('/delete/:id').get(function(req,res){
    Business.findByIdAndRemove({id:req.params.id},function(err,business){
        if(err)res.json(err);
        else res.json("Successfully deleted");
    });
});

module.exports = businessRoutes; 