import {IEmployee} from '../Interfaces/IEmployee'
import { getId } from '../utils/uuidGen';


export class Employee implements IEmployee {
    employeeId: string;
    salary: number;
    name: string;
    age: number;

    constructor(salary: number, name: string, age: number) {
        this.salary = salary;
        this.name = name;
        this.age = age;
        this.employeeId = getId(this.name);
    }
    
    getInfo = () => `this is an employee(${this.employeeId}) called ${this.name}, age ${this.age}`

    getSalary = () => `this employees salary is ${this.salary}`

    setSalary = (newSalary: number) :number => this.salary = newSalary;

    // @ts-ignore
    updateEmployee = (e: Employee) => Object.keys(this).forEach(key => this[key] = e[key]); 


}
