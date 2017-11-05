var empService = require('../service/employee.service');

var employeeApi = function (app, db) {

    app.get('/employee', function (req, res) {
        db.collection('Employee').find().toArray(function (err, data) {
            res.send(data);
        });
    }); //select * from Employee

    app.post('/employee', (req, res) => {
        db.collection('Employee').insert(req.body, (err, data) => {
            console.log(data.insertedCount);
            res.send(data);
        })

    });

    // var empList = [{
    //     id: 1,
    //     name: 'test',
    //     address: 'pune'
    // }, {
    //     id: 2,
    //     name: 'test1',
    //     address: 'mumbai'
    // }, {
    //     id: 3,
    //     name: 'test2',
    //     address: 'pune'
    // }];


}

module.exports = employeeApi;