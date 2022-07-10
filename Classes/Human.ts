import { IHuman } from "../Interfaces/IHuman";

export class Human implements IHuman {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    getInfo = () => `this is a human called ${this.name}, age ${this.age}`

}