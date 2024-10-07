const path=require("path")
const express=require("express")
const router=express.Router()

const rootdir=require("../utill/path")
router.get("/",(req,res,next)=>{
    //console.log("home")
    res.sendFile(path.join(rootdir,"views","shop.html"))
})
module.exports=router