const Patients = require("../Model/patient");
const check_patients = require("../Model/checkedPatients");

const submitForm = async (req, res) => {
  try {
    const { first_name, last_name, phone, email, message } = req.body;
    const patients = new Patients({
      first_name,
      last_name,
      phone,
      email,
      message,
    });
    await patients.save();

    return res.send({ status: 200, Message: "Data Saved", data: patients });
  } catch (err) {
    return res.send({ status: 400, Message: err.message });
  }
};

const allPatients = async (req, res) => {
  let patients = await Patients.find();
  
    res.send({ status: 200, Message: "All Patients", data: patients });

};
const checkPatients = async (req, res) => {
  let getcheckPatient = await check_patients.find();
  
    res.send({ status: 200, Message: "All Patients", data: getcheckPatient });

};

const movepatients = async (req, res) => {
  try {
    const { id } = req.params;
    const getPatients = await Patients.findById(id);

    if (!getPatients) {
      return res.send({ status: 400, Message: "Data donot found" });
    }

    const postPatients = new check_patients(getPatients.toObject());

    await postPatients.save();
    await Patients.findByIdAndRemove(id);

    return res.send({status:200, Message:"Data Moved Sucessfully"})
  } catch (err) {
    console.log("err", err);

    return res.send({status:500, Message:"Server Error"})
  }
};



module.exports = {
  submitForm,
  allPatients,
  movepatients, 
  checkPatients
};
