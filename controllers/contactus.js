const path=require("path")
const rootdir=require("../utill/path")

exports.getContactpage=(req,res,next)=>{
    
    res.sendFile(path.join(rootdir,"views","add-product2.html"))
}

exports.postContactpage=(req, res, next) => {
    console.log(req.body);
    res.redirect("/success");
}