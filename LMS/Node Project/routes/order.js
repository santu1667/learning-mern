const express= require("express");
const { check, validationResult } = require("express-validator");
const jwt =  require("jsonwebtoken");
const Order = require("../model/Order");
const router = require("./user");
const User = require("../model/User");
const orderRouter = express.Router();
const auth = require("../middleware/auth");

/**
 * @method - POST
 * @param - /v1/orderProduct
 * @description - This Method helps in creating an order for user email
 */
orderRouter.post(
    "/v1/orderProduct",
    [
        check("username","Please enter username").not().isEmpty(),
        check("name","Order Name cannot be Empty").not().isEmpty(),
        check("description","Description cannot be Empty").not().isEmpty(),
        check("price","Price must be number").isNumeric(),
    ],
    async (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
            }
            
            const { username,name,price,description } = req.body;

            try{
               
                let order = new Order({
                    username,
                    name,
                    price,
                    description
                });


                await order.save();

                const payload ={
                    order:{
                        id:order.id
                    }
                }

                jwt.sign(
                    payload,
                    "randomString",{
                        expiresIn:10000
                    },
                    function(err,token){
                        if (err) throw err;
                        res.status(200).json({Status:"Order Created Successfully",
                        order:order.id,
                        })
                    })
            }
            catch(e)
            {
                console.log(e.message);
                res.status(500).send("Error in Creating Order");
            }
    }
    );

/**
 * @method - GET
 * @param - /v1/orderProduct
 * @description - This Method used to retreive products associated with token passed
 */
router.get("/v1/prodcuts", auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const output = await User.findById(req.user.id);
        if(output==null){
        res.status(404).send({message:"No Products found for given input"});
        }
        Order.find({username:output.username},'name price description',function(err,productDetails){
        if(productDetails!=null){
        res.status(200).send(productDetails);}
        else{res.status(404).send({message:"No Products found for given input"});}
        })
    } catch (e) {
        res.send({ message: "Error in Fetching product details" });
        throw e.message;
    }
    });


module.exports = orderRouter;