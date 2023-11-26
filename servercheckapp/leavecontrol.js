const {LeaveRequest} = require('./schema');


module.exports.insertfaculty =async(req,res)=>{
    const newLeaveRequest = new LeaveRequest({
        fid: req.body.fid,
        name: req.body.name,
        mail: req.body.mail,
        dept: req.body.dept,
        
    })
    const fac = await LeaveRequest.findOne({fid:req.body.fid});
    if(fac)
        return res.send({msg:"Faculty exist in db"});
    const savedfac = await newLeaveRequest.save();
    res.send(savedfac);
}



module.exports.getallfaculty = async (req,res) => {
    const Faculty = await LeaveRequest.find({});
    if(Faculty.length != 0)
        res.send(Faculty)
    else 
        res.send({msg: "no books found!"})
}

module.exports.getfaculty = async (req,res) => {
    console.log("recieved")
    const Faculty = await LeaveRequest.findOne({fid:req.params.fid});
    if(Faculty)
        res.send(Faculty)
    else
        res.send({msg:"faculty not found!"});
}

module.exports.updatefaculty = async(req,res)=>{
    const Faculty = await LeaveRequest.findOneAndUpdate({fid:req.params.fid},{mno:req.params.mno});
        if(Faculty)
          res.send("updated successfully");
        else
         res.send("not found");
} 

module.exports.deletefaculty = async(req,res)=>{
    const Faculty = await LeaveRequest.findOneAndDelete({fid:req.params.fid});
        if(Faculty)
          res.send("deleted");
        else
         res.send("not found");
} 

