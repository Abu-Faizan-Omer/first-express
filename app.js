const http=require("http")

const express=require("express")
const bodyparser=require("body-parser")
const app=express()

app.use(bodyparser.urlencoded({extended:false}))//use like a buffer we convert into readable //parse only form body not JSON,files etc

app.use("/add-product",(req,res,next)=>{
    //console.log("Welcome to about page")
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form')   
})
app.post("/product",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})

app.use("/",(req,res,next)=>{
    //console.log("home")
    res.send("<h1>WElcome to Home page!</h1>")
})
const server=http.createServer(app)
app.listen(3000)