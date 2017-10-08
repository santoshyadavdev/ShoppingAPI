const express = require('express');
var bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    //custom middleware
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
    //  res.status(401).send('this is invalid request');
})



app.get('/', (req, res) => {
    res.send('this is get method');
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('this is post request');
});


var empList = [{
    id: 1,
    name: 'test',
    address: 'pune'
}, {
    id: 2,
    name: 'test1',
    address: 'mumbai'
}, {
    id: 3,
    name: 'test2',
    address: 'pune'
}];


app.get('/employee', function(req, res) {
    res.send(empList);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})