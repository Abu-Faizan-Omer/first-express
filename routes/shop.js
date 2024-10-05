
const express=require("express")
const router=express.Router()

router.get("/",(req,res,next)=>{
    //console.log("home")
    res.send("<h1>WElcome to Home page!</h1>")
})
module.exports=router