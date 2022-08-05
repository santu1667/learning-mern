const express= require("express");
const Order = require("../model/Orders");
const router = express.Router();

/**
 * @method - POST
 * @param - /checkout
 * @description - This Method helps in Checking out the cart
 */
router.post(
    "/checkout",
    async (req,res) => {
        
        const {user,cart} = req.body;
        try{
            let order = new Order({
                user:user,
                products:cart
            });
        await order.save();
        return res.status(200).json({status:"success",message:"Order Placed Successfully",orderId:order._id})
        }
        catch(e)
        {
            console.log(e.message);
            return res.status(500).send({message:"Error in Creating Order"});
        }
    });

    /**
 * @method - GET
 * @param - /orders
 * @description - This Method helps in Checking out the cart
 */
router.get(
    "/orders",
    async (req,res) => {
        try{
            await Order.find({},function(err,results){
                if(err){
                    return res.status(500).send({message:"Error in getting Orders"});
                }
                return res.status(200).json({status:"success",
                            orders:results})
            }).clone()
        }
        catch(e)
        {
            console.log(e.message);
            return res.status(500).send({message:"Error in Getting Order"});
        }
    });

/**
 * @method - PATCH
 * @param - /orders/:id
 * @description - This Method helps in Checking out the cart
 */
router.patch(
        "/orders/:id",
        async (req,res) => {
            const orderId = req.params.id;
            const isDelivered = req.body.isDelivered;
            try{
                await Order.updateOne({id:orderId},{isDelivered:isDelivered,
                            orderDeliveredOn:new Date()},
                            function(err,result){
                                if(err){
                                    return res.status(500).json({status:"failure",
                                            message:"Failed to update Order"})
                                }
                                return res.status(200).json({status:"success",
                                            message:"Order modified Successfully"})
                            }).clone()
            }
            catch(e)
            {
                console.log(e.message);
                return res.status(500).send({message:"Error in Creating Order"});
            }
        });

    /**
 * @method - PATCH
 * @param - /orders/:id
 * @description - This Method helps in Checking out the cart
 */
router.delete(
        "/admin/orders/:id",
        async (req,res) => {
            const orderId = req.params.id;
            try{
                await Order.deleteOne({id:orderId},
                        function(err,result){
                            if(err){
                                return res.status(500).json({status:"failure",
                                        message:"Failed to update Order"})
                            }
                            return res.status(200).json({status:"success",
                                        message:"Order modified Successfully"})
                            })
            }
            catch(e)
            {
                console.log(e.message);
                return res.status(500).send({message:"Error in Deleting Order"});
            }
        });

module.exports=router;