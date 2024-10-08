const path=require("path")
const express=require("express")
const router=express.Router()

//const rootdir=require("../utill/path")
const productControllers=require("../controllers/product")
router.get("/",productControllers.getShoppage)
module.exports=router