"use strict";
// abstract class Department{
//     name :string;
//     constructor(n:string)
//     {
//         this.name=n;
//     }
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getage() {
        console.log(this.age);
    }
    getname() {
        console.log(this.name);
    }
}
const c = new Person("sai", 21);
c.getage();
c.getname();
