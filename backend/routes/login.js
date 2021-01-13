//Imports
var express=require('express');
const router=express.Router();

//Predefined Data
var users=[
    {
        username: "abc", password: "pwd1"
    },
    {
        username: "def", password: "pwd2"
    }
];

//Login Post API, to validate user
router.post('/',function(req,res)
{
    let result;
    //Validate Parameters
    if(req.body==null || req.body.username==null || req.body.password==null)
    {
        result={"status": 0, "msg":"Parameters Missing", username:"NA"};
    }
    else
    {
        //Find if user with given password exist
        let userExist= users.find(usr=>usr.username==req.body.username && usr.password==req.body.password)
        if(userExist)
        {
            result={"status": 1, "msg":"Successful Login", username:req.body.username};
        }
        else
        {
            result={"status": 0, "msg":"Failed to Login", username:req.body.username};
        }
    }
    
    res.status(200).send(result);
});

module.exports=router;