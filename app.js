const path=require("path")
const http=require("http")

const express=require("express")

const bodyparser=require("body-parser")
const app=express()

const adminRoutes=require("./routes/admin")
const admin2Routes=require("./routes/admin2")
const shopRoutes=require("./routes/shop")
const contactRoutes=require("./routes/contact")

app.use(bodyparser.urlencoded({extended:false}))//use like a buffer we convert into readable //parse only form body not JSON,files etc

app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin",adminRoutes)
app.use("/admin2",admin2Routes)
app.use("/contact",contactRoutes)
app.use(shopRoutes)

// Success route
app.get("/success", (req, res) => {
    res.send("<h1>Form successfully filled</h1>");
});

app.use((req,res,next)=>{     //if i dont give path it automatically think get request
    
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})

const server=http.createServer(app)
app.listen(3000)