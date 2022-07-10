import { IHuman } from "./IHuman";

export interface IEmployee extends IHuman {
    employeeId: string,
    salary: number,
    getSalary: () => number | string ; // could choose if i want to implement it like number or string in a class!
}
