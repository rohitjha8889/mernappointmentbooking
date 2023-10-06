const mongoose = require('../Database/connect');

const Patients = mongoose.model('patients',{
    first_name:String,
    last_name:String,
    phone:Number,
    email:String,
    message:String
})

module.exports = Patients



// {
//     "first_name":"Rohit",
//     "last_name":"Jha",
//     "phone":9508299279,
//     "email":"rohitjha.rj8888@gmail.com",
//     "message":"I some issue"
// }