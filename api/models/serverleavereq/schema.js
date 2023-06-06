const mongoose = require('mongoose');

const LeaveRequestSchema = new mongoose.Schema({
  fid: {type: String, required: true},
  name: { type: String, required: true },
  mail: { type: String, required: true },
  dept: { type: String, required: true },
  mno: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },

  leave: { type: String, required: true },
  reason: { type: String, required: true },
  status: {
    type: String,
    enum: ['Approved', 'Rejected', 'Pending'],
    default: 'Pending',
  },

});

module.exports.LeaveRequest = mongoose.model('LeaveRequest', LeaveRequestSchema);


