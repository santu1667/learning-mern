const express = require("express");

const router = express.Router();

const bodyParser = require("body-parser");

const User = require("../model/User");

const ShoppingItem = require("../model/ShoppingItem");


router.post("/v1/createOrder",
            [],
            async function(req,res){
                
                const name = req.body.name;
                const email = req.body.email;
                const streetAdress = req.body.address.streetAdress;
                const zipcode = req.body.address.zip;
                const country = req.body.address.country;

                const itemCode = req.body.

            });