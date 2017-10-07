const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/employee', function(req, res) {
    res.send('Hello World!')
})

app.get('/employee/:id', function(req, res) {
    console.log(req.params.id);
    res.send(req.params.id)
})

app.post('/employee', function(req, res) {
    res.status(403).send('The user is not authenticated');
    // res.send(req.body);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})