const {Facultydetails} = require('./schema');


module.exports.insertfaculty =async(req,res)=>{
    const newFacultyRequest = new Facultydetails({
        fid: req.body.fid,
        fname: req.body.fname,
        mail: req.body.mail,
        password: req.body.password,
        dept: req.body.dept,
        mno: req.body.mno,
        gender: req.body.gender,
        age: req.body.age,
        joiningDate: new Date(req.body['joiningDate']),
    })
    const faculty = await Facultydetails.findOne({fid:req.body.fid});
    if(faculty)
        return res.send({msg:"faaculty exist in db"});
    const savedfaculty = await newFacultyRequest.save();
    res.send(savedfaculty);
}

module.exports.getallfaculty = async (req,res) => {
    const Faculty = await Facultydetails.find({});
    if(Faculty.length != 0)
        res.send(Faculty)
    else 
        res.send({msg: "no faculty found!"})
}

module.exports.getonefaculty = async (req,res) => {
    console.log("recieved")
    const Faculty = await Facultydetails.findOne({fid:req.params.fid});
    if(Faculty)
        res.send(Faculty)
    else
        res.send({msg:"faculty not found!"});
}


module.exports.updatefaculty = async(req,res)=>{
    const Faculty = await Facultydetails.findOneAndUpdate({fid:req.params.fid},{mno:req.body.mno});
        if(Faculty)
          res.send("updated successfully");
        else
         res.send("not found");
} 

module.exports.deletefaculty = async(req,res)=>{
    const Faculty = await Facultydetails.findOneAndDelete({fid:req.params.fid});
        if(Faculty)
          res.send("deleted");
        else
         res.send("not found");
} 