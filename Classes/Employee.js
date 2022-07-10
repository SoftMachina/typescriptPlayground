"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var uuidGen_1 = require("../utils/uuidGen");
var Employee = /** @class */ (function () {
    function Employee(salary, name, age) {
        var _this = this;
        this.getInfo = function () { return "this is an employee(".concat(_this.employeeId, ") called ").concat(_this.name, ", age ").concat(_this.age); };
        this.getSalary = function () { return "this employees salary is ".concat(_this.salary); };
        this.setSalary = function (newSalary) { return _this.salary = newSalary; };
        this.updateEmployee = function (e) { return Object.keys(_this).forEach(function (key) { return _this[key] = e[key]; }); };
        this.salary = salary;
        this.name = name;
        this.age = age;
        this.employeeId = (0, uuidGen_1.getId)(this.name);
    }
    return Employee;
}());
exports.Employee = Employee;
