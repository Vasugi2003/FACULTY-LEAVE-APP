const express = require('express');
const bodyParser = require('body-parser');
const LeaveRequest = require('./leaveRequest');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get all leave requests
app.get('/leaverequests', (req, res) => {
  LeaveRequest.find({}, (err, leaveRequests) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(leaveRequests);
    }
  });
});

// Get a single leave request by ID
app.get('/leaverequests/:id', (req, res) => {
  LeaveRequest.findById(req.params.id, (err, leaveRequest) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(leaveRequest);
    }
  });
});

// Create a new leave request
app.post('/leaverequests', (req, res) => {
  const leaveRequest = new LeaveRequest(req.body);

  leaveRequest.save((err, leaveRequest) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(leaveRequest);
    }
  });
});

// Update a leave request by ID
app.put('/leaverequests/:id', (req, res) => {
  LeaveRequest.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, leaveRequest) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(leaveRequest);
    }
  });
});

// Delete a leave request by ID
app.delete('/leaverequests/:id', (req, res) => {
  LeaveRequest.findByIdAndDelete(req.params.id, (err, leaveRequest) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(leaveRequest);
      }
    });
  });
