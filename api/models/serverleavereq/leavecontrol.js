const {LeaveRequest} = require('./schema');


module.exports.insertfaculty =async(req,res)=>{
    const newLeaveRequest = new LeaveRequest({
        fid: req.body.fid,
        name: req.body.name,
        mail: req.body.mail,
        dept: req.body.dept,
        mno: req.body.mno,
        // gender: req.body.gender,
        startDate: new Date(req.body['startDate']),
        endDate: new Date(req.body['endDate']),
        leave: req.body['leave'],       
        reason: req.body.reason,
        status:req.body.status
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
    const Faculty = await LeaveRequest.findOneAndUpdate({fid:req.params.fid},{mno:req.body.mno});
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

module.exports.countfaculty = async(req,res)=>{
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
  }