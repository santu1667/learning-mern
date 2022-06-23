const express= require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt =  require("jsonwebtoken");
const User = require("../model/User");
const auth = require("../middleware/auth");
const router = express.Router();


/**
 * @method - POST
 * @param - /signup
 * @description - User signup
 */
router.post(
    "/signup",
    [
        check("userName","UserName cannot be Empty").not().isEmpty(),
        check("email","Email cannot be Empty").not().isEmpty(),
        check("email","Enter Valid email").isEmail(),
        check("password","Password cannot be Empty").not().isEmpty(),
        check("password","Password Must contain minimum 6 chracters").isLength({min:6}),
    ],
    async (req,res) => {
        console.log(`Prinitng input request`);
        console.log(req.body);
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
            }
            
            const userName = req.body.userName;
            const email = req.body.email;
            const password = req.body.password;

            try{
                
                let user = await User.findOne({
                    email
                });
                if(user){
                    console.log(user);
                    return res.status(200).json({message:" User Already Exists."});
                }
                user = new User({
                    userName,
                    email,
                    password
                })

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
                        if (err) throw err;
                        res.status(200).json({message:"User Created Successfully",
                            token
                        })
                    })

            }
            catch(e)
            {
                console.log(e.message);
                res.status(500).send("Error in Saving User");
            }
    });

/**
 * 
*/
router.post("/login",
            [
                check("email","Email cannot be Empty").not().isEmpty(),
                check("email","Enter Valid email").isEmail(),
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
        const { email, password } = req.body;
        try{
        let user = await User.findOne({
            email,
          });
          if (!user)
            return res.status(400).json({
              message: "User Does Not Exist! Please signup."
            });

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({
                  message: "Incorrect Password!",
                });
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
                    res.status(200).json({message:"User Logged in Successfully",
                        token
                    })
                })
            }
            catch(exception){
                console.log(e.message);
                res.status(500).send("Error Occured! Please try again");
            }

    }
)


/**
 * 
*/
router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });
  
module.exports = router;
