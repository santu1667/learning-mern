const mongoose = require("mongoose");

// const orderSchema = mongoose.Schema(
//     {
//         name:{
//             type: String,
//             required:true
//         },
//         price:{
//             type:BigInt,
//             required: true
//         },
//         description:{
//             type:String,
//             required: true
//         }
//     }
// )

//var order = mongoose.model("order", orderSchema);

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
            type:String
        }       
    }
)
// orders:{
//     type:Schema.Types.ObjectId,
//     ref:order
// }

module.exports = mongoose.model("user", userSchmea);