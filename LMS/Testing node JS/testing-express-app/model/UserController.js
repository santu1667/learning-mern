var express = require("express");

var User = require("./User");

var userRouter = express.Router();

/*
 * GET /users route to retrieve all the books.
 */
function getUsers(req, res){
        //Query the DB and if no errors, send all the books
    let query = User.find({});
    query.exec((err, users) => {
        if (err) res.send(err);
        //If no errors, send them back to the client
        res.json(users);
    }); 
}

/*
 * POST /v1/createUser route to retrieve all the books.
 */
 async function createUser(req,res){
    const { userName,email,age,hobbies} = req.body;
    const {streetAdd1,streetAdd2,zip,country} = req.body.address;
    console.log(`prinitng details ${userName} ${streetAdd1} ${country} ${hobbies}`);
    if(userName!='' && email!=''){
        try{

            let user = await User.findOne({
                userName
            });
            if(user){
                return res.status(200).json({message: user.userName+" Already Exists."});
            }

                user = new User({
                    userName,
                    age,
                    email,
                    address:{
                        streetAdd1,
                        streetAdd2,
                        zip,
                        country
                    },
                    hobbies
                });
                await user.save();
                return res.status(200).json({message:" User Created Successfully."});

        }
        catch(err){
            console.log(err);
           return  res.status(500).send({message:"Error in Saving User"});
        }
    }
    else{
        console.log(`username ${userName} email ${email}`)
        return  res.status(500).send({message:"Enter Valid details"});
    }

}

/**
 * GET /v1/user/:username/update/:upateemail 
 */
function updateUserEmail(req,res){
    console.log(req.params.username);
    console.log(req.params.upateemail);
    return res.status(200).send({message:`${req.params.username} email updated to ${req.params.upateemail}`,
                                    username:req.params.username, 
                                    updatedemail:req.params.upateemail})
}

/**
 * GET /v1/userLocation 
 */
    function getUserLocation(req,res){
        const usr = req.query.usr;
        User.findOne({userName:usr},function(err,user)
        {
            if(err)
            {
                return res.status(500).send({message:"Error Occured"});
            }
            if(user!=null){
                return res.status(200).send({message:`user ${user.userName} found at ${user.address.streetAdd1},`+
            `${user.address.zip}, ${user.address.country}`})
            }
            else{
                return res.status(404).send({message:"User not Found"});}
        });
    }

/**
 * GET /v1/deleteUser 
 */
    async function deleteUser(req,res){
        const usr = req.query.usr;
        User.findOne({userName:usr},function(err,user)
        {
            if(err)
            {
                return res.status(500).send({message:"Error Occured"});
            }
            if(user!=null){
                let userId = user.id;
                User.deleteOne({userId},function(err){
                    if(err){
                        res.status(500).send({message:`Error Occured while deleting user ${user.userName}`})
                    throw err;}
                    return res.status(200).send({message:`${user.userName} user found and deleted`})
                });
            }
            else{
                return res.status(404).send({message:"User not Found"});}
        });
    }

module.exports = { getUsers, createUser,updateUserEmail,getUserLocation,deleteUser};
