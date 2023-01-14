const express=require("express")
const {connection} =require("./db")
const {AloorModel}=require("./model")
var jwt = require('jsonwebtoken');
const {checking}=require("./checking")

const app=express()

app.use(express.json())


app.get("/getdata",async(req,res)=>{
    try {
        const data=await AloorModel.find()
        res.send(data)

        
    } catch (error) {
        console.log(error)
        console.log("error while doing")
        
    }
    
})

app.post("/register",async(req,res)=>{
    const payload=req.body
    try {
        const data= new AloorModel(payload)
        await data.save()
        res.send("added data")

        
    } catch (error) {
        console.log(error)
        console.log("error while doing")
        
    }
    
})

app.post("/login",async(req,res)=>{
    const {name,age}=req.body
    try {
        const data= await AloorModel.find({name,age})
        if(data.length>0){
            var token = jwt.sign({ darra: 'pablo' }, 'singari');

            console.log('token:', token)
            
          
                res.send("login")

            
            // console.log(decoded)
            // res.send("login")
        }else{
            res.send("erron in login")
        }
        
        

        
    } catch (error) {
        console.log(error)
        console.log("error while doing")
        
    }
    
})

app.get("/simple",(req,res)=>{
    res.send("simple")
})

app.use(checking)
app.get("/",(req,res)=>{
    const token=req.headers.authorization
    
    
    res.send(token)
})


app.listen(8000,async()=>{
    try {
        await connection
        console.log("server is connected")
        
    } catch (error) {
        console.log(error)
        console.log("error while doing")
        
    }
    console.log("server is running in 8000")
})