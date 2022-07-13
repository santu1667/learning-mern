const mongoose = require("mongoose");

const userSchmea = mongoose.Schema(
    {
        username:{
            type: String,
            required:true
        },
        password:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        userType:{
            type:String,
            default: "NonAdmin"
        }       
    }
)
module.exports = mongoose.model("user", userSchmea);