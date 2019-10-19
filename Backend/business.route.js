const mongoose = require('mongoose');
const businessRoutes = express.Router();

let Business = require('./bussiness.model');

//store data
businessRoutes.route('/add').post(function(req,res){
    let bussiness = new Business(req.body);
    bussiness.save()
    .then(bussiness=>{
        res.status(200).json("Bussiness is added succefully");
    }) 
    .catch(err=>{
        res.status(400).send("Unable to save to database");
    })
})

//get data
businessRoutes.route('/').get(function(req,res){
    Business.find(function(err,bussiness){
        if(err)
         console.log(err);
        else{
            res.json(bussiness);
        }
    });
});

//edit
businessRoutes.route('/edit/:id').get(function(req,res){
    let id= req.params.id;
    Business.findById(id,function(err,bussiness){
        res.json(bussiness);
    })
});

//update
businessRoutes.route('/update/:id').post(function(req,res){
    Business.findById(req.params.id,function(err,bussiness){
        if(!bussiness)
         res.status(404).send("data is insetered");
        else{
            bussiness.person_name = req.body.person_name;
            bussiness.business_name = req.body.business_name;
            bussiness.nic_no = req.body.nic_no;

            bussiness.save().then(bussiness=>{
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
    Business.findByIdAndRemove({id:req.params.id},function(err,bussiness){
        if(err)res.json(err);
        else res.json("Successfully deleted");
    });
});

module.exports = businessRoutes; 