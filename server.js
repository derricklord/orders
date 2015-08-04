//Load Userland npm Modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var mongoose = require('mongoose');
var multer = require('multer');
var path = require('path');
var async = require('async');
var request = require('request');

//var util = require('./server/util/lib.js');
var config = require('./server/config');


//Load Custom Models 
var User = require('./server/models/user');       
var Order = require('./server/models/order');
var OrderItems = require('./server/models/orderitems');

//Load Custom Routes
var userRoutes = require('./server/routes/user');  
var authRoutes = require('./server/routes/auth');



//Initialize Server
var app = express();
var port = process.env.PORT || 3000;

//Initialize Database
mongoose.connect(config.MONGO_URI);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

//Configure Server Environment
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'client')));
        

//Configure Routes
app.use('/api/user', userRoutes);
app.use('/auth', authRoutes);



app.listen(port, function(){
    console.log('Server listening on port ' + port);
});
