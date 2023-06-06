const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {LeaveRequest} = require('./schema');

app.get('/api/leaverequests/:fid', async (req, res) => {
  try {
    const { fid } = req.params;
    const leaveRequest = await LeaveRequest.findById(fid);

    if (!leaveRequest) {
      return res.status(404).json({ error: 'Leave request not found' });
    }

    const startDate = new Date(leaveRequest.startDate);
    const endDate = new Date(leaveRequest.endDate);
    const durationInMilliseconds = endDate.getTime() - startDate.getTime();
    const durationInDays = Math.ceil(durationInMilliseconds / (1000 * 60 * 60 * 24));

    res.json({ durationInDays });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Other routes and server setup...

const PORT = 8080;

mongoose
  .connect('mongodb://127.0.0.1:27017/attendance', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
