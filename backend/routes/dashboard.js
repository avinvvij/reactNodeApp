//Imports
var express=require('express');
const router=express.Router();

//Predefined Data
var listOfCountries=[
   "Afghanistan","Albania","Algeria","China","England","India","Japan"
];

//Dashboard Initial Display data
router.get('/',function(req,res)
{    
    res.status(200).send(listOfCountries);
});

module.exports=router;