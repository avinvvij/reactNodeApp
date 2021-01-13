//Imports
var express=require('express');
var app= express();
var bodyParser=require('body-parser');
var cors = require('cors')
app.use(cors());
//Import Routes
var loginRoutes=require('./routes/login');
var dashboardRoutes=require('./routes/dashboard');

//for application/json
app.use(bodyParser.json());

//Routes to be used
app.use('/login',loginRoutes);
app.use('/dashboard',dashboardRoutes);






//Initializing Server
var server=app.listen(3030,'localhost', function(){
    console.log('App Listening http://%s:%s',server.address().address,server.address().port);
});