const {connectdb} = require('./connect');
const {Facultydetails} = require('./schema');
const {Admindetails} = require('./schema');
const faculty_controller = require('./facultycontroller');
const admin_controller = require('./admincontroller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

connectdb()
.then(()=>{
    console.log("Database connected successfullyy!!!");
})
.catch((err)=>{
    console.log(err)
});


// faculty
app.post('/api/facultydetails',faculty_controller.insertfaculty);
app.get('/api/facultydetails',faculty_controller.getallfaculty);
app.get('/api/facultydetails/:fid',faculty_controller.getonefaculty);
app.put('/api/facultydetails/:fid',faculty_controller.updatefaculty);
app.delete('/api/facultydetails/:fid',faculty_controller.deletefaculty);







// admin
app.post('/api/admindetails',admin_controller.insertadmin);
app.get('/api/admindetails',admin_controller.getalladmin);
app.put('/api/admindetails/:aid',admin_controller.updateadmin);
app.delete('/api/admindetails/:aid',admin_controller.deleteadmin);






app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await Facultydetails.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



const port = 5000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})