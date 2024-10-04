const http=require("http")

const express=require("express")
const app=express()
app.use((req,res,next)=>{
    console.log("Inside middleware")
    next()
})

app.use((req,res,next)=>{
    console.log("second middle ware")
    res.send("<h1>hello from express js</h1>")
})
const server=http.createServer(app)
server.listen(3000)