const mongoose = require('mongoose');

const LeaveRequestSchema = new mongoose.Schema({
  fid: { type: String, required: true },
  name: { type: String, required: true },
  mail: { type: String, required: true },
  dept: { type: String, required: true },
  
});

module.exports.LeaveRequest = mongoose.model('LeaveRequest', LeaveRequestSchema);


