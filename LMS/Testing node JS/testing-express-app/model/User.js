const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    userName:String,
    age:Number,
    email:String,
    address:{
        streetAdd1:String,
        streetAdd2:String,
        zip:Number,
        country:String
    },
    hobbies:[{type:String}]
})



const User = mongoose.model("User",UserSchema);

module.exports=User;