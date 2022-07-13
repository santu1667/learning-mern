const express= require("express");
const Product = require("../model/Product");
const router = express.Router();
const { check, validationResult } = require("express-validator");



/**
 * @method - POST
 * @param - /v1/createProduct
 * @description - This Method helps in Creating User If user already exists with input username
 *                Error Message will be sent
 */
 router.post(
    "/v1/createProduct",
    [
        check("productId","UserName cannot be Empty").not().isEmpty(),
        check("productName","Password cannot be Empty").not().isEmpty(),
        check("productCategory","Password Must contain minimum 6 chracters").not().isEmpty(),
        check("price","Password Must contain minimum 6 chracters").not().isEmpty()
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
            }
            
            const { productId,productName,productCategory,price } = req.body;

            try{
                
                let product = await Product.findOne({
                    productId
                });
                if(product){
                    return res.status(200).json({message:" Product  Already Exists. Add another Product"});
                }
                product = new Product({
                    productId,
                    productName,
                    productCategory,
                    price
                });

                await product.save();
                res.status(200).json({Status:"Product Created Successfully", product
                        });
            }
            catch(e)
            {
                console.log(e.message);
                res.status(500).send("Error in Creating Product");
            }
    });

    /**
 * @method - GET
 * @param - /v1/retrieveProducts
 * @description - This Method helps in retreiving all Users in the Mongo DB 
 */
router.get("/v1/retrieveProducts",async (req,res)=>{
    Product.find({},function(err,productArray){
        if(err)
        {
            res.status(500).json({message:"Error occured while retreiving Products"},
            );
            throw err.message;
        }
        res.status(200).send(productArray);
    });
})

module.exports = router;