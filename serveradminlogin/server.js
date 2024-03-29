
const {connectdb} = require('./connect');
const {LeaveRequest} = require('./schema');
const leave_controller = require('./leavecontrol');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/leaverequests',leave_controller.insertfaculty);
app.get('/api/leaverequests',leave_controller.getallfaculty);
app.get('/api/leaverequests/:name',leave_controller.getfaculty);
app.put('/api/leaverequests/:name',leave_controller.updatefaculty);
app.delete('/api/leaverequests/:name',leave_controller.deletefaculty);


const port = 8082;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})

