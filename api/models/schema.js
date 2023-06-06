const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    fid: {type:String, 
        required: true},
    fname: {type:String, required: true},
    mail: {type: String, required: true},
    password: {type: String, required: true},
    dept: {type: String, requied: true},
    mno: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: String, required: true},
    joiningDate: {type: Date, required:true}
});


const Admin = new mongoose.Schema({
    aid: {type:String, required:true},
    aname:{type: String, requied:true},
    mail:{type: String, required: true},
    password: {type: String, required:true},
    mno:{type: String, requied:true},
    gender: {type:String, requied:true},
    age: {type: String,requied:true},

    // FacultyID: { type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Faculty' },



});

module.exports.Facultydetails = mongoose.model('Facultydetails', FacultySchema);
module.exports.Admindetails = mongoose.model('Admindetails',Admin);

