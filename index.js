const express = require('express')
const app = express();
const patient = require('./View/patients')
const cors = require('cors')



// Deploymen
const PORT = process.env.PORT || 5000;


// Deploymen


app.use(cors())
app.use(express.json())
app.use("/", patient)

// ----------------Deployment--------------------------------

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}



// ----------------Deployment--------------------------------


app.get("/",(req,res)=>{
    
    res.send("Hello This is ")
})


app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`)
})

