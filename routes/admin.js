const express=require("express")
const router=express.Router()
const path=require("path")
const rootdir=require("../utill/path")
//admin/add-product=get
router.use("/add-product",(req,res,next)=>{
    
    res.sendFile(path.join(rootdir,"views","add-product.html"))
})
//here add-product is same because it is different method get and post
//admin/add-product=post
router.post("/add-product",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})

module.exports=router

