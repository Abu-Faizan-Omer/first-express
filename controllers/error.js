const path=require("path")

exports.get404=(req,res,next)=>{     //if i dont give path it automatically think get request 
    res.status(404).sendFile(path.join(__dirname,"../views","404.html"))
}