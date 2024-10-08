const express=require("express")
const router=express.Router()
const productControllers=require("../controllers/contactus")
//admin/add-product=get
router.use("/add-product2",productControllers.getContactpage)
//here add-product is same because it is different method get and post
//admin/add-product=post
// router.post("/add-product2",(req,res,next)=>{
//     console.log(req.body)
//     res.redirect("/")
// })

router.post("/add-product2", productControllers.postContactpage);

module.exports=router

