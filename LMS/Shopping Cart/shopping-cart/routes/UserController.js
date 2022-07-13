const express= require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");
const User = require("../model/User");
const router = express.Router();

/**
 * @method - POST
 * @param - /v1/register
 * @description - This Method helps in Creating User If user already exists with input username
 *                Error Message will be sent
 */
router.post(
    "/v1/register",
    [
        check("username","UserName cannot be Empty").not().isEmpty(),
        check("password","Password cannot be Empty").not().isEmpty(),
        check("password","Password Must contain minimum 6 characters").isLength({min:6}),
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
            }
            
            const { username,password,email } = req.body;
            var userType = req.body.userType;
            if(userType == '' || userType == null)
            {
                userType = "NonAdmin";
            }

            try{
                
                let user = await User.findOne({
                    username
                });
                if(user){
                    return res.status(200).json({message:" User Already Exists."});
                }
                user = new User({
                    username,
                    password,
                    email,
                    userType
                });

                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password,salt);

                await user.save();

                const payload ={
                    user:{
                        id:user.id
                    }
                }

                jwt.sign(
                    payload,
                    "randomString",{
                        expiresIn:10000
                    },
                    function(err,token){
                        var string ="User Created Successfully. Please login."
                        if (err) throw err;
                        res.redirect('/?msg=' + string);
                    })

            }
            catch(e)
            {
                console.log(e.message);
                res.status(500).send("Error in Saving User");
            }
    });

/**
 * @method - POST
 * @param - /v1/login
 * @description - This Method helps in Verifying User and allows user to login
 */
router.post("/v1/login",
[
    check("username","Email cannot be Empty").not().isEmpty(),
    check("password","Password cannot be Empty").not().isEmpty(),
    check("password","Password Must contain minimum 6 chracters").isLength({min:6})
],
async (req,res) =>{

const errors = validationResult(req);
if (!errors.isEmpty()) {
return res.status(400).json({
errors: errors.array(),
});
}
const { username, password } = req.body;
try{
let user = await User.findOne({
username,
});
if (!user){
var string = "User does not exist! Please register."
res.status(400).json({
  message: "User does not exist! Please register."
});
res.redirect('/?msg=' + string);
}
const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
    var string = "Incorrect Password!"
    res.status(400).json({
      message: "Incorrect Password!",
    });
    res.redirect('/?msg=' + string);
  }

  const payload ={
    user:{
        id:user.id
    }
}

jwt.sign(
    payload,
    "randomString",{
        expiresIn:10000
    },
    function(err,token){
        if (err) throw err;
        res.render('shoppingcart',{user})
    })
}
catch(exception){
    console.log(e.message);
    res.status(500).send("Error Occured! Please try again");
}

}
)

/**
 * @method - GET
 * @param - /v1/users
 * @description - This Method helps in retreiving all Users in the Mongo DB 
 */
router.get("/v1/users",async (req,res)=>{
        User.find({},'username email',function(err,userArray){
            if(err)
            {
                res.status(500).json({message:"Error occured while retreiving users"},
                );
                throw err.message;
            }
            res.status(200).send(userArray);
        });
})

/**
 * @method - GET
 * @param - /v1/users
 * @description - This Method helps in retreiving all Users in the Mongo DB 
 */
 router.get("/v1/user",async (req,res)=>{
    const username = req.body.username;
    let user = await User.findOne({username})
      if(user!=null){
        try{
            console.log(user.id);
            const payload ={
                user:{
                    id:user.id
                }
            }
            console.log('signing JWT token');
            jwt.sign(
                payload,
                "randomString",{
                    expiresIn:10000
                },
                function(err,token){
                    if (err) {
                        console.log('Error occured while creating token');
                        res.status(500).send({message:"Error occured while retreving jwt token"},
                        );
                        throw err;
                    }
                    else{
                    console.log
                    res.status(200).send({username: username,token:token}) }
                })

        }
        catch(exception)
        {
            res.status(500).send({message:"Error occured while retreving jwt token"},
            );
        }
      }
      else
      {
        res.status(404).send({message:"No User found with input user name"},
            );
      }
})

module.exports = router;
