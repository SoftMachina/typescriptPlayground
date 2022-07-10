import { Employee } from "./Classes/Employee";
import { EmployeeRegister } from "./Classes/EmployeeRegister";
import { Human } from "./Classes/Human";


const employee = new Employee(450, "tester yamamura", 23);
const secondEmployer = new Employee(3434,"reasd asdas", 331);


console.log(employee.getSalary());

employee.setSalary(50000);

console.log(employee.getSalary());

const er = new EmployeeRegister([employee]);
er.addEmployee(secondEmployer);

console.log(er.getAllEmployees());

er.deleteEmployee(employee.employeeId);

console.log(er.getAllEmployees());

er.updateById(secondEmployer.employeeId,new Employee(233333333,"test update", 34));


console.log(er.getAllEmployees());

er.addEmployee(new Employee(3333333, "1. dsfs", 3222));
er.addEmployee(new Employee(22222, "2. dsfs", 2));
er.addEmployee(new Employee(313, "3. dsfs", 32));

er.sortBySalary(false);
console.log(er.getAllEmployees());
