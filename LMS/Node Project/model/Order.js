const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        username:
        {
            type:String,
            required:true
        },
        name:{
            type: String,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        description:{
            type:String,
            required: true
        }
    }
)

module.exports = mongoose.model("order", orderSchema);