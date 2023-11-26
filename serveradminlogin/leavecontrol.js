const {LeaveRequest} = require('./schema');


module.exports.insertfaculty =async(req,res)=>{
    const newLeaveRequest = new LeaveRequest({
       
        name: req.body.name,
        password:req.body.password
        
        
    })
    const fac = await LeaveRequest.findOne({name:req.body.name});
    if(fac)
        return res.send({msg:"Admin exist in db"});
    const savedfac = await newLeaveRequest.save();
    res.send(savedfac);
}



module.exports.getallfaculty = async (req,res) => {
    const Faculty = await LeaveRequest.find({});
    if(Faculty.length != 0)
        res.send(Faculty)
    else 
        res.send({msg: "no admin found!"})
}

module.exports.getfaculty = async (req,res) => {
    console.log("recieved")
    const Admin = await LeaveRequest.findOne({name:req.params.name});
    if(Admin)
        res.send(Admin)
    else
        res.send({msg:"admin not found!"});
}

module.exports.updatefaculty = async(req,res)=>{
    const Admin = await LeaveRequest.findOneAndUpdate({name:req.params.name},{password:req.params.password});
        if(Admin)
          res.send("updated successfully");
        else
         res.send("not found");
} 

module.exports.deletefaculty = async(req,res)=>{
    const Admin = await LeaveRequest.findOneAndDelete({name:req.params.name});
        if(Admin)
          res.send("deleted");
        else
         res.send("not found");
} 

