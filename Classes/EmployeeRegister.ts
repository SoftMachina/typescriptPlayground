import { setUncaughtExceptionCaptureCallback } from "process";
import { Employee } from "./Employee";

export class EmployeeRegister{

    employees: Array<Employee> = [];

    constructor(employees: Array<Employee>) {
        this.employees = employees;
    }

    addEmployee = (e : Employee) : number => this.employees.push(e); // push returns array size, concate for void return?

    getAllEmployees = () => {
        let res: string = "";
        this.employees.forEach( e => {
        res+=e.getInfo()  + ". " +  e.getSalary() +"\n"});
        return res;
     }

     deleteEmployee = (id: string) => this.employees.splice(this.employees.findIndex(e => e.employeeId === id),1);

     updateById = (id: string, employee: Employee) : void => {
        let updateableEmployee : Employee | undefined = this.employees.find(e => e.employeeId === id);
        if(updateableEmployee !== undefined) {
            updateableEmployee.updateEmployee(employee);
        }
     }

     sortBySalary = (ascending: boolean = true) => this.employees.sort((a,b) => ascending? a.salary - b.salary : b.salary - a.salary)

     getEmplyoee = (id: string) : Employee | undefined => this.employees.find(e => e.employeeId === id);

    }
