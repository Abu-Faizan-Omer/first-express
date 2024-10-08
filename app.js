const path=require("path")
const http=require("http")

const express=require("express")

const errorControllers=require("./controllers/error")
const successControllers=require("./controllers/success")

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
app.get("/success", successControllers.getSuccesspage);

app.use(errorControllers.get404)

const server=http.createServer(app)
app.listen(3001)