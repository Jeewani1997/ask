const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./db');

mongoose.Promise = global.Promise;
mongoose.connect(config.db,{useNewUrlParser:true})
 .then(()=>console.log("Succesfully Connected"))
 .catch((err)=>console.log(err));

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT,function(){
    console.log("Server is running on port",PORT);
})