const http=require("http")

const express=require("express")

const bodyparser=require("body-parser")
const app=express()

const adminRoutes=require("./routes/admin")
const shopRoutes=require("./routes/shop")

app.use(bodyparser.urlencoded({extended:false}))//use like a buffer we convert into readable //parse only form body not JSON,files etc

app.use("/admin",adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{     //if i dont give path it automatically think get request
    
    res.status(404).send("<h1>Page not found!</h1>")
})

const server=http.createServer(app)
app.listen(3000)