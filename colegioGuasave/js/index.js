const express=require('express')

const app=express()

app.use(express.static(path.join(__dirname,"public")))

app.listen(3500,()=>{
    console.log("server on port 3500")
})