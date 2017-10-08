var EmployeeService = (function() {

    function EmployeeService() {
        this.employee = [];
    }
    EmployeeService.prototype.getEmployees = function() {
        return this.employee;
    };
    EmployeeService.prototype.addEmployee = function(emp) {
        console.log(this.employee);
        this.employee.push(emp);
    };
    return EmployeeService;
}());

module.exports = EmployeeService;