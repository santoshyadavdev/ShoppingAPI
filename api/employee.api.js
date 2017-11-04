var empService = require('../service/employee.service');

var employeeApi = function (app) {

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


    app.get('/employee', function (req, res) {
        res.send(empList);
    });

}

module.exports = employeeApi;