"use strict";
exports.__esModule = true;
exports.EmployeeRegister = void 0;
var EmployeeRegister = /** @class */ (function () {
    function EmployeeRegister(employees) {
        var _this = this;
        this.employees = [];
        this.addEmployee = function (e) { return _this.employees.push(e); }; // push returns array size, concate for void return?
        this.getAllEmployees = function () {
            var res = "";
            _this.employees.forEach(function (e) {
                res += e.getInfo() + ". " + e.getSalary() + "\n";
            });
            return res;
        };
        this.deleteEmployee = function (id) { return _this.employees.splice(_this.employees.findIndex(function (e) { return e.employeeId === id; }), 1); };
        this.updateById = function (id, employee) {
            var updateableEmployee = _this.employees.find(function (e) { return e.employeeId === id; });
            if (updateableEmployee !== undefined) {
                updateableEmployee.updateEmployee(employee);
            }
        };
        this.sortBySalary = function (ascending) {
            if (ascending === void 0) { ascending = true; }
            return _this.employees.sort(function (a, b) { return ascending ? a.salary - b.salary : b.salary - a.salary; });
        };
        this.employees = employees;
    }
    return EmployeeRegister;
}());
exports.EmployeeRegister = EmployeeRegister;
