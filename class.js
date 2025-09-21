"use strict";
class EmployeeInformation {
    constructor(id, name, age, address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let john = new EmployeeInformation(1, "shubham kaushik", 25, "123, Main Street, City");
console.log(john);
