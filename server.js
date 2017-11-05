const express = require('express');
var bodyParser = require('body-parser')

const app = express();
var MongoClient = require('mongodb').MongoClient

var empAPI = require('./api/employee.api');

var productAPI = require('./api/product.api');
// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//custom middleware

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers','token,Content-Type,Accept');
    next();
    //  res.status(401).send('this is invalid request');
})


// Connection URL
var url = 'mongodb://localhost:27017/ShppoingAppDB';
// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    console.log("Connected correctly to server");

    empAPI(app, db);
    
});

productAPI(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})



