const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('./db');

let Business = new Schema({
    person_name: String,
    business_name: String,
    nic_no: Number

},{
   collection:'business'
})

module.exports = mongoose.model('Business',Business)
