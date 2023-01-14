const mongoose=require("mongoose")

const aloorschema=mongoose.Schema({
    name:String,
    place:String,
    age:String
})

const AloorModel=mongoose.model("aloordata",aloorschema)

module.exports={
    AloorModel
}