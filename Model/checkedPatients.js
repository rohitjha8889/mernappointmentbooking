const mongoose = require('../Database/connect');

const check_patients = mongoose.model('checkPatients',{
    first_name:String,
    last_name:String,
    phone:Number,
    email:String,
    message:String
})

module.exports = check_patients;
