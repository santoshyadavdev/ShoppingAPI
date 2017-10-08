var empService = require('../service/employee.service');


var employeeApi = function(app) {
    app.get('/employee', function(req, res) {
        var employee = { id: 1, name: 'Test' };
        console.log(empService);
        var employeeService = new empService();
        employeeService.addEmployee(employee);
        console.log(employeeService);
        var result = employeeService.getEmployees();
        res.send(result);
    })

    app.get('/employee/:id', function(req, res) {
        console.log(req.params.id);
        res.send(req.params.id)
    })

    app.post('/employee', function(req, res) {
        res.status(403).send('The user is not authenticated');
        // res.send(req.body);
    });
}

module.exports = employeeApi;