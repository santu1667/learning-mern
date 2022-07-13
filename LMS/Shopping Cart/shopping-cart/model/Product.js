const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        productId:{
            type: String,
            required:true
        },
        productName:{
            type:String,
            required: true
        },
        productCategory:{
            type:String,
            required: true
        },
        price:{
            type:Number,
            required: true
        }       
    }
)
module.exports = mongoose.model("product", productSchema);