// // Import required packages
// const express = require('express');
// const router = express.Router();
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// // Configure MongoDB connection
// const mongoURI = 'mongodb://localhost:27017/faculty-attendance';
// const mongoClient = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// // Define route handler for approving leave requests
// router.put('/approve-leave/:id', async (req, res) => {
//   const leaveId = req.params.id;
//   const facultyId = req.body.facultyId;

//   try {
//     // Connect to MongoDB
//     await mongoClient.connect();

//     // Get the leave request from MongoDB
//     const leaveCollection = mongoClient.db().collection('leaveRequests');
//     const leave = await leaveCollection.findOne({ _id: new mongodb.ObjectID(leaveId) });

//     if (!leave) {
//       return res.status(404).json({ message: 'Leave request not found' });
//     }

//     // Update the leave request status in MongoDB
//     const updatedLeave = {
//       ...leave,
//       status: 'approved',
//       approvedBy: 'admin',
//       approvedAt: new Date(),
//     };
//     await leaveCollection.updateOne({ _id: new mongodb.ObjectID(leaveId) }, { $set: updatedLeave });

//     // Get the faculty details from MongoDB
//     const facultyCollection = mongoClient.db().collection('faculties');
//     const faculty = await facultyCollection.findOne({ _id: new mongodb.ObjectID(facultyId) });

//     if (!faculty) {
//       return res.status(404).json({ message: 'Faculty not found' });
//     }

//     // Send approval message to faculty
//     const message = `Your leave request from ${leave.startDate} to ${leave.endDate} has been approved by the admin.`;
//     // Code to send the message using a messaging service or email

//     return res.status(200).json({ message: 'Leave request approved and message sent to faculty' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   } finally {
//     // Close MongoDB connection
//     await mongoClient.close();
//   }
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Set up database connection
mongoose.connect('mongodb://127.0.0.1:27017/attendance', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(error => console.log(error));

// Define schema for attendance records
const attendanceSchema = new mongoose.Schema({
    fid: { type: String, required: true },
    name: { type: String, required: true },
    mail: { type: String, required: true },
    dept: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  
    leave: { type: String, required: true },
    reason: { type: String, required: true },
    status: { type: String, default: 'Pending' }
});

// Define attendance model
const Attendance = mongoose.model('Attendance', attendanceSchema);

// Define routes
app.get('/api/leaverequests', async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.json(attendance);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/api/leaverequests:fid', async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(req.params.fid, req.body, { new: true });
    res.json(attendance);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
const port = 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
