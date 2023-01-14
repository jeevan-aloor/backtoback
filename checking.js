const jwt=require("jsonwebtoken")

const checking=(req,res,next)=>{
    var token = jwt.sign({ darra: 'pablo' }, 'singari');
    if(token){
        var decoded = jwt.verify(token, 'singari')
        if(decoded){
            next()
        }else{
            res.send("please login")
        }

    }

    

}
module.exports={
    checking

}