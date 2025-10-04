"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _EmployeeInformation_id;
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeInformation {
    //Getter for id
    get empId() {
        return __classPrivateFieldGet(this, _EmployeeInformation_id, "f");
    }
    //setter for id
    set empId(id) {
        __classPrivateFieldSet(this, _EmployeeInformation_id, id, "f");
    }
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, age, address) {
        _EmployeeInformation_id.set(this, void 0);
        __classPrivateFieldSet(this, _EmployeeInformation_id, id, "f");
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Methods in class
    //class with method to display employee details
    getNameWithAddress() {
        return `${this.name} from ${this.address}`;
    }
    Login() {
        return { name: "shubham", age: 25, id: 1, email: "shubham@example.com" };
    }
}
_EmployeeInformation_id = new WeakMap();
let john = new EmployeeInformation(1, "shubham kaushik", 25, {
    street: "123,main street",
    city: "city",
    state: "state",
    zipCode: "12345"
});
john.empId = 1; //setter
console.log(john.empId); //getter₹
//john.name="shubham"; //cant access name property because it is protected
console.log(john);
EmployeeInformation.getEmployeeCount(); //50
//john.getEmployeeCount(); //Error: Property 'getEmployeeCount' does not exist on type 'EmployeeInformation'.
//Inheritance
//class Manager extends EmployeeInformation
//Manager class inherits from EmployeeInformation class
//Manager class can access all the properties and methods of EmployeeInformation class
//Manager class can have its own properties and methods
//Manager class can override the methods of EmployeeInformation class
class Manager extends EmployeeInformation {
    constructor(id, name, age, address) {
        //calling parent class constructor using super keyword
        //super must be called before accessing 'this' in the constructor of a derived class
        //super is used to call the constructor of the parent class
        //CALLS the constructor of EmployeeInformation class
        super(id, name, age, address);
    }
    getNameWithAddress() {
        return `Manager: ${this.name} from ${this.address}`;
    }
}
let address = john.getNameWithAddress();
console.log(address); //shubham kaushik from 123, Main Street, City
/*Member visibility
1. public: default, can be accessed from anywhere
2. private: can be accessed only within the class
3. protected: can be accessed within the class and its subclasses
*/
//used # to make id private
//console.log(john.#id); //Error: Property '#id' is not accessible outside class 'EmployeeInformation' because it has a private identifier.
//console.log(john.id); //Error: Property 'id' does not exist on type 'EmployeeInformation'.
/*Static members
1. static members belong to the class itself rather than to any specific instance of the class.
2. static members are shared among all instances of the class.
3. static members can be accessed using the class name without creating an instance of the class.
*/
/*Interfaces
1. Interfaces define the structure of an object, specifying the properties and methods that an object must have.
2. Interfaces do not provide implementation details; they only define the shape of the object.
3. Classes can implement interfaces, ensuring that they adhere to the defined structure.
4. Interfaces can be used to achieve polymorphism, allowing different classes to be treated as the same type if they implement the same interface.
*/
//# sourceMappingURL=class.js.map