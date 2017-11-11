var empService = require('../service/employee.service');

var employeeApi = function(app, db) {
    app.get('/employee', function(req, res) {
        db.collection('employee').find().toArray(function(err, data) {
            res.send(data);
        });
    }); //select * from product

    app.get('/employee/:id', (req, res) => {
        var id = parseInt(req.params.id);
        db.collection('employee').find({ id: id }).toArray(function(err, data) {
            res.send(data);
        }); //select * from product where id= 'id'
    });

    app.post('/employee', (req, res) => {
        db.collection('employee').insert(req.body, (err, data) => {
                console.log(data.insertedCount);
                res.send(data);
            }) // insert into employee
    });


}

module.exports = employeeApi;