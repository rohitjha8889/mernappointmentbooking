const express = require('express')
const router = express.Router()


const{submitForm,allPatients, movepatients, checkPatients} = require('../Controller/patients')

router.post("/submit", submitForm);
router.get("/allPatients",allPatients)
router.post("/patient/:id",movepatients )
router.get("/checkedpatients",checkPatients )
module.exports = router