const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/product");

// admin/add-product = get
router.get("/add-product", productControllers.getAdminpage);

// admin/add-product = post
router.post("/add-product", productControllers.postAdminpage);

module.exports = router;
