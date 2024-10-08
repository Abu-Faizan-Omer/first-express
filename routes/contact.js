const express=require("express")
const router=express.Router()

const contactControllers=require("../controllers/contactus")
//admin/add-product=get
router.use("/contactus",contactControllers.getContactpage)
//here add-product is same because it is different method get and post
//admin/add-product=post
router.post("/contactus",contactControllers.postContactpage)

module.exports=router
