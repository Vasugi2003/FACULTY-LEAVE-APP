const {Admindetails} = require('./schema');


module.exports.insertadmin =async(req,res)=>{
    const newAdminRequest = new Admindetails({
        aid: req.body.aid,
        aname: req.body.aname,
        mail: req.body.mail,
        password: req.body.password,
        mno: req.body.mno,
        gender: req.body.gender,
        age: req.body.age
    })
    const admin = await Admindetails.findOne({aid:req.body.aid});
    if(admin)
        return res.send({msg:"Admin exist in db"});
    const savedadmin = await newAdminRequest.save();
    res.send(savedadmin);
}

module.exports.getalladmin = async (req,res) => {
    const Admin = await Admindetails.find({});
    if(Admin.length != 0)
        res.send(Admin)
    else 
        res.send({msg: "no admin found!"})
}




module.exports.updateadmin = async(req,res)=>{
    const Admin = await Admindetails.findOneAndUpdate({aid:req.params.aid},{mno:req.body.mno});
        if(Admin)
          res.send("updated successfully");
        else
         res.send("not found");
} 

module.exports.deleteadmin = async(req,res)=>{
    const Admin = await Admindetails.findOneAndDelete({aid:req.params.aid});
        if(Admin)
          res.send("deleted");
        else
         res.send("not found");
} 