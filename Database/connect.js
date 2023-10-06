const mongoose = require('mongoose');

const DB = 'mongodb+srv://rohitjharj8888:Bha%40800255@cluster0.xdquwxf.mongodb.net/appointment?retryWrites=true&w=majority'

// mongoose.connect('mongodb://127.0.0.1:27017/appointment')

mongoose.connect(DB)
  .then(() => console.log('Connected!'))
  .catch((err)=> console.log('err',err));

  module.exports = mongoose;