const mongoose = require('mongoose');

module.exports.connectdb = ()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/facultyleave')
}