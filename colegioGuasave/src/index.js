const express=require('express')
const path = require('path')
const app=express()

app.use(require("./routes/index"))
app.use(express.static(path.join(__dirname,"public")))

app.listen(3500,()=>{
    console.log("server on port 3500")
})