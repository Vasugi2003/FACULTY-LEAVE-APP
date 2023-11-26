const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveRequestSchema = new Schema({
  facultyId: { type: String, required: true },
  name: { type: String, required: true },
  mailId: { type: String, required: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  mobileNo: { type: String, required: true },
  gender: { type: String, required: true },
  leaveType: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true }
});

module.exports = mongoose.model('LeaveRequest', LeaveRequestSchema);
