const Product=require("../Models/product1")

const path = require('path');
const rootdir = require("../utill/path"); // Adjust this path as necessary

exports.getAdminpage = (req, res, next) => {
    res.sendFile(path.join(rootdir, "views", "add-product.html"));
}

exports.postAdminpage = (req, res, next) => {
    console.log(req.body);
    // Here, you might save the product to a database or perform other logic
    const product=new Product(req.body.title)
    product.save()
    res.redirect("/");
}

exports.getShoppage=(req,res,next)=>{
    //console.log("home")
    Product.fetchAll((products) => {
        // Use the products data here
        res.sendFile(path.join(rootdir, "views", "shop.html")); // You might want to render a view instead
        // For example:
        // res.render('shop', { products: products });
    });
}
