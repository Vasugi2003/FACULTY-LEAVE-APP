const mongoose = require('mongoose');

const LeaveRequestSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  password: { type: String, required: true },
  
  
});

module.exports.LeaveRequest = mongoose.model('LeaveRequest', LeaveRequestSchema);


