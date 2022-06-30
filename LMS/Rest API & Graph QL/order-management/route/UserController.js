const express = require("express");

const router = express.Router();

const User = require("../model/User");

router.post("/v1/order",
            [],
            async function(req,res){
                const {name, email, userType} = req.body;
                const {streetAdress1,streetAdress2,zip,country} = req.body;
                const {groceries,books,electronics} = req.body;
                const shoppingItems=[];
                if(groceries!=null){
                    shoppingItems.push(groceries);
                }
                if(electronics!=null){
                    shoppingItems.push(electronics);
                }
                if(books!=null){
                    shoppingItems.push(books);
                }
                try{
                    if(name!='' && email!='' && userType!='')
                    {
                        console.log('inside User');
                        var user = new User({
                            name,
                            email,
                            userType,
                            address:{
                                streetAdress1,
                                streetAdress2,
                                zip,
                                country

                            },
                            shoppingItems:shoppingItems
                        })
                    }
                    await user.save();
                    res.status(200).render("../views/confirmation",{user});
                }
                catch(err){
                    console.log(err.message);
                   return  res.status(500).json({message:"Error Occured while Placed Order"});
                }
                }
            );


router.get("/retreiveOrders",function(req,res){
    User.find({},function(err,userArray){
        if(err)
        {
            res.status(500).json({message:"Error occured while retreiving users"},
            );
            throw err.message;
        }
        res.status(200).send(userArray);
    });
})

module.exports =router;