import { Employee } from './employee';
class EmployeeService {
    employee: Employee[];

    constructor() { }

    getEmployees() {
        return this.employee;
    }

    addEmployee(emp: Employee) {
        this.employee.push(emp);
    }
}