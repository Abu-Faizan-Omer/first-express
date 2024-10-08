const path = require('path');
const rootdir = require("../utill/path"); // Adjust this path as necessary

exports.getAdminpage = (req, res, next) => {
    res.sendFile(path.join(rootdir, "views", "add-product.html"));
}

exports.postAdminpage = (req, res, next) => {
    console.log(req.body);
    // Here, you might save the product to a database or perform other logic
    res.redirect("/");
}

exports.getShoppage=(req,res,next)=>{
    //console.log("home")
    res.sendFile(path.join(rootdir,"views","shop.html"))
}
